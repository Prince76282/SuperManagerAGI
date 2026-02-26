"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cross, Weight } from "lucide-react";

const tabs = [
  {
    id: "engineering",
    label: "ENGINEERING TEAMS",
    title: " AI Handles the Process. Engineers Ship.",
    description:
      "From Sprint Planning to Daily Updates, AI Agents Manage the Busywork Automatically Freeing Engineers to Write Code, Solve Problems, and Ship Features Without Distractions.",
    footer:
      "Trusted by Engineering Leaders Managing 50+ Person Teams with 95% Less PM Overhead",
    image: "/image/World'sFirst/o9-platform.webp",
  },
  {
    id: "product",
    label: "PRODUCT ORGANIZATIONS",
    title: "Product Organizations",
    description:
      " Autonomous Backlog Grooming, Smart Roadmap Prioritization, and Seamless Stakeholder Alignment So Product Teams Ship Faster with Full Context and Zero Coordination Overhead.",
    footer: "Trusted by Product Leaders Shipping 3× Faster",
    image: "/image/World'sFirst/how-to-become-a-project-manager.webp",
  },
  {
    id: "enterprise",
    label: "ENTERPRISE COMPANIES",
    title: "Enterprise Companies",
    description:
      "Autonomous Portfolio Orchestration Across 100+ Projects with Real Time Risk Intelligence, Budget Optimization, and Cross Team Resource Balancing—Cutting PM Overheadby Up to 85%",
    footer:
      "Trusted by enterprise portfolios managing 100+ concurrent projects",
    image: "/image/World'sFirst/image2.jpeg",
  },
  {
    id: "startups",
    label: "HIGH-GROWTH STARTUPS",
    title: "High-Growth Startups",
    description:
      " Scale Engineering Delivery Without Scaling PM Headcount. Manage 10× More Projects with the Same Team Autonomous Sprint Planning, Documentation, and Stakeholder Reporting from Day One.",
    footer: "Trusted by Startups Scaling Without PM Bloat",
    image: "/image/World'sFirst/PLAN.jpg",
  },
  {
    id: "global",
    label: "GLOBAL DELIVERY TEAMS",
    title: "Global Delivery Teams",
    description:
      "24/7 Autonomous Coordination Across Time Zones with Async Standups.",
    footer: "Trusted by Global Delivery Organizations Running 24/7 Operations",
    image: "/image/World'sFirst/Depositphotos_212163096_S.jpg",
    showEmail: true,
  },
];

const companies = [
  { name: "Adobe", src: "/image/newimage/Adobe.png" },
  { name: "BrowserStack", src: "/image/newimage/Browser1.png" },
  { name: "Zoho", src: "/image/newimage/Zoho.png" },
  { name: "Microsoft", src: "/image/newimage/Microsoft.png" },
  { name: "Sprinto", src: "/image/newimage/Sprinto.png" },
  { name: "Perplexity", src: "/image/newimage/perplexity.png" },
  { name: "Socket", src: "/image/newimage/Socket.png" },
  { name: "Nvidia", src: "/image/newimage/image.png" },
];

export default function SuperManagerSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-[#FFFFFF]  py-18 lg:min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start">
          {/* LEFT */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <h1 className="text-[2.5rem] font-medium leading-[1.2] tracking-[-0.02em] flex-none  overflow-visible">
              The World's First Agentic Project Management System
            </h1>

            <p
              className=" sm:text-md font-medium text-md text-gray-700 leading-relaxed"
            
            >
              SuperManager AGI Combines Decision Intelligence and PM Automation
              to Monitor Scope Changes, Track Defect vs Enhancement, Detect
              Delivery Risks, Capture Decisions with Context Graphs, Automate
              Task Creation, Generate Executive RAG Reports, Optimize Sprint
              Planning with Capacity Awareness, Simulate Change Impact on
              Timelines, Rebalance Workloads, and Escalate Blockers Across Jira,
              Azure DevOps, Slack, Teams, and Email. Eliminate Manual PM Admin,
              Increase Delivery Predictability, Strengthen Accountability, and
              Save 15-20 Hours per Manager per Week.
            </p>

            <p
              className="text-md font-medium  sm:text-md text-gray-500"
             
            >
              Most Tools Automate Tasks. SuperManager AGI Automates Project
              Governance, Decision Intelligence, Risk Control, and PM Operations
              End-to-End. With Human in the Loop Oversight, Full Decision
              Traceability, and Enterprise Grade Reliability & Control.
            </p>
            <div className="flex gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center text-[15px] rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition"
              >
                REQUEST A DEMO
              </Link>
              <Link
                href="https://agent.oqlous.com/login"
                className="hidden text-[#625FD0] hover:text-white lg:block items-center py-2 px-3 border-2 border-[#625FD0] hover:bg-[#625FD0]  rounded-lg text-[14px]  font-semibold transition"
              >
                OPEN APP
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* TABS */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 min-w-max">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 text-xs rounded-full uppercase transition ${
                      activeTab === i
                        ? "bg-[#625FD0] font-medium text-white"
                        : "bg-white border  hover:bg-[#625FD0] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {tabs.map((tab, i) => {
              const isActive = activeTab === i;

              return (
                <div key={tab.id} className={isActive ? "block" : "hidden"}>
                  <div className="rounded-3xl overflow-hidden">
                    <div className="relative max-w-[970px] w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
                      {/* Background Image */}
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        fill
                        sizes="(max-width:540px) 100vw,(max-width:1024px) 80vw,60vw"
                        className="object-cover object-center"
                        priority={i === activeTab}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60" />

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-between p-6 sm:p-10 text-white">
                        {/* Top Content */}
                        <div className="space-y-4 max-w-[500px]">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                            {tab.title}
                          </h2>

                          <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl">
                            {tab.description}
                          </p>

                          {tab.showEmail && (
                            <Link href="mailto:support@supermanager.co" className="mt-4 text-sm font-medium">
                              support@supermanager.co
                            </Link>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="space-y-4 pt-60 lg:pt-100">
                          <p className="text-xs text-white/80">{tab.footer}</p>

                          {/* Marquee */}
                          <div className="overflow-hidden w-full">
                            <div className="flex w-max animate-marquee gap-6 sm:gap-10 hover:[animation-play-state:paused]">
                              {[...companies, ...companies].map(
                                (company, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-center bg-white/40 rounded-2xl p-3 w-[80px] h-[45px] sm:w-[100px] sm:h-[55px]"
                                  >
                                    <Image
                                      src={company.src}
                                      alt={company.name}
                                      width={150}
                                      height={80}
                                      loading="lazy"
                                      className="object-contain opacity-90"
                                    />
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
