import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { renderIntelligencePage } from "@/lib/generatedPageRouteHelpers";
import {
  getIntelligencePage,
  intelligencePageSlugs,
} from "@/lib/Dataset/dropdownRouteContent";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return intelligencePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIntelligencePage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title}  SuperManager AGI`,
    description: page.description,
  };
}

export default async function IntelligenceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!getIntelligencePage(slug)) {
    notFound();
  }

  return renderIntelligencePage(slug);
}
