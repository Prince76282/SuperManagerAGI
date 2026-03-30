import type { Metadata } from "next";
import { notFound } from "next/navigation";

import GuideEditorialPage from "@/components/sections/generated/layouts/GuideEditorialPage";
import IntelligenceHubPage from "@/components/sections/generated/layouts/IntelligenceHubPage";
import IntelligenceSignalPage from "@/components/sections/generated/layouts/IntelligenceSignalPage";
import StandalonePageRenderer from "@/components/sections/generated/layouts/StandalonePageRenderer";
import {
  getGuidePage,
  getIntelligencePage,
  getStandalonePage,
  getStandalonePageLayout,
} from "@/lib/Dataset/dropdownRouteContent";

function buildMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | SuperManager AGI`,
    description,
  };
}

export function buildGuideMetadata(slug: string): Metadata {
  const page = getGuidePage(slug);
  return page ? buildMetadata(page.title, page.description) : {};
}

export function renderGuidePage(slug: string) {
  const page = getGuidePage(slug);

  if (!page) {
    notFound();
  }

  return <GuideEditorialPage page={page} />;
}

export function buildIntelligenceMetadata(slug: string): Metadata {
  const page = getIntelligencePage(slug);
  return page ? buildMetadata(page.title, page.description) : {};
}

export function renderIntelligencePage(slug: string) {
  const page = getIntelligencePage(slug);

  if (!page) {
    notFound();
  }

  return <IntelligenceSignalPage page={page} />;
}

export function buildStandaloneMetadata(slug: string): Metadata {
  const page = getStandalonePage(slug);
  return page ? buildMetadata(page.title, page.description) : {};
}

export function renderStandalonePage(slug: string) {
  const page = getStandalonePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <StandalonePageRenderer
      page={page}
      layout={getStandalonePageLayout(slug)}
    />
  );
}

export function buildIntelligenceHubMetadata(): Metadata {
  const page = getStandalonePage("intelligence");
  return page ? buildMetadata(page.title, page.description) : {};
}

export function renderIntelligenceHubPage() {
  const page = getStandalonePage("intelligence");

  if (!page) {
    notFound();
  }

  return <IntelligenceHubPage page={page} />;
}
