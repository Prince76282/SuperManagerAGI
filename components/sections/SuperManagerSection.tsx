"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "d2c",
    label: "D2C & E-COMMERCE BRANDS",
    title: "Your Entire Brand Operation on Autopilot",
    description:
      "From inventory intelligence and logistics automation to marketing attribution and customer care  AI agents handle every operational layer simultaneously. Sales, operations, marketing, finance, logistics, and customer care all coordinated by one AI workforce.",
    footer:
      "Trusted by D2C brands managing 50+ SKUs across 5 channels with 80% less operational overhead",
    image: "/image/World'sFirst/Depositphotos_212163096_S.jpg",
  },
  {
    id: "consulting",
    label: "CONSULTING FIRMS",
    title: "Deliver Client Outcomes Faster",
    description:
      "Agents manage client deliverables, generate reports, track engagement timelines, coordinate workloads, and ensure every commitment is delivered on time. Get real-time visibility across 20+ engagements without manual status chasing.",
    footer:
      "Trusted by consulting principals managing 24 active engagements with the oversight that previously required 6 team members",
    image: "/image/World'sFirst/image1.webp",
  },
  {
    id: "engineering",
    label: "PRODUCT & ENGINEERING COMPANIES",
    title: "AI Handles the Process. Engineers Ship.",
    description:
      "From sprint planning to release coordination, AI agents manage operational work automatically so engineers focus on coding and delivery. Sprint intelligence, blocker detection, release notes, and stakeholder updates  all autonomous.",
    footer:
      "Trusted by engineering leaders shipping 3× faster with 95% less coordination overhead",
    image: "/image/World'sFirst/image2.jpeg",
  },
  {
    id: "enterprise",
    label: "ENTERPRISE COMPANIES",
    title: "Autonomous Portfolio Intelligence at Scale",
    description:
      "Orchestrate 100+ initiatives with real-time risk intelligence, cross-department coordination, and enterprise-grade governance. Strategy, resource allocation, and execution monitoring handled by AI agents with full audit trails.",
    footer:
      "Cuts coordination overhead by up to 85% across enterprise portfolios",
    image: "/Image/World'sFirst/platform.webp",
  },
  {
    id: "startups",
    label: "HIGH-GROWTH STARTUPS",
    title: "Scale Operations Without Scaling Headcount",
    description:
      "Operate like an 80-person company with a 30-person team. Agents handle vendor follow-ups, MIS reporting, escalation tracking, and operational workflows so founders focus on growth instead of firefighting.",
    footer: "Manage 10× more operational complexity with the same team",
    image: "/image/World'sFirst/PLAN.jpg",
  },
  {
    id: "service",
    label: "SERVICE-BASED COMPANIES",
    title: "Every Workflow Automated. Teams Focus on Delivery.",
    description:
      "Agents coordinate client communication, project tracking, billing, vendor management, and reporting. Every service delivery workflow is automated so teams focus on relationships and quality execution.",
    footer:
      "Trusted by service organizations running continuous delivery across multiple clients",
    image: "/Image/World'sFirst/scaled.webp",
  },
  {
    id: "global",
    label: "GLOBAL DELIVERY TEAMS",
    title: "24/7 Autonomous Coordination Across Time Zones",
    description:
      "Always-on AI coordination across geographies with async standups, real-time updates, and seamless handoffs between distributed teams.",
    footer: "Trusted by global delivery organizations operating 24/7 at scale",
    image: "/image/World'sFirst/scaled.webp",
    showEmail: true,
  },
];

const companies = [
  { name: "Adobe", src: "/image/newimage/Adobe1.png" },
  { name: "BrowserStack", src: "/image/newimage/Browser.png" },
  { name: "Zoho", src: "/image/newimage/Zoho1.png" },
  { name: "Microsoft", src: "/image/newimage/Microsoft1.png" },
  { name: "Sprinto", src: "/image/newimage/Sprinto1.png" },
  { name: "Perplexity", src: "/image/newimage/perplexity1.png" },
    { name: "Deloite", src: "/image/newimage/Deloite1.png" },
  { name: "Socket", src: "/image/newimage/Socket1.png" },
  { name: "Nvidia", src: "/image/newimage/nvida.png" },
];

