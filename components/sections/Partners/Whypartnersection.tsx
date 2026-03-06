"use client";

import { useState } from "react";
import { Brain, Globe2, Zap } from "lucide-react";

type PartnerItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const partners: PartnerItem[] = [
  {
    icon: Brain,
    title: "Accelerate AI Adoption",
    description:
      "Leverage our partner ecosystem to access deep agentic AI expertise and curated enterprise resources enabling faster deployment and measurable ROI.",
  },
  {
    icon: Globe2,
    title: "Scale Operations Globally",
    description:
      "Expand into new markets with trusted global partners and industry specific AI specialists aligned to your operational goals.",
  },
  {
    icon: Zap,
    title: "Drive Faster Business Results",
    description:
      "Reduce deployment timelines with pre-built AI orchestration workflows optimized for SuperManagerAGI environments.",
  },
];

export default function WhyPartnerSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-20 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl max-w-3xl text-black leading-tight mb-6 tracking-tight">
          Work with your partners to integrate{" "}
          <span className="text-[#625FD0]">SuperManagerAGI</span> across your
          business
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg max-w-3xl text-gray-600 mb-16 leading-relaxed">
          Our ecosystem of agentic AI partners supports organizations of every
          size , delivering end-to-end integration, orchestration, and
          enterprise-grade transformation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((item, i) => {
            const Icon = item.icon;
            const isHovered = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    isHovered
                      ? "opacity-100 bg-gradient-to-br from-[#625FD015] to-transparent"
                      : "opacity-0"
                  }`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "bg-[#625FD0]"
                        : "bg-gray-600"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={`transition-transform duration-300 ${
                        isHovered ? "text-white scale-110" : "text-white"
                      }`}
                    />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-black  text-2xl mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#625FD0] transition-all duration-500 ${
                    isHovered ? "w-full" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}