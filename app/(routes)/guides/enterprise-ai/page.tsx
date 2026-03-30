import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "enterprise-ai";

export const metadata = buildGuideMetadata(slug);

export default function EnterpriseAIGuidePage() {
  return renderGuidePage(slug);
}
