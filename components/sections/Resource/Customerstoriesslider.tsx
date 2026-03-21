"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";


const stories = [
  {
    title:
      "How a Baby Products D2C Brand Eliminated Stock-Outs Across 3 Collection Launches",
    excerpt:
      "A baby clothing D2C brand deployed Operations AGI and Finance AGI simultaneously. Inventory agents monitor stock levels across 200+ SKUs in real time and flag stock-out risk 14 days in advance based on sales velocity. Finance agents reconcile settlements overnight. Three consecutive collection launches without a single stock-out. Settlement reconciliation time reduced from 2 days to overnight.",
  

  },
  {
    title:
      "How a Women’s Ethnic Wear Brand Scaled to 5 Channels With No Additional Ops Headcount",
    excerpt:
      "A women’s ethnic wear D2C brand expanded from Shopify to Amazon, Flipkart, Meesho and two quick commerce platforms without adding any operations staff. Specialist agents manage inventory, logistics and finance across all 5 channels simultaneously. NDR automation reduced reverse logistics cost by 22%. Founder gets a live morning intelligence brief from every channel every day.",
  

  },
  {
    title: "How a Management Consulting Firm Scaled to 24 Client Engagements With the Same Principal Team",
    excerpt:
      "By deploying engagement management agents that track deliverable status, generate client reports and monitor billable hours automatically, a management consulting firm grew from 12 to 24 active client engagements without adding any principal headcount. Internal coordination meetings reduced by 70%. Client satisfaction scores highest in firm history.",
  

  },
  {
    title: "How a Consumer Electronics Brand Reduced NDR Rate and Recovered Lost Settlement Revenue",
    excerpt:
      "A consumer electronics D2C brand deployed Logistics AGI and Finance AGI. NDR follow-up automation reduced the stuck-NDR backlog by 85% in the first month. Finance reconciliation caught 12 settlement discrepancies in the first cycle that had been going undetected for 60 days under the previous manual process.",
  

  },
  {
    title: "How a SaaS Engineering Team Increased Delivery Velocity by 31% in One Quarter",
    excerpt:
      "Sprint planning intelligence, autonomous standup generation from Jira and GitHub activity, blocker detection and release coordination agents deployed across a 40-person engineering organisation. Sprint planning prep reduced from 3 hours to 20 minutes. Zero manual standup coordination. Delivery velocity up 31% in Q1.",
  

  },
  {
    title: "How a Manufacturing Company Predicted a Supply Chain Risk 3 Weeks Before It Hit",
    excerpt:
      "Operations AGI monitoring production schedules and vendor delivery data flagged a velocity anomaly in inward shipments from a key component vendor 21 days before the projected stock-out. Procurement was able to source from an alternate vendor at comparable cost. Zero production disruption. The same signal had gone undetected the previous quarter under manual monitoring.",
  

  },
];

export default function CustomerStoriesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const el = sliderRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction * el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl tracking-tight text-black">
       Customer Stories
          </h2>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed">
Real organisations deploying SuperManager AGI as their AI Vibe Working Platform  and the specific, measurable outcomes they achieved.
          </p>

          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 border-2 border-[#625FD0] text-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 border-2 border-[#625FD0] text-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition"
            >
              <ChevronRight size={18} />
            </button>

          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-2"
        >
          {stories.map((story, i) => (
            <article
              key={i}
              className="snap-start flex-shrink-0
              w-[85%] sm:w-[48%] lg:w-[32%]
              border border-gray-200 rounded-xl bg-white
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300"
            >
              <div className="p-7 flex flex-col gap-5 h-full">

                <span className="text-lg font-medium leading-snug text-gray-900 hover:text-[#625FD0] transition">
                  {story.title}
                </span>

                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {story.excerpt}
                </p>

                

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}