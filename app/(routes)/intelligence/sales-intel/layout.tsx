import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sales Intelligence ",
  description:
    "SuperManager AGI sales intelligence  AI-powered insights on pipeline health, deal risks, and revenue forecasting to help your sales team close faster.",
  alternates: {
    canonical: "https://www.supermanager.co/intelligence/sales-intel",
  },
  openGraph: {
    title: "Sales Intelligence ",
    description:
      "AI-powered insights on pipeline health, deal risks, and revenue forecasting.",
    url: "https://www.supermanager.co/intelligence/sales-intel",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
