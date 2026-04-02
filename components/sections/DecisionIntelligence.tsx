import React from "react";
import Image from "next/image";
import Link from "next/link";


const CARDS = [
  {
    id: 1,
    title: "Proprietary ADA Architecture",
    desc: "A fundamentally new class of system architecture designed for autonomous execution  not assistance. ADA (Autonomous Decision Architecture) eliminates traditional software boundaries, allowing AI agents to operate directly within your enterprise stack. It unifies data, logic, and execution into a single layer, enabling real-time, context-aware intelligence deeply embedded into your operations.",
  },
  {
    id: 2,
    title: "AI Agents Without APIs",
    desc: "No dependency on fragile API chains or third-party connectors. Our agents interact directly with your systems at the infrastructure level, removing latency, failure points, and integration overhead. This ensures faster execution, higher reliability, and complete control over how decisions and actions are performed across your environment.",
  },
  {
    id: 3,
    title: "Direct Database Access",
    desc: "Agents operate with secure, governed access to live enterprise databases  enabling millisecond-level data retrieval and updates. Every action and decision is grounded in real-time structured data, eliminating delays caused by batch processing, caching layers, or outdated pipelines.",
  },
  {
    id: 4,
    title: "Evidence-Grounded Decisions",
    desc: "Every decision is traceable, explainable, and backed by actual enterprise data. The system validates outputs against live datasets, ensuring zero hallucination and full auditability. This creates a level of trust and reliability required for mission-critical business operations.",
  },
  {
    id: 5,
    title: "Autonomous Execution Engine",
    desc: "Beyond insights  the system takes action. It autonomously executes workflows, updates records, triggers processes, and completes cross-functional tasks without manual intervention. From operations to finance to customer workflows, execution happens instantly and continuously.",
  },
  {
    id: 6,
    title: "Multi-Agent Workforce",
    desc: "A coordinated network of specialized AI agents, each designed for specific domains such as finance, operations, growth, and support. These agents collaborate in parallel, enabling deep expertise, faster execution, and scalable decision-making across the entire organization.",
  },
  {
    id: 7,
    title: "1000-Foot Deep Data Intelligence",
    desc: "Goes far beyond surface-level analytics. The system deeply understands both structured and unstructured data  uncovering hidden patterns, dependencies, and signals that traditional tools miss. This enables high-quality decisions based on complete organizational context.",
  },
  {
    id: 8,
    title: "Beyond Automation, Chatbots, and Copilots",
    desc: "This is not automation layered on top of existing tools. It replaces fragmented systems, manual workflows, and assistive copilots with a unified intelligence layer that thinks, decides, and acts. No prompts required for every step  the system operates proactively.",
  },
  {
    id: 9,
    title: "Execution + Decisions + Operations",
    desc: "A single system that combines intelligence, decision-making, and execution into one continuous loop. No silos, no handoffs, no delays. What traditionally required multiple tools and teams is now handled autonomously in real time  transforming how modern organizations operate.",
  },
];

const DecisionIntelligence = () => {
  return (
    <section className="p-0 bg-[#F0F6F9]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 sm:gap-8 py-10 sm:py-14 lg:py-16">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
              What Sets SuperManager AGI Apart
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Cards */}
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl sm:text-lg lg:text-2xl  text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}

              {/* CTA BLOCK (same as your original) */}
              {/* <div className="flex flex-col gap-6">

                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-300">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-3">
                    Ready to get started?
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Let’s Make This Happen. <br />
                    We’re Ready When You Are
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-300">
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <Link
                      href="get-in-touch"
                      className="bg-[#625FD0] text-white px-4 py-2 rounded-lg  hover:bg-[#4f4cb8] transition"
                    >
                      REQUEST A DEMO
                    </Link>

                    <Link
                      href="https://app.supermanager.co/login"
                      className="border-2 border-[#625FD0] text-[#625FD0] px-4 py-2 rounded-lg  hover:bg-[#625FD0] hover:text-white transition"
                    >
                      OPEN APP
                    </Link>
                  </div>
                </div>

              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionIntelligence;
