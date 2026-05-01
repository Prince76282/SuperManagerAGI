"use client";

import { useState } from "react";
import Image from "next/image";

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

const STORIES: Story[] = [
  {
    tag: "Enterprise Transformation",
    title:
      "D2C Fashion Brand Deploys Vibe Working Platform Across Inventory, Logistics and Finance",
    description:
      "SuperManager AGI deployed specialist agents across operations, logistics and finance simultaneously. Inventory agents predict stock-outs 14 days in advance. Logistics agents manage NDR follow-ups daily. Finance agents reconcile settlements overnight. The founding team gets a live intelligence brief every morning without a single manual report.",
    impact: [
      "	Zero stock-outs in 3 consecutive collection launches",
      " 18% reduction in reverse logistics cost from NDR automation",
      "	Settlement reconciliation time reduced from 2 days to overnight",
    ],
    href: "/",
    img: "/Image/Customer/FinTech.jpg",
    alt: "SuperManager AGI fintech deployment",
    accent: "#625FD0",
  },
  {
    tag: "Consulting Firm Intelligence",
    title:
      " Management Consulting Firm Scales to 24 Active Client Engagements With Same Principal Headcount",
    description:
      " SuperManager AGI deployed engagement management agents that track deliverable status, generate client reports, monitor billable hours and surface at-risk engagements automatically. Principals now have live visibility across all 24 client engagements without any manual status gathering.",
    impact: [
      "	70% reduction in internal coordination meetings",
      "	24 engagements managed with the oversight previously requiring 6 team members",
      "	Client satisfaction scores highest in firm history",
    ],
    href: "/",
    img: "/Image/Customer/Technology.jpg",
    alt: "SuperManager AGI engineering orchestration",
    accent: "#625FD0",
  },
  {
    tag: "Engineering Velocity",
    title:
      "SaaS Product Company Increases Engineering Delivery Velocity by 31% in First Quarter",
    description:
      "SuperManager AGI deployed sprint intelligence, standup automation, blocker detection and release coordination agents. Engineering leaders gained 3 hours back per sprint planning cycle. Standups now generate automatically from Jira and GitHub activity. Release notes, stakeholder updates and risk reports all autonomous.",
    impact: [
      "	31% increase in engineering delivery velocity in Q1",
      "	Sprint planning prep time reduced from 3 hours to 20 minutes",
      "	Zero manual standup coordination required",
    ],
    href: "/",
    img: "/Image/Customer/Enterprise.webp",
    alt: "SuperManager AGI SaaS productivity",
    accent: "#625FD0",
  },
];

const companies: Company[] = [
  { name: "Adobe", src: "/Image/newimage/Adobe.png", width: 140 },
  { name: "Microsoft", src: "/Image/newimage/Microsoft.png", width: 140 },
  { name: "Nvidia", src: "/Image/newimage/image.png", width: 140 },
  { name: "Zoho", src: "/Image/newimage/Zoho.png", width: 120 },
  { name: "BrowserStack", src: "/Image/newimage/Browser1.png", width: 140 },
  { name: "Sprinto", src: "/Image/newimage/Sprinto.png", width: 120 },
];



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
          <div className="text-sm font-semibold  text-[#625FD0] tracking-widest uppercase">{story.tag}</div>

          <h2 className="text-2xl sm:text-3xl  text-[#625FD0] leading-tight">
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



function Marquee() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-20 text-center">
      <h2 className="mb-8 text-xl sm:text-2xl lg:text-3xl text-black">
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
                className="h-[60px] sm:h-[80px] w-auto object-contain opacity-90"
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
          <h1 className="text-3xl sm:text-5xl  tracking-tight">
            Customer <span className="text-[#625FD0]">Stories</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            SuperManager AGI delivers the Vibe Working Platform experience that
            transforms how organisations operate giving every team an AI
            workforce that executes tasks autonomously, surfaces live
            intelligence and coordinates across every department.
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
