import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "Adobe", src: "/image/newimage/Adobe.png", width: 120 },
  { name: "BrowserStack", src: "/image/newimage/Browser1.png", width: 200 },
  { name: "Zoho", src: "/image/newimage/Zoho.png", width: 120 },
  { name: "Microsoft", src: "/image/newimage/Microsoft.png", width: 200 },
  { name: "Sprinto", src: "/image/newimage/Sprinto.png", width: 120 },
  { name: "Perplexity", src: "/image/newimage/perplexity.png", width: 200 },
  { name: "Socket", src: "/image/newimage/Socket.png", width: 120 },
  { name: "Nvidia", src: "/image/newimage/image.png", width: 200 },
];

const features = [
  {
    title: "Decision Intelligence Engine",
    description:
      "Continuously Tracks High-Impact Business Events Including Scope Changes, Informal Requests, Defect vs Enhancement Classification, Delivery Risks, Resource Constraints, and Escalations. Captures Who Decided What, When, and Why Through a Structured Context Graph. Links Decisions to Scope, Timeline, Capacity, and Dependencies. Enables Feasibility Analysis, Effort Estimation Support, and Structured Impact Assessment Before Approvals.",
    image: "/image/newimage/image1.1.png",
    href: "/learnmore/",
  },
  {
    title: "Execution Reporting Automation",
    description:
      "Ingests Updates from Jira, Slack, Teams, Email, and Meeting Transcripts. Extracts Progress, Blockers, Risks, Decisions, and Next Steps. Normalizes Fragmented Inputs into Structured Daily Stand-Ups, Weekly Sprint Reports, and Executive-Ready Portfolio Summaries with RAG Indicators. Auto Distributes Reports to Relevant Stakeholders.",
    image: "/image/newimage/image1.2.png",
    href: "/learnmore/",
  },
  {
    title: "Structured Task & Action Automation",
    description:
      "Automatically Extracts Action Items from Meetings, Emails, and Collaboration Threads. Creates and Updates Tasks in Jira, Azure DevOps, and Other PM Tools. Assigns Owners Based on Context Patterns, Sets Due Dates, Links to Epics and Sprints, and Maintains Full Traceability Between Discussions and Execution Artifacts.",
    image: "/image/newimage/image1.5.png",
    href: "/learnmore/",
  },
  {
    title: "Intelligent Follow Up & Escalation Workflows",
    description:
      "Detects Overdue Tasks, Stalled Tickets, Pending Approvals, and Dependency Delays Across Tools. Triggers Context Aware Nudges via Slack, Teams, and Email. Escalates Critical Items Based on Configurable Thresholds. Tracks Response Patterns and Resolution Timelines to Strengthen Accountability.",
    image: "/image/newimage/image1.4.png",
    href: "/learnmore/",
  },
  {
    title: "Risk & Dependency Monitoring",
    description:
      "Analyzes Velocity Patterns, Blocker Frequency, Communication Signals, and Historical Delivery Data to Identify Emerging Risks. Detects Cross-Team Dependency Exposure and Potential Schedule Slippage. Auto-Generates Structured Risk Log Entries and Surfaces High-Risk Areas Proactively.",
    image: "/image/newimage/image1.8.png",
    href: "/learnmore/",
  },
  {
    title: "Sprint & Capacity Optimization",
    description:
      "Evaluates Backlog Priority, Business Value, Complexity, Historical Velocity, and Team Availability. Recommends Optimal Sprint Scope, Balanced Workload Distribution, Task Splitting or Consolidation, and Sprint Goal Alignment. Provides Capacity-Aware Planning Across Concurrent Projects.",
    image: "/image/newimage/image1.6.png",
    href: "/learnmore/",
  },
  {
    title: "Change Impact & Predictive Planning",
    description:
      "Detects Scope, Priority, and Resource Allocation Changes in Real Time. Recalculates Critical Path Shifts, Milestone Impact, and Capacity Adjustments. Simulates Multiple Timeline Scenarios and Generates Structured Impact Reports for Approval Workflows. Supports Effort Estimation Using Historical Task Patterns and Confidence Scoring.",
    image: "/image/newimage/image1.7.png",
    href: "/learnmore/",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full">

      {/* 🎥 Fixed Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-screen w-screen object-cover -z-10 pointer-events-none"
        poster="/image/newimage/image2.png"
      >
        <source src="/image/World'sFirst/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed inset-0 -z-10" />

      {/* 🌟 Scrollable Content */}
      <div className="relative z-10 text-black">

        {/* Hero */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-12 lg:py-22">
            <h1 className="mx-auto max-w-[700px] text-center  text-3xl mt-10 md:text-5xl xl:text-6xl leading-tight">
              AI Autonomous Systems designed for Manager’s
            </h1>

            <p className="mx-auto mt-6 max-w-[700px] font-[var(--font-grotesk)] text-center text-base md:text-lg">
              SuperManager AGI monitors high impact project events, captures decisions and ownership in a living context graph, and automates status tracking, stakeholder reporting, meeting notes, action item creation, risk monitoring, dependency follow-ups, and resource updates eliminating manual coordination overhead while improving delivery efficiency. Save 20+ Hours per PM per Week.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="https://agent.oqlous.com/login"
                target="_blank"
                className="rounded-lg bg-[#625FD0] text-md text-white px-4 py-2 font-[var(--font-spartan)] font-semibold hover:bg-black transition"
              >
                OPEN APP

              </Link>
            </div>
          </div>
        </div>

        {/* 🤝 Trusted By */}
        <div className="mx-auto max-w-[1100px] px-5 pb-14 text-center">
          <h1 className="mb-4 font-[var(--font-spartan)] text-gray-700 text-xl md:text-2xl font-bold">
            Trusted by 10+ Leading Companies
          </h1>

          <div className="overflow-hidden group">
            <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex items-center justify-center px-6">
                  <Image
                    src={company.src}
                    alt={company.name}
                    width={company.width}
                    height={80}
                    className="h-[100px] object-contain opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🚀 Features */}
        <div className="mx-auto max-w-7xl px-4 pb-20 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group snap-start flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[23%] rounded-2xl bg-white/10 backdrop-blur-md border-2 border-gray-300/50 text-black transition-all hover:bg-white/15 hover:shadow-xl"
            >
              <div className="flex h-full flex-col">
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-md">{feature.description}</p>
                </div>

                <div className="relative h-56 w-full px-6 pb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}