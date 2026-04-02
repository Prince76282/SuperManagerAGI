"use client";

import {
  Zap,
  SlidersHorizontal,
  Layers,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Autonomous Execution",
    icon: Zap,
    description:
      "SuperManagerAGI takes your project goals and runs assigning tasks, reallocating resources, and unblocking teams without waiting for manual input. From kickoff to delivery, autonomy is the default.",
  },
  {
    title: "Manager-Grade Oversight",
    icon: SlidersHorizontal,
    description:
      "Stay in control without being in the weeds. Real-time dashboards, decision audit trails, and escalation triggers give managers full visibility into every autonomous action taken on their behalf.",
  },
  {
    title: "Seamless Integration",
    icon: Layers,
    description:
      "Plugs directly into your existing tools  Jira, Asana, Notion, Slack, and more. SuperManagerAGI works inside your stack, syncing context across platforms so nothing falls through the cracks.",
  },
  {
    title: "Contextual Intelligence",
    icon: BrainCircuit,
    description:
      "Learns your team's velocity, communication patterns, and project history. SuperManagerAGI reasons across timelines, dependencies, and risks to surface what matters before it becomes a problem.",
  },
  {
    title: "Enterprise-Ready Trust",
    icon: ShieldCheck,
    description:
      "Role-based permissions, SOC-2 compliance, and GDPR-ready infrastructure. Built for organizations where reliability isn't a feature  it's a requirement.",
  },
];

export default function EnterpriseSection() {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative max-w-300 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl leading-tight text-black font-syne">
              The AI that manages projects so managers can lead.
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/platform"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white  transition-all duration-300"
            >
              Explore the platform
            </Link>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ title, icon: Icon, description }, i) => (
            <div
              key={title}
              className="group relative  rounded-2xl border-2 border-[#625FD0] bg-black/2 p-7 transition-all duration-500 cursor-default"
            >
              <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-black/5 border-2 border-[#625FD0] group-hover:bg-[#625FD0] transition-all duration-500">
                <Icon
                  size={20}
                  className="text-[#625FD0] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <span className="text-lg ml-3  text-black mb-3 tracking-tight ">
                {title}
              </span>

              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-black/70 transition-colors duration-300">
                {description}
              </p>

              <span className="absolute bottom-5 right-6 text-[10px] font-mono text-black/15 group-hover:text-black/30 transition-colors">
                0{i + 1}
              </span>
            </div>
          ))}

          <div className="relative rounded-2xl border-2 border-[#625FD0] bg-black/2 p-7 flex flex-col justify-between group hover:bg-black/4 transition-all duration-500 cursor-pointer">
            <p className="text-xl text-black leading-snug">
              Ready to put your project management on autopilot?
            </p>
            <Link
              href="/get-in-touch"
              className="inline-flex items-center justify-center mt-8 rounded-lg bg-[#625FD0] px-4 py-2 text-white  transition-all duration-300"
            >
              Schedule a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
