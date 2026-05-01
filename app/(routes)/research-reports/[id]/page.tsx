import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Share2,
  Linkedin,
  Twitter,
  Link as LinkIcon,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Quote,
  CheckCircle,
  ArrowRight,
  CalendarDays,
  BarChart3,
} from "lucide-react";

import {
  featuredReport,
  getAllReportIds,
  getReportById,
  reportsList,
} from "@/lib/Dataset/reportData";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const report = getReportById(id);
  if (!report) return {};
  const canonical = `https://www.supermanager.co/research-reports/${id}`;
  return {
    title: report.title,
    description: report.description,
    alternates: { canonical },
    openGraph: {
      title: report.title,
      description: report.description,
      type: 'article',
      url: canonical,
      images: [{ url: report.image, width: 1200, height: 630, alt: report.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: report.title,
      description: report.description,
      images: [report.image],
    },
  };
}

// ─── 404 ──────────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#625FD0] border border-[#625FD0]/30 bg-[#625FD0]/5 rounded-full px-4 py-1.5">
          404
        </span>
        <h1 className="text-black text-4xl  mt-4">Report not found</h1>
        <p className="text-gray-600">This report does not exist or may have moved.</p>
        <Link
          href="/research-reports"
          className="inline-flex items-center gap-2 mt-4 border border-gray-200 text-gray-700 hover:text-[#625FD0] hover:border-[#625FD0] px-5 py-2.5 rounded-xl text-sm transition"
        >
          <ArrowLeft size={14} /> Back to Reports
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllReportIds().map((id) => ({ id }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ReportDetailPage({ params }: Props) {
  const { id } = await params;
  const report = getReportById(id);
  if (!report) return <NotFound />;

  const allReports = [featuredReport, ...reportsList];
  const related = allReports.filter((item) => item.id !== report.id).slice(0, 3);

  return (
    <div className="bg-white text-black min-h-screen font-sans">

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#625FD0]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
            <Link href="/research-reports" className="hover:text-[#625FD0] transition">
              Reports
            </Link>
            <ChevronRight size={13} />
            <span className="text-[#625FD0] font-medium">{report.category}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-[#625FD0] bg-[#625FD0]/8 border border-[#625FD0]/20 px-3 py-1 rounded-full">
                <BookOpen size={11} /> {report.category}
              </span>

              <h1 className="text-3xl sm:text-5xl  mt-5 mb-4 leading-[1.1] tracking-tight text-black">
                {report.title}
              </h1>

              <p className="text-[#625FD0] font-medium  mb-4 text-lg">
                {report.tagline}
              </p>

              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {report.description}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#625FD0]" />
                  {report.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} className="text-[#625FD0]" />
                  {report.publishedDate}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/get-in-touch"
                  className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#514DC0] text-white px-6 py-3 rounded-xl font-semibold text-sm transition"
                >
                  Book a Demo <ArrowRight size={15} />
                </Link>
                <Link
                  href="/research-reports"
                  className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#625FD0] text-black hover:text-[#625FD0] px-6 py-3 rounded-xl font-semibold text-sm transition"
                >
                  <ArrowLeft size={15} /> All Reports
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src={report.image}
                alt={report.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────── */}
      <section className="bg-indigo-100">
        <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-[#625FD0] text-center">
          {report.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <BarChart3 size={18} className="text-[#625FD0] mb-1" />
              <p className="text-3xl ">{stat.value}</p>
              <p className="text-sm text-[#625FD0]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 grid lg:grid-cols-[1fr_300px] gap-14">

        {/* Article */}
        <article>
          {/* Intro pull quote */}
          <div className="border-l-4 border-[#625FD0] pl-5 mb-12 bg-[#625FD0]/3 rounded-r-xl py-4 pr-4">
            <p className="text-gray-700 italic text-lg leading-relaxed">{report.intro}</p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {report.sections.map((section, i) => (
              <div key={i} className="group">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-sm  text-[#625FD0] bg-[#625FD0]/10 border border-[#625FD0]/20 rounded-full px-2.5 py-1 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xl  text-black leading-snug">{section.heading}</p>
                </div>
                <p className="text-gray-700 leading-relaxed pl-10">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-14 bg-[#625FD0]/5 border border-[#625FD0]/20 p-7 rounded-2xl relative">
            <Quote size={28} className="text-[#625FD0]/30 absolute top-5 right-5" />
            <p className="text-xl font-semibold text-black leading-relaxed mb-5">
              {report.quote.quote}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-0.5 bg-[#625FD0] rounded" />
              <p className="text-sm text-gray-500 font-medium">{report.quote.author}</p>
            </div>
          </blockquote>
        </article>

        {/* Sidebar */}
        <aside className="space-y-5">

          {/* Key Takeaways */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#625FD0]/40 transition-all sticky top-24">
            <h3 className=" text-black text-xl mb-5 flex items-center gap-2">
              <CheckCircle size={16} className="text-[#625FD0]" /> Key Takeaways
            </h3>
            <ul className="space-y-3">
              {report.keyTakeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#625FD0] mt-1.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>

          </div>
        </aside>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="bg-indigo-100 py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#625FD0] border border-[#625FD0]/30 bg-[#625FD0]/10 rounded-full px-4 py-1.5 mb-6">
            <ArrowRight size={11} /> Next Step
          </div>
          <h2 className="text-3xl md:text-4xl  text-[#625FD0] mb-4 leading-tight">
            {report.ctaHeading}
          </h2>
          <p className="text-[#625FD0] mb-8 text-lg leading-relaxed">{report.ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#625FD0]/80 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition"
            >
              Book a Demo <ArrowRight size={15} />
            </Link>
            <Link
              href="/research-reports"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-[#625FD0] text-[#625FD0] px-7 py-3.5 rounded-xl font-semibold text-sm transition"
            >
              Browse Reports
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="inline-flex mb-4 items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-[#625FD0] bg-[#625FD0]/8 border border-[#625FD0]/20 px-3 py-1 rounded-full">
          <BookOpen size={14} /> Related Research
        </div>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl  text-black">Related Reports</h2>
          <Link
            href="/research-reports"
            className="text-sm font-semibold text-[#625FD0] hover:underline flex items-center gap-1"
          >
            View all <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/research-reports/${item.id}`}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-[#625FD0] hover:shadow-lg transition-all bg-white"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-md text-gray-400 mb-2 flex items-center gap-1.5">
                  <CalendarDays size={11} /> {item.publishedDate}
                </p>
                <h3 className=" text-md text-gray-700 group-hover:text-[#625FD0] transition leading-snug mb-3">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-md font-semibold text-[#625FD0]">
                  Read report <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}