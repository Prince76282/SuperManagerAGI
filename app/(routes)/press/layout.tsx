import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Press ",
  description:
    "SuperManager  AI in the press. Read the latest news, media coverage, and announcements about our autonomous AI management platform.",
  alternates: { canonical: "https://www.supermanager.co/press" },
  openGraph: {
    title: "Press ",
    description: "Latest news and media coverage about SuperManager  AI.",
    url: "https://www.supermanager.co/press",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
