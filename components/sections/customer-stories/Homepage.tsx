"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

/* ================= TYPES ================= */

type Story = {
  tag: string;
  title: string;
  description: string;
  impact: string[];
  href: string;
  img: string;
  alt: string;
  accent: string;
};

type Company = {
  name: string;
  src: string;
  width: number;
};

/* ================= DATA ================= */

const STORIES: Story[] = [
  {
    tag: "Enterprise Transformation",
    title:
      "Global FinTech Enterprise Deploys SuperManager AGI Across 42 Business Units",
    description:
      "SuperManager AGI replaced traditional coordination layers with autonomous intelligence streamlining executive decision cycles and eliminating operational bottlenecks at scale.",
    impact: [
      "↓ 38% Operational Delays",
      "↑ 27% Cross-Team Alignment",
      "3x Faster Executive Decisions",
    ],
    href: "/learnmore/",
    img: "/Image/Customer/FinTech.jpg",
    alt: "SuperManager AGI fintech deployment",
    accent: "#625FD0",
  },
  {
    tag: "Autonomous Leadership",
    title:
      "Fortune 500 Technology Company Replaces Engineering Management Layers",
    description:
      "By integrating SuperManager AGI into sprint orchestration and roadmap planning, the company optimized resource allocation, improved delivery velocity, and scaled engineering output without increasing headcount.",
    impact: [
      "↑ 31% Engineering Velocity",
      "↓ 22% Sprint Slippage",
      "2x Faster Release Cycles",
    ],
    href: "/learnmore/",
    img: "/Image/Customer/Technology.jpg",
    alt: "SuperManager AGI engineering orchestration",
    accent: "#625FD0",
  },
  {
    tag: "AI-Driven Performance",
    title:
      "Enterprise SaaS Platform Achieves 2x Productivity with AGI-Orchestrated Teams",
    description:
      "SuperManager AGI acted as an autonomous coordination layer, continuously analyzing dependencies, optimizing workload distribution, and driving performance accountability across departments.",
    impact: [
      "2x Productivity Increase",
      "↓ 35% Decision Bottlenecks",
      "↑ 40% Strategic Execution Speed",
    ],
    href: "/learnmore/",
    img: "/Image/Customer/Enterprise.webp",
    alt: "SuperManager AGI SaaS productivity",
    accent: "#625FD0",
  },
];

const companies: Company[] = [
  { name: "Adobe", src: "/Image/newimage/Adobe.png", width: 120 },
  { name: "Microsoft", src: "/Image/newimage/Microsoft.png", width: 200 },
  { name: "Nvidia", src: "/Image/newimage/image.png", width: 180 },
  { name: "Zoho", src: "/Image/newimage/Zoho.png", width: 120 },
  { name: "BrowserStack", src: "/Image/newimage/Browser1.png", width: 200 },
  { name: "Sprinto", src: "/Image/newimage/Sprinto.png", width: 120 },
];

/* ================= STORY CARD ================= */

function StoryCard({ story, index }: { story: Story; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-black/10 bg-[#F0F6F9] transition-all duration-500 hover:shadow-2xl"
      style={{
        boxShadow: hovered ? `0 0 60px -10px ${story.accent}33` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* TEXT SIDE */}
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12">
        <div className="space-y-6">
          <div
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: story.accent }}
          >
            {story.tag}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
            {story.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {story.description}
          </p>

          {/* Impact Metrics */}
          <div className="flex flex-wrap gap-3 pt-2">
            {story.impact.map((metric) => (
              <span
                key={metric}
                className="px-3 py-1 text-xs rounded-full bg-gray-300 text-gray-600 border border-white/10"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={story.href}
          className="mt-8 inline-flex items-center gap-3 group/btn w-fit"
        >
          <span
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 group-hover/btn:scale-110"
            style={{
              background: story.accent + "22",
              color: story.accent,
            }}
          >
            <Play size={14} fill="currentColor" />
          </span>

          <span className="text-sm font-semibold text-gray-700">
            View Full Case Study
          </span>
        </Link>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative h-60 sm:h-72 lg:h-auto">
        <Image
          src={story.img}
          alt={story.alt}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f14] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-transparent to-transparent" />
      </div>
    </article>
  );
}

/* ================= MARQUEE ================= */

function Marquee() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-20 text-center">
      <h2 className="mb-8 text-xl sm:text-2xl lg:text-4xl text-black">
        Trusted by 100+ Leading Companies
      </h2>

      <div className="overflow-hidden group">
        <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex items-center justify-center px-6">
              <Image
                src={company.src}
                alt={company.name}
                width={company.width}
                height={80}
                className="h-[60px] sm:h-[80px] object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */

export default function CustomerStories() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-14 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Customer <span className="text-[#625FD0]">Stories</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            SuperManager AGI replaces traditional management layers with
            autonomous coordination intelligence driving faster decisions,
            measurable productivity gains, and scalable enterprise execution.
          </p>
        </div>

        <div className="space-y-10">
          {STORIES.map((story, i) => (
            <StoryCard key={`${story.href}-${i}`} story={story} index={i} />
          ))}
        </div>

        <Marquee />
      </section>
    </main>
  );
}