"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const PRIMARY = "#625FD0";

const blogs = [
  {
    title:
      "The AI Vibe Working Platform: Why Autonomous Agent Workforces Are Replacing Manual Operational Layers",
    excerpt:
      "The question defining 2026 is not which tasks AI can assist humans with  it is which workflows AI agents can own end to end. Not assist. Not suggest. Own, execute and deliver. This article explains the architectural and organisational shift that makes the Vibe Working Platform possible and why it is irreversible.",
  tag: "Leadership",
    readTime: "6 min read",
    href: "#",
  },
  {
    title:
      "Beyond the Network Boundary: How ADA Changes the Architecture of Enterprise AI",
    excerpt:
      "Every AI agent system built on MCP, CLI wrappers or direct REST APIs shares one unexamined assumption: data must be accessed through a network boundary. This piece explains why that assumption is the structural root cause of hallucination, latency and throughput failures in enterprise AI  and how ADA eliminates it.",
  tag: "Management",
    readTime: "5 min read",
    href: "#",
  },
  {
    title: "The Consulting Firm of the Future: AI Agents as the Operational Backbone",
    excerpt:
      "Consulting firms that deploy engagement management agents are discovering a structural advantage: principals manage 24 active client engagements with the oversight that previously required 6 team members. This piece explains how specialist agents transform consulting operations without changing client relationships.",
  tag: "Productivity",
    readTime: "7 min read",
    href: "#",
  },
  {
    title: "Why the MCP Debate Misses the Point: The Real Problem Is the Network Boundary",
    excerpt:
      "In early 2026, Garry Tan said MCP eats too much context window. The Perplexity CTO announced moving away from MCP toward CLIs. Security researchers immediately showed CLIs are structurally broken for agent identity. Both sides were fighting over the wrong layer. The real problem is the network boundary that every protocol presupposes. This is why SuperManager AGI built ADA.",
  tag: "Strategy",
    readTime: "5 min read",
    href: "#",
  },
  {
    title: "The Value a Vibe Working Platform Creates: Time, Money and Competitive Advantage",
    excerpt:
      "Settlement reconciliation that runs overnight instead of taking 2 days. Stock-out prediction 14 days in advance. NDR automation reducing reverse logistics cost by 18%. Sprint planning prep from 3 hours to 20 minutes. This piece quantifies the specific value SuperManager AGI delivers across every operational function.",
  tag: "Leadership",
    readTime: "8 min read",
    href: "#",
  },
];

export default function BlogSlider() {
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
    <section className="bg-white py-16 lg:py-20">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-gray-900">
              Management Blog
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
              Practical frameworks, research, and strategies used by the world's
              best managers to build high-performance teams.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border-2 border-[#625FD0] text-[#625FD0] flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border-2 border-[#625FD0] text-[#625FD0] flex items-center justify-center hover:bg-[#625FD0] hover:text-white transition"
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

          {blogs.map((post, i) => (

            <article
              key={i}
              className="snap-start flex-shrink-0
              w-[85%] sm:w-[48%] lg:w-[32%]
              bg-white rounded-2xl border border-gray-200 hover:border-[#625FD0]
              transition duration-300 flex flex-col"
            >

              <div className="p-6 flex flex-col flex-1">

                <span
                  className="text-[11px] uppercase tracking-widest font-semibold mb-3"
                  style={{ color: PRIMARY }}
                >
                  {post.tag}
                </span>

                <h3 className="text-lg leading-snug text-gray-900 mb-3 hover:text-[#625FD0] transition">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 mt-6">

                

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

    </section>
  );
}