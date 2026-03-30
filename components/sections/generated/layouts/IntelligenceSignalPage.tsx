import Link from "next/link";
import { ArrowRight, Activity, BrainCircuit, MoveRight } from "lucide-react";

import type { DropdownContentPage } from "@/lib/Dataset/navigation-pages";

type IntelligenceSignalPageProps = {
  page: DropdownContentPage;
};

export default function IntelligenceSignalPage({
  page,
}: IntelligenceSignalPageProps) {
  return (
    <div className="min-h-screen min-w-[1200px] bg-white text-black">
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-flex text-[#625FD0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#625FD0]/30">
                {page.eyebrow}
              </span>

              <h1 className="mt-6 text-6xl font-semibold leading-tight text-black">
                {page.title}
              </h1>

              <p className="mt-6 text-lg text-black/70 max-w-xl">
                {page.description}
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href={page.primaryCta.href}
                  className="bg-[#625FD0] text-white px-7 py-3 rounded-full flex items-center gap-2 font-medium hover:opacity-90 transition"
                >
                  {page.primaryCta.label}
                  <ArrowRight size={16} />
                </Link>

                {page.secondaryCta && (
                  <Link
                    href={page.secondaryCta.href}
                    className="border border-[#625FD0]/30 px-7 py-3 rounded-full hover:bg-[#625FD0]/10 transition flex items-center gap-2"
                  >
                    {page.secondaryCta.label}
                    <MoveRight size={16} />
                  </Link>
                )}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div>
              <div className="rounded-3xl p-8 border border-black/10 bg-white shadow-sm">
                <div className="grid grid-cols-2 gap-5">
                  {page.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-black/10 bg-white p-5 hover:border-[#625FD0] transition"
                    >
                      <p className="text-xs uppercase text-[#625FD0]">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-black">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-black/70">{page.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-[1200px] px-6 py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        {/* LEFT */}
        <div className="space-y-6">
          {/* SIGNAL MAP */}
          <div className="rounded-3xl border border-black/10 p-6 bg-white">
            <div className="flex items-center gap-2">
              <Activity className="text-[#625FD0]" />
              <h2 className="text-xl font-semibold text-black">Signal Map</h2>
            </div>

            <div className="mt-6 space-y-4">
              {page.highlights.map((highlight, index) => (
                <div
                  key={`${highlight}-${index}`}
                  className="bg-white border border-black/10 rounded-xl p-4 hover:border-[#625FD0] transition"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* DECISION LOOP */}
          <div className="rounded-3xl border border-black/10 p-6 bg-white">
            <div className="flex items-center gap-2">
              <BrainCircuit className="text-[#625FD0]" />
              <h2 className="text-xl font-semibold text-black">
                Decision Loop
              </h2>
            </div>

            <div className="mt-6 space-y-5">
              {page.workflow.map((step, index) => (
                <div key={`${step.title}-${index}`} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#625FD0] text-white flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{step.title}</h3>
                    <p className="text-sm text-black/70 mt-1">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          {/* PILLARS */}
          <div className="grid md:grid-cols-2 gap-6">
            {page.pillars?.map((pillar, index) => (
              <div
                key={`${pillar.title}-${index}`}
                className="rounded-3xl border border-black/10 p-6 bg-white hover:border-[#625FD0] transition"
              >
                <h3 className="text-xl font-semibold text-black">
                  {pillar.title}
                </h3>
                <p className="text-black/70 text-sm mt-2">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* USE CASE */}
          <div className="grid md:grid-cols-3 gap-5">
            {page.useCases.map((useCase, index) => (
              <div
                key={`${useCase.role}-${useCase.scenario}-${index}`}
                className="rounded-2xl border border-black/10 p-5 bg-white hover:border-[#625FD0] transition"
              >
                <p className="text-xs text-[#625FD0] uppercase font-semibold">
                  {useCase.role}
                </p>
                <h3 className="mt-2 font-semibold text-black">
                  {useCase.scenario}
                </h3>
                <p className="text-black/70 text-sm mt-2">{useCase.outcome}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="rounded-3xl border border-black/10 p-6 bg-white">
            <h2 className="text-xl font-semibold text-black">Questions</h2>

            <div className="mt-6 grid md:grid-cols-3 gap-5">
              {page.faq.map((item, index) => (
                <div
                  key={`${item.question}-${index}`}
                  className="bg-white border border-black/10 p-4 rounded-xl"
                >
                  <h3 className="font-medium text-black">{item.question}</h3>
                  <p className="text-sm text-black/70 mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RELATED */}
          <div className="rounded-3xl border border-black/10 p-6 bg-white">
            <h2 className="text-xl font-semibold text-black">Explore Next</h2>

            <div className="mt-6 grid md:grid-cols-3 gap-5">
              {page.relatedLinks.map((link, index) => (
                <Link
                  key={`${link.href}-${link.title}-${index}`}
                  href={link.href ?? "#"}
                  className="border border-black/10 rounded-xl p-5 hover:border-[#625FD0] transition"
                >
                  <h3 className="font-semibold text-black">{link.title}</h3>
                  <p className="text-sm text-black/70 mt-2">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
