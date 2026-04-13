import Link from "next/link";
import { ArrowRight, Radar } from "lucide-react";

import { guidePages, guidePageSlugs } from "@/lib/Dataset/dropdownRouteContent";

export const metadata = {
  title: "Guides | SuperManager AI",
  description:
    "Browse practical guides on autonomous execution, AI workforces, enterprise AI architecture, and decision intelligence.",
};

const guideEntries = guidePageSlugs.map((slug) => ({
  slug,
  page: guidePages[slug],
}));

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(98,95,208,0.08)_0%,#FFFFFF_26%,#FFFFFF_100%)]">
      <section className="mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full bg-[#625FD0]/10 px-4 py-2 text-xs  uppercase tracking-[0.24em] text-[#625FD0]">
              Guides & Playbooks
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl leading-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Learn how AI-native execution actually works
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              This library is designed for leaders, operators, and platform
              teams who want a practical view of autonomous execution,
              enterprise AI architecture, multi-agent workflows, and
              decision-ready intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-in-touch"
                className="inline-flex items-center gap-2 rounded-full bg-[#625FD0] px-6 py-3 text-sm  text-white transition hover:bg-[#625FD0]/90"
              >
                Book a working session
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resource"
                className="inline-flex items-center gap-2 rounded-full border border-[#625FD0]/20 bg-white px-6 py-3 text-sm  text-[#625FD0] transition hover:bg-[#625FD0]/5"
              >
                Browse resource hub
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#625FD0]/20 bg-white p-7 shadow-xl shadow-[#625FD0]/10">
            <div className="flex items-center gap-3">
              <Radar className="h-5 w-5 text-[#625FD0]" />
              <h2 className="text-xl text-gray-950">
                What these guides help you do
              </h2>
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Create a shared language for AI execution, control, and rollout before big implementation decisions are made.",
                "Understand how platform design, data access, orchestration, and governance connect inside a production operating model.",
                "Choose a realistic first deployment path instead of trying to transform every workflow at once.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] bg-[#625FD0]/6 px-5 py-5"
                >
                  <p className="text-sm leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {guideEntries.map(({ slug, page }) => (
            <Link
              key={slug}
              href={`/guides/${slug}`}
              className="group rounded-[30px] border border-[#625FD0]/15 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#625FD0]/10"
            >
              <p className="text-sm  uppercase tracking-[0.2em] text-[#625FD0]">
                {page.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl leading-tight text-gray-950 group-hover:text-[#625FD0]">
                {page.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {page.description}
              </p>
              <div className="mt-6 rounded-[22px] bg-[#625FD0]/6 p-4">
                <p className="text-xs  uppercase tracking-[0.2em] text-[#625FD0]">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {page.highlights[0]}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm  text-[#625FD0]">
                Open guide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
