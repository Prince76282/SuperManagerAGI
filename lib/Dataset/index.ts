/**
 * SuperManager Dataset Barrel Export
 *
 * Central import point for all datasets, types, and utilities.
 * This eliminates scattered imports across the codebase.
 *
 * Import patterns:
 * // Import specific dataset
 * import { features, type Feature } from '@/lib/Dataset';
 *
 * // Import types only
 * import type { Feature, BlogPost, ReportContent } from '@/lib/Dataset';
 *
 * // Import helpers
 * import { getById, sortByDate, filterByTag } from '@/lib/Dataset';
 *
 * // Import templates
 * import { FEATURE_TEMPLATE, BLOG_TEMPLATE } from '@/lib/Dataset';
 */

// ============================================================================
// SHARED TYPES
// ============================================================================
export type {
  Section,
  Stat,
  UseCase,
  FAQ,
  QuoteBlock,
  Button,
  Benefit,
  HowItWorks,
  ImageCard,
  UseCaseItem,
  KeyTakeaway,
} from "./types/shared";

// ============================================================================
// COMMON CONTENT PATTERNS
// ============================================================================
export type {
  BaseContent,
  FeaturedContent,
  AuthoredContent,
  TaggedContent,
  StatsContent,
  RichContent,
 
  FeatureCard,
  
  ResourceEntry,
 
  InsightItem,
  ManagerContent,
  DropdownPage,
  BlogPost,
  
} from "./types/common";

// ============================================================================
// FEATURES
// ============================================================================
export { features, getFeatureById, type Feature } from "./features";

// ============================================================================
// HOME DATA
// ============================================================================
export { HomeData, getHomeDataById, type homedata } from "./homedata";

// ============================================================================
// BLOG DATA
// ============================================================================
export { featured, latest, type Featured, type Latest } from "./blogData";

// ============================================================================
// WHITEPAPER DATA
// ============================================================================
export { WHITEPAPERS, type Whitepaper } from "./whitepapersData";

// ============================================================================
// REPORT DATA
// ============================================================================
export {
  allReports,
  featuredReport,
  reportsList,
  type ReportContent,
} from "./reportData";

// ============================================================================
// CONTENT DATA (Guides, Insights, Manager Content)
// ============================================================================
export {
  managers,
  guides,
  insights,
  type GuideItem,
  type Insight,
  type Manager,
} from "./contentData";

// ============================================================================
// INFRASTRUCTURE DATA
// ============================================================================
export {
  INFRASTRUCTURE_DATA,
  getInfrastructureCardById,
  type InfrastructureCard,
} from "./InfrastructureData";

// ============================================================================
// DROPDOWN ROUTE CONTENT
// ============================================================================
export {
  getIntelligencePage,
  getGuidePage,
  platformWorkspacePage,
  getStandalonePage,
  getStandalonePageLayout,
  type DropdownContentPage,
  type PageLinkCard,
  type PageWorkflowStep,
  type StandalonePageLayout,
} from "./dropdownRouteContent";

// ============================================================================
// UTILITIES & HELPERS
// ============================================================================
export {
  getById,
  filterByTag,
  sortByDate,
  take,
  getFeatured,
  getFeaturedItem,
  groupBy,
  isValidContent,
  getUniqueValues,
  search,
} from "./utils/helpers";

// ============================================================================
// TEMPLATES
// ============================================================================
export {
  FEATURE_TEMPLATE,
  BLOG_TEMPLATE,
  REPORT_TEMPLATE,
  WHITEPAPER_TEMPLATE,
  INFRASTRUCTURE_TEMPLATE,
  GUIDE_TEMPLATE,
  INSIGHT_TEMPLATE,
  MANAGER_TEMPLATE,
  DROPDOWN_PAGE_TEMPLATE,
  SCHEMA_REQUIREMENTS,
  getAllTemplates,
} from "./utils/templates";
