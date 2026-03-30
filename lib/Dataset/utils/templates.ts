/**
 * Dataset Template Definitions
 *
 * This file defines the expected structure for different types of datasets.
 * Use these templates as reference when adding new datasets - they ensure
 * consistency and show what's required vs optional.
 *
 * Import pattern:
 * import { FEATURE_TEMPLATE, BLOG_POST_TEMPLATE } from '@/lib/Dataset/utils/templates';
 */

import type {
  FeatureCard,
  BlogPost,
  Whitepaper,
  InfrastructureCard,
  GuideItem,
  InsightItem,
  ManagerContent,
  DropdownPage,
} from "../types/common";
import type { ReportContent } from "../reportData";

/**
 * Template for Feature Cards
 * Used for: Feature showcase items, capability cards
 * Required: id, title, stats, benefits, useCases, sections
 */
export const FEATURE_TEMPLATE: FeatureCard = {
  id: "template-feature",
  title: "Feature Title",
  tagline: "Short compelling descriptor",
  description: "1-2 sentence description of what this does",
  longDescription: "Longer, more detailed explanation for deep dives",
  image: "/Image/feature-image.png",
  href: "/home/template-feature",
  stats: [
    { value: "10x", label: "Performance improvement" },
    { value: "99.9%", label: "Uptime guarantee" },
  ],
  benefits: [
    {
      title: "Benefit 1",
      description: "What this enables or improves",
    },
    {
      title: "Benefit 2",
      description: "Another advantage",
    },
  ],
  useCases: [
    {
      role: "Team/Role",
      scenario: "Situation or use case",
      outcome: "What happens as a result",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Step 1",
      detail: "How it works explanation",
    },
  ],
  faq: [
    {
      question: "Common question?",
      answer: "Helpful answer",
    },
  ],
  sections: [
    {
      heading: "Section Heading",
      content: ["First paragraph of content", "Additional paragraph"],
    },
  ],
};

/**
 * Template for Blog Posts
 * Used for: Blog articles, news, announcements
 * Required: id, title, sections, img, date, readTime, author
 */
export const BLOG_TEMPLATE: BlogPost = {
  id: "blog-post-slug",
  title: "Blog Post Title",
  description: "Full description for meta tags",
  image: "/Image/blog-post-hero.jpg",
  img: "/Image/blog-post-hero.jpg",
  text: "Blog Post Subtitle or Label",
  author: "Author Name",
  date: "March 20, 2026",
  publishedDate: "March 20, 2026",
  readTime: "5 min read",
  intro: "Opening paragraph that hooks the reader",
  tag: ["Category", "Topic", "Tag"],
  category: "Category",
  sections: [
    {
      heading: "First Section Heading",
      content: [
        "First paragraph of the section",
        "Second paragraph explaining more",
        "Conclusion of the section",
      ],
    },
    {
      heading: "Second Section",
      content: ["Content for second section"],
    },
  ],
};

/**
 * Template for Research Reports
 * Used for: Industry reports, case studies, white papers
 * Required: id, title, stats, intro, sections, quote, keyTakeaways
 */
export const REPORT_TEMPLATE: ReportContent = {
  id: "report-name",
  title: "Research Report Title",
  tagline: "Key insight in one line",
  description: "Sentence or two about what the report covers",
  image: "/Image/report-hero.png",
  category: "Industry Report",
  readTime: "10 min read",
  publishedDate: "March 15, 2026",
  featured: false,
  logo: "/Image/company-logo.png",
  stats: [
    { value: "312", label: "Companies surveyed" },
    { value: "47%", label: "Report on metric" },
  ],
  intro: "Opening paragraph introducing the research findings",
  sections: [
    {
      heading: "Key Finding 1",
      body: "Detailed explanation of finding with data",
    },
    {
      heading: "Key Finding 2",
      body: "Another key insight from research",
    },
  ],
  quote: {
    quote: "A powerful quote from someone interviewed",
    author: "Person Name",
    role: "Their Job Title",
  },
  keyTakeaways: [
    "First key takeaway",
    "Second key takeaway",
    "Third key takeaway",
  ],
  ctaHeading: "Call to action heading",
  ctaBody: "Body text for the CTA section",
};

/**
 * Template for Whitepapers
 * Used for: Technical research, detailed guides
 * Required: id, title, intro, sections
 */
export const WHITEPAPER_TEMPLATE: Whitepaper = {
  id: "whitepaper-slug",
  tag: "Research",
  title: "Whitepaper Title",
  intro: "Introduction and abstract of the whitepaper",
  sections: [
    {
      heading: "Executive Summary",
      content: ["High-level summary of findings and recommendations"],
    },
    {
      heading: "Detailed Analysis",
      content: ["First detailed section", "Continues with multiple paragraphs"],
    },
  ],
};

/**
 * Template for Infrastructure Cards
 * Used for: Deployment options, infrastructure choices
 * Required: id, title, description, features, useCases
 */
