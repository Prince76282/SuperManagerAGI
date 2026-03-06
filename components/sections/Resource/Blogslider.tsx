"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#625FD0";

const blogs = [
  {
    title: "The End of Reactive Management",
    excerpt:
      "Reactive management traps leaders in constant firefighting. Learn how modern managers build systems that detect problems early and enable proactive decision making.",
    tag: "Leadership",
    readTime: "6 min read",
    href: "#",
    index: "01",
  },
  {
    title: "Manager Accountability Without Micromanagement",
    excerpt:
      "The best leaders create accountability systems that empower teams instead of controlling them. Discover the frameworks used by elite managers.",
    tag: "Management",
    readTime: "5 min read",
    href: "#",
    index: "02",
  },
  {
    title: "The 1:1 Meeting Playbook Every Manager Needs",
    excerpt:
      "Transform weekly 1:1s from status updates into powerful coaching conversations that drive growth and improve team performance.",
    tag: "Productivity",
    readTime: "7 min read",
    href: "#",
    index: "03",
  },
  {
    title: "Perform vs Transform: What Management Excellence Means",
    excerpt:
      "Great managers don't just improve systems  they transform them. Learn how elite leaders shift from optimization to transformation.",
    tag: "Strategy",
    readTime: "5 min read",
    href: "#",
    index: "04",
  },
  {
    title: "12 Delegation Techniques for Overloaded Managers",
    excerpt:
      "Delegation isn't about giving work away. It's about building leadership capability across your organization.",
    tag: "Leadership",
    readTime: "8 min read",
    href: "#",
    index: "05",
  },
];

export default function BlogSlider() {
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

  const maxIndex = blogs.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="bg-white py-16 lg:py-20">

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Management Blog
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
              Practical frameworks, research, and strategies used by the
              world's best managers to build high-performance teams.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">

            <button
              onClick={prev}
              disabled={current === 0}
              className="w-11 h-11 rounded-full border-2 border-[#625FD0] text-[#625FD0] flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-11 h-11 rounded-full border-2 border-[#625FD0] text-[#625FD0] flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition disabled:opacity-30"
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

            {blogs.map((post) => (
              <article
                key={post.index}
                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]
                bg-white rounded-2xl border border-gray-200 hover:border-[#625FD0]
                transition duration-300 flex flex-col"
              >

                <div className="p-6 flex flex-col flex-1">

                  {/* Tag */}
                  <span
                    className="text-[11px] uppercase tracking-widest font-semibold mb-3"
                    style={{ color: PRIMARY }}
                  >
                    {post.tag}
                  </span>

                  {/* Title */}
                  <span className="text-lg leading-snug text-gray-900 mb-3 hover:text-[#625FD0] transition">
                    {post.title}
                  </span>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 mt-6">

                    <span className="text-sm text-gray-400">
                      SuperManager Blog
                    </span>

                    <Link
                      href={post.href}
                      className="flex items-center bg-[#625FD0] px-5 py-2.5 text-white text-sm font-semibold rounded-md hover:opacity-90 transition"
                    >
                      Read Article
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