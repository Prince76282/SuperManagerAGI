"use client";

import { useState } from "react";
import { Search, Plus, ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

const FEATURED = {
  href: "#",
  img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
  title: "Introducing SuperManagerAGI: The Enterprise AI Orchestration Layer",
  desc: "SuperManagerAGI enables enterprises to deploy, govern, and scale AI agents securely. From workflow automation to decision intelligence, organizations can finally move from AI pilots to production systems.",
  date: "Feb 20, 2026",
  readTime: "6 min read",
  tag: "Announcement",
};

const LATEST = [
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    title: "Designing Agentic AI Architecture for the Enterprise",
    date: "Feb 20, 2026",
    readTime: "8 min",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "Enterprise AI Governance: A Practical Playbook",
    date: "Feb 18, 2026",
    readTime: "5 min",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80",
    title: "Workflow Automation with AI Agents: Beyond RPA",
    date: "Feb 15, 2026",
    readTime: "7 min",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
    title: "Decision Intelligence with SuperManagerAGI",
    date: "Feb 12, 2026",
    readTime: "4 min",
  },
];

const ARTICLES = [
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    title: "SuperManagerAGI in Finance: Autonomous Operations at Scale",
    desc: "Learn how SuperManagerAGI transforms finance teams with AI agents for reconciliation, forecasting, fraud detection, and compliance automation.",
    date: "Feb 16, 2026",
    author: "SuperManagerAGI Team",
    tag: "Finance",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    title: "Perform vs Transform: Unlocking Real AI Business Value",
    desc: "Why incremental automation isn't enough. Discover how agentic AI transforms enterprise workflows, culture, and competitive advantage.",
    date: "Feb 10, 2026",
    author: "SuperManagerAGI Insights",
    tag: "Strategy",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "Enterprise AI Orchestration: From Tools to Systems",
    desc: "Disconnected AI tools create chaos. Learn how orchestration unifies agents, data, and workflows into an intelligent enterprise system.",
    date: "Feb 5, 2026",
    author: "SuperManagerAGI Team",
    tag: "Engineering",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    title: "AI Agents & the Future of Enterprise Productivity",
    desc: "Explore how SuperManagerAGI enables AI agents to handle repetitive tasks, assist teams, and drive measurable ROI across departments.",
    date: "Jan 30, 2026",
    author: "Product Strategy Team",
    tag: "Productivity",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    title: "Scaling AI from Pilot to Production",
    desc: "Most AI projects stall at the pilot stage. Here's how SuperManagerAGI enables secure deployment, monitoring, and governance at scale.",
    date: "Jan 23, 2026",
    author: "SuperManagerAGI Engineering",
    tag: "Engineering",
  },
  {
    href: "#",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    title: "The Rise of the Agentic Enterprise",
    desc: "Agentic enterprises leverage AI agents for continuous decision-making and automation. Learn what it takes to become one.",
    date: "Jan 16, 2026",
    author: "SuperManagerAGI Research",
    tag: "Research",
  },
];

const TAG_COLORS = {
  Announcement: "bg-[#625FD0] text-violet-700",
  Finance: "bg-emerald-100 text-emerald-700",
  Strategy: "bg-amber-100 text-amber-700",
  Engineering: "bg-sky-100 text-sky-700",
  Productivity: "bg-rose-100 text-rose-700",
  Research: "bg-indigo-100 text-indigo-700",
};

function Tag({ label }) {
  const color = TAG_COLORS[label] ?? "bg-gray-100 text-gray-600";
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[15px]  tracking-wide ${color}`}
    >
      {label}
    </span>
  );
}

function FeaturedCard({ post }) {
  return (
    <Link
      href={post.href}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200/80 transition-all duration-300 hover:shadow-xl hover:ring-violet-200 no-underline h-full"
    >
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {post.tag && (
          <div className="absolute top-4 left-4">
            <Tag label={post.tag} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h2 className="text-2xl leading-snug text-gray-900 transition-colors duration-200 group-hover:text-[#625FD0]">
          {post.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {post.desc}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{post.date}</span>
            {post.readTime && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-[#625FD0] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Read <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function LatestCard({ post }) {
  return (
    <Link
      href={post.href}
      className="group flex items-start gap-3.5 rounded-2xl p-3 transition-colors duration-200 hover:bg-violet-50/60 no-underline"
    >
      <div className="relative h-14 w-[72px] shrink-0 overflow-hidden rounded-xl">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="text-lg  leading-snug text-gray-800 transition-colors duration-200 group-hover:text-[#625FD0] line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>{post.date}</span>
          {post.readTime && <span>· {post.readTime}</span>}
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ post }) {
  return (
    <Link
      href={post.href}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-violet-200 no-underline"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {post.tag && (
          <div className="absolute top-3 left-3">
            <Tag label={post.tag} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[15px] text-gray-400">{post.date}</span>
        <h5 className="text-lg  leading-snug text-gray-900 transition-colors duration-200 group-hover:text-[#625FD0] line-clamp-2">
          {post.title}
        </h5>
        <p className="text-md text-gray-500 leading-relaxed line-clamp-3">
          {post.desc}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-md text-[#625FD0]">
            {post.author}
          </span>
          <ArrowUpRight
            size={14}
            className="text-[#625FD0] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.desc.toLowerCase().includes(query.toLowerCase())
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="min-h-screen bg-[#F5F4FF] py-16">
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#6d28d9 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] ">

        {/* Header */} 
        <div className="mb-12 mt-5">
        
          <h1 className="text-4xl lg:text-5xl  tracking-tight text-gray-950">
            Blog
          </h1>
          <p className="mt-3 text-md text-gray-500 max-w-xl">
            Insights on enterprise AI, agentic systems, and the future of
            intelligent operations.
          </p>
        </div>

        {/* Featured + Latest */}
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.18em] text-[#625FD0]">
              Featured
            </p>
            <FeaturedCard post={FEATURED} />
          </div>

          <aside className="lg:col-span-2">
            <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.18em] text-[#625FD0]">
              Latest
            </p>
            <div className="flex flex-col divide-y divide-gray-100 rounded-3xl bg-white px-3 py-2 shadow-sm ring-1 ring-gray-200/80 h-full">
              {LATEST.map((post, i) => (
                <LatestCard key={i} post={post} />
              ))}
            </div>
          </aside>
        </div>

        <div>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-2xl  text-gray-950">
              All Articles
            </h4>
            <div className="relative w-full max-w-xs">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={14}
              />
              <input
                type="text"
                placeholder="Search articles…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(6);
                }}
                className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-700 shadow-sm outline-none transition-all focus:border-[#625FD0] focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post, i) => (
                <ArticleCard key={i} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-base">
                No articles match your search.
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-4 text-sm text-violet-500 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-violet-700 hover:shadow-lg active:scale-95"
              >
                Show more
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}