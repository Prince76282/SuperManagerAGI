import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us ",
  description:
    "Get in touch with the SuperManager  AI team. Schedule a demo, reach our press team, or explore partnership opportunities.",
  alternates: { canonical: "https://www.supermanager.co/contactus" },
  openGraph: {
    title: "Contact Us ",
    description:
      "Get in touch with SuperManager  AI  schedule a demo or explore partnership opportunities.",
    url: "https://www.supermanager.co/contactus",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
