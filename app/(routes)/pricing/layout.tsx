import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing ",
  description:
    "Choose the right SuperManager  AI plan for your team. Free, Pro, Premium, and Enterprise plans available. Start free  no credit card required.",
  alternates: { canonical: "https://www.supermanager.co/pricing" },
  openGraph: {
    title: "Pricing ",
    description:
      "Free, Pro, Premium, and Enterprise plans. Start free  no credit card required.",
    url: "https://www.supermanager.co/pricing",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
