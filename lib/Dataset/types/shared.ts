/**
 * Shared Types Library for SuperManager Datasets
 *
 * This file contains reusable type definitions used across multiple datasets.
 * Using shared types eliminates duplication and ensures consistency across the codebase.
 *
 * Import pattern:
 * import { Section, Stat, UseCase, FAQ, QuoteBlock, Button, ImageCard } from '@/lib/Dataset/types/shared';
 */

/**
 * Section: Used for content organized by heading + multi-paragraph content
 * Common across: features, blog posts, reports, whitepapers, guides, home data
 *
 * @example
 * {
 *   heading: "The Hidden Cost of Manual Operations",
 *   content: [
 *     "Enterprise systems were not built to communicate with each other.",
 *     "Each manual handoff introduces latency..."
 *   ]
 * }
 */
export type Section = {
  heading: string;
  content: string[];
};

/**
 * Stat: Key metrics displayed as value + label pairs
 * Common across: features, reports, infrastructure cards, research content
 *
 * @example
 * { value: "2–15ms", label: "query latency (vs 200–500ms APIs)" }
 */
export type Stat = {
  value: string;
  label: string;
};

/**
 * UseCase: Real-world application scenarios with context and outcome
 * Common across: features, infrastructure cards, guides
 *
 * Fields can vary slightly:
 * - role/team: Who uses this (e.g., "Data Engineering Team", "Enterprise Architect")
 * - scenario: What situation they're in / what they want to do
 * - outcome: What improves as a result
 *
 * @example
 * {
 *   role: "Data Engineering Team",
 *   scenario: "Replace slow API-based data pipelines with ADA direct connections",
 *   outcome: "Query latency drops from 340ms to 9ms..."
 * }
 */
export type UseCase = {
  role: string;
  scenario: string;
  outcome: string;
};

/**
 * FAQ: Questions and answers for feature/product documentation
 * Common across: features, infrastructure cards, resource guides
 *
 * @example
 * {
 *   question: "How does ADA differ from traditional RAG?",
 *   answer: "ADA connects directly to databases instead of relying on document indexing..."
 * }
 */
export type FAQ = {
  question: string;
  answer: string;
};

/**
 * QuoteBlock: Testimonials and attributed quotes
 * Common across: reports, customer stories, case studies
 *
 * @example
 * {
 *   quote: "We don't manage our operations anymore...",
 *   author: "Priya Nair",
 *   role: "VP Operations, Tier-1 D2C Brand"
 * }
 */
export type QuoteBlock = {
  quote: string;
  author: string;
  role: string;
};

/**
 * Button: CTA button specifications
 * Common across: features, infrastructure cards, resource pages
 *
 * @example
 * { label: "OPEN APP", href: "/app/login", variant: "primary" }
 */
export type Button = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

/**
 * Benefit: Feature benefit or advantage statement
 * Common across: features, infrastructure cards, platform pages
 *
 * @example
 * {
 *   title: "Direct Database Access",
 *   description: "ADA bypasses API layers entirely..."
 * }
 */
export type Benefit = {
  title: string;
  description: string;
};

/**
 * HowItWorks: Step-by-step process documentation
 * Common across: features, guides, infrastructure
 *
 * @example
 * {
 *   step: 1,
 *   title: "Secure Connection Establishment",
 *   detail: "ADA establishes encrypted, read-only connections..."
 * }
 */
export type HowItWorks = {
  step: number;
  title: string;
  detail: string;
};

/**
 * ImageCard: Card with image, title, and description
 * Common across: Infrastructure data, resource cards
 *
 * @example
 * {
 *   image: "/Image/card.jpg",
 *   title: "Private Deployment",
 *   description: "Deploy inside your AWS, Azure, or GCP environment...",
 *   href: "/platform/private-deployment"
 * }
 */
export type ImageCard = {
  image?: string;
  alt?: string;
  title: string;
  description?: string;
  href?: string;
  kicker?: string;
};

/**
 * UseCaseItem: Alternative UseCase structure with icon/label format
 * Used in: Infrastructure cards for quick visual reference
 *
 * @example
 * {
 *   icon: "🏦",
 *   label: "Financial Services",
 *   description: "Meet FCA, SEC, and MAS requirements..."
 * }
 */
export type UseCaseItem = {
  icon: string;
  label: string;
  description: string;
};

/**
 * KeyTakeaway: Single-line key takeaways for reports/guides
 * Used in: Research reports, white papers
 */
export type KeyTakeaway = string;
