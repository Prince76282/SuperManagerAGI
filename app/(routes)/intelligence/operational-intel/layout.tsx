import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Operational Intelligence ",
  description:
    "SuperManager  AI operational intelligence  continuous AI monitoring of workflows, processes, and team performance to optimize enterprise operations.",
  alternates: {
    canonical: "https://www.supermanager.co/intelligence/operational-intel",
  },
  openGraph: {
    title: "Operational Intelligence ",
    description:
      "Continuous AI monitoring of workflows, processes, and team performance.",
    url: "https://www.supermanager.co/intelligence/operational-intel",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
