"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Truck,
  CheckSquare,
  FileText,
  ShieldAlert,
  Rocket,
  ArrowRight,
} from "lucide-react";

/* ================= MANAGER DATA ================= */

const managers = [
  {
    id: "delivery",
    label: "Operations AGI",
    icon: Truck,
    title: "Autonomous Operations Management Across Every Channel",
    desc: "Operations AGI manages inventory, procurement, vendor coordination, inward reconciliation and dispatch planning  all running autonomously from live data across connected systems.",
    stats: [
      { value: "14days ", label: "advance stock-out prediction" },
      { value: "80%", label: " reduction in manual operations overhead" },
      { value: "3-2x", label: "faster procurement cycle" },
    ],
  },
  {
    id: "taskmaster",
    label: "Finance AGI",
    icon: CheckSquare,
    title: "Autonomous Financial Reconciliation and Reporting",
    desc: "Finance AGI reconciles platform settlements, matches payment gateway transactions, compiles GST workings, monitors vendor payables and generates monthly P and L by channel  all running overnight without manual intervention.",
    stats: [
      { value: "100% ", label: "settlement reconciliation coverage" },
      { value: "85%", label: "reduction in manual finance overhead" },
      { value: "Zero", label: " settlement discrepancies undetected beyond 7 days" },
    ],
  },
  {
    id: "docs",
    label: "Logistics AGI",
    icon: FileText,
    title: "Autonomous Delivery Operations and Intelligence",
    desc: "Logistics AGI manages the full delivery lifecycle  NDR follow-ups, courier performance monitoring, return tracking, COD reconciliation and geo-targeting intelligence fed back to marketing agents.",
    stats: [
      { value: "Daily automated NDR ", label: "follow-up across 100% of stuck orders" },
      { value: "18% ", label: "average reduction in reverse logistics cost" },
      { value: "Real-time courier", label: " performance monitoring across all partners" },
    ],
  },
  {
    id: "risk",
    label: "Marketing AGI",
    icon: ShieldAlert,
    title: "Autonomous Campaign Intelligence and Revenue Attribution",
    desc: "Marketing AGI monitors campaign performance across Meta, Google, Amazon and Flipkart Ads, attributes revenue to every creative and channel, detects fatigue and flags budget pacing issues before spend is wasted.",
    stats: [
      { value: "Revenue attribution ", label: "within 24 hours of every influencer post" },
      { value: "Campaign ROAS ", label: "alerts before weekly budget is consumed" },
      { value: "Creative fatigue ", label: "detected before CTR drops compound" },
    ],
  },
  {
    id: "release",
    label: "Customer Care AGI",
    icon: Rocket,
    title: "Autonomous Customer Query and Return Resolution",
    desc: "Customer Care AGI manages all queries across Shopify, WhatsApp, email and marketplace channels, tracks return journeys from initiation to resolution and detects negative reviews within hours of posting.",
    stats: [
      { value: "Unified query", label: " visibility across all channels in real time" },
      { value: "60%", label: "reduction in customer care coordination overhead" },
      { value: "Return journey ", label: "tracking from initiation to warehouse receipt" },
    ],
  },
];



interface DashboardPreviewProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
}

function DashboardPreview({ icon: Icon, title }: DashboardPreviewProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-gray-50 p-6 sm:p-8 min-h-[300px] flex flex-col justify-between transition-all duration-500">
      <div>
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-5 h-5 text-[#625FD0]" />
            <span className="font-semibold text-sm">{title}</span>
          </div>

          <div className="space-y-3">
            {[
              { label: "AI Confidence", value: "98%" },
              { label: "Execution Speed", value: "Optimal" },
              { label: "Automation Level", value: "High" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm border-b border-black/5 pb-2"
              >
                <span className="text-black/50">{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
        <span className="text-black/30 text-xs font-mono">Synced live</span>

        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-[#625FD0]/60"
              style={{ height: `${8 + i * 4}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function PrebuiltManagersSection() {
  const [active, setActive] = useState(0);
  const tab = managers[active];
  const Icon = tab.icon;

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Pre-Built Specialist AGI Agents
          
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Deploy purpose-built AI agents that autonomously run every operational function across your organisation. Each agent is trained for its domain, connected to the right data sources via ADA and coordinated by the Beehive architecture.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {managers.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-2 ${
                active === i
                  ? "bg-[#625FD0] text-white border-[#625FD0]"
                  : "border-black/10 text-gray-600 hover:bg-[#625FD0] hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8 border border-black/10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#625FD0] text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm uppercase text-[#625FD0] tracking-widest font-medium">
                  Autonomous Manager
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold mb-6">
                {tab.title}
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">{tab.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {tab.stats.map((stat, i) => (
                  <div key={i} className="border-l-2 border-[#625FD0] pl-3">
                    <div className="text-2xl ">{stat.value}</div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="./learnmore"
                className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
              >
                Explore Platform
              </Link>

              <Link
                href="./get-in-touch"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg text-md font-semibold border-2 border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition"
              >
                Book Demo
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <DashboardPreview icon={Icon} title={tab.label} />
        </div>
      </div>
    </section>
  );
}
