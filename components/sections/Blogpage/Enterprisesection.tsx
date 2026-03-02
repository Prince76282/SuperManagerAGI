"use client";

import { Zap, SlidersHorizontal, Layers, BrainCircuit, ShieldCheck, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Velocity",
    icon: Zap,
    description:
      "Deploy AGI workflows at machine speed—pre-built agent templates, orchestration primitives, and a curated AGI Marketplace slash time-to-production from months to hours.",
  },
  {
    title: "Governance",
    icon: SlidersHorizontal,
    description:
      "Enterprise-wide observability across every agent, task, and decision. Audit trails, role-based access, and real-time guardrails keep your AGI systems accountable.",
  },
  {
    title: "Adaptability",
    icon: Layers,
    description:
      "Model-agnostic by design. Swap LLMs, connect any data source, run on-prem or in the cloud—SuperManage AGI bends to your stack, not the other way around.",
  },
  {
    title: "Intelligence",
    icon: BrainCircuit,
    description:
      "Persistent memory, multi-agent reasoning, and self-improving workflows that learn from every interaction and continuously elevate enterprise performance.",
  },
  {
    title: "Trust",
    icon: ShieldCheck,
    description:
      "Built alongside enterprises from day one. SOC-2 certified, GDPR-ready, and battle-tested in the world's most demanding operational environments.",
  },
];

export default function EnterpriseSection() {
  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-black/20 bg-black/5">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-black uppercase">
                Why SuperManage AGI
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-black"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Built for enterprises that can&apos;t afford to move slow.
            </h2>
          </div>

          <div className="shrink-0">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              Explore the platform
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ title, icon: Icon, description }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-black/10 bg-black/[0.02] p-7 hover:border-black hover:bg-black/[0.04] transition-all duration-500 cursor-default"
            >
              {/* Top-left corner accent */}
              <div className="absolute top-0 left-0 w-10 h-10 rounded-tl-2xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-px h-6 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute top-0 left-0 w-6 h-px bg-gradient-to-r from-black/60 to-transparent" />
              </div>

              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-black/5 border border-black/10 group-hover:bg-black group-hover:border-black transition-all duration-500">
                <Icon size={20} className="text-black group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold text-black mb-3 tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-black/50 group-hover:text-black/70 transition-colors duration-300">
                {description}
              </p>

              {/* Index watermark */}
              <span className="absolute bottom-5 right-6 text-[10px] font-mono text-black/15 group-hover:text-black/30 transition-colors">
                0{i + 1}
              </span>
            </div>
          ))}

          {/* CTA card */}
          <div className="relative rounded-2xl border border-dashed border-black/25 bg-black/[0.02] p-7 flex flex-col justify-between group hover:border-black hover:bg-black/[0.04] transition-all duration-500 cursor-pointer">
            <p
              className="text-xl font-bold text-black leading-snug"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to orchestrate intelligence at scale?
            </p>
            <a
              href="#"
              className="mt-6 self-start inline-flex items-center gap-2 text-sm font-medium text-black/60 group-hover:text-black transition-colors"
            >
              Schedule a demo
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Font import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&display=swap');`}</style>
    </section>
  );
}