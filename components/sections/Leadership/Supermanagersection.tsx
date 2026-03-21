import React from "react";
import {
  Brain,
  Users,
  CalendarCheck,
  ClipboardList,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Real-Time Org Intelligence",
    desc: "SuperManager AGI retrieves live data from every connected system simultaneously and presents a unified view of revenue, inventory, logistics, marketing, finance and team performance to every leader who needs it. Updated continuously. Grounded in evidence. No manual compilation.",
  },
  {
    icon: Users,
    title: "Autonomous Cross-Department Coordination",
    desc: "AI-driven orchestration synchronises agents across every department simultaneously. When logistics detects NDR spikes, marketing targeting adjusts. When inventory triggers a reorder, procurement drafts the PO. When finance flags a settlement gap, the relevant owner is alerted. All autonomous. All coordinated.",
  },
  {
    icon: CalendarCheck,
    title: "Morning Intelligence Brief",
    desc: "Every morning, a structured intelligence brief is auto-generated for leadership: what happened yesterday across every department, what needs attention today, what decisions are pending, what anomalies were detected. No meetings required. No manual status gathering.",
  },
  {
    icon: ClipboardList,
    title: "Autonomous Reporting and MIS",
    desc: "Every report that currently requires manual compilation  weekly sales MIS, monthly P and L by channel, logistics performance summary, customer care metrics, marketing attribution  generated automatically in the right format and distributed to the right stakeholders on schedule.",
  },
  {
    icon: BarChart3,
    title: "Anomaly Detection and Alerts",
    desc: "Agents continuously monitor every connected system and alert the right leader the moment any KPI crosses a defined threshold. Revenue drop, stock-out risk, payment gateway failure, NDR spike, settlement discrepancy, campaign underperformance  detected and escalated before they compound.",
  },
  {
    icon: TrendingUp,
    title: "Human Oversight and Audit Trail",
    desc: "Full audit trails on every autonomous action. Approval gates for consequential decisions. Override controls available at any point. AI handles operational execution. Leaders retain strategic command.",
  },
];

const Supermanagersection = () => {
  return (
    <div className="max-w-[1230px] py-12 mx-auto px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl lg:text-5xl  text-gray-900 leading-tight mb-4">
          SuperManager AGI Capabilities
        </h1>

        {/* Subheading */}
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600">
            Empower every role in your organisation with autonomous AI agents that do the work, surface the intelligence and coordinate across departments  so leaders focus on strategy and growth, not operational coordination.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 bg-white"
            >
              <Icon className="w-8 h-8 text-black" />

              <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Supermanagersection;
