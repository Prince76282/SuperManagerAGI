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

const IconBox = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) => (
  <div
    className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center shrink-0`}
  >
    {children}
  </div>
);

const capabilities = [
  {
    title: "Task Execution Across Every Application",
    desc: "SuperManager AGI autonomously executes tasks across every connected application simultaneously. Agents assign work, update records, generate outputs and commit results  all in the right order, verified by evidence-majority voting, with full audit traceability.",
    icon: <GitBranch size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Autonomous Report Generation",
    desc: "Every report that currently requires manual compilation  weekly MIS, monthly P and L, settlement reconciliation, logistics summary, campaign attribution  generated automatically in the right format and distributed to the right people on schedule. No manual pulling. No formatting. No distribution.",
    icon: <ClipboardList size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Status Intelligence Without Status Meetings",
    desc: "Agents continuously monitor every active workflow and surface real-time status to every stakeholder who needs it. No sync calls required. No manual updates. Live execution intelligence delivered automatically to the right person at the right time., and performance summaries without manual tracking or data gathering.",
    icon: <BarChart3 size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Risk Detection",
    desc: "Agents monitor 50+ risk signals continuously across every connected system  stock-out velocity, settlement gaps, NDR spikes, campaign ROAS drops, engineering blockers, vendor delays. When early warning conditions are detected, agents surface the alert, generate a mitigation brief and notify the responsible owner before the risk becomes a fire.",
    icon: <ShieldAlert size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Cross-System Dependency Coordination",
    desc: "Agents monitor 50+ risk signals continuously across every connected system  stock-out velocity, settlement gaps, NDR spikes, campaign ROAS drops, engineering blockers, vendor delays. When early warning conditions are detected, agents surface the alert, generate a mitigation brief and notify the responsible owner before the risk becomes a fire.",
    icon: <Link2 size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Launch and Release Readiness",
    desc: "Before any product launch, collection release or campaign activation, agents verify readiness across every connected system  correct stock, right images, accurate prices, valid descriptions, tested links, live inventory confirmed. Launch readiness checks run autonomously. Nothing goes live with an unresolved gap.",
    icon: <Rocket size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
  {
    title: "Documentation and Knowledge Generation",
    desc: "Agents generate technical documentation, MIS reports, release summaries, reconciliation records and knowledge base entries automatically from live system data. Documentation stays current because it is generated from actual operational data, not written manually from memory.",
    icon: <FileText size={26} className="text-white" />,
    bg: "bg-[#625FD0]",
  },
];

export default function SuperManagerCapabilities() {
  return (
    <section className="bg-[#EEF2F7] py-16 px-4 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl mb-12">
          <h1 className="mt-5 text-3xl md:text-3xl lg:text-5xl  text-gray-900 leading-tight tracking-tight">
            Autonomous Execution Powered by the Vibe Working Platform
          </h1>

          <p className="mt-4 text-gray-700 text-md md:text-base leading-relaxed">
           	SuperManager AGI operates as an intelligent execution layer that plans, coordinates, monitors and optimises entire workflows eliminating manual oversight while increasing delivery speed, accuracy and predictability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              <IconBox bg={item.bg}>{item.icon}</IconBox>

              <h3 className="mt-5 text-lg  text-gray-900">{item.title}</h3>

              <p className="mt-3 text-md text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6 h-[2px] w-0 bg-[#625FD0] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
