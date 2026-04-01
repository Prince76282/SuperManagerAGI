"use client";

import Link from "next/link";
import { MdSearch, MdLogin, MdArrowForward } from "react-icons/md";

const cards = [
  {
    tag: "Find a Partner",
    icon: MdSearch,
    title: "D2C and E-commerce Specialists",
    description:
      "Certified partners with hands-on deployment experience across Shopify, Amazon, Flipkart, Shiprocket, and leading payment gateway stacks. These specialists configure Operations AGI for order orchestration, Finance AGI for reconciliation and cash-flow forecasting, Logistics AGI for last-mile optimisation, and Marketing AGI for campaign automation  delivering a fully integrated agentic layer across your entire D2C operation without disrupting existing fulfilment workflows.",
    linkLabel: "Find a partner",
  },
  {
    tag: "Partner Type",
    icon: MdSearch,
    title: "Consulting Firm Specialists",
    description:
      "Implementation partners purpose-built for professional services firms  legal, accounting, management consulting, and advisory practices. They deploy engagement management agents that track project milestones, flag scope creep, and surface utilisation gaps in real time, alongside reporting automation agents that consolidate client deliverables, timesheet data, and billing pipelines into a single agentic workflow  reducing back-office overhead by eliminating the manual coordination layer between consultants, project managers, and finance teams.",
    linkLabel: "Find a partner",
  },
  {
    tag: "Find a Partner",
    icon: MdSearch,
    title: "Explore the Partner Directory",
    description:
      "Browse the full directory of certified SuperManager AGI implementation partners  searchable by industry vertical, deployment specialisation, geographic coverage, and enterprise stack compatibility. Every listed partner has completed SuperManager AGI's technical certification programme, ensuring they can scope, deploy, and support Beehive multi-agent orchestration, ADA integration, and enterprise security configuration to production standard. Filter by region or use case to find the right implementation team for your organisation.",
    linkLabel: "Browse the directory",
  },
  {
    tag: "The Partner Portal",
    icon: MdLogin,
    title: "Enterprise Technology Integrators",
    description:
      "Large system integrators and global consultancies connecting SuperManager AGI to complex enterprise stacks  SAP, Oracle, Workday, Salesforce, and bespoke ERP environments  with full data sovereignty, on-premise deployment options, and compliance with GDPR, SOC 2, and ISO 27001 requirements. Portal access provides integrators with sandbox environments, ADA connector SDKs, architecture review support, and direct access to the SuperManager AGI engineering team for custom deployment scoping.",
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
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-16">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-xs uppercase text-[#625FD0] bg-indigo-50 px-3 py-1 rounded-full w-fit">
              Customer Success
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              Partners Are Delivering{" "}
              <span className="text-[#625FD0]">Real Vibe Working</span> Platform
              Results
            </h2>
          </div>

          <p className="text-gray-600 max-w-lg">
            Our implementation partners help organisations deploy autonomous AI
            agents that execute operations and scale performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 p-8 flex flex-col gap-6"
              >
                {/* Tag */}
                <span className="text-md text-[#625FD0] bg-indigo-50 px-3 py-1 rounded-full w-fit">
                  {card.tag}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#625FD0]/10 flex items-center justify-center">
                      <Icon size={20} className="text-[#625FD0]" />
                    </div>

                    <p className="text-lg font-semibold">{card.title}</p>
                  </div>

                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>

                {/* CTA */}
                {card.href && (
                  <Link
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="group/btn relative inline-flex items-center justify-center gap-2 rounded-xl bg-[#625FD0] px-5 py-2.5 text-white font-medium shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"
                  >
                    <span className="relative z-10">{card.linkLabel}</span>

                    {/* Arrow Icon */}
                    <MdArrowForward className="relative z-10" />

                    {/* Glow */}
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#625FD0] to-[#8A84FF] opacity-0 group-hover/btn:opacity-20 blur transition duration-300"></span>
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
