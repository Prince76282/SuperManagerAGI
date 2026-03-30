import { buildGuideMetadata, renderGuidePage } from "@/lib/generatedPageRouteHelpers";

const slug = "autonomous-execution";

export const metadata = buildGuideMetadata(slug);

export default function AutonomousExecutionGuidePage() {
  return renderGuidePage(slug);
}
