import SupermanageHero from "@/components/sections/Support/SupermanageHero";
import SupermanageResources from "@/components/sections/Support/SupermanageResources";
import SupermanageSupport from "@/components/sections/Support/SupermanageSupport";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support ",
  description:
    "Get help with SuperManager  AI. Access documentation, resources, and connect with our support team to resolve any questions about the platform.",
  alternates: { canonical: "https://www.supermanager.co/support" },
  openGraph: {
    title: "Support ",
    description:
      "Get help with SuperManager  AI. Access documentation, resources, and connect with our support team.",
    url: "https://www.supermanager.co/support",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <SupermanageHero />
      <SupermanageResources />
      <SupermanageSupport />
    </div>
  );
};

export default page;
