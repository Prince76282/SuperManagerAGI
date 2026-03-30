"use client";

import {
  TrendingUp,
  Star,
  Zap,
  Target,
  BarChart2,
  BookOpen,
  Video,
} from "lucide-react";
import Link from "next/link";

const trendingItems = [
  {
    tag: "Guide",
    topic: "D2C Operations",
    title:
      "The D2C Brand Operator’s Complete Guide to Deploying AI Agents Across Inventory, Logistics, Finance and Marketing",
    icon: Target,
  },
  {
    tag: "Webinar",
    topic: "Competitive Intelligence",
    title:
      "Why Claude MCP, Manus and Microsoft Copilot Cannot Deliver the Vibe Working Platform: A Technical Breakdown",
    icon: Star,
  },
  {
    tag: "Research",
    topic: "ADA Architecture",
    title:
      "Agentic Data Architecture: Eliminating the API Layer for Hallucination-Free, Sub-100ms Enterprise AI Agents",
    icon: BarChart2,
  },
];

export default function ResourcesHub() {
  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Resources for the
              <span className="text-[#625FD0]"> for</span>
              <br />
              AI Vibe Working Platform
            </h1>

            <p className="text-black/60 text-sm sm:text-base max-w-lg leading-relaxed mb-8">
              Explore research papers, deployment guides, industry reports,
              webinars and expert insights designed to help founders, operators
              and enterprise leaders build autonomous AI agent workforces across
              every department and industry.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#"
                className="flex items-center justify-center bg-[#625FD0] px-6 py-3 text-white  text-sm rounded-md hover:opacity-90 transition"
              >
                Explore Resources
              </Link>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-sm">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl ">125+</p>
                <p className="text-[10px] sm:text-xs text-black/50 uppercase tracking-wider">
                  Guides and Deployment Frameworks
                </p>
              </div>

              <div>
                <p className="text-lg sm:text-xl md:text-2xl ">40+</p>
                <p className="text-[10px] sm:text-xs text-black/50 uppercase tracking-wider">
                  Webinars and Expert Sessions
                </p>
              </div>

              <div>
                <p className="text-lg sm:text-xl md:text-2xl ">25+</p>
                <p className="text-[10px] sm:text-xs text-black/50 uppercase tracking-wider">
                  Research Reports and Whitepapers
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="border rounded-xl overflow-hidden border-[#625FD0] shadow-sm">
              <div className="flex items-center gap-3 px-5 py-4 bg-[#625FD0] text-white  text-sm">
                <TrendingUp size={18} />
                Trending Resources
              </div>

              <div className="divide-y divide-[#625FD0]/20">
                {trendingItems.map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex items-start gap-4 px-5 py-5 hover:bg-gray-50 transition group"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md border-2 text-[#625FD0] border-[#625FD0] flex items-center justify-center group-hover:bg-[#625FD0] group-hover:text-white transition">
                      <item.icon size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-black/50">
                        <span>{item.tag}</span>
                        <span>{item.topic}</span>
                      </div>

                      <p className="text-sm sm:text-[15px] font-medium group-hover:text-[#625FD0] transition leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* RESOURCE TYPES */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="border-2 p-4 sm:p-5 rounded-md text-center border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition cursor-pointer">
                <BookOpen className="mx-auto mb-2" size={24} />
                <p className="text-xs sm:text-sm font-medium">Guides</p>
              </div>

              <div className="border-2 p-4 sm:p-5 rounded-md text-center border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition cursor-pointer">
                <Video className="mx-auto mb-2" size={24} />
                <p className="text-xs sm:text-sm font-medium">Webinars</p>
              </div>

              <div className="border-2 p-4 sm:p-5 rounded-md text-center border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition cursor-pointer">
                <Zap className="mx-auto mb-2" size={24} />
                <p className="text-xs sm:text-sm font-medium">AI Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
