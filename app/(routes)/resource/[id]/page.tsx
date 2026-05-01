import {
  guides,
  insights,
  managers,
  type GuideItem,
  type Insight,
  type Manager,
} from "@/lib/Dataset/contentData";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

type Resource = Manager | GuideItem | Insight;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const allResources: Resource[] = [...managers, ...guides, ...insights];
  const resource = allResources.find((item) => item.id === id);
  if (!resource) return {};
  const canonical = `https://www.supermanager.co/resource/${id}`;
  return {
    title: resource.title,
    description: resource.text,
    alternates: { canonical },
    openGraph: {
      title: resource.title,
      description: resource.text,
      type: 'article',
      url: canonical,
      images: [{ url: resource.img, width: 1200, height: 630, alt: resource.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      description: resource.text,
    },
  };
}

export async function generateStaticParams() {
  const managerParams = managers.map((item) => ({ id: item.id }));
  const guideParams = guides.map((item) => ({ id: item.id }));
  const insightsParams = insights.map((item) => ({ id: item.id }));
  return [...managerParams, ...guideParams, ...insightsParams];
}

export default async function ResourcePage({ params }: PageProps) {
  const { id } = await params;

  const allResources: Resource[] = [...managers, ...guides, ...insights];
  const resource = allResources.find((item) => item.id === id);

  if (!resource) notFound();

  return (
    <main className="min-h-screen bg-[#F4F3FC]">
      {/* Hero */}
      <div className="relative py-6 overflow-hidden bg-[#1C1A3A]">
        {/* Blurred BG image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={resource.img}
            alt=""
            fill
            className="object-cover blur-md scale-110"
            aria-hidden
          />
        </div>

        {/* Purple overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#625FD0]/40 via-[#1C1A3A]/70 to-[#1C1A3A]" />

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#625FD0]/20 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full bg-[#8B88E0]/10 blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#625FD0]/40 bg-[#625FD0]/20 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A09EE8]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5C3F5]">
              Resource
            </span>
          </div>

          {/* Title */}
          <h1
            className="mb-5 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {resource.title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-sm sm:text-lg leading-relaxed text-white/55 px-2">
            {resource.text}
          </p>
        </div>
      </div>

      {/* Floating image card */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 -mt-8 sm:-mt-12 relative z-10">
        <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_20px_60px_rgba(98,95,208,0.25)] ring-2 ring-[#625FD0]/20">
          <Image
            src={resource.img}
            alt={resource.title}
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">

        {/* Intro pull-quote */}
        <div className="mb-12 sm:mb-16 relative pl-5 sm:pl-7">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#625FD0] to-[#A09EE8]" />
          <p
            className="text-lg sm:text-xl font-medium leading-relaxed text-[#2A2660]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {resource.intro}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12 sm:space-y-16">
          {resource.sections.map((section, i) => (
            <section key={section.heading}>
              {/* Section header */}
              <div className="mb-5 sm:mb-6 flex items-start gap-3 sm:gap-4">
                <span className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#625FD0] text-[11px] sm:text-xs font-bold text-white shadow-md shadow-[#625FD0]/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-[#1C1A3A]"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {section.heading}
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="ml-10 sm:ml-12 space-y-4">
                {section.content.map((paragraph, index) => (
                  <p
                    key={`${section.heading}-${index}`}
                    className="text-base sm:text-[17px] leading-[1.85] text-[#4A4770]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Divider */}
              {i < resource.sections.length - 1 && (
                <div className="mt-12 sm:mt-16 h-px bg-gradient-to-r from-transparent via-[#625FD0]/30 to-transparent" />
              )}
            </section>
          ))}
        </div>

        {/* Footer tag */}
        <div className="mt-16 sm:mt-20 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#625FD0]/20" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#625FD0]/60">
            End of Article
          </span>
          <div className="h-px flex-1 bg-[#625FD0]/20" />
        </div>
      </article>
    </main>
  );
}