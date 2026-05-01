import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Newsroom ",
  description:
    "SuperManager  AI newsroom  latest announcements, product updates, and company news about the autonomous AI management platform.",
  alternates: { canonical: "https://www.supermanager.co/news-room" },
  openGraph: {
    title: "Newsroom ",
    description:
      "Latest announcements, product updates, and company news from SuperManager  AI.",
    url: "https://www.supermanager.co/news-room",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
