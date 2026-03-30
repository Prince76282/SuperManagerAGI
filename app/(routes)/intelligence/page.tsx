import {
  buildIntelligenceHubMetadata,
  renderIntelligenceHubPage,
} from "@/lib/generatedPageRouteHelpers";

export const metadata = buildIntelligenceHubMetadata();

export default function IntelligencePage() {
  return renderIntelligenceHubPage();
}
