"use client";

import { useState } from "react";
import {
  ChevronRight,
  BookOpen,
  Plus,
  Filter,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { WHITEPAPERS } from "@/lib/Dataset/whitepapersData";

const ALL_TAGS = ["All", ...Array.from(new Set(WHITEPAPERS.map((w) => w.tag)))];

export default function WhitepapersPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = WHITEPAPERS.filter(
    (w) => activeTag === "All" || w.tag === activeTag,
  );

  const visibleItems = filtered.slice(0, visibleCount);
  const featured = WHITEPAPERS[0];
  const FeaturedIcon = featured.icon;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[700px] h-[700px] bg-indigo-200/40 blur-[140px] rounded-full"></div>
        </div>

        <span className="inline-flex items-center gap-2 text-[#625FD0] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-indigo-300 bg-indigo-50">
          <BookOpen size={12} />
          Research & Whitepapers
        </span>

        <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
          The Technical Case for <br />
          <span className="text-[#625FD0]">
            Eliminating the Network Boundary
          </span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Peer-reviewed architecture research, enterprise deployment frameworks,
          and independent analyst findings documenting why the network boundary
          assumption shared by every major agentic platform is the primary
          constraint on real-time enterprise AI, and how ADA resolves it.
        </p>
      </section>

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-md font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-indigo-300 bg-indigo-50 mb-8">
          <Star size={14} /> Featured
        </div>

        <Link
          href={`/white-papers/${featured.id}`}
          className="group grid md:grid-cols-[1fr_auto] gap-8 border border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-[#625FD0]">
                <FeaturedIcon size={26} />
              </div>

              <p className="text-md px-3 py-1 rounded-full bg-indigo-50 text-[#625FD0]">
                {featured.tag}
              </p>
            </div>

            <h2 className="text-2xl font-semibold">{featured.title}</h2>
            <p className="text-gray-600">{featured.intro}</p>

            <div className="flex items-center gap-2 text-[#625FD0] font-medium text-sm">
              Read Full Paper
              <ArrowRight
                className="group-hover:translate-x-1 transition"
                size={14}
              />
            </div>
          </div>
        </Link>
      </section>

      {/* FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-md font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-indigo-300 bg-indigo-50 mb-6">
          <Filter size={14} /> Filter by Topic
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveTag(tag);
                setVisibleCount(6);
              }}
              className={`px-4 py-1.5 rounded-full text-md transition border ${
                activeTag === tag
                  ? "bg-[#625FD0]  text-white border-[#625FD0]"
                  : "border-gray-200 hover:bg-[#625FD0] hover:text-white hover:border-[#625FD0]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((paper) => {
            const Icon = paper.icon;

            return (
              <Link
                key={paper.id}
                href={`/white-papers/${paper.id}`}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white transition">
                      <Icon size={18} />
                    </div>

                    <span className="text-md px-2 py-0.5 rounded-full bg-indigo-50 text-[#625FD0]">
                      {paper.tag}
                    </span>
                  </div>

                  <ChevronRight
                    className="text-gray-400 group-hover:text-[#625FD0]"
                    size={16}
                  />
                </div>

                <p className="font-semibold text-lg mb-2">{paper.title}</p>

                <p className="text-md text-gray-600 line-clamp-2">
                  {paper.intro}
                </p>
              </Link>
            );
          })}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 rounded-xl border border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white transition flex items-center gap-2"
            >
              Load More <Plus size={16} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
