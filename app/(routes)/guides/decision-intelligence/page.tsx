import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "decision-intelligence";

export const metadata = buildGuideMetadata(slug);

export default function DecisionIntelligenceGuidePage() {
  return renderGuidePage(slug);
}
