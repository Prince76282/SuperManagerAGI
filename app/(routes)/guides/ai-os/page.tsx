import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "ai-os";

export const metadata = buildGuideMetadata(slug);

export default function AIOsGuidePage() {
  return renderGuidePage(slug);
}
