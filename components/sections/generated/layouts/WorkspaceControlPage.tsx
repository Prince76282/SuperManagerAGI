import Link from "next/link";
import { Activity, ArrowRight, ShieldCheck, Workflow } from "lucide-react";

import type { DropdownContentPage } from "@/lib/Dataset/navigation-pages";

type WorkspaceControlPageProps = {
  page: DropdownContentPage;
};

export default function WorkspaceControlPage({
  page,
}: WorkspaceControlPageProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#625FD0]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold  uppercase tracking-widest text-[#625FD0]">
              {page.eyebrow}
            </span>

            <h1 className="mt-6 text-6xl  leading-tight">{page.title}</h1>

            <p className="mt-6 text-lg text-black/60 leading-relaxed">
              {page.description}
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href={page.primaryCta.href}
                className="bg-[#625FD0] text-white px-8 py-3 rounded-full flex items-center gap-2 font-medium shadow-lg hover:scale-[1.02] transition"
              >
                {page.primaryCta.label}
                <ArrowRight size={16} />
              </Link>

              {page.secondaryCta && (
                <Link
                  href={page.secondaryCta.href}
                  className="px-8 py-3 rounded-full border-2 border-[#625FD0] hover:bg-[#625FD0] hover:text-white transition"
                >
                  {page.secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* floating stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {page.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
              >
                <p className="text-xs uppercase text-[#625FD0]">{stat.label}</p>
                <p className="mt-2 text-2xl ">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-[#625FD0] w-10 h-10" />
              <h2 className="text-3xl lg:text-5xl ">Control Surfaces</h2>
            </div>

            <div className="space-y-4">
              {page.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="p-5 text-md rounded-xl bg-black/[0.02] hover:bg-[#625FD0]/5 transition"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* WORKFLOW */}
          <div className="bg-[#625FD0]/5 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-[#625FD0] w-10 h-10" />
              <h2 className="text-3xl lg:text-5xl ">Approval Flow</h2>
            </div>

            <div className="space-y-6">
              {page.workflow.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-10 w-10  rounded-full bg-[#625FD0] text-white flex items-center justify-center text-sm ">
                    {index + 1}
                  </div>

                  <div>
                    <p className="font-medium text-lg">{step.title}</p>
                    <p className="text-sm text-black/60 mt-1">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PILLARS */}
        <div className="mt-24">
          <h2 className="text-3xl lg:text-5xl  mb-10">Core Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {page.pillars?.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
              >
                <p className="text-xl ">{pillar.title}</p>
                <p className="mt-3 text-black/60">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* USE CASES */}
        <div className="mt-24 bg-black/[0.02] rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <Workflow className="text-[#625FD0] w-10 h-10" />
            <h2 className="text-3xl lg:text-5xl ">Operator Journeys</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {page.useCases.map((useCase) => (
              <div
                key={`${useCase.role}-${useCase.scenario}`}
                className="p-6 rounded-xl bg-white shadow-sm"
              >
                <p className="text-sm font-semibold uppercase text-[#625FD0] ">
                  {useCase.role}
                </p>
                <p className="mt-2 text-lg ">{useCase.scenario}</p>
                <p className="mt-2 text-sm text-black/60">{useCase.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED */}
        <div className="mt-24">
          <h2 className="text-3xl lg:text-5xl  mb-8">Explore Next</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {page.relatedLinks.map((link) => (
              <Link
                key={`${link.href}-${link.title}`}
                href={link.href ?? "#"}
                className="p-6 rounded-xl border border-black/10 hover:border-[#625FD0] hover:shadow-md transition"
              >
                <p className=" text-lg">{link.title}</p>
                <p className="mt-2 text-sm text-black/60">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
