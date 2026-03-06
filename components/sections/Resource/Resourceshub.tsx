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
    topic: "Leadership",
    title: "How Great Managers Build High-Performance Teams",
    icon: Target,
  },
  {
    tag: "Webinar",
    topic: "Productivity",
    title: "The SuperManager Framework for 1:1 Meetings That Actually Work",
    icon: Star,
  },
  {
    tag: "Research",
    topic: "Culture",
    title: "What Employees Really Want From Their Managers in 2525",
    icon: BarChart2,
  },
];

export default function ResourcesHub() {
  return (
    <section className="w-full bg-white text-black">

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <h1 className="text-4xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Resources 
        
              <span className="text-[#625FD0] "> for</span>
              <br />
              Better Managers
            </h1>

            <p className="text-black/60 text-sm sm:text-base max-w-lg leading-relaxed mb-8">
              Explore guides, research reports, webinars, and expert insights
              designed to help modern managers lead better teams, make smarter
              decisions, and build high-performing organizations.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 mb-10">

              <Link
                href="#"
                className="flex items-center justify-center bg-[#625FD0] px-6 py-3 text-white font-semibold text-sm rounded-md hover:opacity-90 transition"
              >
                Explore Resources
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center px-6 py-3 border-2 text-[#625FD0] border-[#625FD0] text-sm font-semibold rounded-md hover:bg-[#625FD0] hover:text-white transition"
              >
                Browse Categories
              </Link>

            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-sm">

              <div>
                <p className="text-xl sm:text-2xl font-semibold">125+</p>
                <p className="text-[10px] sm:text-xs text-black/50 uppercase tracking-wider">
                  Guides
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-semibold">40+</p>
                <p className="text-[10px] sm:text-xs text-black/50 uppercase tracking-wider">
                  Webinars
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-semibold">25+</p>
                <p className="text-[10px] sm:text-xs text-black/50 uppercase tracking-wider">
                  Reports
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full">

            {/* TRENDING RESOURCES */}
            <div className="border rounded-lg overflow-hidden border-[#625FD0] shadow-sm">

              <div className="flex items-center gap-3 px-5 py-4 bg-[#625FD0] text-white font-semibold text-sm">
                <TrendingUp size={18} />
                Trending Resources
              </div>

              <div className="divide-y-1 divide-[#625FD0] ">

                {trendingItems.map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex items-start   gap-4 px-5 py-5 hover:bg-gray-50 transition group"
                  >

                    <div className="w-10 h-10 rounded-md border-2 text-[#625FD0] border-[#625FD0] flex items-center justify-center group-hover:bg-[#625FD0] group-hover:text-white transition">
                      <item.icon size={18} />
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-2 mb-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-black/50">
                        <span>{item.tag}</span>
                  
                        <span>{item.topic}</span>
                      </div>

                      <p className="text-sm font-medium group-hover:text-[#625FD0] transition leading-snug">
                        {item.title}
                      </p>

                    </div>

                  </Link>
                ))}

              </div>

            </div>

            {/* RESOURCE TYPES */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">

              <div className="border-2 p-4 rounded-md text-center border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition cursor-pointer">
                <BookOpen className="mx-auto mb-2  " size={24} />
                <p className="text-sm sm:text-md font-medium">Guides</p>
              </div>

              <div className="border-2 p-4 rounded-md text-center border-[#625FD0] text-[#625FD0]  hover:bg-[#625FD0] hover:text-white transition cursor-pointer">
                <Video className="mx-auto mb-2" size={24} />
                <p className="text-sm sm:text-md font-medium">Webinars</p>
              </div>

              <div className="border-2 p-4 rounded-md text-center border-[#625FD0] text-[#625FD0]  hover:bg-[#625FD0] hover:text-white transition cursor-pointer">
                <Zap className="mx-auto mb-2" size={24} />
                <p className="text-sm sm:text-md font-medium">AI Insights</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}