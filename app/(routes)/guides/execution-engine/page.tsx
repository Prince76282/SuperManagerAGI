import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "execution-engine";

export const metadata = buildGuideMetadata(slug);

export default function ExecutionEngineGuidePage() {
  return renderGuidePage(slug);
}
