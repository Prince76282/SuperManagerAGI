"use client";

import Link from "next/link";
import {
  ArrowRight,
  MoveRight,
  Sparkles,
  BookOpen,
  Layers3,
  Users,
  ChevronDown,
  Compass,
  GitBranch,
} from "lucide-react";
import { useState } from "react";

import type { DropdownContentPage } from "@/lib/Dataset/navigation-pages";

type GuideEditorialPageProps = {
  page: DropdownContentPage;
};

export default function GuideEditorialPage({ page }: GuideEditorialPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const hasFaq = page.faq && page.faq.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
            <p className="mt-4 text-gray-500 text-md max-w-2xl mx-auto">
              {page.intro}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={page.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-[#625FD0] px-7 py-3 font-medium text-white shadow-lg shadow-[#625FD0]/20 hover:bg-[#4f4cb0] transition-all"
              >
                {page.primaryCta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {page.secondaryCta && (
                <Link
                  href={page.secondaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full border-2  bg-white px-7 py-3 font-semibold text-[#625FD0] border-[#625FD0] hover:bg-[#625FD0] hover:text-white transition-all"
                >
                  {page.secondaryCta.label}
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.stats?.map((stat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-md uppercase tracking-wider text-[#625FD0] font-semibold">
                  {stat.label}
                </p>
                <p className="mt-3 text-2xl  text-gray-800">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl lg:text-5xl  text-gray-800 mb-6">
            Guide Focus
          </h2>
          <div className="space-y-4">
            {page.highlights?.map((highlight, idx) => (
              <div key={idx} className="flex gap-3 items-start group">
                <div className="mt-1 h-8 w-8 font-semibold rounded-full bg-[#625FD0]/10 flex items-center justify-center group-hover:bg-[#625FD0] transition-colors">
                  <span className="text-xs text-[#625FD0] group-hover:text-white transition-colors">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700 text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Pillars */}
          <div>
            <h2 className="text-3xl lg:text-4xl  text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-10 h-10 text-[#625FD0]" />
              What Teams Learn
            </h2>
            <div className="space-y-6">
              {page.pillars?.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all group"
                >
                  <p className="text-xl font-semibold text-gray-800 group-hover:text-[#625FD0] transition-colors">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Use Cases */}
          <div>
            <h2 className="text-3xl lg:text-4xl  text-gray-800 mb-6 flex items-center gap-2">
              <Users className="w-10 h-10 text-[#625FD0]" />
              Use Cases
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {page.useCases?.map((useCase, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all group"
                >
                  <p className="text-sm uppercase text-[#625FD0] font-semibold tracking-wider">
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
        </div>
      </section>

      {/* Workflow & Related Links */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 bg-gray-50 rounded-3xl my-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Workflow */}
          <div>
            <h2 className="text-3xl lg:text-4xl  text-gray-800 mb-6 flex items-center gap-2">
              <Compass className="w-10 h-10 text-[#625FD0]" />
              Reading Path
            </h2>
            <div className="space-y-5">
              {page.workflow?.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#625FD0] text-white text-sm  shadow-md">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-800">{step.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Links */}
          <div>
            <h2 className="text-3xl lg:text-4xl  text-gray-800 mb-6 flex items-center gap-2">
              <GitBranch className="w-10 h-10 text-[#625FD0]" />
              Related Reading
            </h2>
            <div className="space-y-4">
              {page.relatedLinks?.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href ?? "#"}
                  className="block rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#625FD0] hover:shadow-md transition-all group"
                >
                  <p className="text-lg font-semibold text-gray-800 group-hover:text-[#625FD0] transition-colors">
                    {link.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      {hasFaq && (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl lg:text-5xl  text-center text-gray-800 mb-12">
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