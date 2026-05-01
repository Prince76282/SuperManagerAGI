import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "White Papers ",
  description:
    "Download SuperManager  AI white papers on autonomous AI management, enterprise workflow automation, and AI-driven organizational transformation.",
  alternates: { canonical: "https://www.supermanager.co/white-papers" },
  openGraph: {
    title: "White Papers ",
    description:
      "Download white papers on autonomous AI management and enterprise workflow automation.",
    url: "https://www.supermanager.co/white-papers",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
