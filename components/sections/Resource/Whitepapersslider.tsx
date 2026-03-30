"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const whitepapers = [
  {
    title:
      "The Executive Guide to Building a High-Performance Management Culture",
    excerpt:
      "A strategic guide to embedding structured management practices across teams and leadership layers at enterprise scale.",
    pages: "30 Pages",
    href: "/pdf/Executive_Guide.pdf",
  },
  {
    title: "Responsible Management: An Ethical Framework for People Leaders",
    excerpt:
      "Navigate fairness, accountability, and inclusion with a leadership framework designed for modern organizations.",
    pages: "18 Pages",
    href: "/pdf/Responsible_Management.pdf",
  },

  {
    title: "Reimagining Manager Development in the Modern Enterprise",
    excerpt:
      "The five strategic shifts organizations must adopt to develop managers effectively at scale.",
    pages: "20 Pages",
    href: "/pdf/Reimagining_Manager.pdf",
  },
  {
    title: "Understanding Human Motivation in the Workplace",
    excerpt:
      "Learn how intrinsic motivation drives performance and how managers can unlock it consistently.",
    pages: "22 Pages",
    href: "/pdf/Understanding_Human.pdf",
  },
];

export default function WhitepaperSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = sliderRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir * el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F0F6F9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-gray-900">
              Executive Whitepapers
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl text-sm sm:text-base">
              Deep insights and research designed to help leaders build
              high-performance teams and scalable management systems.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-3">

            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border-2 border-[#625FD0] text-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border-2 border-[#625FD0] text-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition"
            >
              <ChevronRight size={18} />
            </button>

          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar"
        >
          {whitepapers.map((paper, i) => (
            <article
              key={i}
              className="snap-start flex-shrink-0
              w-[85%] sm:w-[48%] lg:w-[32%]
              bg-white rounded-2xl border shadow-sm
              hover:shadow-xl transition-all duration-300
              flex flex-col"
            >
              <div className="p-6 sm:p-7 flex flex-col gap-4 flex-1">

                <h3 className="text-base sm:text-lg leading-snug text-gray-900 hover:text-[#625FD0] transition">
                  {paper.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {paper.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4">

                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {paper.pages}
                  </span>

                  {/* Google Drive Download */}
                  <Link
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#625FD0] px-4 sm:px-5 py-2 text-white text-xs sm:text-sm font-semibold rounded-md hover:opacity-90 transition"
                  >
                    Download
                  </Link>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}