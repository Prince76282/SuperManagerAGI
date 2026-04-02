"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { id: "Founder and Leadership AI", label: "Founder and Leadership AI" },
  { id: "Sales and Revenue AI", label: "Sales and Revenue AI" },
  {
    id: "Operations and Supply Chain AI",
    label: "Operations and Supply Chain AI",
  },
  { id: "Finance and Accounts AI", label: "Finance and Accounts AI" },
  { id: "Logistics and Delivery AI", label: "Logistics and Delivery AI" },
  { id: "Marketing and Growth AI", label: "Marketing and Growth AI" },
  { id: "Customer Care AI", label: "Customer Care AI" },
  { id: "Engineering and Product AI", label: "Engineering and Product AI" },
  {
    id: "Clerical and Administrative AI",
    label: "Clerical and Administrative AI",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

const contentData: Record<
  TabId,
  {
    badge: string;
    title: string;
    desc: string;
    img: string;
  }
> = {
  "Founder and Leadership AI": {
    badge: "Founder and Leadership AI",
    title: "Real-Time Org Intelligence Without a Single Manual Report",
    desc: "Live org dashboard, morning intelligence brief, anomaly alerts, board report generation, OKR tracking and competitive intelligence. All running autonomously from connected systems.",
    img: "/Image/image1.4.jpg",
  },

  "Sales and Revenue AI": {
    badge: "Sales and Revenue AI",
    title: "Agents That Monitor and Drive Revenue Across Every Channel",
    desc: "Unified revenue dashboard across D2C, marketplace, wholesale and retail. Pipeline intelligence, marketplace listing health monitoring, daily sales MIS distribution, return rate tracking by SKU and channel.",
    img: "/Image/image1.4.jpg",
  },

  "Operations and Supply Chain AI": {
    badge: "Operations and Supply Chain AI",
    title: "Agents That Run Inventory, Procurement and Operations",
    desc: "Real-time unified inventory across all locations, stock-out prediction 10 to 14 days ahead, overstock detection, PO drafting on reorder trigger, inward reconciliation and vendor delivery tracking.",
    img: "/Image/image1.4.jpg",
  },

  "Finance and Accounts AI": {
    badge: "Finance and Accounts AI",
    title: "Agents That Automate Every Financial Workflow",
    desc: "Platform settlement reconciliation across Amazon, Flipkart and Shopify, payment gateway matching, COD remittance tracking, GST workings compilation, vendor payables monitoring and monthly P and L by channel.",
    img: "/Image/image1.4.jpg",
  },

  "Logistics and Delivery AI": {
    badge: "Logistics and Delivery AI",
    title: "Agents That Make Logistics Data Drive Smarter Operations",
    desc: "NDR dashboard and follow-up automation, courier performance monitoring, return tracking, COD reconciliation, geo-targeting intelligence and effective ROAS calculation accounting for returns and logistics cost.",
    img: "/Image/image1.4.jpg",
  },

  "Marketing and Growth AI": {
    badge: "Marketing and Growth AI",
    title: "Agents That Attribute Revenue to Every Marketing Action",
    desc: "Cross-channel campaign performance across Meta, Google, Amazon and Flipkart Ads, revenue attribution per creative and channel, influencer post-to-purchase tracking within 24 hours, budget pacing alerts and creative fatigue detection.",
    img: "/Image/image1.4.jpg",
  },

  "Customer Care AI": {
    badge: "Customer Care AI",
    title: "Agents That Resolve Issues Before They Escalate",
    desc: "Unified query dashboard across Shopify, WhatsApp, email and marketplace channels, return and exchange full-journey tracking, proactive delivery delay communication, negative review detection and weekly customer care MIS.",
    img: "/Image/image1.4.jpg",
  },

  "Engineering and Product AI": {
    badge: "Engineering and Product AI",
    title: "Agents That Accelerate Delivery",
    desc: "Sprint planning intelligence before every planning meeting, autonomous standup generation from Jira and GitHub activity, blocker detection, release coordination, risk prediction 2 to 3 weeks in advance and product feedback loop aggregation.",
    img: "/Image/image1.4.jpg",
  },

  "Clerical and Administrative AI": {
    badge: "Clerical and Administrative AI",
    title: "Agents That Eliminate Every Repetitive Manual Task",
    desc: "All recurring MIS reports in Excel generated and distributed automatically. Data entry eliminated. Vendor follow-up communication drafted and sent. Document management, meeting action tracking and compliance due date monitoring running autonomously.",
    img: "/Image/image1.4.jpg",
  },
};

const features = [
  {
    title: "Domain-Specific Intelligence",
    description:
      "Each AI agent understands the workflows, terminology, data patterns and KPIs unique to its department and industry. Specialist agents per function, not one generic model for everything.",
  },
  {
    title: "Cross-Department Coordination",
    description:
      "Agents coordinate automatically across departments. Logistics intelligence feeds marketing targeting. Inventory signals trigger procurement workflows. Finance alerts surface on the founder dashboard. All autonomous.",
  },
  {
    title: "Real-Time Execution Visibility",
    description:
      "Live dashboards for every role from analyst to founder. Every connected system. Every active workflow. Updated continuously from actual live data via the ADA layer.",
  },
];

export default function EnterpriseFeatures() {
  const [active, setActive] = useState<TabId>("Founder and Leadership AI");

  const data = contentData[active];

  return (
    <section className="w-full bg-[#F0F6F9] py-14 md:py-20">
      <div className="max-w-[1230px] mx-auto px-4 sm:px-6">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-3xl lg:text-5xl leading-tight ">
              AI Agents for Every Department
            </h2>

            <Link
              href="/get-in-touch"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-5 py-2.5 text-white  shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Get in touch
            </Link>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            SuperManager AGI deploys autonomous specialist agents across every
            function inside any organisation. From founders and the C-suite to
            operations, finance, logistics, marketing, customer care and
            engineering every role gains an AI workforce that fetches data,
            executes tasks, generates reports and coordinates across departments
            24x7.
          </p>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* TABS */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-2xl uppercase transition-all duration-300 whitespace-nowrap
                ${
                  active === tab.id
                    ? "bg-[#625FD0] text-white shadow-md"
                    : "bg-white border-2 border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white hover:shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="flex-1 bg-white rounded-2xl p-6 md:p-10 shadow-sm transition-all duration-300">
            <div
              key={active}
              className="flex flex-col lg:flex-row gap-10 items-center mb-12 animate-fade"
            >
              {/* TEXT */}
              <div className="flex-1">
                <span className="inline-block px-3 py-1 text-xs  tracking-wider text-slate-500 bg-slate-100 rounded-full uppercase mb-5">
                  {data.badge}
                </span>

                <h3 className="text-2xl md:text-3xl  mb-5">{data.title}</h3>

                <p className="text-gray-600 leading-relaxed">{data.desc}</p>
              </div>

              {/* IMAGE */}
              <div className="flex-1 flex justify-center">
                <Image
                  src={data.img}
                  alt={data.title}
                  width={420}
                  height={420}
                  className="object-contain max-w-[340px] w-full transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 border border-transparent hover:border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="border-l-2 border-dotted border-slate-400 pl-4">
                    <h4 className="text-lg  mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
