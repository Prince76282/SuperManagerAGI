export type {
  DropdownContentPage,
  GuideSeed,
  IntelligenceCategory,
  IntelligenceSeed,
  PageLinkCard,
  PageTheme,
  PageWorkflowStep,
  StandalonePageLayout,
} from "./types";

export {
  guidePages,
  guidePageSlugs,
  getGuidePage,
} from "./guides";

export {
  intelligencePages,
  intelligencePageSlugs,
  getIntelligencePage,
} from "./intelligence";

export {
  standalonePages,
  standalonePageSlugs,
  getStandalonePage,
  getStandalonePageLayout,
} from "./standalone";

export { platformWorkspacePage } from "./workspace";
