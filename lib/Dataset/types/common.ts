/**
 * Common Content Pattern Types for SuperManager Datasets
 *
 * This file defines the standard data structures that content follows.
 * All datasets extend or compose from these base patterns.
 *
 * Import pattern:
 * import { BaseContent, FeaturedContent, AuthoredContent } from '@/lib/Dataset/types/common';
 */

import type { LucideIcon } from "lucide-react";
import type {
  Section,
  Stat,
  UseCase,
  FAQ,
  QuoteBlock,
  Button,
  Benefit,
  HowItWorks,
} from "./shared";

/**
 * BaseContent: Foundation pattern for all content
 * Provides id, title, description, and sections structure
 * Used by: Guides, Insights, Manager Content, Home Data
 */
export type BaseContent = {
  id: string;
  title: string;
  description?: string;
  intro?: string;
  sections: Section[];
};

/**
 * FeaturedContent: Content with metadata highlighting and images
 * Used by: Blog posts, Featured articles, Homepage content
 * Extends: BaseContent
 */
export type FeaturedContent = BaseContent & {
  img?: string;
  text?: string; // Tagline or label
  featured?: boolean;
  image?: string;
};

/**
 * AuthoredContent: Content with publication metadata
 * Used by: Blog posts, Articles, Whitepapers, Guides
 * Extends: FeaturedContent
 */
export type AuthoredContent = FeaturedContent & {
  author?: string;
  date?: string;
  publishedDate?: string;
  readTime?: string;
};

/**
 * TaggedContent: Content that can be filtered by tags
 * Used by: Blog posts, Articles, Resources
 * Extends: AuthoredContent
 */
export type TaggedContent = AuthoredContent & {
  tag?: string[];
  tags?: string[];
  category?: string;
};

/**
 * StatsContent: Content displaying key metrics
 * Used by: Features, Reports, Infrastructure cards
 * Extends: BaseContent
 */
export type StatsContent = BaseContent & {
  stats: Stat[];
  tagline?: string;
};

/**
 * RichContent: Content with multiple enhancement layers
 * Used by: Features, Infrastructure data, Comprehensive guides
 * Includes: stats, benefits, use cases, FAQs, how it works
 */
export type RichContent = StatsContent & {
  longDescription?: string;
  benefits?: Benefit[];
  useCases?: UseCase[];
  howItWorks?: HowItWorks[];
  faq?: FAQ[];
  href?: string;
  image?: string;
  tagline?: string;
};

/**
 * ReportContent: Enterprise research/report structure
 * Used by: Research reports, Industry reports, White papers
 */
export type ReportContent = {
  id: string;
  title: string;
  tagline?: string;
  description?: string;
  image?: string;
  category?: string;
  readTime?: string;
  publishedDate?: string;
  featured?: boolean;
  logo?: string;
  stats: Stat[];
  intro: string;
  sections: Section[];
  quote: QuoteBlock;
  keyTakeaways: string[];
  ctaHeading?: string;
  ctaBody?: string;
};

/**
 * FeatureCard: Feature/capability card with rich metadata
 * Used by: Home features section, Product capabilities
 */
export type FeatureCard = RichContent;

/**
 * InfrastructureCard: Infrastructure option with features and use cases
 * Used by: Infrastructure Partners section
 */
export type InfrastructureCard = {
  id: string;
  image: string;
  alt: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  features: string[];
  useCases: Array<{
    icon: string;
    label: string;
    description: string;
  }>;
  footer: string;
  callout: string;
  buttons: Button[];
};

/**
 * ResourceEntry: Generic entry for guides, insights, manager content
 * Used by: Content Data (guides, insights, managers)
 */
export type ResourceEntry = {
  id: string;
  img?: string;
  text?: string;
  title: string;
  intro: string;
  sections: Section[];
  date?: string;
  href?: string;
};

/**
 * GuideItem: Specialized resource entry for guides
 * Extends: ResourceEntry
 */
export type GuideItem = ResourceEntry;

/**
 * InsightItem: Specialized resource entry for insights
 * Extends: ResourceEntry
 */
export type InsightItem = ResourceEntry & {
  date: string;
  href: string;
};

/**
 * ManagerContent: Specialized resource entry for manager guides
 * Extends: ResourceEntry
 */
export type ManagerContent = ResourceEntry;

/**
 * DropdownPage: Full page structure for navigation dropdowns
 * Used by: Dropdown route content
 */
export type DropdownPage = {
  theme: "#625FD0";
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
  workflow: HowItWorks[];
  faq: FAQ[];
  relatedLinks: Array<{
    title: string;
    description: string;
    href: string;
    kicker?: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
  primaryCta: Button;
  secondaryCta?: Button;
  featuredCards?: Array<{
    title: string;
    description: string;
    href: string;
    kicker?: string;
  }>;
  featuredCardsTitle?: string;
  showCalculator?: boolean;
};

/**
 * BlogPost: Full blog post structure
 * Extends: TaggedContent
 */
export type BlogPost = TaggedContent;

/**
 * Whitepaper: Research whitepaper with sections
 * Used by: White papers data
 */
export type Whitepaper = {
  id: string;
  tag: string;
  title: string;
  icon?: LucideIcon;
  intro: string;
  sections: Section[];
};
