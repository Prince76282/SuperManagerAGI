"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

type Report = {
  title: string;
  description: string;
  href: string;
  image: string;
};

const featuredReport = {
  logo: "/Image/logo1.png",
  title:
    "The State of AI-Driven Operations: How AGI Teams Are Transforming Businesses",
  description:
    "This report explores how companies use SuperManager AGI to orchestrate AI teams across operations, customer support, analytics, and growth.",
  href: "/learnmore",
  image: "/Image/State-Operations.png",
};

const reports: Report[] = [
  {
    title: "AI for Ecommerce Operations",
    description:
      "Automate order management, COD verification, NDR resolution, and support using SuperManager AGI.",
    href: "/learnmore",
    image: "/Image/report.avif",
  },
  {
    title: "Building Autonomous AI Teams",
    description:
      "Learn how companies build autonomous AI teams across operations and analytics.",
    href: "/learnmore",
    image: "/Image/building-automation.jpg",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Explore how workflow automation powered by AI is transforming modern companies.",
    href: "/learnmore",
    image: "/Image/workflow-automation.jpg",
  },
  {
    title: "Scaling Startups with AGI",
    description:
      "Startups are scaling faster using AGI-driven automation to handle operations and growth.",
    href: "/learnmore",
    image: "/Image/scaling.jpg",
  },
  {
    title: "AI Productivity Report",
    description:
      "How organizations achieve 2× productivity using AI-powered workforce automation.",
    href: "/learnmore",
    image: "/Image/ai-productivity.jpg",
  },
];

function ReportCard({ report }: { report: Report }) {
  return (
    <Link
      href={report.href}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-44 sm:h-48 md:h-52">
        <Image
          src={report.image}
          alt={report.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-semibold text-black text-base sm:text-lg group-hover:text-[#625FD0] transition">
          {report.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {report.description}
        </p>

        <span className="mt-auto inline-flex items-center justify-center bg-[#625FD0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
          Read Report
        </span>
      </div>
    </Link>
  );
}

export default function AIResearchReports() {
  const [search, setSearch] = useState("");

  const filteredReports = useMemo(() => {
    return reports.filter((r) =>
      (r.title + r.description).toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="bg-white min-h-screen py-16 sm:py-20">
      {/* HEADER */}

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl text-black">
          SuperManager AGI{" "}
          <span className="text-[#625FD0]">Research Reports</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl text-sm sm:text-base">
          Explore deep research on AI operations, workflow automation,
          productivity and autonomous AI teams.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16">
        {/* FEATURED REPORT */}

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10">
            <div className="space-y-5">
              <Image
                src={featuredReport.logo}
                alt="logo"
                width={120}
                height={40}
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black">
                {featuredReport.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {featuredReport.description}
              </p>
              text-3xl
              <Link
                href={featuredReport.href}
                className="inline-flex items-center justify-center bg-[#625FD0] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition w-fit"
              >
                Read Full Report
              </Link>
            </div>

            <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] rounded-xl overflow-hidden">
              <Image
                src={featuredReport.image}
                alt={featuredReport.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ALL REPORTS */}

        <div>
          <div className="flex flex-col md:flex-row md:items-center mt-10 justify-between gap-4 mb-10">
            <h2 className="text-xl sm:text-2xl text-black">All Reports</h2>

            <input
              type="text"
              placeholder="Search reports..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />
          </div>

          {filteredReports.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredReports.map((report, index) => (
                <ReportCard key={index} report={report} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              No reports found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
