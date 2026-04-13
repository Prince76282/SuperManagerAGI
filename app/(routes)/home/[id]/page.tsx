import Image from "next/image";
import { notFound } from "next/navigation";

import { features, getFeatureById, type Feature } from "@/lib/Dataset/features";
import {
  getInfrastructureCardById,
  INFRASTRUCTURE_DATA,
  type InfrastructureCard,
} from "@/lib/Dataset/InfrastructureData";
import {
  HomeData,
  getHomeDataById,
  type homedata,
} from "@/lib/Dataset/homedata";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return Array.from(
    new Set([
      ...HomeData.map(({ id }) => id),
      ...features.map(({ id }) => id),
      ...INFRASTRUCTURE_DATA.cards.map(({ id }) => id),
    ]),
    (id) => ({ id }),
  );
}

function HomeArticleDetail({ data }: { data: homedata }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-20">
      <h1 className="text-3xl lg:text-5xl  mb-4">{data.title}</h1>

      <p className="text-gray-500 mb-6">
        {data.date} | {data.readTime}
      </p>

      <div className="relative w-full h-72 lg:h-96 mb-8 rounded-xl overflow-hidden">
        <Image src={data.img} alt={data.title} fill className="object-cover" />
      </div>
      <p className="text-lg text-gray-700 mb-6">{data.desc}</p>

      <p className="text-lg text-gray-700 mb-6">{data.intro}</p>

      <div className="space-y-8">
        {data.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl  mb-3">{section.heading}</h2>
            {section.content.map((para, j) => (
              <p key={j} className="text-gray-600 mb-2">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureDetail({ feature }: { feature: Feature }) {
  const overviewParagraphs = feature.longDescription.split("\n\n");

  return (
    <article className="bg-white">
      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#625FD0]">
              Feature
            </p>
            <h1 className="text-3xl lg:text-5xl  tracking-tight text-gray-900 sm:text-5xl">
              {feature.title}
            </h1>
            <p className="text-xl text-gray-600">{feature.tagline}</p>
            <p className="text-base leading-8 text-gray-600">
              {feature.description}
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#F0F6F9] p-8 shadow-sm">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-contain p-6"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {feature.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl   text-gray-900">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl  text-gray-900">Overview</h2>
            {overviewParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-3xl bg-[#F7FAFC] p-8">
            <h2 className="text-3xl lg:text-5xl  text-gray-900">Benefits</h2>
            <div className="mt-6 space-y-5">
              {feature.benefits.map((benefit) => (
                <div key={benefit.title}>
                  <p className="text-lg  text-gray-900">{benefit.title}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl  text-gray-900">Use Cases</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {feature.useCases.map((useCase) => (
              <div
                key={useCase.role}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#625FD0]">
                  {useCase.role}
                </p>
                <p className="mt-4  text-lg  text-gray-900">
                  {useCase.scenario}
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {useCase.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl  text-gray-900">How It Works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {feature.howItWorks.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-gray-200 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#625FD0]">
                Step {step.step}
              </p>
              <h3 className="mt-3 text-xl  text-gray-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl  text-gray-900">FAQ</h2>
        <div className="mt-8 space-y-4">
          {feature.faq.map((item) => (
            <div key={item.question} className="rounded-3xl bg-[#F7FAFC] p-6">
              <p className="text-lg font-semibold text-gray-900">{item.question}</p>
              <p className="mt-3 text-md leading-7 text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

function InfrastructureDetail({ card }: { card: InfrastructureCard }) {
  const { header, complianceSection, securityPrinciples, cta } =
    INFRASTRUCTURE_DATA;

  return (
    <article className="bg-white">
      <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm  font-semibold uppercase tracking-[0.2em] text-[#625FD0]">
              Enterprise Infrastructure
            </p>
            <h1 className="text-4xl  tracking-tight text-gray-900 sm:text-5xl">
              {card.title}
            </h1>
            <p className="text-xl text-gray-600">{card.tagline}</p>
            <p className="text-base leading-8 text-gray-600">
              {card.description}
            </p>
            <p className="text-base leading-8 text-gray-600">
              {card.extendedDescription}
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#F0F6F9] p-8 shadow-sm">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              className="object-contain p-6"
            />
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-[#F7FAFC] p-8">
          <p className="text-sm  uppercase tracking-[0.16em] text-[#625FD0]">
            Why It Matters
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-700">{card.callout}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl  text-gray-900">Deployment Capabilities</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {card.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm leading-7 text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl  text-gray-900">Where Teams Use It</h2>
            <div className="mt-6 space-y-4">
              {card.useCases.map((useCase) => (
                <div
                  key={useCase.label}
                  className="rounded-2xl bg-[#F7FAFC] p-5"
                >
                  <h3 className="text-lg  text-gray-900">{useCase.label}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl  text-gray-900">{complianceSection.title}</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">
            {complianceSection.description}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {complianceSection.frameworks.map((framework) => (
              <div
                key={framework.name}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <h3 className="text-lg  text-gray-900">{framework.name}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl  text-gray-900">{securityPrinciples.title}</h2>
        <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">
          {securityPrinciples.description}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {securityPrinciples.principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-3xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-lg  text-gray-900">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-[#625FD0] px-8 py-10 text-gray-900">
          <h1 className="text-lg  uppercase tracking-[0.16em] text-gray-900">
            {header.title}
          </h1>
          <h2 className="mt-4 text-3xl ">{cta.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 ">
            {cta.description}
          </p>
          <p className="mt-4 text-sm leading-7 ">{card.footer}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {cta.buttons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className={`inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm  ${
                  button.variant === "primary"
                    ? "bg-[#625FD0] text-white"
                    : "border bg-[#625FD0] border-white/30 text-white"
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export default async function HomeDetailPage({ params }: Props) {
  const { id } = await params;
  const article = getHomeDataById(id);

  if (article) {
    return <HomeArticleDetail data={article} />;
  }

  const feature = getFeatureById(id);

  if (feature) {
    return <FeatureDetail feature={feature} />;
  }

  const infrastructureCard = getInfrastructureCardById(id);

  if (infrastructureCard) {
    return <InfrastructureDetail card={infrastructureCard} />;
  }

  notFound();
}
