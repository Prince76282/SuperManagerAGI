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
    title: "Autonomous Strategic Intelligence",
    desc: "Strategy AGI analyzes enterprise data, market dynamics, and performance metrics to generate real-time executive recommendations and forward-looking strategic plans.",
    features: [
      {
        icon: <TrendingUp size={18} />,
        title: "Predictive Insights",
        desc: "Forecast trends, risks, and growth opportunities before they impact the business.",
      },
      {
        icon: <ShieldCheck size={18} />,
        title: "Risk Mitigation",
        desc: "Continuously evaluates operational and financial risks across departments.",
      },
      {
        icon: <Target size={18} />,
        title: "Strategic Alignment",
        desc: "Ensures all initiatives align with high-level company objectives.",
      },
    ],
  },
  {
    label: "DELIVERY AGI",
    title: "Execution & Delivery Automation",
    desc: "Delivery AGI ensures projects stay on schedule by tracking milestones, resolving blockers, and coordinating cross functional execution autonomously.",
    features: [
      {
        icon: <Clock size={18} />,
        title: "Deadline Optimization",
        desc: "Monitors timelines and dynamically adjusts execution workflows.",
      },
      {
        icon: <Activity size={18} />,
        title: "Real-Time Progress Tracking",
        desc: "Tracks performance metrics and sprint delivery continuously.",
      },
      {
        icon: <HeartHandshake size={18} />,
        title: "Blocker Resolution",
        desc: "Automatically identifies and resolves bottlenecks before delays occur.",
      },
    ],
  },
  {
    label: "RESOURCE AGI",
    title: "Intelligent Resource Allocation",
    desc: "Resource AGI optimizes workforce capacity, budgets, and infrastructure usage to maximize efficiency and reduce operational waste.",
    features: [
      {
        icon: <Layers size={18} />,
        title: "Workload Balancing",
        desc: "Distributes work intelligently based on availability and skill.",
      },
      {
        icon: <ShieldCheck size={18} />,
        title: "Cost Efficiency",
        desc: "Identifies unnecessary spending and reallocates budgets smartly.",
      },
      {
        icon: <Activity size={18} />,
        title: "Utilization Analytics",
        desc: "Provides visibility into team and infrastructure performance.",
      },
    ],
  },
  {
    label: "TASKMASTER AGI",
    title: "Autonomous Task Orchestration",
    desc: "TaskMaster AGI assigns, prioritizes, and monitors tasks across teams while ensuring accountability and execution consistency.",
    features: [
      {
        icon: <MessageSquare size={18} />,
        title: "Smart Task Assignment",
        desc: "Automatically delegates tasks based on skills and workload.",
      },
      {
        icon: <HeartHandshake size={18} />,
        title: "Team Synchronization",
        desc: "Keeps departments aligned with real-time updates.",
      },
      {
        icon: <Activity size={18} />,
        title: "Execution Monitoring",
        desc: "Tracks completion rates and enforces accountability.",
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
        

        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          Deploy autonomous AGI systems <br /> across your organization
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
          Launch production-ready AGI systems designed to manage strategy,
          execution, resource optimization, and task orchestration enabling
          organizations to operate with intelligence at scale.
        </p>


        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm border transition
              ${
                activeTab === i
                  ? "bg-[#625FD0] text-white font-medium"
                  : "bg-white "
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
            <h2 className="text-2xl font-semibold mb-4">{tab.title}</h2>
            <p className="text-gray-600 mb-8">{tab.desc}</p>

            {tab.features.map((f, i) => (
              <Feature key={i} {...f} />
            ))}

            <Link href='./learnmore' className="mt-8  px-6 py-3 rounded-lg text-md font-medium text-white bg-[#625FD0] transition">
              REQUEST DEMO
            </Link>
          </div>

          {/* RIGHT DEMO PANEL */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-200 to-purple-200 p-6 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm space-y-4">

              <DemoBubble side="left">
                Strategy AGI has identified a revenue growth opportunity in Q3.
              </DemoBubble>

              <DemoBubble side="right">
                What action is recommended?
              </DemoBubble>

              <DemoBubble side="left">
                Reallocate 12% marketing budget to high-performing channels and
                accelerate product release timeline by 2 weeks.
              </DemoBubble>

              <DemoBubble side="right">
                Approved. Execute plan.
              </DemoBubble>

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
    <div className="flex gap-4 mb-6">
      <div className="bg-gray-100 p-3 rounded-lg">{icon}</div>
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
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl text-sm max-w-[80%]
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