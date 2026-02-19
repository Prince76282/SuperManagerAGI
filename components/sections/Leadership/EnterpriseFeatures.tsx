"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "search", label: "Search" },
  { id: "accelerate", label: "Accelerate" },
  { id: "automate", label: "Automate" },
  { id: "orchestrate", label: "Orchestrate" },
  { id: "govern", label: "Govern" },
  { id: "channels", label: "Channels" },
];

const contentData = {
  search: {
    badge: "Enterprise Search",
    title: "Agentic RAG search that understands your business",
    desc: "Retrieve real-time answers from structured and unstructured enterprise data sources while enforcing role-based access controls.",
    img: "/public/Image/image1.4.jpg",
  },
  accelerate: {
    badge: "Accelerate",
    title: "Speed up delivery across teams",
    desc: "Automate workflows and remove bottlenecks with intelligent orchestration.",
    img: "/public/Image/image1.4.jpg",
  },
  automate: {
    badge: "Automation",
    title: "Automate repetitive workflows",
    desc: "Free your team from manual tasks using AI-driven automation.",
    img: "/public/Image/image1.4.jpg",
  },
  orchestrate: {
    badge: "Orchestration",
    title: "Coordinate systems intelligently",
    desc: "Seamlessly connect tools, data, and agents across your stack.",
    img: "/public/Image/image1.4.jpg",
  },
  govern: {
    badge: "Governance",
    title: "Enterprise-grade control & compliance",
    desc: "Ensure policy enforcement, audit trails, and secure access.",
    img: "/public/Image/image1.4.jpg",
  },
  channels: {
    badge: "Channels",
    title: "Operate across every channel",
    desc: "Deploy agents across web, Slack, CRM, and internal platforms.",
    img: "/assets/leadership/enterprise-search-graphic.png",
  },
};

const features = [
  {
    title: "Connect to your business data",
    description:
      "Access data across your enterprise using 100+ pre-built connectors or build custom integrations.",
  },
  {
    title: "Customizable search pipeline",
    description:
      "Configure extraction, enrichment, and retrieval strategies to tailor responses and improve accuracy.",
  },
  {
    title: "Precision search enterprise-wide",
    description:
      "Leverage multi-vector, multi-modal retrieval to surface the most relevant results for every query.",
  },
];

export default function EnterpriseFeatures() {
  const [active, setActive] = useState<keyof typeof contentData>("search");
  const data = contentData[active];

  return (
    <section className="w-full bg-[#F0F6F9] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1230px] mx-auto px-4 sm:px-6">
        
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              The enterprise AI agent solution that transforms how work gets done
            </h2>

            <button className="px-5 md:px-6 py-2.5 md:py-3 bg-[#625FD0] text-white rounded-lg hover:bg-black transition text-sm md:text-base">
              Get in touch
            </button>
          </div>

          <p className="text-base md:text-lg text-gray-100 lg:text-gray-600 leading-relaxed">
            Connect to your enterprise systems, understand your data and workflows,
            and activate AI agents to search, automate, and orchestrate with
            precision. While legacy platforms retrofit agentic capabilities, this
            system is built with AI at its core.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">

          {/* TABS - Horizontal scroll on mobile, vertical on desktop */}
          <div className="flex lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 lg:min-w-[140px]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id as any)}
                className={`px-4 py-2 text-xs rounded-full uppercase transition
                ${
                  active === tab.id
                    ? "bg-[#625FD0] font-medium text-white"
                    : "bg-white border font-medium hover:bg-[#625FD0] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          
          <div className="flex-1 py-6 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-white rounded-2xl">

           
            <div className="flex flex-col   lg:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start xl:items-center mb-8 md:mb-12">
              
             
              <div className="flex-1 w-full">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-slate-500 bg-slate-100 rounded-full uppercase mb-4 md:mb-5">
                  {data.badge}
                </span>

                <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-5">
                  {data.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {data.desc}
                </p>
              </div>

             
              <div className="relative rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 w-[400] xl:w-auto flex items-center justify-center  ">
                <Image
                  src={data.img}
                  alt={data.title}
                  width={420}
                  height={420}
                  className="object-contain w-full  sm:max-w-[320px]  h-auto"
                />
              </div>
            </div>

            {/* FEATURES - Stack on mobile, grid on larger screens */}
            <div className="flex flex-col lg:flex-row">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-5 md:p-6 lg:p-8 hover:shadow-md transition"
                >
                  <div className="border-l-2 border-dotted border-slate-400 pl-3 md:pl-4">
                    <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}