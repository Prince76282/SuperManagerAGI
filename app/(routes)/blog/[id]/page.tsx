import {
  getAllBlogIds,
  getBlogPostById,
  normalizeBlogImagePath,
  articles,
  latest,
} from "@/lib/Dataset/blogData";
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Tag as TagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Section } from "@/lib/Dataset/blogData";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPostById(id);
  if (!post) return {};
  const canonical = `https://www.supermanager.co/blog/${id}`;
  return {
    title: post.title,
    description: post.desc,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "article",
      url: canonical,
      images: [{ url: normalizeBlogImagePath(post.img), width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: [normalizeBlogImagePath(post.img)],
    },
  };
}

export async function generateStaticParams() {
  return getAllBlogIds().map((id) => ({ id }));
}

function SectionRenderer({ section, index }: { section: Section; index: number }) {
  return (
    <section id={section.heading.toLowerCase().replace(/\s+/g, "-")}>
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-[11px] font-semibold  tracking-[0.18em] text-[#625FD0]/35 uppercase shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="text-[19px] font-semibold  text-gray-900 leading-snug tracking-[-0.01em]">
          {section.heading}
        </h2>
      </div>

      <div className="pl-9">
        {section.content && (
          <p className="text-[15.5px] leading-[1.9] text-gray-600 mb-5">
            {section.content}
          </p>
        )}

        {section.table && (
          <div className="overflow-x-auto rounded-xl border border-gray-100 mt-4 mb-2">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  {section.table.headers.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-semibold text-[#625FD0] text-[11.5px] uppercase tracking-[0.08em] border-b border-[#ece9ff]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={`border-b border-gray-50 last:border-0 ${ri % 2 === 1 ? "bg-gray-50/50" : "bg-white"}`}
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-4 py-3 text-[14px] text-gray-600 leading-relaxed align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {section.list && (
          <ul className="flex flex-col gap-2.5 mt-2">
            {section.list.map((item, i) => (
              <li key={i} className="flex gap-3 text-[15.5px] leading-[1.8] text-gray-600">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#625FD0]/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {section.subsections && (
          <div className="mt-4 flex flex-col gap-3">
            {section.subsections.map((sub) => (
              <div
                key={sub.title}
                className="relative rounded-xl border border-[#ece9ff] bg-[#faf9ff] px-5 py-4 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#625FD0] rounded-l-xl" />
                <p className="pl-2 text-[12px] font-semibold  text-[#625FD0] uppercase tracking-[0.1em] mb-1.5">
                  {sub.title}
                </p>
                <p className="pl-2 text-[15px] leading-[1.8] text-gray-600">{sub.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);
  if (!post) notFound();

  const imageSrc = normalizeBlogImagePath(post.img);
  const tags = post.tag ?? [];

  const allPosts = [...articles, ...latest];
  const seen = new Set<string>();
  const uniquePosts = allPosts.filter((p) => {
    if (p.id === id || seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  const relatedPosts = uniquePosts
    .filter((p) => p.tag?.some((t) => tags.includes(t)))
    .slice(0, 3);

  const currentIndex = articles.findIndex((a) => a.id === id);
  const nextPost = currentIndex !== -1 ? articles[currentIndex + 1] ?? articles[0] : null;

  return (
    <article className="min-h-screen bg-[#F7F6FF]">

      

      <div className="mx-auto max-w-6xl px-5 mt-10 sm:px-8 py-10 sm:py-14">

        {/* ── Article header — title, meta, tags ── */}
        <header className="mb-8 max-w-3xl">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full bg-[#625FD0]/10 text-[#625FD0]"
                >
                  <TagIcon size={9} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-[30px] sm:text-[38px] lg:text-[46px] font-semibold  text-gray-950 leading-[1.1] tracking-[-0.025em] mb-5">
            {post.title}
          </h1>

          <p className="text-[17px] text-gray-600 leading-[1.7] mb-6 max-w-2xl">
            {post.desc}
          </p>

          <div className="flex flex-wrap items-center gap-5 pb-6 border-b border-gray-200">
            {post.author && (
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#625FD0] to-[#9b98f0] flex items-center justify-center shrink-0">
                  <User size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-800">{post.author}</p>
                  <p className="text-[11px] text-gray-400">Author</p>
                </div>
              </div>
            )}
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Calendar size={13} className="text-gray-400" />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={13} className="text-gray-400" />
              {post.readTime}
            </div>
          </div>
        </header>

        {/* ── Hero image — standalone, full width, NO overlay, NO card wrapper ── */}
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden bg-gray-100 mb-12">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_288px] gap-10 items-start">

          {/* ── Main ── */}
          <main className="min-w-0">

            {/* Pull quote */}
            <div className="flex gap-4 mb-10 pl-1">
              <div className="w-[3px] shrink-0 rounded-full bg-[#625FD0]" />
              <p className="text-[18px] sm:text-[20px] leading-[1.75] text-gray-800 font-medium">
                {post.intro}
              </p>
            </div>

            {/* Sections card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {post.sections.map((section, i) => (
                <div
                  key={section.heading}
                  className={`px-7 sm:px-9 py-8 ${i !== 0 ? "border-t border-gray-50" : ""}`}
                >
                  <SectionRenderer section={section} index={i} />
                </div>
              ))}
            </div>

            {/* Next article */}
            {nextPost && (
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-[11px] font-semibold  uppercase tracking-[0.18em] text-gray-400 shrink-0">
                    Continue reading
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <Link
                  href={`/blog/${nextPost.id}`}
                  className="group flex items-center gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-[#625FD0]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-24 w-36 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={normalizeBlogImagePath(nextPost.img)}
                      alt={nextPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    {nextPost.tag?.[0] && (
                      <span className="text-[10px] font-semibold  uppercase tracking-[0.1em] text-[#625FD0] bg-[#625FD0]/8 px-2.5 py-1 rounded-full mb-2 inline-block">
                        {nextPost.tag[0]}
                      </span>
                    )}
                    <p className="text-[15px] font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#625FD0] transition-colors mb-1.5">
                      {nextPost.title}
                    </p>
                    <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
                      <Clock size={11} />
                      {nextPost.readTime}
                    </div>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#625FD0] group-hover:border-[#625FD0] transition-all">
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            )}

            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[15px] font-semibold  text-gray-900 tracking-[-0.01em]">
                    Related articles
                  </h3>
                  <Link href="/blog" className="text-[13px] text-[#625FD0] font-medium hover:underline">
                    View all →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/blog/${rp.id}`}
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-[#625FD0]/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                        <Image
                          src={normalizeBlogImagePath(rp.img)}
                          alt={rp.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {rp.tag?.[0] && (
                          <span className="absolute top-3 left-3 text-[10px] font-semibold  uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-white/90 text-[#625FD0] shadow-sm">
                            {rp.tag[0]}
                          </span>
                        )}
                      </div>
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <p className="text-[13.5px] font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-[#625FD0] transition-colors">
                          {rp.title}
                        </p>
                        <p className="text-[12.5px] text-gray-600 line-clamp-2 leading-relaxed">
                          {rp.desc}
                        </p>
                        <div className="flex items-center gap-1.5 mt-auto pt-1 text-[11px] text-gray-400">
                          <Clock size={10} />
                          {rp.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* ── Sidebar ── */}
          <aside className="lg:sticky lg:top-20 flex flex-col gap-4">

            {/* Table of contents */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <p className="text-[10px] font-semibold  uppercase tracking-[0.2em] text-[#625FD0] mb-4">
                In this article
              </p>
              <nav className="flex flex-col">
                {post.sections.map((section, i) => (
                  <Link
                    key={section.heading}
                    href={`#${section.heading.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex items-start gap-3 py-2 border-b border-gray-50 last:border-0 px-1 rounded-lg hover:bg-[#f8f7ff] transition-colors"
                  >
                    <span className="text-[11px] font-semibold  text-[#625FD0]/30 shrink-0 pt-0.5 group-hover:text-[#625FD0] transition-colors w-5 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] text-gray-600 leading-snug group-hover:text-[#625FD0] transition-colors">
                      {section.heading}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Author */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <p className="text-[10px] font-semibold  uppercase tracking-[0.2em] text-[#625FD0] mb-4">
                Written by
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#625FD0] to-[#9b98f0] flex items-center justify-center shrink-0">
                  <User size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-gray-900">{post.author}</p>
                  <p className="text-[11.5px] text-gray-400 mt-0.5">Supermanager AGI</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="text-[11px] text-gray-400 mb-0.5">Published</p>
                  <p className="text-[12px] font-semibold text-gray-700">{post.date}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 mb-0.5">Read time</p>
                  <p className="text-[12px] font-semibold text-gray-700">{post.readTime}</p>
                </div>
              </div>
            </div>

            {/* Topics */}
            {tags.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-[10px] font-semibold  uppercase tracking-[0.2em] text-[#625FD0] mb-3">
                  Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-[#f5f4ff] text-[#625FD0] border border-[#625FD0]/12"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* You might like */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-[10px] font-semibold  uppercase tracking-[0.2em] text-[#625FD0] mb-4">
                  You might like
                </p>
                <div className="flex flex-col divide-y divide-gray-50">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/blog/${rp.id}`}
                      className="group flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <div className="relative h-12 w-12 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                        <Image
                          src={normalizeBlogImagePath(rp.img)}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12.5px] font-semibold text-gray-800 line-clamp-2 leading-snug group-hover:text-[#625FD0] transition-colors">
                          {rp.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                          <Clock size={9} />
                          {rp.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Browse CTA */}
            <Link
              href="/blog"
              className="group flex items-center justify-between bg-[#625FD0] rounded-2xl px-5 py-4 hover:bg-[#514ec5] transition-colors shadow-sm"
            >
              <div>
                <p className="text-[13px] font-semibold  text-white">Browse all articles</p>
                <p className="text-[11px] text-white/60 mt-0.5">Supermanager AGI blog</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors shrink-0">
                <ArrowRight size={13} className="text-white" />
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}