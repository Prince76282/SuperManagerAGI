import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "ai-workforce";

export const metadata = buildGuideMetadata(slug);

export default function AIWorkforceGuidePage() {
  return renderGuidePage(slug);
}
