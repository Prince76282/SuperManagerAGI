"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const tabs = [
  {
    id: "startups",
    label: "HIGH-GROWTH STARTUPS",
    title: "Scale Operations Without Scaling Headcount",
    description:
      "AI agents handle CRM updates, reporting, support workflows, hiring coordination, vendor follow-ups, and finance trackingenabling startups to scale operations without increasing team size.",
    footer: "Manage 10× more operational complexity with the same team",
    image: "/Image/World'sFirst/PLAN.jpg",
  },
  {
    id: "d2c",
    label: "D2C & E-COMMERCE BRANDS",
    title: "Your Entire Brand Operations Run by an AI Operations Engine",
    description:
      "From Shopify, Shiprocket, Razorpay, Meta Ads, Google Ads, CRM, and support tools, AI agents execute workflows across your entire commerce stackorders, marketing, logistics, and support.",
    footer:
      "Trusted by D2C brands managing 50+ SKUs across 5 channels with 80% less operational overhead",
    image: "/Image/World'sFirst/PHOTO.webp",
  },
  {
    id: "service",
    label: "SERVICE-BASED COMPANIES",
    title: "Run Service Delivery with an AI Operations Engine",
    description:
      "AI agents manage client communication, project tracking, billing, vendor coordination, and reportingallowing teams to focus on delivery while operations run automatically.",
    footer: "Trusted by service organizations running continuous delivery across multiple clients",
    image: "/Image/World'sFirst/scaled.webp",
  },
  {
    id: "consulting",
    label: "CONSULTING FIRMS",
    title: "Run Your Consulting Delivery with an AI Operations Engine",
    description:
      "AI agents manage project tracking, reporting, billing, documentation, and client communicationso consultants can focus on strategy and client outcomes.",
    footer:
      "Trusted by consulting principals managing 24 active engagements with the oversight that previously required 6 team members",
    image: "/Image/World'sFirst/image1.webp",
  },
  {
    id: "engineering",
    label: "PRODUCT & ENGINEERING COMPANIES",
    title: "AI Handles the Process. Engineers Ship.",
    description:
      "AI agents manage sprint planning, tracking, releases, documentation, and reporting across your development stackso engineers stay focused on building and shipping.",
    footer: "Trusted by engineering leaders shipping 3× faster with 95% less coordination overhead",
    image: "/Image/World'sFirst/financial.jpg",
  },
  {
    id: "global",
    label: "GLOBAL DELIVERY TEAMS",
    title: "24/7 Autonomous Coordination Across Time Zones",
    description:
      "AI agents coordinate async standups, reporting, task tracking, client communication, and cross-timezone handoffsenabling continuous global delivery without delays.",
    footer: "Trusted by global delivery organizations operating 24/7 at scale",
    image: "/Image/World'sFirst/The-ERP-.webp",
    showEmail: true,
  },
  {
    id: "enterprise",
    label: "ENTERPRISE COMPANIES",
    title: "AI Operations Engine for Enterprise Execution",
    description:
      "AI agents execute workflows across ERP, CRM, HRMS, finance, and internal systemscoordinating operations, generating reports, tracking execution, and managing cross-department workflows.",
    footer: "Cuts coordination overhead by up to 85% across enterprise portfolios",
    image: "/Image/World'sFirst/platform.webp",
  },
];

const companies = [
  { name: "Adobe", src: "/Image/newimage/adobe1.png" },
  { name: "BrowserStack", src: "/Image/newimage/Browser.png" },
  { name: "Zoho", src: "/Image/newimage/Zoho1.png" },
  { name: "Microsoft", src: "/Image/newimage/Microsoft1.png" },
  { name: "Sprinto", src: "/Image/newimage/Sprinto1.png" },
  { name: "Perplexity", src: "/Image/newimage/perplexity1.png" },
  { name: "Deloite", src: "/Image/newimage/Deloite1.png" },
  { name: "Socket", src: "/Image/newimage/Socket1.png" },
  { name: "Nvidia", src: "/Image/newimage/nvida.png" },
];

export default function SuperManagerSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll active tab into view when it changes
  useEffect(() => {
    tabRefs.current[activeTab]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeTab]);

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-18 lg:min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-8 lg:gap-10 items-start">
          
          {/* ── LEFT COLUMN ── */}
          <div className="lg:sticky lg:top-24 space-y-5 sm:space-y-6">
            <h1 className="text-3xl lg:text-5xl lg:text-[2.5rem]  leading-[1.2] tracking-[-0.02em]">
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
              triggers. SuperManager AGI does the work.
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
            
            {/* TABS SCROLL ROW WITH NAVIGATION */}
            <div className="flex items-center gap-2">
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition shrink-0 bg-white shadow-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>

              <div className="overflow-x-auto scrollbar-hide flex-1">
                <div className="flex gap-1.5 sm:gap-2 min-w-max py-1 px-1">
                  {tabs.map((tab, i) => (
                    <button
                      key={tab.id}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      onClick={() => setActiveTab(i)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs rounded-full uppercase font-medium whitespace-nowrap transition ${
                        activeTab === i
                          ? "bg-[#625FD0] text-white"
                        : "bg-white text-[#625FD0] font-semibold border-2 border-[#625FD0] hover:bg-[#625FD0] hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition shrink-0 bg-white shadow-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* TAB PANELS */}
            {tabs.map((tab, i) => {
              const isActive = activeTab === i;
              return (
                <div key={tab.id} className={isActive ? "block" : "hidden"}>
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="relative w-full min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px]">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
                        className="object-cover object-center"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-black/60" />
                      
                      <div className="relative h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 text-white">
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

                        <div className="space-y-3 mt-40 lg:mt-60 sm:space-y-4">
                          <p className="text-[10px] sm:text-xs text-white/80">
                            {tab.footer}
                          </p>
                          <div className="overflow-hidden w-full">
                            <div className="flex w-max animate-marquee gap-4 sm:gap-6 lg:gap-10 hover:[animation-play-state:paused]">
                              {[...companies, ...companies].map((company, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-center bg-white/40 rounded-xl sm:rounded-2xl p-2 sm:p-3 w-[64px] h-[38px] xs:w-[72px] xs:h-[42px] sm:w-[90px] sm:h-[50px] lg:w-[100px] lg:h-[55px] flex-shrink-0"
                                >
                                  <Image
                                    src={company.src}
                                    alt={company.name}
                                    width={200}
                                    height={150}
                                    loading="lazy"
                                    className="object-contain opacity-90 w-full h-full"
                                  />
                                </div>
                              ))}
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
