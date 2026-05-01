import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Form ",
  description:
    "Send a message to the SuperManager AGI team. Reach out for press inquiries, partnership questions, or general information.",
  alternates: { canonical: "https://www.supermanager.co/contact-form" },
  openGraph: {
    title: "Contact Form ",
    description: "Send a message to the SuperManager AGI team.",
    url: "https://www.supermanager.co/contact-form",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
