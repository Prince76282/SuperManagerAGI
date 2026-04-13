import {
  getAllBlogIds,
  getBlogPostById,
  normalizeBlogImagePath,
} from "@/lib/Dataset/blogData";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Section } from "@/lib/Dataset/blogData";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllBlogIds().map((id) => ({ id }));
}

function SectionRenderer({ section }: { section: Section }) {
  return (
    <section id={section.heading.toLowerCase().replace(/\s+/g, "-")}>
      <h2 className="font-playfair text-[22px] font-semibold text-gray-900 border-b border-gray-100 pb-3 mb-5">
        {section.heading}
      </h2>

      {section.content && (
        <p className="text-[15px] leading-[1.85] text-gray-600 mb-4">
          {section.content}
        </p>
      )}

      {section.table && (
        <div className="overflow-x-auto rounded-xl border border-gray-100 mt-3">
          <table className="w-full text-[15px] border-collapse">
            <thead>
              <tr>
                {section.table.headers.map((h) => (
                  <th
                    key={h}
                    className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-600 border-b border-gray-100"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? "bg-gray-50/50" : ""}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-gray-600 leading-relaxed align-top border-b border-gray-50 last:[&]:border-0"
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
        <ul className="mt-3 flex flex-col gap-3">
          {section.list.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15px] leading-[1.75] text-gray-600"
            >
              <span className="mt-1.75 w-1.5 h-1.5 rounded-full bg-[#625FD0] shrink-0" />
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
              className="bg-[#f8f7ff] border-l-[3px] border-[#AFA9EC] rounded-xl px-5 py-4"
            >
              <p className="text-[15px] font-medium text-[#625FD0] mb-2 tracking-[0.01em]">
                {sub.title}
              </p>
              <p className="text-[15px] leading-[1.8] text-gray-600">
                {sub.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) notFound();

  const imageSrc = normalizeBlogImagePath(post.img);
  const tags = post.tag ?? [];

  return (
    <article className="bg-[#EEF2FF] py-20 sm:py-20 min-h-screen">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#625FD0] hover:opacity-75 transition-opacity mb-7"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-start">
          {/* ── Main card ── */}
          <main className="bg-white rounded-[28px] overflow-hidden shadow-sm">
            {/* Hero image */}
            <div className="relative h-85 sm:h-100 bg-[#1a1a2e]">
              <Image
                src={imageSrc}
                alt={post.title}
                fill
                priority
                className="object-cover opacity-70"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,8,40,0.85)] via-[rgba(10,8,40,0.2)] to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10">
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="font-playfair text-[28px] sm:text-[36px] font-semibold text-white leading-[1.2] max-w-2xl">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 mt-3 text-[12px] text-white/55 tracking-[0.02em]">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/35" />
                  <span>{post.readTime}</span>
                  {post.author && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-white/35" />
                      <span className="text-white/75 font-medium">
                        {post.author}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 sm:px-10 py-10 sm:py-12">
              {/* Intro pull-quote */}
              <p className="font-playfair text-[19px] leading-[1.75] text-[#1a1a2e] border-l-[3px] border-[#625FD0] pl-5 mb-8">
                {post.intro}
              </p>

              {/* Desc */}
              <p className="text-[16px] leading-[1.8] text-gray-600 mb-10">
                {post.desc}
              </p>

              {/* Sections */}
              <div className="flex flex-col gap-10">
                {post.sections.map((section) => (
                  <SectionRenderer key={section.heading} section={section} />
                ))}
              </div>
            </div>
          </main>

          {/* ── Sidebar ── */}
          <aside className="lg:sticky lg:top-6 flex flex-col gap-4">
            {/* Table of contents */}
            <div className="bg-white rounded-[20px] p-5 border border-gray-100">
              <p className="text-[15px] font-semibold tracking-[0.08em] uppercase text-[#625FD0] mb-4">
                In this article
              </p>
              <nav className="flex flex-col">
                {post.sections.map((section, i) => (
                  <Link
                    key={section.heading}
                    href={`#${section.heading.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-start gap-2.5 py-2 border-b border-gray-50 last:border-0 group"
                  >
                    <span className="text-[15px] group-hover:text-[#625FD0] text-gray-700 font-medium pt-px min-w-4.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-gray-600 leading-snug group-hover:text-[#625FD0] transition-colors">
                      {section.heading}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Meta */}
            <div className="bg-white rounded-[20px] p-5 border border-gray-100">
              <div className="flex flex-col gap-px divide-y divide-gray-50">
                <div className="py-2 first:pt-0">
                  <p className="text-[15px] font-semibold uppercase tracking-[0.04em] text-[#625FD0] mb-1">
                    Author
                  </p>
                  <p className="text-[15px] text-gray-700">{post.author}</p>
                  {post.publishedUnder && (
                    <p className="text-[14px] text-[#625FD0] mt-0.5">
                      {post.publishedUnder}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Series badge */}
            <div className="bg-[#EEF2FF] rounded-[14px] px-4 py-3.5">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[#625FD0] hover:opacity-75 transition-opacity"
              >
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  Supermanager AGI · April 2026
                </p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
