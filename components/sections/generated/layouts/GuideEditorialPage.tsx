import Link from "next/link";
import { ArrowRight, MoveRight, Sparkles } from "lucide-react";

import type { DropdownContentPage } from "@/lib/Dataset/navigation-pages";

type GuideEditorialPageProps = {
  page: DropdownContentPage;
};

export default function GuideEditorialPage({ page }: GuideEditorialPageProps) {
  return (
    <div className="bg-white text-black min-h-screen min-w-[1200px]">
      {/* HERO */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-[#625FD0]/10 text-[#625FD0] px-4 py-2 text-xs  uppercase tracking-wider">
              {page.eyebrow}
            </span>

            <h1 className="mt-6 text-5xl  leading-tight">{page.title}</h1>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              {page.description}
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href={page.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-[#625FD0] px-6 py-3 text-white font-medium hover:opacity-90 transition"
              >
                {page.primaryCta.label}
                <ArrowRight size={16} />
              </Link>

              {page.secondaryCta && (
                <Link
                  href={page.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#625FD0] px-6 py-3 font-medium hover:bg-[#625FD0] hover:text-white transition"
                >
                  {page.secondaryCta.label}
                  <MoveRight size={16} />
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#625FD0]" size={18} />
              <h2 className="text-xl ">Guide Focus</h2>
            </div>

            <p className="mt-4 text-gray-600 text-sm leading-6">{page.intro}</p>

            <div className="mt-6 space-y-3">
              {page.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border border-gray-200 rounded-xl p-4 text-sm text-gray-700 hover:shadow-sm transition"
                >
                  {highlight}
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {page.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black text-white rounded-xl p-4"
                >
                  <p className="text-xs text-gray-400 uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg ">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 grid lg:grid-cols-[350px_1fr] gap-12">
        {/* SIDEBAR */}
        <aside className="space-y-6">
          {/* WORKFLOW */}
          <div className="border border-gray-200 rounded-3xl p-6">
            <p className="text-sm  text-[#625FD0] uppercase">Reading Path</p>

            <div className="mt-6 space-y-5">
              {page.workflow.map((step, index) => (
                <div key={`${step.title}-${index}`} className="flex gap-4">
                  <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#625FD0] text-white text-sm ">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="border border-gray-200 rounded-3xl p-6 bg-gray-50">
            <p className="text-sm  text-[#625FD0] uppercase">
              Common Questions
            </p>

            <div className="mt-6 space-y-5">
              {page.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-medium">{item.question}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <div className="space-y-10">
          {/* PILLARS */}
          <section className="border border-gray-200 rounded-3xl p-8">
            <p className="text-sm  text-[#625FD0] uppercase">
              What Teams Learn
            </p>

            <div className="mt-6 space-y-6">
              {page.pillars?.map((pillar) => (
                <div key={pillar.title}>
                  <h2 className="text-2xl ">{pillar.title}</h2>
                  <p className="text-gray-600 mt-2">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* USE CASES */}
          <section className="grid md:grid-cols-3 gap-6">
            {page.useCases.map((useCase) => (
              <div
                key={`${useCase.role}-${useCase.scenario}`}
                className="border border-gray-200 rounded-3xl p-6 hover:shadow-md transition"
              >
                <p className="text-sm text-[#625FD0]  uppercase">
                  {useCase.role}
                </p>
                <h3 className="text-xl  mt-2">{useCase.scenario}</h3>
                <p className="text-gray-600 text-sm mt-2">{useCase.outcome}</p>
              </div>
            ))}
          </section>

          {/* RELATED */}
          <section className="border border-gray-200 rounded-3xl p-8 bg-gray-50">
            <p className="text-sm  text-[#625FD0] uppercase">Related Reading</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {page.relatedLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.title}`}
                  href={link.href ?? "#"}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
                >
                  <h3 className="text-lg ">{link.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
