import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "operational-intelligence";

export const metadata = buildGuideMetadata(slug);

export default function OperationalIntelligenceGuidePage() {
  return renderGuidePage(slug);
}
