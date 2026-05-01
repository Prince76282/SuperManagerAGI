"use client";

import { useState } from "react";
import { Plus, ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  featured,
  latest,
  articles,
  normalizeBlogImagePath,
  type Featured,
  type Latest,
  type Articles,
} from "@/lib/Dataset/blogData";

function Tag({ label }: { label?: string }) {
  if (!label) return null;

  return (
    <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700">
      {label}
    </span>
  );
}

function FeaturedCard({ featured }: { featured: Featured }) {
  const imageSrc = normalizeBlogImagePath(featured.img);

  return (
    <Link
      href={`/blog/${featured.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden xs:h-56 sm:h-64 md:h-72 lg:h-64">
        <Image
          src={imageSrc}
          alt={featured.title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        <div className="absolute left-4 top-4">
          <Tag label={featured.tag?.[0]} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5 lg:p-6">
        <h2 className="text-base leading-snug text-gray-900 transition group-hover:text-[#625FD0] sm:text-lg lg:text-xl">
          {featured.title}
        </h2>

        <p className="text-sm text-gray-500">{featured.desc}</p>

        <p className="text-sm text-gray-700">{featured.intro}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 sm:gap-3">
            <span>{featured.date}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {featured.readTime}
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-1 text-xs text-[#625FD0] opacity-0 transition group-hover:opacity-100">
            Read <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function LatestCard({ post }: { post: Latest }) {
  const imageSrc = normalizeBlogImagePath(post.img);

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group flex min-h-15 flex-row items-start gap-3 rounded-lg p-3 transition hover:bg-violet-50 lg:flex-row"
    >
      <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-20">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          sizes="80px"
          className="h-full w-full object-cover transition"
        />
      </div>

      <div className="min-w-0 flex-col gap-1">
        <span className="line-clamp-2 text-sm leading-snug text-gray-800 group-hover:text-[#625FD0]">
          {post.title}
        </span>

        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <span>{post.date}</span>
          <span>&middot; {post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ post }: { post: Articles }) {
  const imageSrc = normalizeBlogImagePath(post.img);

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-40 w-full overflow-hidden sm:h-44 lg:h-48">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        <div className="absolute left-3 top-3">
          <Tag label={post.tag?.[0]} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <span className="text-xs text-gray-400">{post.date}</span>

        <span className="line-clamp-2 text-sm leading-snug text-gray-900 group-hover:text-[#625FD0] sm:text-base lg:text-lg">
          {post.title}
        </span>

        <p className="line-clamp-2 text-sm text-gray-500 sm:line-clamp-3">
          {post.desc}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="mr-2 truncate text-sm text-[#625FD0]">
            {post.author}
          </span>

          <ArrowUpRight
            size={14}
            className="shrink-0 text-[#625FD0] opacity-0 transition group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [visibleLatestCount, setVisibleLatestCount] = useState(4);

  const visible = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const visibleLatest = latest.slice(0, visibleLatestCount);
  const hasMoreLatest = visibleLatestCount < latest.length;

  return (
    <section className="min-h-screen bg-[#F5F4FF] py-24 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl leading-tight text-gray-950 sm:text-3xl lg:text-5xl">
            Vibe Working Platform Blog
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500 sm:mt-3 sm:text-base">
            Insights on autonomous AI agents, the Vibe Working Platform,
            enterprise AI architecture and the operational transformation
            happening across D2C, consulting, engineering and enterprise
            organisations right now.
          </p>
        </div>

        {/* ✅ FIX 1: Added `lg:items-start` to prevent grid row height recalculation */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-14 sm:gap-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#625FD0] sm:text-sm">
              Featured Article
            </p>
            <FeaturedCard featured={featured} />
          </div>

          {/* ✅ FIX 2: Added `lg:self-start` so aside doesn't stretch with featured card */}
          <aside className="sm:mt-10 lg:mt-0.5 lg:col-span-2 lg:self-start">
            <p className="mb-3 mt-10 lg:mt-0.5 text-sm font-semibold uppercase tracking-widest text-[#625FD0] sm:text-sm">
              Latest Articles
            </p>

            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
              {visibleLatest.map((post) => (
                <LatestCard key={post.id} post={post} />
              ))}

              {hasMoreLatest && (
                <div className="flex justify-center px-3 py-3 border-t border-gray-100">
                  {/* ✅ FIX 3: stopPropagation prevents event from bubbling to parent layout */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setVisibleLatestCount((c) => c + 5);
                    }}
                    className="flex items-center gap-2 rounded-full bg-[#625FD0] px-5 py-2 text-xs text-white transition hover:bg-[#6e6af7] active:scale-95"
                  >
                    Show more <Plus size={12} />
                  </button>
                </div>
              )}
            </div>
          </aside>
        </div>

        <div>
          <div className="mb-5 flex items-center justify-between sm:mb-8">
            <h4 className="text-lg text-gray-950 sm:text-xl lg:text-2xl">
              All Articles
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {visible.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center sm:mt-12">
              <button
                onClick={() => setVisibleCount((count) => count + 6)}
                className="flex items-center gap-2 rounded-full bg-[#625FD0] px-6 py-3 text-sm text-white transition hover:bg-[#625FD0] active:scale-95 sm:px-7"
              >
                Show more <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}