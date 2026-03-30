import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "multi-agent";

export const metadata = buildGuideMetadata(slug);

export default function MultiAgentGuidePage() {
  return renderGuidePage(slug);
}
