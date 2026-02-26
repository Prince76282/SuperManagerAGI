"use client";

import Link from "next/link";
import {
  CalendarCheck,
  Ticket,
  Activity,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";



const IconBox = ({
  icon,
  bg,
}: {
  icon: React.ReactNode;
  bg: string;
}) => (
  <div
    className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center`}
  >
    {icon}
  </div>
);



const useCases = [
  {
    title: "Eliminate Status Meetings",
    desc: "SuperManagerAGI continuously tracks execution, updates progress automatically, and delivers real-time summaries so teams never need manual sync calls.",
    icon: <CalendarCheck size={26} className="text-gray-800" />,
    bg: "bg-indigo-100",
  },
  {
    title: "Automate Ticket Management",
    desc: "From creation to resolution, SuperManagerAGI triages, assigns, prioritizes, and closes tickets intelligently using historical learning.",
    icon: <Ticket size={26} className="text-gray-800" />,
    bg: "bg-amber-100",
  },
  {
    title: "Real-time Progress Tracking",
    desc: "Live dashboards, predictive timelines, and performance signals provide instant visibility across teams, tasks, and milestones.",
    icon: <Activity size={26} className="text-gray-800" />,
    bg: "bg-emerald-100",
  },
  {
    title: "Predictive Risk Alerts",
    desc: "AI models detect blockers, delays, and delivery risks before they occur — automatically recommending corrective actions.",
    icon: <AlertTriangle size={26} className="text-gray-800" />,
    bg: "bg-rose-100",
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
        
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Where SuperManagerAGI Delivers Instant Impact
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              SuperManagerAGI replaces manual coordination, reporting, and
              tracking with autonomous execution intelligence allowing teams to
              focus on strategy, innovation, and delivery instead of
              administrative work.
            </p>
          </div>


          <Link
            href="/learnmore"
            className="inline-flex items-center gap-2 self-start bg-[#625FD0] lg:self-auto px-6 py-3 rounded-lg  text-white text-md font-medium  transition"
          >
            Explore Platform
            <ArrowRight size={16} />
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
              <div className="mt-6 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}