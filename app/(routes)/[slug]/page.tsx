import type { Metadata } from "next";
import { notFound } from "next/navigation";

import StandalonePageRenderer from "@/components/sections/generated/layouts/StandalonePageRenderer";
import {
  getStandalonePage,
  getStandalonePageLayout,
  standalonePageSlugs,
} from "@/lib/Dataset/dropdownRouteContent";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const handledStandaloneSlugs = standalonePageSlugs.filter(
  (slug) => slug !== "intelligence",
);

export const dynamicParams = false;

export function generateStaticParams() {
  return handledStandaloneSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getStandalonePage(slug);

  if (!page || slug === "intelligence") {
    return {};
  }

  return {
    title: `${page.title} | SuperManager AGI`,
    description: page.description,
  };
}

export default async function StandaloneDropdownPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getStandalonePage(slug);
  const layout = getStandalonePageLayout(slug);

  if (!page || slug === "intelligence") {
    notFound();
  }

  return <StandalonePageRenderer page={page} layout={layout} />;
}
