"use client";

import Link from "next/link";
import {
  ArrowRight,
  Activity,
  BrainCircuit,
  MoveRight,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import type { DropdownContentPage } from "@/lib/Dataset/navigation-pages";

type IntelligenceSignalPageProps = {
  page: DropdownContentPage;
};

export default function IntelligenceSignalPage({
  page,
}: IntelligenceSignalPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#625FD0]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
        
        <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#625FD0]/10 px-4 py-2 text-sm font-semibold text-[#625FD0] border border-[#625FD0]/30">
              <Sparkles className="w-4 h-4" />
              {page.eyebrow}
            </span>
            
            <h1 className="mt-6 text-3xl lg:text-5xl  tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              {page.title}
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
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
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 font-medium text-slate-700 hover:border-[#625FD0] hover:bg-[#625FD0]/5 hover:text-[#625FD0] transition-all duration-200"
                >
                  {page.secondaryCta.label}
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
          
          {/* STATS - Horizontal row of cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm uppercase tracking-wider text-[#625FD0] font-semibold">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl  text-slate-800">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 text-center">
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#625FD0] pl-6 italic">
          {page.intro}
        </p>
      </section>
      
      {/* SIGNAL MAP SECTION */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#625FD0]/10 px-4 py-2 text-sm font-semibold text-[#625FD0]">
              <Activity className="w-4 h-4" />
              Signal Map
            </div>
            <h2 className="mt-4 text-3xl  text-slate-800">
              Key Intelligence Signals
            </h2>
            <div className="mt-6 space-y-4">
              {page.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#625FD0]/10 text-[#625FD0] flex items-center justify-center ">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 group-hover:text-slate-900">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#625FD0]/20 to-blue-100 p-8 shadow-xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg...')] opacity-20" />
              <div className="relative flex h-full items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-16 w-16 rounded-2xl bg-white/70 shadow-md" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* DECISION LOOP SECTION */}
      <section className="bg-indigo-100 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#625FD0]/10 px-4 py-2 text-sm font-semibold text-[#625FD0]">
              <BrainCircuit className="w-4 h-4" />
              Decision Loop
            </div>
            <h2 className="mt-4 text-3xl  text-slate-800">
              Streamlined Workflow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {page.workflow.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-[#625FD0] text-white flex items-center justify-center text-lg  shadow-lg">
                  {index + 1}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* PILLARS */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl  text-slate-800">
            Core Pillars
          </h2>
          <p className="mt-2 text-gray-600">
            The foundations of our intelligence approach
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {page.pillars?.map((pillar, index) => {
            const icons = [Zap, TrendingUp, Shield, Sparkles];
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center hover:border-[#625FD0] hover:shadow-lg transition-all duration-200"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#625FD0]/10 text-[#625FD0] group-hover:bg-[#625FD0] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* USE CASES */}
      <section className="bg-indigo-100 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl  text-slate-800">
              Real-World Applications
            </h2>
            <p className="mt-2 text-gray-600">
              How different roles leverage intelligence signals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {page.useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="text-sm uppercase tracking-wider text-[#625FD0] font-semibold">
                    {useCase.role}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-800">
                    {useCase.scenario}
                  </p>
                  <p className="mt-3 text-gray-600 border-t border-slate-100 pt-3">
                    {useCase.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* RELATED LINKS */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl  text-slate-800">
            Explore Next
          </h2>
          <p className="mt-2 text-gray-600">
            Continue your journey with these related topics
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {page.relatedLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href ?? "#"}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#625FD0] hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-slate-800 group-hover:text-[#625FD0]">
                {link.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {link.description}
              </p>
              <div className="mt-4 flex items-center text-[#625FD0] group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* FAQ ACCORDION */}
      <section className="bg-indigo-100 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl  text-center text-slate-800 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {page.faq.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="flex justify-between items-center w-full p-6 text-left font-medium text-slate-800  transition-colors"
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
                  <div className="p-6 pt-0 text-gray-600 border-t border-slate-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}