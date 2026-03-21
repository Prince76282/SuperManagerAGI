"use client";

import Link from "next/link";
import {
  MdSearch,
  MdLogin,
  MdPlayCircle,
  MdArrowForward,
} from "react-icons/md";

const cards = [
  {
    tag: "Find a Partner",
    icon: MdSearch,
    title: "D2C and E-commerce Specialists",
    description:
      "Implementation partners specialising in D2C brand operations deploy Operations AGI, Finance AGI, Logistics AGI and Marketing AGI across Shopify, Amazon, Flipkart, Shiprocket and payment gateway stacks. Brands are live with inventory intelligence, NDR automation and settlement reconciliation within 14 days.",
    linkLabel: "Find a partner",
    href: "#",
    external: false,
  },
   {
    tag: "Partner Type",
    icon: MdSearch,
    title: "Consulting Firm Specialists",
    description:
      "Implementation partners specialising in professional services firms deploy engagement management agents, client reporting automation and resource utilisation intelligence. Consulting principals are operating with live visibility across 20+ client engagements within 30 days of deployment.",
    linkLabel: "Find a partner",
    href: "#",
    external: false,
  },
   {
    tag: "Find a Partner",
    icon: MdSearch,
    title: "Explore the Partner Directory",
    description:
      "Use our partner directory to find a certified SuperManager AGI implementation partner, technology integration specialist or independent software vendor with your industry and stack.",
    linkLabel: "Find a partner",
    href: "#",
    external: false,
  },
  {
    tag: "The Partner Portal",
    icon: MdLogin,
    title: "Enterprise Technology Integrators",
    description:
      "Large system integrators connecting SuperManager AGI to SAP, Oracle, Workday and Salesforce stacks across enterprise organisations. ADA Integration Layer configured for direct database connectivity inside enterprise VPC environments. Full data sovereignty. Zero external API dependency during agent reasoning.",
    linkLabel: "Login to Portal",
    href: "https://app.supermanager.co/login",
    external: true,
  },
];

export default function CustomerSuccessSection() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="inline-flex items-center w-fit gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#625FD0] border border-indigo-200 bg-indigo-50 px-3 py-1.5 rounded-full">
              Customer Success
            </span>
            <h2 className="text-3xl md:text-3xl  text-black leading-tight tracking-tight">
              Partners Are Delivering {" "}
              <span className="text-[#625FD0]">Real Vibe Working </span> Platform Results
            </h2>
          </div>

          <p className="text-base text-gray-600 leading-relaxed max-w-lg md:pt-10">
            Our implementation partners are at the forefront of the AI Vibe Working Platform transformation  helping organisations across every industry deploy autonomous agent workforces that execute operational tasks, surface live enterprise intelligence and coordinate across departments without manual overhead.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-14" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 p-8 flex flex-col gap-6 overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#625FD0] via-[#625FD0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag */}
                <span className="inline-flex items-center w-fit gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#625FD0] border border-indigo-200 bg-indigo-50 px-3 py-1.5 rounded-full">
                  {card.tag}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors duration-300">
                      <Icon size={20} className="text-[[#625FD0]]" />
                    </div>
                    <h3 className="text-xl  text-black tracking-tight">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px  bg-gray-200" />

                {/* CTA */}
                {card.external ? (
                  <Link
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
                  >
                    {card.linkLabel}
                  </Link>
                ) : (
                  <Link
                    href={card.href}
                    className="inline-flex items-center rounded-lg justify-center bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
                  >
                    {card.linkLabel}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
