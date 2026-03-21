"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TabContent {
  id: string;
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const tabsData: TabContent[] = [
  {
    id: "automate",
    title: "AUTOMATE DAILY OPS",
    heading: "Prompt and Execute Any Task One Prompt Executes Work Across Every Connected Application",
    description:
      "SuperManager AGI takes any natural language instruction and executes it end to end across every connected system. The Controller Agent orchestrates specialist agents in parallel, validates all outputs via evidence-majority voting and commits results with a full audit trail. No manual steps. No app switching. No waiting.",
    buttonText: "/Learn More",
    imageSrc: "/image/ai-maannger.jpg",
    imageAlt: "AI Manager Dashboard",
  },
  {
    id: "optimize",
    title: "OPTIMIZE RESOURCES",
    heading: "Retrieve Data 1,000 Feet DeepAny Answer From the Actual Live Data Inside Your Enterprise ",
    description:
      "Ask anything about your enterprise and get a grounded, accurate answer retrieved directly from your live databases in under 65ms via the ADA layer. Financial analytics hallucination drops from 25.1% to 2.7%. Customer support hallucination drops from 12.4% to 3.8%. Operational data drops from 13.5% to 5.1%. Not approximations  actual data from actual databases.",
    buttonText: "Get Report",
    imageSrc: "/image/image.png",
    imageAlt: "Resource Optimization",
  },
  {
    id: "predict",
    title: "PREDICT PROBLEMS",
    heading: "Deploy Autonomous Agents Build an AI Workforce That Runs 24x7 Without Prompts",
    description:
      "Configure specialist agents that monitor your connected systems continuously, detect conditions that require action and execute tasks autonomously. Each agent is purpose-built for its domain. All coordinated by the Beehive architecture. All auditable. All running whether or not anyone is watching.",
    buttonText: "Learn More",
    imageSrc: "/image/World'sFirst/image1.webp",
    imageAlt: "Risk Prediction Dashboard",
  },
  {
    id: "protect",
    title: "PROTECT YOUR TEAM",
    heading: "Live Org Intelligence for Every Leader Know What Is Happening Across Every Department, Live",
    description:
      "Founders, COOs and department heads get a live view of every metric that matters  revenue, inventory, logistics, marketing spend, customer care, finance  updated in real time from every connected system. Not a report someone built last week. The actual live state of your organisation, visible in one place at 65ms",
    buttonText: "Learn More",
    imageSrc: "/image/image1.4.jpg",
    imageAlt: "Decision Audit Trail",
  },
];

export default function SuperManagerTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#F0F6F9] py-10 sm:py-14 lg:py-24">
      <div className="px-4  sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl lg:p-4 overflow-hidden">

            {/* Tabs */}
            <div className="flex gap-2 px-3 pt-4 lg:px-8 overflow-x-auto scrollbar-hide" style={{ fontWeight: 500 }}>
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`shrink-0 px-4 py-2 text-xs sm:text-sm rounded-full uppercase transition whitespace-nowrap  ${
                    activeTab === index
                      ? "bg-[#625FD0] text-white shadow-md"
                      : "bg-white border hover:bg-[#625FD0] hover:text-white "
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 p-5 sm:p-8 lg:p-12">

              {/* Text */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-900 leading-snug" style={{ fontWeight: 500 }}>
                  {tabsData[activeTab].heading}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  {tabsData[activeTab].description}
                </p>

                {/* <div className="pt-2">
                  <Link
                    href="/learnmore/"
                    className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-2 py-2 text-white font-semibold  transition"
                  >
                    {tabsData[activeTab].buttonText}
                  </Link>
                </div> */}
              </div>

              {/* Image */}
              <div className="flex items-center justify-center">
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={tabsData[activeTab].imageSrc}
                    alt={tabsData[activeTab].imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={activeTab === 0}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
