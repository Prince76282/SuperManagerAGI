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
    label: "Autonomous Execution",
    heading: "For Individual Contributors",
    subheading:
      "Work that advances without constant coordination. Individual contributors gain AI agents that handle the coordination overhead that fragments their day: status updates, system switches, manual data entry, follow-up communication, and report compilation. Every hour previously spent on coordination overhead is recovered for the substantive work that actually requires their expertise.",
    highlights: [
      {
        icon: "⚡",
        title: "Autonomous task routing",
        body: "Work assigned based on actual capacity and context, not manual manager assignment.",
      },
      {
        icon: "🧠",
        title: "AI-generated updates",
        body: "Status, progress and blockers reported automatically without manual input required.",
      },
      {
        icon: "🔁",
        title: "System synchronisation",
        body: "Changes in one connected system propagate to every other relevant system automatically.",
      },
    ],
    visual: {
      badge: "Autonomous Execution Active",
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
          label: "Dependency resolved across teams",
          status: "done",
          time: "4m ago",
        },
        {
          label: "Next sprint draft prepared by AGI",
          status: "done",
          time: "11m ago",
        },
      ],
    },
  },
  {
    id: "team-leads",
    label: "For Team Leads",
    heading: "Execution Intelligence Without Coordination Overhead",
    subheading:
      "Team leads gain real-time insight into workload distribution, dependency status and delivery momentum without spending hours managing coordination manually. SuperManager AGI monitors execution continuously and surfaces what needs human attention. Everything else is handled autonomously.",
    highlights: [
      {
        icon: "📋",
        title: "Capacity visibility",
        body: "Real-time workload distribution across every team member from connected systems.",
      },
      {
        icon: "🔗",
        title: "Dependency detection",
        body: "Cross-system blockers identified and resolution actions recommended automatically.",
      },
      {
        icon: "📊",
        title: "Velocity intelligence",
        body: "Delivery pace tracked continuously with early warning when momentum drops.",
      },
    ],
    visual: {
      badge: "Team Execution Dashboard",
      items: [
        {
          label: "Team capacity balanced across 8 active members",
          status: "done",
          time: "live",
        },
        {
          label: "Sprint velocity tracking at 94% of target",
          status: "done",
          time: "live",
        },
        {
          label: "1 cross-system dependency awaiting resolution",
          status: "warn",
          time: "live",
        },
        {
          label: "Standup summary generated from Jira and GitHub",
          status: "done",
          time: "9m ago",
        },
      ],
    },
  },
  {
    id: "managers",
    label: "For Operations and Department Managers",
    heading: "Complete Departmental Visibility Without Manual Tracking",
    subheading:
      "Department managers gain a live, grounded view of every active workflow, every pending action and every risk signal across their function, retrieved directly from connected systems in real time and not compiled from manual reports. SuperManager AGI monitors continuously and surfaces what requires human judgment. Everything routine is handled autonomously.",
    highlights: [
      {
        icon: "🎯",
        title: "Live operations dashboard",
        body: "Every active workflow, KPI and risk signal from connected systems in one view.",
      },
      {
        icon: "🔥",
        title: "Proactive anomaly detection",
        body: "Risk signals surfaced before they require escalation, 10 to 14 days ahead.",
      },
      {
        icon: "📝",
        title: "Automated MIS distribution",
        body: "Every recurring report generated and sent automatically in the right format.",
      },
    ],
    visual: {
      badge: "Operations Intelligence",
      items: [
        {
          label: "3 SKUs flagged for reorder in next 11 days",
          status: "done",
          time: "live",
        },
        {
          label: "Overnight run complete, 2 gaps identified",
          status: "warn",
          time: "live",
        },
        {
          label: "18 orders actioned automatically this morning",
          status: "done",
          time: "live",
        },
        {
          label: "Generated and distributed to 4 stakeholders",
          status: "done",
          time: "7m ago",
        },
      ],
    },
  },
  {
    id: "executives",
    label: "For Founders and Executives",
    heading: "Strategic Visibility Across Every Department Without Any Manual Gathering",
    subheading:
      "Founders and executives gain a live intelligence view of the entire organisation, including revenue, inventory, logistics, marketing, finance, customer care and engineering, updated continuously from every connected system via the ADA layer. Not a report someone built last week. Not a dashboard someone configured last month. The actual live state of the organisation at 65ms, grounded in evidence from the actual data in connected systems.",
    highlights: [
      {
        icon: "🗂️",
        title: "Morning intelligence brief",
        body: "Auto-generated from every connected system before 9am every day.",
      },
      {
        icon: "📈",
        title: "Threshold-based alerts",
        body: "Agents fire notifications the moment any KPI crosses a defined level.",
      },
      {
        icon: "🔮",
        title: "Cross-department coordination",
        body: "Agents coordinate across departments automatically, with no escalation meetings required.",
      },
    ],
    visual: {
      badge: "Executive Intelligence View",
      items: [
        {
          label: "94% of monthly target achieved with 8 days remaining",
          status: "done",
          time: "live",
        },
        {
          label: "2 high-velocity SKUs approaching reorder threshold",
          status: "done",
          time: "live",
        },
        {
          label: "One campaign below threshold brief generated",
          status: "warn",
          time: "live",
        },
        {
          label: "Generated from 11 connected systems",
          status: "done",
          time: "delivered 9:00am",
        },
      ],
    },
  },
];

function VisualPanel({ visual }: { visual: TabVisual }) {
  return (
    <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
        </div>

        <div className="ml-3 flex items-center gap-2 rounded-full bg-[#625FD0]/10 px-3 py-1 text-xs font-semibold text-[#625FD0]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#625FD0] animate-pulse" />
          {visual.badge}
        </div>
      </div>

      <div className="flex flex-1 flex-col divide-y divide-gray-200">
        {visual.items.map((item) => (
          <div
            key={`${item.label}-${item.time}`}
            className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-gray-50"
          >
            <span className="text-sm font-medium text-gray-800">
              {item.label}
            </span>
            <span className="text-xs text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 right-5 text-xs font-bold text-[#625FD0]">
        SuperManagerAGI
      </div>
    </div>
  );
}

export default function AutonomousTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tab = TABS[activeTab];

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white pb-20">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl leading-tight text-black lg:text-5xl">
            Run projects with
            <span className="text-[#625FD0]"> autonomous execution</span>
          </h2>

          <p className="text-base leading-relaxed text-gray-600">
            SuperManagerAGI supports every role in the execution lifecycle, from
            engineers to executives, providing autonomous coordination,
            intelligent insights, and continuous project momentum.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {TABS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === index
                  ? "bg-[#625FD0] text-white"
                  : "border border-gray-200 text-gray-700 hover:border-[#625FD0]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-3 text-2xl text-black lg:text-3xl">
                {tab.heading}
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {tab.subheading}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {tab.highlights.map((highlight) => (
                <div key={highlight.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#625FD0]/10 text-lg text-[#625FD0]">
                    {highlight.icon}
                  </div>

                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-black">
                      {highlight.title}
                    </h4>

                    <p className="text-sm text-gray-600">{highlight.body}</p>
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
