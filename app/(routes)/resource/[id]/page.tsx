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

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

type Resource = Manager | GuideItem | Insight;

export async function generateStaticParams() {
  const managerParams = managers.map((item) => ({
    id: item.id,
  }));

  const guideParams = guides.map((item) => ({
    id: item.id,
  }));

  const insightsParams = insights.map((item) => ({
    id: item.id,
  }));

  return [...managerParams, ...guideParams, ...insightsParams];
}

export default async function ResourcePage({ params }: PageProps) {
  const { id } = await params;

  const allResources: Resource[] = [...managers, ...guides, ...insights];
  const resource = allResources.find((item) => item.id === id);

  if (!resource) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-[1200px] px-6 py-20">
      <h1 className="mb-6 py-10 text-4xl">{resource.title}</h1>

      <Image
        src={resource.img}
        alt={resource.title}
        width={1600}
        height={900}
        className="mb-8 h-auto w-full rounded-xl object-contain"
      />

      <p className="py-10 text-lg leading-relaxed text-gray-700">
        {resource.text}
      </p>

      <p className="py-6 text-2xl">{resource.intro}</p>

      <div className="space-y-10">
        {resource.sections.map((section) => (
          <section key={section.heading} className="py-6">
            <h2 className="mb-4 text-2xl font-semibold">{section.heading}</h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              {section.content.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
