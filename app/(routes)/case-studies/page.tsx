import { buildStandaloneMetadata, renderStandalonePage } from "@/lib/generatedPageRouteHelpers";

const slug = "case-studies";

export const metadata = buildStandaloneMetadata(slug);

export default function CaseStudiesPage() {
  return renderStandalonePage(slug);
}
