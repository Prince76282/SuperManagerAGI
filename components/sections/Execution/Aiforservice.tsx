"use client";

import {
  GitBranch,
  ClipboardList,
  BarChart3,
  ShieldAlert,
  Link2,
  Rocket,
  FileText,
} from "lucide-react";



const IconBox = ({ children, bg }: { children: React.ReactNode; bg: string }) => (
  <div
    className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center shrink-0`}
  >
    {children}
  </div>
);


const capabilities = [
  {
    title: "Sprint Management",
    desc: "SuperManagerAGI autonomously plans sprints, assigns tasks, balances workload, and optimizes velocity using real-time team analytics.",
    icon: <GitBranch size={26} className="text-gray-800" />,
    bg: "bg-indigo-100",
  },
  {
    title: "Ticket Automation",
    desc: "Automatically generates, prioritizes, assigns, and resolves tickets while learning from historical patterns to improve accuracy.",
    icon: <ClipboardList size={26} className="text-gray-800" />,
    bg: "bg-amber-100",
  },
  {
    title: "Status Reporting",
    desc: "Produces executive-ready reports, progress dashboards, and performance summaries without manual tracking or data gathering.",
    icon: <BarChart3 size={26} className="text-gray-800" />,
    bg: "bg-emerald-100",
  },
  {
    title: "Risk Detection",
    desc: "Identifies delivery risks, delays, bottlenecks, and blockers early using predictive intelligence and proactive alerts.",
    icon: <ShieldAlert size={26} className="text-gray-800" />,
    bg: "bg-rose-100",
  },
  {
    title: "Dependency Management",
    desc: "Maps project dependencies, detects conflicts, and coordinates cross-team execution automatically.",
    icon: <Link2 size={26} className="text-gray-800" />,
    bg: "bg-sky-100",
  },
  {
    title: "Release Planning",
    desc: "Strategically schedules releases, aligns stakeholders, and ensures launch readiness with AI-driven coordination.",
    icon: <Rocket size={26} className="text-gray-800" />,
    bg: "bg-violet-100",
  },
  {
    title: "Documentation Generation",
    desc: "Creates technical docs, sprint summaries, release notes, and knowledge bases instantly with contextual awareness.",
    icon: <FileText size={26} className="text-gray-800" />,
    bg: "bg-orange-100",
  },
];



export default function SuperManagerCapabilities() {
  return (
    <section className="bg-[#EEF2F7] py-16 px-4 font-sans">
      <div className="max-w-[1200px] mx-auto">

        <div className="max-w-2xl mb-12">
          
          <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl  text-gray-900 leading-tight tracking-tight">
            Autonomous Project Execution Powered by AI
          </h1>

          <p className="mt-4 text-gray-700 text-md md:text-base leading-relaxed">
            SuperManagerAGI operates as an intelligent execution layer that
            plans, coordinates, monitors, and optimizes entire workflows
            eliminating manual oversight while increasing delivery speed,
            accuracy, and predictability.
          </p>
        </div>

     
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              <IconBox bg={item.bg}>{item.icon}</IconBox>

              <h3 className="mt-5 text-lg  text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-md text-gray-600 leading-relaxed">
                {item.desc}
              </p>

     
              <div className="mt-6 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}