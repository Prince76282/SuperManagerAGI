import { WHITEPAPERS } from "@/lib/Dataset/whitepapersData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Share2,
  Download,
  ChevronRight,
  Tag,
  FileText,
  ArrowRight,
} from "lucide-react";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return WHITEPAPERS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const paper = WHITEPAPERS.find((p) => p.id === id);
  if (!paper) return { title: "Whitepaper" };
  return {
    title: paper.title,
    description: paper.intro,
  };
}

export default async function WhitepaperPage({ params }: PageProps) {
  const { id } = await params;
  const paper = WHITEPAPERS.find((item) => item.id === id);
  if (!paper) return notFound();

  const Icon = paper.icon;

  // Related papers (same tag or just others, up to 3)
  const related = WHITEPAPERS.filter(
    (p) => p.id !== paper.id && p.tag === paper.tag
  ).slice(0, 3);
  const fallbackRelated = WHITEPAPERS.filter((p) => p.id !== paper.id).slice(0, 3);
  const relatedPapers = related.length > 0 ? related : fallbackRelated;

  return (
    <div className="bg-white text-black min-h-screen pt-10 font-sans">

      

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-25"
          
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#625FD0]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-20">
         

          <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
            {/* Left: title + meta */}
            <div>
              {/* Icon + tag */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#625FD0] flex items-center justify-center shadow-lg shadow-[#625FD0]/20">
                  <Icon size={26} className="text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1.5 text-md font-semibold text-[#625FD0] bg-[#625FD0]/8 border border-[#625FD0]/20 px-3 py-1 rounded-full">
                    <Tag size={10} /> {paper.tag}
                  </span>
                  <span className="text-md text-gray-400 font-medium">Research Paper</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl leading-[1.1] tracking-tight text-black mb-6">
                {paper.title}
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                {paper.intro}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 mt-8 pt-8 border-t border-gray-100 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#625FD0]" />
                  {Math.ceil(
                    paper.sections.reduce(
                      (acc, s) => acc + s.content.join(" ").split(" ").length,
                      0
                    ) / 200
                  )} min read
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText size={14} className="text-[#625FD0]" />
                  {paper.sections.length} sections
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} className="text-[#625FD0]" />
                  SuperManager AGI Research
                </span>
              </div>
            </div>

            {/* Right: Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sticky top-20">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Table of Contents
              </h3>
              <ol className="space-y-2">
                {paper.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="flex items-start gap-3 text-md text-gray-700 hover:text-[#625FD0] transition group"
                    >
                      <span className="text-[#625FD0] font-semibold text-xs mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="group-hover:underline underline-offset-2 leading-snug">
                        {section.heading}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>

              
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="max-w-3xl space-y-20">
          {paper.sections.map((section, i) => (
            <div
              key={i}
              id={`section-${i}`}
              className="scroll-mt-24"
            >
              {/* Section header */}
              <div className="flex items-start gap-5 mb-8">
                <span className="text-3xl font-extrabold text-[#625FD0]/15 leading-none select-none shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 border-b border-gray-100 pb-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                    {section.heading}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="pl-14 space-y-5">
                {section.content.map((paragraph, j) => (
                  <p key={j} className="text-gray-700 text-[17px] leading-[1.8]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KEY TAKEAWAYS ────────────────────────────── */}
      <section className="bg-indigo-100 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-[#625FD0] text-sm font-semibold uppercase tracking-widest mb-4">
            <BookOpen size={14} /> Key Takeaways
          </div>
          <h2 className="text-3xl font-semibold text-[#625FD0] mb-10">What to Remember</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {paper.sections.slice(0, 3).map((section, i) => (
              <div key={i} className="bg-white/60 border border-white/20 rounded-2xl p-6">
                <span className="text-4xl font-extrabold text-[#625FD0] leading-none block mb-3 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-[#625FD0] text-base mb-2">{section.heading}</h3>
                <p className="text-[#625FD0] text-sm leading-relaxed line-clamp-3">
                  {section.content[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

    </div>
  );
}