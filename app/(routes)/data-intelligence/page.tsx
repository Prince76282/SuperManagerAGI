import { buildStandaloneMetadata, renderStandalonePage } from "@/lib/generatedPageRouteHelpers";

const slug = "data-intelligence";

export const metadata = buildStandaloneMetadata(slug);

export default function DataIntelligencePage() {
  return renderStandalonePage(slug);
}
