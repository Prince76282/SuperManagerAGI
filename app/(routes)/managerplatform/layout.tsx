import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Manager Platform SuperManager AI",
  description:
    "The SuperManager  AI manager platform  a complete AI-native workspace for autonomous planning, delegation, tracking, and reporting across your organization.",
  alternates: { canonical: "https://www.supermanager.co/managerplatform" },
  openGraph: {
    title: "Manager Platform SuperManager AI",
    description:
      "Complete AI-native workspace for autonomous planning, delegation, and tracking.",
    url: "https://www.supermanager.co/managerplatform",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