export default function SuperManagerSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-18 lg:min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-8 lg:gap-10 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:sticky lg:top-24 space-y-5 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.02em]">
              The World's First AI Vibe Working Platform
            </h1>

            <p className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed">
              SuperManager AGI is not project management software. It is not a
              copilot. It is not an automation builder. It is an AI workforce a
              Vibe Working Platform that connects to every application your
              organisation uses and deploys autonomous specialist agents that do
              the work humans currently do manually across every department,
              every workflow and every system.
            </p>

            <p className="text-sm sm:text-base font-medium text-gray-500 leading-relaxed">
              Most tools answer questions. Most tools automate pre-defined
              triggers. SuperManager AGI does the work. The Controller Agent
              orchestrates specialist agents across every connected system,
              validates outputs via evidence-majority voting and commits results
              while your team focuses on strategy, growth and the decisions that
              actually require human judgment.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="get-in-touch"
                className="inline-flex items-center justify-center text-[13px] sm:text-[15px] rounded-lg bg-[#625FD0] px-4 py-2 sm:px-5 sm:py-2.5 text-white font-semibold transition hover:bg-[#4f4cb8]"
              >
                REQUEST A DEMO
              </Link>
              <Link
                href="https://app.supermanager.co/login"
                className="inline-flex items-center justify-center text-[13px] sm:text-[14px] text-[#625FD0] hover:text-white py-2 px-3 sm:px-4 border-2 border-[#625FD0] hover:bg-[#625FD0] rounded-lg font-semibold transition"
              >
                OPEN APP
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-4 sm:space-y-6 min-w-0">
            {/* TABS SCROLL ROW */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
              <div className="flex gap-1.5 sm:gap-2 min-w-max pb-1">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs rounded-full uppercase font-medium whitespace-nowrap transition ${
                      activeTab === i
                        ? "bg-[#625FD0] text-white"
                        : "bg-white border border-gray-200 hover:bg-[#625FD0] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB PANELS */}
            {tabs.map((tab, i) => {
              const isActive = activeTab === i;
              return (
                <div key={tab.id} className={isActive ? "block" : "hidden"}>
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="relative w-full min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px]">
                      {/* Background image */}
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
                        className="object-cover object-center"
                        priority={i === 0}
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/60" />

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 text-white">
                        {/* TOP */}
                        <div className="space-y-3 sm:space-y-4 max-w-[540px]">
                          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                            {tab.title}
                          </h2>

                          <p className="text-xs xs:text-sm sm:text-base text-white/90 leading-relaxed">
                            {tab.description}
                          </p>

                          {tab.showEmail && (
                            <Link
                              href="mailto:support@supermanager.co"
                              className="block text-xs sm:text-sm font-medium underline underline-offset-2"
                            >
                              support@supermanager.co
                            </Link>
                          )}
                        </div>

                        {/* BOTTOM */}
                        <div className="space-y-3 mt-40 lg:mt-60 sm:space-y-4">
                          <p className="text-[10px] sm:text-xs text-white/80">
                            {tab.footer}
                          </p>

                          {/* Logo marquee */}
                          <div className="overflow-hidden w-full">
                            <div className="flex w-max animate-marquee gap-4 sm:gap-6 lg:gap-10 hover:[animation-play-state:paused]">
                              {[...companies, ...companies].map(
                                (company, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-center bg-white/40 rounded-xl sm:rounded-2xl p-2 sm:p-3 w-[64px] h-[38px] xs:w-[72px] xs:h-[42px] sm:w-[90px] sm:h-[50px] lg:w-[100px] lg:h-[55px] flex-shrink-0"
                                  >
                                    <Image
                                      src={company.src}
                                      alt={company.name}
                                      width={150}
                                      height={80}
                                      loading="lazy"
                                      className="object-contain opacity-90 w-full h-full"
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
          {/* ── END RIGHT COLUMN ── */}
        </div>
      </div>
    </section>
  );
}
