"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredReport, reportsList } from "@/lib/Dataset/reportData";
import type { ReportContent } from "@/lib/Dataset/reportData";



function ReportCard({ report }: { report: ReportContent }) {
  return (
    <Link
      href={`/research-reports/${report.id}`}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-44 sm:h-48 md:h-52">
        <Image
          src={report.image}
          alt={report.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
    
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#625FD0] text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#625FD0]/20">
          {report.category}
        </span>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{report.publishedDate}</span>
          <span>·</span>
          <span>{report.readTime}</span>
        </div>

        <h3 className="font-semibold text-black text-base sm:text-lg leading-snug group-hover:text-[#625FD0] transition">
          {report.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-3 flex-1">
          {report.description}
        </p>

        <span className="inline-flex items-center gap-2 bg-[#625FD0] text-white px-5 py-2.5 rounded-lg text-sm font-medium w-fit group-hover:bg-[#4f4ca8] transition">
          Read Report
          
        </span>
      </div>
    </Link>
  );
}


export default function AIResearchReports() {
  const [search, setSearch] = useState("");

  const filteredReports = useMemo(
    () =>
      reportsList.filter((r) =>
        (r.title + r.description + r.category)
          .toLowerCase()
          .includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div className="bg-white min-h-screen py-16 sm:py-20">
      {/* ── Header ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#625FD0] mb-3">
          Research & Insights
        </p>
        <h1 className="text-3xl sm:text-3xl lg:text-5xl text-black leading-tight">
          SuperManager AGI{" "}
          <span className="text-[#625FD0]">Research Reports</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl text-sm sm:text-base">
          Deep research on AI operations, workflow automation, productivity, and
          autonomous AI teams  written for leaders building the next generation
          of companies.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16">
        {/* ── Featured Report ── */}
        <Link
          href={`/research-reports/${featuredReport.id}`}
          className="group block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">
            {/* Text side */}
            <div className="p-6 sm:p-10 flex flex-col gap-5 justify-center">
              <div className="flex items-center gap-3">
                {featuredReport.logo && (
                  <Image
                    src={featuredReport.logo}
                    alt="logo"
                    width={110}
                    height={36}
                    className="object-contain"
                  />
                )}
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#625FD0] bg-[#625FD0]/8 px-3 py-1 rounded-full border border-[#625FD0]/20">
                  {featuredReport.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-snug group-hover:text-[#625FD0] transition">
                {featuredReport.title}
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {featuredReport.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
                <span>{featuredReport.publishedDate}</span>
                <span>·</span>
                <span>{featuredReport.readTime}</span>
              </div>

              <span className="inline-flex items-center gap-2 bg-[#625FD0] text-white px-5 py-2.5 rounded-lg text-sm font-medium w-fit group-hover:bg-[#4f4ca8] transition">
                Read Full Report
                
              </span>
            </div>

            
            <div className="relative h-[220px] sm:h-[280px] lg:h-auto min-h-[300px]">
              <Image
                src={featuredReport.image}
                alt={featuredReport.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 grid grid-cols-2 gap-3">
                {featuredReport.stats.slice(0, 2).map((s, i) => (
                  <div key={i} className="text-white">
                    <div className="text-xl font-bold leading-none">{s.value}</div>
                    <div className="text-xs text-white/70 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>

        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl text-black font-semibold">
                All Reports
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                {filteredReports.length} report
                {filteredReports.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search reports..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#625FD0]/30 focus:border-[#625FD0] transition"
              />
            </div>
          </div>

          {filteredReports.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredReports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              No reports found for &ldquo;{search}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
