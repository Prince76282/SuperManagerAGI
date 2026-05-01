import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Decision Intelligence ",
  description:
    "SuperManager  AI decision intelligence  autonomous AI that classifies, routes, and resolves enterprise decisions faster with full audit trails.",
  alternates: {
    canonical: "https://www.supermanager.co/intelligence/decision-intel",
  },
  openGraph: {
    title: "Decision Intelligence ",
    description:
      "Autonomous AI that classifies, routes, and resolves enterprise decisions faster.",
    url: "https://www.supermanager.co/intelligence/decision-intel",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
