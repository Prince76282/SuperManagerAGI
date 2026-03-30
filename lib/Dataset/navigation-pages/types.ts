import type { Button, FAQ, ImageCard, Stat, UseCase } from "../types/shared";

export type PageTheme =
  | "#625FD0"
  | "indigo"
  | "emerald"
  | "sky"
  | "rose"
  | "amber"
  | string;

export type PageLinkCard = ImageCard;

export type PageWorkflowStep = {
  title: string;
  detail: string;
};

export type DropdownContentPage = {
  theme: PageTheme;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  stats: Stat[];
  pillars?: Array<{
    title: string;
    description: string;
  }>;
  useCases: UseCase[];
  workflow: PageWorkflowStep[];
  faq: FAQ[];
  relatedLinks: PageLinkCard[];
  ctaTitle: string;
  ctaDescription: string;
  primaryCta: Button;
  secondaryCta?: Button;
  featuredCards?: PageLinkCard[];
  featuredCardsTitle?: string;
  showCalculator?: boolean;
};

export type GuideSeed = {
  slug: string;
  theme: PageTheme;
  title: string;
  summary: string;
  promise: string;
  audience: [string, string, string];
  focus: [string, string, string];
  relatedLinks: PageLinkCard[];
};

export type IntelligenceCategory =
  | "data-layer"
  | "enterprise-intelligence"
  | "predictive-intelligence"
  | "decision-intelligence";

export type IntelligenceSeed = {
  slug: string;
  theme: PageTheme;
  category: IntelligenceCategory;
  title: string;
  summary: string;
  signals: [string, string, string];
  teams: [string, string, string];
  action: string;
  relatedLinks: PageLinkCard[];
};

export type StandalonePageLayout =
  | "data-hub"
  | "case-studies"
  | "blueprint"
  | "workforce"
  | "roi"
  | "roadmap"
  | "media"
  | "careers"
  | "intelligence-hub";
