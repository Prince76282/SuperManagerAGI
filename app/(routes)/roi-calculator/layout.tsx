import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ROI Calculator ",
  description:
    "Calculate the ROI of deploying SuperManager  AI in your organization. See how much you can save by automating management workflows with autonomous AI.",
  alternates: { canonical: "https://www.supermanager.co/roi-calculator" },
  openGraph: {
    title: "ROI Calculator ",
    description:
      "Calculate the ROI of automating management workflows with SuperManager  AI.",
    url: "https://www.supermanager.co/roi-calculator",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
