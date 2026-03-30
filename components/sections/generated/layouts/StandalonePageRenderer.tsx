import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Sparkles, Layers, Users, BookOpen } from "lucide-react";

import type {
  DropdownContentPage,
  StandalonePageLayout,
} from "@/lib/Dataset/navigation-pages";

type Props = {
  page: DropdownContentPage;
  layout: StandalonePageLayout;
};

const PRIMARY = "#625FD0";

// ================= BASE COMPONENTS =================

function Section({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16">{children}</section>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 hover:shadow-xl transition">
      {children}
    </div>
  );
}

function ActionButtons({ page }: { page: DropdownContentPage }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link
        href={page.primaryCta.href}
        className="inline-flex items-center gap-2 rounded-full bg-[#625FD0] px-6 py-3 text-sm font-semibold text-white hover:shadow-lg transition"
      >
        {page.primaryCta.label}
        <ArrowRight className="h-4 w-4" />
      </Link>

      {page.secondaryCta && (
        <Link
          href={page.secondaryCta.href}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold hover:bg-gray-50 transition"
        >
          {page.secondaryCta.label}
        </Link>
      )}
    </div>
  );
}

// 🔹 DATA HUB
function DataHubLayout({ page }: { page: DropdownContentPage }) {
  return (
    <div className="min-h-screen min-w-[1200px] bg-white text-black">
      {/* HERO */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#625FD0] text-sm font-semibold uppercase">
              {page.eyebrow}
            </span>

            <h1 className="mt-4 text-5xl font-semibold leading-tight">
              {page.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600">{page.description}</p>

            <ActionButtons page={page} />
          </div>

          <Card>
            <h3 className="text-xl font-semibold">Key Metrics</h3>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {page.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs text-[#625FD0] uppercase">
                    {stat.label}
                  </p>
                  <p className="text-xl font-semibold mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* FEATURE CARDS */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {page.featuredCards?.map((card) => (
            <Card key={card.title}>
              <p className="text-[#625FD0] text-sm uppercase font-semibold">
                {card.kicker}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* WORKFLOW */}
      <Section>
        <div className="grid md:grid-cols-4 gap-6">
          {page.workflow.map((step, index) => (
            <Card key={index}>
              <span className="text-[#625FD0] text-sm font-semibold">
                Step {index + 1}
              </span>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

// 🔹 EDITORIAL / CASE STUDY
function EditorialLayout({ page }: { page: DropdownContentPage }) {
  return (
    <div className="min-h-screen min-w-[1200px] bg-white text-black">
      {/* HERO */}
      <Section>
        <Card>
          <div className="flex items-center gap-2 text-[#625FD0]">
            <Sparkles />
            <span className="uppercase text-sm font-semibold">
              {page.eyebrow}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold">{page.title}</h1>

          <p className="mt-4 text-gray-600 max-w-2xl">{page.description}</p>

          {/* Highlights */}
          <ul className="mt-6 space-y-2">
            {page.highlights?.map((item: string, i: number) => (
              <li key={i} className="text-sm text-gray-700">
                • {item}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* STATS */}
      <Section>
        <div className="grid md:grid-cols-4 gap-4">
          {page.stats?.map((stat: any, i: number) => (
            <Card key={i}>
              <p className="text-xs uppercase text-gray-500">{stat.label}</p>
              <h3 className="text-lg font-semibold mt-2">{stat.value}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* FEATURED CARDS */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">
          {page.featuredCardsTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {page.featuredCards?.map((card: any, i: number) => (
            <Link key={i} href={card.href}>
              <Card>
                <p className="text-xs text-[#625FD0] uppercase">
                  {card.kicker}
                </p>
                <h3 className="mt-2 font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* PILLARS */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">Key Principles</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {page.pillars?.map((pillar: any, i: number) => (
            <Card key={i}>
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* USE CASES (already you had) */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {page.useCases?.map((useCase: any) => (
            <Card key={useCase.scenario}>
              <p className="text-[#625FD0] text-xs uppercase">{useCase.role}</p>
              <h3 className="mt-2 font-semibold">{useCase.scenario}</h3>
              <p className="text-sm text-gray-600 mt-1">{useCase.outcome}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* WORKFLOW */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">How to Apply This</h2>

        <div className="space-y-4">
          {page.workflow?.map((step: any, i: number) => (
            <Card key={i}>
              <h3 className="font-semibold">
                {i + 1}. {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">FAQs</h2>

        <div className="space-y-4">
          {page.faq?.map((item: any, i: number) => (
            <Card key={i}>
              <h3 className="font-semibold">{item.question}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* RELATED LINKS */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">Related</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {page.relatedLinks?.map((link: any, i: number) => (
            <Link key={i} href={link.href}>
              <Card>
                <h3 className="font-semibold">{link.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{link.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Card className="text-center">
          <h2 className="text-2xl font-semibold">{page.ctaTitle}</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            {page.ctaDescription}
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Link href={page.primaryCta.href}>
              <button className="bg-[#625FD0] text-white px-6 py-2 rounded-lg">
                {page.primaryCta.label}
              </button>
            </Link>

            <Link href={page.secondaryCta.href}>
              <button className="border px-6 py-2 rounded-lg">
                {page.secondaryCta.label}
              </button>
            </Link>
          </div>
        </Card>
      </Section>
    </div>
  );
}

// 🔹 SIMPLE FALLBACK
function DefaultLayout({ page }: { page: DropdownContentPage }) {
  return (
    <div className="min-h-screen min-w-[1200px] bg-white">
      <Section>
        <h1 className="text-5xl font-semibold">{page.title}</h1>

        <p className="mt-4 text-gray-600 max-w-2xl">{page.description}</p>

        <ActionButtons page={page} />
      </Section>
    </div>
  );
}

// ================= MAIN RENDERER =================

export default function StandalonePageRenderer({ page, layout }: Props) {
  switch (layout) {
    case "data-hub":
      return <DataHubLayout page={page} />;

    case "case-studies":
      return <EditorialLayout page={page} />;

    default:
      return <DefaultLayout page={page} />;
  }
}