export const INFRASTRUCTURE_TEMPLATE: InfrastructureCard = {
  id: "infrastructure-option",
  image: "/Image/infrastructure.jpeg",
  alt: "Infrastructure option visual",
  title: "Infrastructure Option Title",
  tagline: "Key benefit summary",
  description: "Short description of this option",
  extendedDescription: "Longer, detailed explanation of capabilities",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  useCases: [
    {
      icon: "🏢",
      label: "Industry/Role",
      description: "How this option serves this use case",
    },
  ],
  footer: "Footer callout or summary",
  callout: "Important callout for this option",
  buttons: [
    {
      label: "LEARN MORE",
      href: "/infrastructure/option-name",
      variant: "primary",
    },
  ],
};

/**
 * Template for Guides
 * Used for: How-to guides, playbooks, educational content
 * Required: id, title, intro, sections
 */
export const GUIDE_TEMPLATE: GuideItem = {
  id: "guide-name",
  img: "/Image/guide-image.jpg",
  text: "Guide Label",
  title: "Complete Guide to [Topic]",
  intro: "What this guide covers and what you'll learn",
  sections: [
    {
      heading: "Getting Started",
      content: ["First steps and setup", "Prerequisites or requirements"],
    },
    {
      heading: "Main Content",
      content: [
        "Detailed explanation of topic",
        "Multiple paragraphs with examples",
      ],
    },
    {
      heading: "Best Practices",
      content: ["Tips and strategies for success"],
    },
  ],
};

/**
 * Template for Insights/Analysis
 * Used for: Analysis pieces, market insights, research summaries
 * Required: id, title, intro, sections, date
 */
export const INSIGHT_TEMPLATE: InsightItem = {
  id: "insight-name",
  img: "/Image/insight-image.jpg",
  text: "Market Insight",
  title: "Insight Title",
  intro: "Opening statement of the insight",
  date: "March 10, 2026",
  href: "/intelligence/insight-name",
  sections: [
    {
      heading: "The Situation",
      content: ["Context and background"],
    },
    {
      heading: "Key Findings",
      content: ["What we discovered"],
    },
    {
      heading: "What It Means",
      content: ["Implications and takeaways"],
    },
  ],
};

/**
 * Template for Manager Content
 * Used for: Manager-focused guides, leadership content
 * Required: id, title, intro, sections
 */
export const MANAGER_TEMPLATE: ManagerContent = {
  id: "manager-guide",
  img: "/Image/manager-image.jpg",
  text: "Manager Guide",
  title: "Guide for Managers: [Topic]",
  intro: "Why this matters for managers and what they'll learn",
  sections: [
    {
      heading: "Understanding [Topic]",
      content: ["Context and why it matters"],
    },
    {
      heading: "How to Apply This",
      content: [
        "Practical steps for implementation",
        "Specific tactics and strategies",
      ],
    },
    {
      heading: "Common Challenges",
      content: ["Anticipated obstacles and solutions"],
    },
  ],
};

/**
 * Template for Dropdown Navigation Pages
 * Used for: Large navigation sections with rich content
 * Required: All fields
 */
export const DROPDOWN_PAGE_TEMPLATE: DropdownPage = {
  theme: "#625FD0",
  eyebrow: "Navigation Category",
  title: "Page Title",
  description: "One-line description",
  intro: "Longer introduction to this section",
  highlights: ["Key highlight 1", "Key highlight 2"],
  stats: [{ value: "100+", label: "Something measured" }],
  pillars: [
    {
      title: "Pillar 1",
      description: "Description of this pillar",
    },
  ],
  useCases: [
    {
      role: "Role/Team",
      scenario: "Use case scenario",
      outcome: "Outcome achieved",
    },
  ],
  workflow: [
    {
      step: 1,
      title: "Step 1",
      detail: "How step 1 works",
    },
  ],
  faq: [
    {
      question: "Question?",
      answer: "Answer",
    },
  ],
  relatedLinks: [
    {
      title: "Related Resource",
      description: "What it covers",
      href: "/resource-path",
      kicker: "Optional label",
    },
  ],
  ctaTitle: "Call to Action Title",
  ctaDescription: "Description of the CTA",
  primaryCta: {
    label: "LEARN MORE",
    href: "/path",
    variant: "primary",
  },
  secondaryCta: {
    label: "EXPLORE",
    href: "/path2",
    variant: "secondary",
  },
};

/**
 * Validation Schema for Content
 * Use this to check if data matches expected structure
 */
export const SCHEMA_REQUIREMENTS = {
  feature: ["id", "title", "sections", "stats", "benefits"],
  blog: ["id", "title", "sections", "date", "readTime"],
  report: ["id", "title", "sections", "stats", "keyTakeaways"],
  guide: ["id", "title", "intro", "sections"],
  infrastructure: ["id", "title", "description", "features", "useCases"],
};

/**
 * Helper: Log all template examples
 * Useful for development/reference
 */
export function getAllTemplates() {
  return {
    FEATURE_TEMPLATE,
    BLOG_TEMPLATE,
    REPORT_TEMPLATE,
    WHITEPAPER_TEMPLATE,
    INFRASTRUCTURE_TEMPLATE,
    GUIDE_TEMPLATE,
    INSIGHT_TEMPLATE,
    MANAGER_TEMPLATE,
    DROPDOWN_PAGE_TEMPLATE,
  };
}
