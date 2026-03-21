"use client";

import { useState } from "react";

type TabHighlight = {
  icon: string;
  title: string;
  body: string;
};

type TabVisualItem = {
  label: string;
  status: "done" | "warn";
  time: string;
};

type TabVisual = {
  badge: string;
  items: TabVisualItem[];
};

type Tab = {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  highlights: TabHighlight[];
  visual: TabVisual;
};

const TABS: Tab[] = [
  {
    id: "automation",
    label: "AI Management",
    heading: "Replace manual management with autonomous execution",
    subheading:
      "SuperManagerAGI replaces the operational layer of management by continuously coordinating tasks, resolving dependencies, and advancing work across your stack. Instead of relying on manual oversight, teams benefit from intelligent execution that keeps projects progressing automatically.",
    highlights: [
      {
        icon: "⚡",
        title: "Autonomous task coordination",
        body: "SuperManagerAGI automatically assigns priorities, routes tasks, and keeps work progressing without waiting for managers to coordinate execution.",
      },
      {
        icon: "🧠",
        title: "AI-generated management updates",
        body: "Standups, sprint reports, and stakeholder updates are generated automatically from real activity across your project tools.",
      },
      {
        icon: "🔁",
        title: "Continuous workflow orchestration",
        body: "Integrate tools like Jira, Slack, GitHub, and Notion so execution flows seamlessly between systems without manual intervention.",
      },
    ],
    visual: {
      badge: "Autonomous Management Active",
      items: [
        {
          label: "Sprint update generated automatically",
          status: "done",
          time: "just now",
        },
        {
          label: "2 tasks reassigned based on capacity",
          status: "done",
          time: "2m ago",
        },
        {
          label: "Cross-team dependency resolved",
          status: "done",
          time: "4m ago",
        },
        {
          label: "Next sprint prepared by SuperManagerAGI",
          status: "done",
          time: "11m ago",
        },
      ],
    },
  },
  {
    id: "team-leads",
    label: "For Team Leads",
    heading: "Execution intelligence without constant coordination",
    subheading:
      "Team leads gain real-time insight into workload, delivery momentum, and team capacity without spending hours managing coordination. SuperManagerAGI continuously monitors execution and surfaces actionable insights.",
    highlights: [
      {
        icon: "📋",
        title: "AI-guided sprint planning",
        body: "SuperManagerAGI analyzes historical velocity and team capacity to recommend balanced sprint plans automatically.",
      },
      {
        icon: "🔗",
        title: "Automatic dependency detection",
        body: "Cross-team blockers are detected instantly with recommended solutions to keep execution moving.",
      },
      {
        icon: "📊",
        title: "Real-time workload intelligence",
        body: "Instant visibility into team workload distribution allows leaders to rebalance resources before bottlenecks appear.",
      },
    ],
    visual: {
      badge: "Team Execution Dashboard",
      items: [
        {
          label: "Team capacity balanced automatically",
          status: "done",
          time: "live",
        },
        {
          label: "Sprint velocity projected +9%",
          status: "done",
          time: "live",
        },
        {
          label: "1 dependency awaiting resolution",
          status: "warn",
          time: "live",
        },
        { label: "Code review queue cleared", status: "done", time: "live" },
      ],
    },
  },
  {
    id: "managers",
    label: "For Project Managers",
    heading: "Project oversight without manual tracking",
    subheading:
      "Project managers gain a complete, real-time understanding of project health without chasing updates across tools. SuperManagerAGI continuously monitors execution and surfaces insights automatically.",
    highlights: [
      {
        icon: "🎯",
        title: "AI milestone monitoring",
        body: "Track delivery progress with predictive insights generated directly from project execution data.",
      },
      {
        icon: "🔥",
        title: "Proactive risk detection",
        body: "Potential delivery delays are surfaced early so managers can take action before timelines slip.",
      },
      {
        icon: "📝",
        title: "Automated stakeholder reporting",
        body: "Generate executive-ready reports instantly based on real activity across your project ecosystem.",
      },
    ],
    visual: {
      badge: "Project Execution Intelligence",
      items: [
        {
          label: "API migration project on track",
          status: "done",
          time: "live",
        },
        {
          label: "Mobile redesign risk detected",
          status: "warn",
          time: "live",
        },
        {
          label: "Milestone delivery probability: 87%",
          status: "done",
          time: "live",
        },
        {
          label: "Weekly report delivered to leadership",
          status: "done",
          time: "7m ago",
        },
      ],
    },
  },
  {
    id: "executives",
    label: "For Executives",
    heading: "Strategic visibility across the entire organization",
    subheading:
      "Executives gain a unified view of company execution with predictive insights across every initiative. SuperManagerAGI connects daily operational work directly to strategic goals.",
    highlights: [
      {
        icon: "🗂️",
        title: "Organization-wide execution visibility",
        body: "Track delivery progress across projects, departments, and initiatives from a single strategic view.",
      },
      {
        icon: "📈",
        title: "Goal alignment intelligence",
        body: "Understand how active projects contribute directly to company objectives and OKRs.",
      },
      {
        icon: "🔮",
        title: "Predictive execution forecasting",
        body: "Identify initiatives at risk months before deadlines using AI-driven execution analysis.",
      },
    ],
    visual: {
      badge: "Executive Execution View",
      items: [
        {
          label: "14 active initiatives · 10 on track",
          status: "done",
          time: "live",
        },
        { label: "Company OKR alignment: 84%", status: "done", time: "live" },
        {
          label: "2 initiatives require resource adjustment",
          status: "warn",
          time: "live",
        },
        { label: "Q4 delivery forecast: 92%", status: "done", time: "live" },
      ],
    },
  },
];

function VisualPanel({ visual }: { visual: TabVisual }) {
  return (
    <div className="relative rounded-2xl border border-gray-200 overflow-hidden bg-white flex flex-col min-h-[420px]">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>

        <div className="ml-3 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#625FD0]/10 text-[#625FD0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#625FD0] animate-pulse" />
          {visual.badge}
        </div>
      </div>

      <div className="flex flex-col divide-y divide-gray-200 flex-1">
        {visual.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-5 py-4 gap-4 hover:bg-gray-50 transition"
          >
            <span className="text-sm text-gray-800 font-medium">
              {item.label}
            </span>
            <span className="text-xs text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 right-5 text-xs font-bold text-[#625FD0]">
        ✦ SuperManagerAGI
      </div>
    </div>
  );
}

export default function ManagementTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tab = TABS[activeTab];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-8 max-w-[1200px] mx-auto w-full">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-5xl text-black leading-tight mb-4">
            Replace Manual Coordination With Autonomous Agent Execution
            <span className="text-[#625FD0]"> Autonomous Agent </span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            SuperManagerAGI supports every role in the execution lifecycle—from
            engineers to executives—by replacing manual coordination with
            intelligent automation, real-time execution insights, and continuous
            workflow momentum.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                activeTab === i
                  ? "bg-[#625FD0] text-white"
                  : "border border-gray-200 text-gray-700 hover:border-[#625FD0]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl text-black mb-3">
                {tab.heading}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {tab.subheading}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {tab.highlights.map((h, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#625FD0]/10 flex items-center justify-center text-lg text-[#625FD0]">
                    {h.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-black mb-1">
                      {h.title}
                    </h4>

                    <p className="text-sm text-gray-600">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          <VisualPanel visual={tab.visual} />
        </div>
      </div>
    </section>
  );
}
