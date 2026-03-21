import { managers, guides, insights } from "@/lib/Dataset/contentData";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

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

  const resource =
    managers.find((item) => item.id === id) ||
    guides.find((item) => item.id === id) ||
    insights.find((item) => item.id === id);

  if (!resource) {
    notFound();
  }

  return (
    <div className="max-w-[1200px] mx-auto py-20 px-6">
      <h1 className="text-4xl mb-6 py-10">
        {"title" in resource ? resource.title : resource.id}
      </h1>

      <Image
        src={resource.img}
        alt={"title" in resource ? resource.title : resource.text}
        width={500}
        height={300}
        className="rounded-xl mb-8 w-full h-auto object-contain"
      />

      <p className="text-lg py-10 text-gray-700 leading-relaxed">
        {"text" in resource ? resource.text : resource.title}
      </p>
      {"intro" in resource && (
        <span className="text-2xl ">{resource.intro}</span>
      )}

      {"sections" in resource &&
        resource.sections?.map(
          (
            section: { heading: string; content: string[] },
            index: number
          ) => (
          <div key={index}>
            <p className="text-2xl  py-10">{section.heading}</p>

            <p className="text-lg text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </div>
          )
        )}
    </div>
  );
}
