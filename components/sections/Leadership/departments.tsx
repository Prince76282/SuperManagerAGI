"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "operations", label: "Operations" },
  { id: "consulting", label: "Consulting" },
  { id: "it", label: "IT" },
  { id: "finance", label: "Finance" },
  { id: "marketing", label: "Marketing" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const contentData: Record<
  TabId,
  {
    badge: string;
    title: string;
    desc: string;
    img: string;
  }
> = {
  engineering: {
    badge: "Engineering AI",
    title: "Accelerate development with autonomous engineering agents",
    desc: "SuperManager AGI assists engineering teams by reviewing code, tracking sprint progress, assigning tasks, and identifying blockers before they delay releases.",
    img: "/Image/image1.4.jpg",
  },
  product: {
    badge: "Product Intelligence",
    title: "Build better products with AI-driven insights",
    desc: "Analyze user feedback, prioritize features, generate specs, and align roadmaps automatically using real-time product intelligence.",
    img: "/Image/image1.4.jpg",
  },
  operations: {
    badge: "Operations Automation",
    title: "Optimize operations with intelligent execution",
    desc: "Streamline workflows, manage resources, and monitor KPIs continuously while AI agents coordinate processes across departments.",
    img: "/Image/image1.4.jpg",
  },
  consulting: {
    badge: "Consulting Intelligence",
    title: "Deliver client outcomes faster",
    desc: "Automate research, generate reports, track deliverables, and manage engagements while ensuring accuracy and strategic alignment.",
    img: "/Image/image1.4.jpg",
  },
  it: {
    badge: "IT Automation",
    title: "Run IT infrastructure autonomously",
    desc: "Monitor systems, resolve incidents, enforce security policies, and maintain uptime with AI agents that act before issues escalate.",
    img: "/Image/image1.4.jpg",
  },
  finance: {
    badge: "Finance Intelligence",
    title: "Drive financial precision with AI",
    desc: "Automate reporting, detect anomalies, forecast trends, and ensure compliance using intelligent financial monitoring systems.",
    img: "/Image/image1.4.jpg",
  },
  marketing: {
    badge: "Marketing AI",
    title: "Scale campaigns with autonomous growth agents",
    desc: "Plan campaigns, analyze performance, generate content, and optimize targeting in real time to maximize ROI.",
    img: "/Image/image1.4.jpg",
  },
};

const features = [
  {
    title: "Department-Specific Intelligence",
    description:
      "Each AI agent understands domain workflows, terminology, and KPIs unique to every department.",
  },
  {
    title: "Cross-Functional Coordination",
    description:
      "Align teams automatically by syncing data, priorities, and execution across departments.",
  },
  {
    title: "Real-Time Execution Visibility",
    description:
      "Track progress, detect delays, and receive insights instantly across the entire organization.",
  },
];

export default function EnterpriseFeatures() {
  const [active, setActive] = useState<TabId>("engineering");

  const data = contentData[active];

  return (
    <section className="w-full bg-[#F0F6F9] py-14 md:py-20">
      <div className="max-w-[1230px] mx-auto px-4 sm:px-6">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              AI Agents for Every Department
            </h2>

            <Link
              href="/get-in-touch"
              className="inline-block px-6 py-3 bg-[#625FD0] text-white rounded-lg transition hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            SuperManager AGI transforms how organizations operate by deploying
            intelligent agents across departments. From engineering to finance,
            each team gains autonomous execution, real-time insights, and
            seamless coordination.
          </p>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* TABS */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full uppercase transition whitespace-nowrap
                ${
                  active === tab.id
                    ? "bg-[#625FD0] text-white"
                    : "bg-white border hover:bg-[#625FD0] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="flex-1 bg-white rounded-2xl p-6 md:p-10">
            <div className="flex flex-col lg:flex-row gap-10 items-center mb-12">
              {/* TEXT */}
              <div className="flex-1">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-slate-500 bg-slate-100 rounded-full uppercase mb-5">
                  {data.badge}
                </span>

                <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                  {data.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {data.desc}
                </p>
              </div>

              {/* IMAGE */}
              <div className="flex-1 flex justify-center">
                <Image
                  src={data.img}
                  alt={data.title}
                  width={420}
                  height={420}
                  className="object-contain max-w-[320px] w-full"
                  priority
                />
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="border-l-2 border-dotted border-slate-400 pl-4">
                    <h4 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar utility */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}