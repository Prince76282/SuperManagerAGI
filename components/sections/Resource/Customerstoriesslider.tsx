"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    title:
      "How a Fast-Growing SaaS Company Built a High Performance Engineering Team",
    excerpt:
      "A 200-person tech company reduced manager burnout by 40% and doubled team retention after adopting the SuperManager framework for structured 1:1s, continuous feedback loops, and leadership training.",
    tag: "Customer Story",
    href: "#",
  },
  {
    title:
      "From Reactive to Proactive: Transforming a 12-Person Sales Organization",
    excerpt:
      "Real-time coaching frameworks, weekly performance reviews, and smarter goal-setting helped a distributed sales team increase quota attainment significantly.",
    tag: "Customer Story",
    href: "#",
  },
  {
    title: "Scaling Manager Quality Across 300 Stores Nationwide",
    excerpt:
      "A national retail brand used SuperManager training programs to onboard new managers, dramatically reducing first-year turnover across store leadership.",
    tag: "Customer Story",
    href: "#",
  },
  {
    title: "Scaling Leadership Systems Across 5,000 Employees",
    excerpt:
      "A global investment firm replaced ad-hoc coaching with a structured management operating system used across 12 international offices.",
    tag: "Customer Story",
    href: "#",
  },
  {
    title: "Building Psychological Safety in Healthcare Teams",
    excerpt:
      "A hospital network implemented leadership training programs that improved employee trust, communication, and satisfaction scores dramatically.",
    tag: "Customer Story",
    href: "#",
  },
  {
    title: "From Micromanager to Multiplier",
    excerpt:
      "After adopting delegation and autonomy frameworks, an engineering director increased team productivity without expanding headcount.",
    tag: "Customer Story",
    href: "#",
  },
];

export default function CustomerStoriesSlider() {
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

  const maxIndex = stories.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="bg-white py-16 lg:py-24">

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-black">
            Real Leadership Transformation.
          </h2>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Thousands of organizations use <b>SuperManager</b> to transform
            how leaders manage teams, run meetings, deliver feedback, and
            scale management excellence across their companies.
          </p>

          <div className="flex items-center gap-3">

            <button
              onClick={prev}
              disabled={current === 0}
              className="w-11 h-11 border-2 text-[#625FD0]  border-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-11 h-11 border-2 text-[#625FD0]  border-[#625FD0] rounded-full flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>

          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">

          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${current * (100 / visible)}%)`,
            }}
          >

            {stories.map((story, i) => (
              <article
                key={i}
                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]
                border border-gray-200 rounded-xl bg-white
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="p-7 flex flex-col gap-5 h-full">

                  {/* TITLE */}
                  <span className="text-lg font-medium  leading-snug text-gray-900 hover:text-[#625FD0] transition">
                    {story.title}
                  </span>

                  {/* TEXT */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {story.excerpt}
                  </p>

                  {/* FOOTER */}
                  <div className="flex justify-between items-center pt-4 border-t border-[#625FD0]">

                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {story.tag}
                    </span>

                    <Link
                      href={story.href}
                      className="flex items-center bg-[#625FD0] gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-md hover:opacity-90 transition"
                    >
                      Read Story
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}