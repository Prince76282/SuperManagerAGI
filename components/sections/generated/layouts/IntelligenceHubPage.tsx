"use client";

import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  Radar,
  Sparkles,
  ChevronDown,
  Zap,
  TrendingUp,
  Shield,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

import type { DropdownContentPage } from "@/lib/Dataset/navigation-pages";

type IntelligenceHubPageProps = {
  page: DropdownContentPage;
};

export default function IntelligenceHubPage({ page }: IntelligenceHubPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // If page doesn't have faq, we can optionally skip the section
  const hasFaq = page.faq && page.faq.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#625FD0]/10 px-4 py-2 text-sm font-semibold text-[#625FD0] border border-[#625FD0]/20">
              <Sparkles className="w-4 h-4" />
              {page.eyebrow}
            </span>
            <h1 className="mt-6 text-3xl lg:text-5xl  tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {page.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {page.description}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={page.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-[#625FD0] px-7 py-3 font-medium text-white shadow-lg shadow-[#625FD0]/20 hover:bg-[#4f4cb0] hover:shadow-xl transition-all duration-200"
              >
                {page.primaryCta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {page.secondaryCta && (
                <Link
                  href={page.secondaryCta.href}
                  className="group inline-flex font-semibold items-center gap-2 rounded-full border-2 border-[#625FD0] bg-white px-7 py-3 font-medium text-[#625FD0]  hover:bg-[#625FD0]/5 hover:text-[#625FD0] transition-all duration-200"
                >
                  {page.secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm uppercase tracking-wider text-[#625FD0] font-semibold">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl  text-gray-800">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      {page.featuredCards && page.featuredCards.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {page.featuredCards.map((card) => {
              // Optional: assign icons based on card title or index
              const icons = [BarChart3, Zap, TrendingUp];
              const Icon = icons[Math.floor(Math.random() * icons.length)];
              return (
                <Link
                  key={card.href}
                  href={card.href ?? "#"}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-8 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#625FD0]/10 text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-[#625FD0] uppercase font-semibold">
                      {card.kicker ?? "Explore"}
                    </p>
                    <h2 className="mt-2 text-2xl  text-gray-800 group-hover:text-[#625FD0] transition-colors">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
                    <div className="mt-4 flex text-md items-center gap-2 text-[#625FD0] font-medium">
                      Open
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Signals & Pillars / Use Cases */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Signals */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2">
              <Radar className="h-10 w-10 text-[#625FD0]" />
              <h2 className="text-xl font-semibold text-gray-800">Signals</h2>
            </div>
            <div className="mt-4 space-y-3">
              {page.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border-2 border-gray-100 bg-gray-50 p-4 text-gray-700 hover:border-[#625FD0]/50 hover:bg-white transition-colors"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Pillars & Use Cases (combined) */}
          <div className="space-y-8">
            {/* Pillars */}
            {page.pillars && page.pillars.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-6">
                {page.pillars.map((pillar, idx) => {
                  const icons = [Zap, TrendingUp, Shield, Layers3];
                  const Icon = icons[idx % icons.length];
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-12 w-12 text-[#625FD0]" />
                        <p className="text-lg font-semibold text-gray-800">{pillar.title}</p>
                      </div>
                      <p className="mt-2 text-gray-600 text-md">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Use Cases */}
            {page.useCases && page.useCases.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-2">
                  <Layers3 className="h-5 w-5 text-[#625FD0]" />
                  <h2 className="text-xl font-semibold text-gray-800">Use Cases</h2>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-5">
                  {page.useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-gray-50 p-5 hover:shadow-md transition-all"
                    >
                      <p className="text-xs uppercase text-[#625FD0] font-semibold tracking-wider">
                        {useCase.role}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-gray-800">
                        {useCase.scenario}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">{useCase.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Workflow */}
      {page.workflow && page.workflow.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-6 py-16 bg-gray-50 rounded-3xl my-8">
          <h2 className="text-center text-3xl  text-gray-800 mb-12">
            Workflow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.workflow.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-[#625FD0] text-white flex items-center justify-center text-sm ">
                  {idx + 1}
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-gray-800">{step.title}</p>
                  <p className="mt-2 text-gray-600 text-sm">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Links */}
      {page.relatedLinks && page.relatedLinks.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#625FD0]" />
              <h2 className="text-2xl font-semibold text-gray-800">Explore More</h2>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {page.relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href ?? "#"}
                  className="group block rounded-xl border-2 border-gray-200 p-5 hover:border-[#625FD0] hover:shadow-md transition-all"
                >
                  <p className="text-lg font-semibold text-gray-800 group-hover:text-[#625FD0] transition-colors">
                    {link.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ (if exists) */}
      {hasFaq && (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl  text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {page.faq!.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#625FD0] transition-transform duration-200 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}