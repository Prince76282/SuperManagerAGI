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
    title: "Autonomous Decision Making",
    desc: "SuperManager AGI analyzes real-time operational data, evaluates risks, and executes intelligent decisions without waiting for human intervention ensuring faster, smarter organizational movement.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    desc: "AI-driven orchestration synchronizes teams across departments, tools, and workflows, eliminating silos and keeping everyone aligned toward shared objectives.",
  },
  {
    icon: CalendarCheck,
    title: "Daily Standup Management",
    desc: "Automate daily updates with AI-generated summaries, blocker detection, and action-item tracking reducing meeting time while maintaining full visibility.",
  },
  {
    icon: ClipboardList,
    title: "Work Assignment & Distribution",
    desc: "Dynamically assigns tasks based on skill sets, workload balance, and performance metrics to maximize efficiency and maintain execution momentum.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking & Blocker Resolution",
    desc: "Continuously monitors KPIs, identifies productivity gaps, and proactively resolves blockers before they impact delivery timelines.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    desc: "Supports employee growth with AI-powered skill mapping, personalized learning recommendations, and long-term performance insights aligned with business goals.",
  },
];

const Supermanagersection = () => {
  return (
    <div className="max-w-[1230px] py-12 mx-auto px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          SuperManager AGI Capabilities
        </h1>

        {/* Subheading */}
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600">
            Empower your organization with autonomous AI managers that drive
            execution, coordinate teams, and optimize performance at scale.
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