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
    heading: "95% of Routine PM Work Runs Autonomously",
    description:
      "SuperManager AGI Handles Daily Standups, Meeting Notes, Task Creation, Status Updates, and Stakeholder Reporting with Zero Human Intervention. Every Morning at 9 AM, Your Team Receives Automated Standup Summaries. Every Meeting Auto-Generates Tickets with Assignees and Due Dates. Every Status Change Triggers Stakeholder Notifications. Your PMs Focus on Strategy While AGI Handles Execution.",
    buttonText: "Learn More",
    imageSrc: "/image/ai-maannger.jpg",
    imageAlt: "AI Manager Dashboard",
  },
  {
    id: "optimize",
    title: "OPTIMIZE RESOURCES",
    heading: "AI That Knows Who Should Work on What and When",
    description:
      "SuperManager AGI Continuously Tracks Every Team Member’s Capacity, Skills, Current Workload, and Performance Patterns. It Auto Assigns Tasks Based on Optimal Fit, Rebalances Workloads When Someone Gets Blocked, and Forecasts Resource Needs for Upcoming Sprints. When a New Project Arrives, AGI Analyzes Requirements and Assembles the Perfect Team Composition Automatically No Spreadsheets, No Guesswork.",
    buttonText: "Get Access to the Report",
    imageSrc: "/image/image.png",
    imageAlt: "Resource Optimization",
  },
  {
    id: "predict",
    title: "PREDICT PROBLEMS",
    heading: "Know About Risks 2–3 Weeks Before They Become Fires",
    description:
      "SuperManager AGI Monitors 50+ Risk Indicators Continuously Scope Creep, Schedule Slippage, Team Burnout, Budget Overruns, Code Quality Drops, and Dependency Delays. When It Detects Early Warning Signs (Like “Might Slip” in Chat or Velocity Trending Down), It Auto-Generates Risk Mitigation Plans, Creates Tasks, Assigns Owners, and Alerts Stakeholders. You Fix Problems Before They Explode not After.",
    buttonText: "Learn More",
    imageSrc: "/image/World'sFirst/image1.webp",
    imageAlt: "Risk Prediction Dashboard",
  },
  {
    id: "protect",
    title: "PROTECT YOUR TEAM",
    heading: "Never Let Your PM Take the Blame Again",
    description:
      "SuperManager AGI Captures Every Decision with Full Context: Who Decided, When, Why, What Alternatives Were Considered, and What Evidence Supported It. When Executives Ask, “Why Did We Scope This In?” Six Months Later, You Have Instant Receipts. When Audits Happen, You Export Complete Decision Trails in One Click. When Escalations Occur, Discussions Are Factual not Political. Your PMs Stop Being Scapegoats.",
    buttonText: "Learn More",
    imageSrc: "/image/image1.4.jpg",
    imageAlt: "Decision Trail Protection",
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

                <div className="pt-2">
                  <Link
                    href="/learnmore/"
                    className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-2 py-2 text-white font-semibold  transition"
                  >
                    {tabsData[activeTab].buttonText}
                  </Link>
                </div>
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
