"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Play, Video, Calendar } from "lucide-react";

const webinars = [
  {
    id: 1,
    title:
      "AI Activations - Testing Where It Matters: Building AI That Holds Up in the Wild",
    type: "Webinar",
    date: "February 19, 2026",
    image: "/webinars/webinar1.webp",
    href: "/learnmore",
  },
  {
    id: 2,
    title: "How Retailers Are Turning Keywords to Conversations",
    type: "Webinar",
    date: "January 27, 2026",
    image: "/webinars/webinar2.webp",
    href: "/learnmore",
  },
  {
    id: 3,
    title: "From search to action: what makes agentic AI work in practice",
    type: "Webinar",
    date: "January 20, 2026",
    image: "/webinars/webinar3.webp",
    href: "/learnmore",
  },
  {
    id: 4,
    title:
      "Agentic Platforms in 2025: Analyst Insights on the Future of Enterprise AI",
    type: "Webinar",
    date: "December 5, 2025",
    image: "/webinars/webinar4.webp",
    href: "/learnmore",
  },
];

function WebinarCard({ title, type, date, image, href }) {
  return (
    <article className="group relative flex flex-col rounded-lg overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* clickable overlay */}
      <Link href={href} className="absolute inset-0 z-10" />

      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <span className="text-md font-medium text-gray-900 leading-snug line-clamp-3 group-hover:text-[#625FD0] transition">
          {title}
        </span>

        {/* meta */}
        <div className="flex items-center gap-3 flex-wrap mt-auto text-xs">
          <span className="inline-flex items-center gap-1 text-gray-600 font-medium">
            <Video className="w-4 h-4 text-[#625FD0]" />
            {type}
          </span>

          <span className="inline-flex items-center gap-1 text-zinc-500">
            <Calendar className="w-4 h-4 text-[#625FD0]" />
            {date}
          </span>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#625FD0] group-hover:text-[#625FD0] transition">
            <span className="w-6 h-6 rounded-full border border-indigo-200 bg-gray-100 flex items-center justify-center transition">
              <Play className="w-4 h-4  text-[#625FD0] ml-px group-hover:text-[#625FD0] group-hover:fill-white" />
            </span>
            Watch now
          </span>
        </div>
      </div>
    </article>
  );
}

export default function BrowseWebinars() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return webinars;
    const q = query.toLowerCase();
    return webinars.filter((w) => w.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="py-16 bg-zinc-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-5xl text-gray-900 tracking-tight">
              Browse previous <span className="text-[#625FD0]"> webinars </span>
            </h2>
          </div>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((webinar) => (
              <WebinarCard key={webinar.id} {...webinar} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="w-10 h-10 text-zinc-200 mb-4" />
            <p className="text-zinc-500 font-medium">No webinars found</p>
            <p className="text-sm text-zinc-400 mt-1">
              Try a different search term
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
