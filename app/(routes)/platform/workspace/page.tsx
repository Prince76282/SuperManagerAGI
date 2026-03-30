import type { Metadata } from "next";

import WorkspaceControlPage from "@/components/sections/generated/layouts/WorkspaceControlPage";
import { platformWorkspacePage } from "@/lib/Dataset/dropdownRouteContent";

export const metadata: Metadata = {
  title: `${platformWorkspacePage.title} | SuperManager AGI`,
  description: platformWorkspacePage.description,
};

export default function PlatformWorkspacePage() {
  return <WorkspaceControlPage page={platformWorkspacePage} />;
}
