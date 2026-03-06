"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const whitepapers = [
  {
    title:
      "The Executive Guide to Building a High-Performance Management Culture",
    excerpt:
      "A strategic guide to embedding structured management practices across teams, departments, and leadership layers at enterprise scale.",
    pages: "24 Pages",
    href: "#",
  },
  {
    title: "Responsible Management: An Ethical Framework for People Leaders",
    excerpt:
      "Navigate fairness, accountability, and inclusion with a leadership framework designed for modern organizations.",
    pages: "18 Pages",
    href: "#",
  },
  {
    title: "Management 101: What Works, What Doesn't, and What's Next",
    excerpt:
      "Research-backed insights that separate great managers from average ones and how to apply them today.",
    pages: "16 Pages",
    href: "#",
  },
  {
    title: "Reimagining Manager Development in the Modern Enterprise",
    excerpt:
      "The five strategic shifts organizations must adopt to develop managers effectively at scale.",
    pages: "20 Pages",
    href: "#",
  },
  {
    title: "Understanding Human Motivation in the Workplace",
    excerpt:
      "Learn how intrinsic motivation drives performance and how managers can unlock it consistently.",
    pages: "22 Pages",
    href: "#",
  },
];

export default function WhitepaperSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);

  /* RESPONSIVE BREAKPOINTS */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = whitepapers.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-16 lg:py-20 bg-[#F0F6F9]">

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Executive Whitepapers
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl text-sm sm:text-base">
              Deep insights and research designed to help leaders build
              high-performance teams and scalable management systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">

            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 border-2 border-[#625FD0] text-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-10 h-10 border-2 border-[#625FD0] text-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

        {/* Slider */}
        <div className="overflow-hidden">

          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${current * (100 / visible)}%)`,
            }}
          >

            {whitepapers.map((paper, i) => (
              <div
                key={i}
                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]
                group bg-white rounded-2xl border shadow-sm hover:shadow-xl
                transition-all duration-300 flex flex-col"
              >

                <div className="p-7 flex flex-col gap-4 flex-1">

                  <span className="text-lg leading-snug text-gray-900 group-hover:text-[#625FD0] transition">
                    {paper.title}
                  </span>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {paper.excerpt}
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {paper.pages}
                    </span>

                    <Link
                      href={paper.href}
                      className="flex items-center bg-[#625FD0] px-5 py-2.5 text-white text-sm font-semibold rounded-md hover:opacity-90 transition"
                    >
                      Download
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}