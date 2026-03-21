"use client";

import { useState } from "react";
import {
  MessageSquare,
  Clock,
  HeartHandshake,
  Activity,
  ShieldCheck,
  TrendingUp,
  Layers,
  Target,
} from "lucide-react";
import Link from "next/link";

const tabs = [
  {
    label: "STRATEGY AGI",
    title: "Autonomous Strategic Intelligence for Leadership",
    desc: "Strategy AGI retrieves and analyses enterprise data across every connected system, surfaces competitive signals, generates executive intelligence briefs and tracks OKR alignment in real time. Market dynamics, operational performance metrics and forward-looking recommendations available on demand.",
    features: [
      {
        icon: <TrendingUp size={18} />,
        title: "Predictive Intelligence",
        desc: "Detect revenue trends, risk signals and growth opportunities before they impact the business.",
      },
      {
        icon: <ShieldCheck size={18} />,
        title: "Competitive Monitoring",
        desc: "Continuously monitors competitor pricing, product launches and market moves across connected platforms.",
      },
      {
        icon: <Target size={18} />,
        title: "Strategic Alignment",
        desc: "Ensures all active initiatives align with company objectives and surfaces deviations in real time to leadership.",
      },
    ],
  },
  {
    label: "Operations AGI",
    title: "Intelligent Operations Automation",
    desc: "Operations AGI manages inventory, procurement, vendor coordination, dispatch planning and inward reconciliation  all running autonomously from live data across connected systems. Stock-out prediction 10 to 14 days in advance. Overstock flagged before capital is tied up.",
    features: [
      {
        icon: <Clock size={18} />,
        title: "Inventory Intelligence",
        desc: "Real-time stock levels across all locations with advance prediction based on live sales velocity.",
      },
      {
        icon: <Activity size={18} />,
        title: "Procurement Automation",
        desc: "Purchase orders drafted and sent when reorder thresholds trigger based on actual velocity data.",
      },
      {
        icon: <HeartHandshake size={18} />,
        title: "Vendor Coordination",
        desc: "Open POs monitored, overdue deliveries flagged, follow-up communications drafted and sent automatically.",
      },
    ],
  },
  {
    label: "Finance AGI",
    title: "Autonomous Financial Operations",
    desc: "Finance AGI reconciles platform settlements across Amazon, Flipkart and Shopify, matches payment gateway transactions, tracks COD remittances, compiles GST workings and generates monthly P and L by channel  all running overnight without manual intervention.",
    features: [
      {
        icon: <Layers size={18} />,
        title: "Settlement Reconciliation",
        desc: "Platform settlements cross-referenced against internal order data. Every discrepancy flagged automatically.",
      },
      {
        icon: <ShieldCheck size={18} />,
        title: "COD Remittance Tracking",
        desc: "Courier remittances matched against expected amounts. Shortfalls escalated to finance immediately.",
      },
      {
        icon: <Activity size={18} />,
        title: "Financial MIS",
        desc: "Monthly P and L by channel, cash flow monitoring and expense tracking generated automatically in the right format.",
      },
    ],
  },
  {
    label: "Logistics AGI",
    title: "Autonomous Delivery Operations",
    desc: "Logistics AGI manages the full delivery lifecycle  NDR follow-ups, courier performance monitoring, return tracking, COD reconciliation and geo-targeting intelligence. Delivery success data fed back to marketing agents to optimise ad spend by geography.",
    features: [
      {
        icon: <MessageSquare size={18} />,
        title: "NDR Automation",
        desc: "Logistics AGI manages the full delivery lifecycle  NDR follow-ups, courier performance monitoring, return tracking, COD reconciliation and geo-targeting intelligence. Delivery success data fed back to marketing agents to optimise ad spend by geography.",
      },
      {
        icon: <HeartHandshake size={18} />,
        title: "Courier Intelligence",
        desc: "Delivery success rates, NDR rates and average delivery times monitored by courier partner. Drops flagged automatically.",
      },
      {
        icon: <Activity size={18} />,
        title: "Effective ROAS",
        desc: "Return rate and logistics cost per order by channel fed back to marketing for true profitability visibility.",
      },
    ],
  },
];

export default function PrebuiltAGIPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-gray-800">
      <section className="text-center py-16 px-6">
        <h1 className="text-3xl md:text-5xl font-semibold mb-5">
         Deploy Autonomous AGI <br/> Systems Across Your Organisation
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
         Launch production-ready AI agent systems that manage data retrieval, task execution, cross-department orchestration and autonomous operations  enabling any organisation to run at AI speed regardless of size or industry.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm border  transition
              ${
                activeTab === i
                  ? "bg-[#625FD0] text-white font-medium"
                  : "bg-white text-[#625FD0]  border-[#625FD0] border-2  "
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* MAIN CARD */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border p-8 grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold  mb-4">{tab.title}</h2>
            <p className="text-gray-600 mb-8">{tab.desc}</p>

            {tab.features.map((f, i) => (
              <Feature key={i} {...f} />
            ))}

            <Link
              href="./learnmore"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white  transition-all duration-300"
            >
              REQUEST DEMO
            </Link>
          </div>

          {/* RIGHT DEMO PANEL */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-200 to-purple-200 p-6 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm space-y-4">
              <DemoBubble side="left">
                Strategy AGI has identified a revenue growth opportunity in Q3.
              </DemoBubble>

              <DemoBubble side="right">What action is recommended?</DemoBubble>

              <DemoBubble side="left">
                Reallocate 12% marketing budget to high-performing channels and
                accelerate product release timeline by 2 weeks.
              </DemoBubble>

              <DemoBubble side="right">Approved. Execute plan.</DemoBubble>

              <DemoBubble side="left">
                Delivery AGI has initiated updated workflows and notified teams.
              </DemoBubble>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4  mb-6">
      <div className="bg-gray-100  p-3 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function DemoBubble({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
  return (
    <div
      className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`px-4 py-2  rounded-lg text-sm max-w-[80%]
        ${
          side === "right"
            ? "bg-[#625FD0] text-white rounded-br-sm"
            : "bg-gray-100 text-gray-800 rounded-bl-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
