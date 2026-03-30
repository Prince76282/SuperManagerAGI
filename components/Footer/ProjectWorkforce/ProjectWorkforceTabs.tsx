"use client";

import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    label: "Project Execution Intelligence",
    heading: "Gain real-time visibility into project execution",
    body: "SuperManager AGI continuously analyzes project activities, milestones, and timelines to provide a clear view of execution across teams. Leaders can instantly identify progress, delays, and operational risks while maintaining full control over complex initiatives.",
    href: "/learnmore",
    imgSrc: "/Image/Gain-execution.jpg",
  },
  {
    label: "Workforce Performance Analytics",
    heading: "Understand how teams collaborate and perform",
    body: "Analyze productivity patterns, team capacity, and collaboration signals across your workforce. SuperManager AGI surfaces insights that help organizations balance workloads, improve efficiency, and ensure teams operate at peak performance.",
    href: "/learnmore",
    imgSrc: "/Image/Understand-Perform.png",
  },
  {
    label: "Operational Intelligence Platform",
    heading: "Transform operational data into actionable insights",
    body: "SuperManager AGI aggregates data across tools, projects, and communication channels to create a unified operational intelligence layer. Organizations gain deep insights that enable faster decisions and improved execution across departments.",
    href: "/learnmore",
    imgSrc: "/Image/Transform-insights.jpg",
  },
  {
    label: "AI Resource Optimization",
    heading: "Allocate resources intelligently across teams and projects",
    body: "AI-driven recommendations help organizations allocate talent, time, and resources more effectively. SuperManager AGI identifies capacity constraints and recommends optimal team structures for successful project delivery.",
    href: "/learnmore",
    imgSrc: "/Image/Allocate-Projects.jpg",
  },
  {
    label: "Performance Monitoring",
    heading: "Track operational performance across teams",
    body: "Monitor key operational metrics such as project velocity, team productivity, and execution efficiency. SuperManager AGI provides leadership with dashboards and insights that ensure continuous operational improvement.",
    href: "/learnmore",
    imgSrc: "/Image/Track-teams.jpg",
  },
  {
    label: "Enterprise Governance",
    heading: "Maintain visibility, accountability, and compliance",
    body: "SuperManager AGI ensures operational governance through structured oversight, reporting frameworks, and performance monitoring tools that give leaders full visibility into workforce operations and project outcomes.",
    href: "/learnmore",
    imgSrc: "/Image/Maintain-accountability.jpg",
  },
];

export default function ProjectWorkforceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <section className="bg-white mt-20 ">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-3xl font-bold text-black mb-4 leading-tight">
              AI-Powered Intelligence for
              <span className="text-[#625FD0]"> Projects & Workforce</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              SuperManager AGI provides organizations with deep visibility into
              project execution, workforce productivity, and operational
              performance. By transforming data into actionable intelligence,
              teams can make faster decisions, optimize resources, and deliver
              complex initiatives with greater confidence.
            </p>
          </div>

          <Link
            href="get-in-touch"
            className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-[#625FD0] text-white  hover:opacity-90 transition"
          >
            Request a Demo
          </Link>
        </div>

        {/* Layout */}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}

          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:w-72">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition whitespace-nowrap
                ${
                  activeIndex === i
                    ? "bg-[#625FD0]/10 text-[#625FD0]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Content */}

          <div className="flex-1 grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}

            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {active.heading}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {active.body}
              </p>

              {/* <Link
                href={active.href}
                className="inline-flex items-center justify-center mt-4 gap-2 px-6 py-3 rounded-lg bg-[#625FD0] text-white  hover:opacity-90 transition"
              >
                Learn more
              </Link> */}
            </div>

            {/* Image */}

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src={active.imgSrc}
                alt={active.heading}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
