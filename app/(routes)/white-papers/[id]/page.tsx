import { WHITEPAPERS } from "@/lib/Dataset/whitepapersData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return WHITEPAPERS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const paper = WHITEPAPERS.find((p) => p.id === id);

  if (!paper) return { title: "Whitepaper" };

  return {
    title: paper.title,
    description: paper.intro,
  };
}

export default async function WhitepaperPage({ params }: PageProps) {
  const { id } = await params;

  const paper = WHITEPAPERS.find((item) => item.id === id);

  if (!paper) return notFound();

  const Icon = paper.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* HERO */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-black text-white">
              <Icon size={26} />
            </div>

            <span className="text-xs uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {paper.tag}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl leading-tight mb-6">
            {paper.title}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {paper.intro}
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-16">
          {paper.sections.map((section, i) => (
            <section key={i} className="border-l-2 border-gray-200 pl-8">
              <span className="text-2xl md:text-3xl  mb-6">
                {section.heading}
              </span>

              <div className="space-y-5 text-gray-700 text-[17px] leading-relaxed">
                {section.content.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
