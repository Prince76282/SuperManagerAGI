import Link from "next/link";
import { ArrowRight, Layers3, Radar, Sparkles } from "lucide-react";

import type { DropdownContentPage } from "@/lib/Dataset/navigation-pages";

type IntelligenceHubPageProps = {
  page: DropdownContentPage;
};

export default function IntelligenceHubPage({
  page,
}: IntelligenceHubPageProps) {
  return (
    <div className="bg-white text-black min-h-screen min-w-[1200px]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-flex bg-[#625FD0]/10 text-[#625FD0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                {page.eyebrow}
              </span>

              <h1 className="mt-6 text-6xl font-semibold leading-tight">
                {page.title}
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                {page.description}
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href={page.primaryCta.href}
                  className="bg-[#625FD0] text-white px-7 py-3 rounded-full flex items-center gap-2 hover:shadow-lg hover:scale-[1.03] transition"
                >
                  {page.primaryCta.label}
                  <ArrowRight size={16} />
                </Link>

                {page.secondaryCta && (
                  <Link
                    href={page.secondaryCta.href}
                    className="border border-gray-200 px-7 py-3 rounded-full hover:bg-gray-50 transition"
                  >
                    {page.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>

            {/* RIGHT STATS GLASS */}
            <div className="grid grid-cols-2 gap-5">
              {page.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition"
                >
                  <p className="text-xs uppercase text-[#625FD0]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mx-auto max-w-[1200px] px-6 mt-10">
        <div className="grid md:grid-cols-3 gap-8">
          {page.featuredCards?.map((card) => (
            <Link
              key={`${card.href}-${card.title}`}
              href={card.href ?? "#"}
              className="group relative rounded-3xl border border-gray-200 p-8 overflow-hidden hover:shadow-2xl transition"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#625FD0]/10 to-transparent" />

              <p className="text-sm text-[#625FD0] font-semibold uppercase">
                {card.kicker ?? "Explore"}
              </p>

              <h2 className="mt-4 text-3xl font-semibold">{card.title}</h2>

              <p className="mt-4 text-gray-600 text-sm">{card.description}</p>

              <div className="mt-6 flex items-center gap-2 text-[#625FD0] font-medium">
                Open
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INSIGHTS + USE CASE */}
      <section className="mx-auto max-w-[1200px] px-6 mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        {/* SIGNALS */}
        <div className="rounded-3xl border border-gray-200 p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center gap-2">
            <Radar className="text-[#625FD0]" />
            <h2 className="text-2xl font-semibold">Signals</h2>
          </div>

          <div className="mt-6 space-y-4">
            {page.highlights.map((highlight) => (
              <div className="bg-white rounded-xl p-4 border hover:shadow-md transition">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* PILLARS + USE CASE */}
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {page.pillars?.map((pillar) => (
              <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-gray-200 p-8">
            <div className="flex items-center gap-2">
              <Layers3 className="text-[#625FD0]" />
              <h2 className="text-2xl font-semibold">Use Cases</h2>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-5">
              {page.useCases.map((useCase) => (
                <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
                  <p className="text-xs text-[#625FD0] uppercase font-semibold">
                    {useCase.role}
                  </p>
                  <h3 className="mt-2 font-semibold">{useCase.scenario}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {useCase.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-[1200px] px-6 mt-20">
        <div className="grid md:grid-cols-4 gap-6">
          {page.workflow.map((step, index) => (
            <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-xl transition">
              <span className="text-xs text-[#625FD0] font-semibold">
                Step {index + 1}
              </span>
              <h3 className="mt-3 font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-[1200px] px-6 mt-20 pb-20">
        <div className="rounded-3xl border border-gray-200 p-10 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center gap-2">
            <Sparkles className="text-[#625FD0]" />
            <h2 className="text-2xl font-semibold">Explore More</h2>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {page.relatedLinks.map((link) => (
              <Link
                key={`${link.href}-${link.title}`}
                href={link.href ?? "#"}
                className="bg-white border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{link.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
