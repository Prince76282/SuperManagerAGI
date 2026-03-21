"use client";

import Link from "next/link";
import {
  CalendarCheck,
  Ticket,
  Activity,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const IconBox = ({ icon, bg }: { icon: React.ReactNode; bg: string }) => (
  <div
    className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center`}
  >
    {icon}
  </div>
);

const useCases = [
  {
    title: "Eliminate Manual MIS and Reporting",
    desc: "Every recurring report across every department  sales MIS, logistics summary, finance reconciliation, customer care metrics, marketing attribution  generated automatically in the right Excel format and distributed to the right stakeholders. Work that previously took 2 to 3 hours runs in 30 seconds.",
    icon: <CalendarCheck size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Automate Every Follow-Up Workflow",
    desc: "From NDR follow-ups to vendor payment reminders to customer return updates to overdue task escalations  agents execute every follow-up workflow automatically based on configured conditions. No manual chasing. No missed follow-ups. No dropped threads.",
    icon: <Ticket size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Real-Time Execution Intelligence",
    desc: "Live dashboards for every role from analyst to founder. Every connected system. Every active workflow. Every KPI that matters. Updated continuously from actual live data via the ADA layer at 65ms average latency.",
    icon: <Activity size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Predictive Risk Alerts",
    desc: "Agents detect emerging risks 10 to 14 days before they materialise  stock-out risk based on velocity, campaign degradation based on frequency trends, settlement delays based on gateway patterns, engineering delivery risk based on velocity drops. You fix problems before they explode, not after.",
    icon: <AlertTriangle size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
];

export default function SuperManagerUseCases() {
  return (
    <section className="relative bg-[#EEF2F7] py-16 px-4 overflow-hidden">
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto flex flex-col gap-14">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="mt-5 text-3xl md:text-3xl  text-gray-900 leading-tight">
              Where SuperManager AGI Delivers Instant Impact
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            SuperManager AGI replaces manual coordination, reporting and tracking with autonomous execution intelligence  allowing every team to focus on strategy, growth and delivery instead of administrative overhead.
            </p>
          </div>

          <Link
            href="/learnmore"
            className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
          >
            Explore Platform
          </Link>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              <IconBox icon={item.icon} bg={item.bg} />

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* animated divider */}
              <div className="mt-6 h-[2px] w-0 bg-[#625FD0] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
