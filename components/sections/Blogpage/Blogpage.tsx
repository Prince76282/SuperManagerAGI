"use client";

import { useState } from "react";
import { Search, Plus, ArrowRight } from "lucide-react";

export const FEATURED = {
  href: "/blog/introducing-supermanager-agi-enterprise-ai-orchestration",
  img: "/images/blog/supermanager-agi-launch.jpg",
  title: "Introducing SuperManagerAGI: The Enterprise AI Orchestration Layer",
  desc: "SuperManagerAGI enables enterprises to deploy, govern, and scale AI agents securely. From workflow automation to decision intelligence, organizations can finally move from AI pilots to production systems.",
  date: "Feb 20, 2026",
};

export const LATEST = [
  {
    href: "/blog/agentic-ai-enterprise-architecture",
    img: "/images/blog/agentic-architecture.jpg",
    title: "Designing Agentic AI Architecture for the Enterprise",
    date: "Feb 20, 2026",
  },
  {
    href: "/blog/ai-governance-enterprise-playbook",
    img: "/images/blog/ai-governance.jpg",
    title: "Enterprise AI Governance: A Practical Playbook",
    date: "Feb 18, 2026",
  },
  {
    href: "/blog/workflow-automation-with-ai-agents",
    img: "/images/blog/workflow-automation.jpg",
    title: "Workflow Automation with AI Agents: Beyond RPA",
    date: "Feb 15, 2026",
  },
  {
    href: "/blog/decision-intelligence-with-supermanager-agi",
    img: "/images/blog/decision-intelligence.jpg",
    title: "Decision Intelligence with SuperManagerAGI",
    date: "Feb 12, 2026",
  },
];

/* ---------------- ALL ARTICLES ---------------- */

export const ARTICLES = [
  {
    href: "/blog/supermanager-agi-in-finance",
    img: "/images/blog/finance-ai.jpg",
    title: "SuperManagerAGI in Finance: Autonomous Operations at Scale",
    desc: "Learn how SuperManagerAGI transforms finance teams with AI agents for reconciliation, forecasting, fraud detection, and compliance automation.",
    date: "Feb 16, 2026",
    author: "SuperManagerAGI Team",
  },
  {
    href: "/blog/perform-vs-transform-with-agentic-ai",
    img: "/images/blog/perform-vs-transform.jpg",
    title: "Perform vs Transform: Unlocking Real AI Business Value",
    desc: "Why incremental automation isn’t enough. Discover how agentic AI transforms enterprise workflows, culture, and competitive advantage.",
    date: "Feb 10, 2026",
    author: "SuperManagerAGI Insights",
  },
  {
    href: "/blog/enterprise-ai-orchestration",
    img: "/images/blog/orchestration.jpg",
    title: "Enterprise AI Orchestration: From Tools to Systems",
    desc: "Disconnected AI tools create chaos. Learn how orchestration unifies agents, data, and workflows into an intelligent enterprise system.",
    date: "Feb 5, 2026",
    author: "SuperManagerAGI Team",
  },
  {
    href: "/blog/ai-agents-workplace-productivity",
    img: "/images/blog/workplace-ai.jpg",
    title: "AI Agents & the Future of Enterprise Productivity",
    desc: "Explore how SuperManagerAGI enables AI agents to handle repetitive tasks, assist teams, and drive measurable ROI across departments.",
    date: "Jan 30, 2026",
    author: "Product Strategy Team",
  },
  {
    href: "/blog/scaling-ai-pilots-to-production",
    img: "/images/blog/ai-production.jpg",
    title: "Scaling AI from Pilot to Production",
    desc: "Most AI projects stall at the pilot stage. Here’s how SuperManagerAGI enables secure deployment, monitoring, and governance at scale.",
    date: "Jan 23, 2026",
    author: "SuperManagerAGI Engineering",
  },
  {
    href: "/blog/the-rise-of-agentic-enterprises",
    img: "/images/blog/agentic-enterprise.jpg",
    title: "The Rise of the Agentic Enterprise",
    desc: "Agentic enterprises leverage AI agents for continuous decision-making and automation. Learn what it takes to become one.",
    date: "Jan 16, 2026",
    author: "SuperManagerAGI Research",
  },
];
// ── Sub-components ─────────────────────────────────────────────────────────────

function NavPill({ label, href, active }) {
  return (
    <a
      href={href}
      className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
        active
          ? "border-indigo-600 bg-indigo-600 text-white"
          : "border-gray-200 bg-white text-gray-600 hover:border-indigo-400 hover:text-indigo-600"
      }`}
    >
      {label}
    </a>
  );
}

function FeaturedCard({ post }) {
  return (
    <a
      href={post.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h2 className="text-xl font-bold leading-snug text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
          {post.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">{post.desc}</p>
        <span className="mt-auto text-xs text-gray-400">{post.date}</span>
      </div>
    </a>
  );
}

function LatestCard({ post }) {
  return (
    <a
      href={post.href}
      className="group flex items-start gap-4 rounded-xl p-3 transition-colors duration-200 hover:bg-gray-50"
    >
      <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold leading-snug text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <span className="text-xs text-gray-400">{post.date}</span>
      </div>
    </a>
  );
}

function ArticleCard({ post }) {
  return (
    <a
      href={post.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs text-gray-400">{post.date}</span>
        <h5 className="text-base font-bold leading-snug text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h5>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {post.desc}
        </p>
        <span className="mt-auto text-xs font-medium text-indigo-500">
          {post.author}
        </span>
      </div>
    </a>
  );
}



export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.desc.toLowerCase().includes(query.toLowerCase()),
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="min-h-screen bg-[#F0F6F9] py-16">
      <div className="mx-auto max-w-[1200px] px-8 sm:px-10 lg:px-16">
        <h1 className="mb-8 text-3xl lg:text-5xl tracking-tight text-gray-900">
          Blog
        </h1>

        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h4 className="mb-3 text-md  uppercase tracking-widest text-[#625FD0]">
              Featured
            </h4>
            <FeaturedCard post={FEATURED} />
          </div>

      
          <aside className="lg:col-span-2">
            <h4 className="mb-3 text-md uppercase tracking-widest text-[#625FD0]">
              Latest
            </h4>
            <div className="flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white px-4 py-2 shadow-sm">
              {LATEST.map((post) => (
                <LatestCard key={post.href} post={post} />
              ))}
            </div>
          </aside>
        </div>

      
        <div>
      
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-2xl font-bold text-gray-900">All Articles</h4>

            
            <div className="relative w-full max-w-sm">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search blogs…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(6);
                }}
                className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-700 shadow-sm outline-none transition-shadow focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          {/* Grid */}
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <ArticleCard key={post.href} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-gray-400">
              No articles match your search.
            </p>
          )}

     
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="flex items-center gap-2 rounded-full border border-[#625FD0] px-6 py-2.5 text-sm font-semibold text-[#625FD0] transition-colors duration-200 hover:bg-[#625FD0] hover:text-white"
              >
                Show more
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
