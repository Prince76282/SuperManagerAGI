import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Research Reports SuperManager AI",
  description:
    "Deep research on AI operations, workflow automation, and autonomous AI teams  written for leaders building the next generation of companies.",
  alternates: { canonical: "https://www.supermanager.co/research-reports" },
  openGraph: {
    title: "Research Reports SuperManager AI",
    description:
      "Deep research on AI operations, workflow automation, and autonomous AI teams.",
    url: "https://www.supermanager.co/research-reports",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
