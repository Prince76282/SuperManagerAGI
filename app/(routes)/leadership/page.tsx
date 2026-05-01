import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership  SuperManager AI",
  description:
    "Meet the leadership team behind SuperManager AGI — visionaries building autonomous AI management systems to transform how enterprises operate.",
  alternates: { canonical: "https://www.supermanager.co/leadership" },
  openGraph: {
    title: "Leadership  SuperManager AI",
    description: "Meet the leadership team behind SuperManager AGI.",
    url: "https://www.supermanager.co/leadership",
    type: "website",
  },
};

import HomePage from "../../../components/sections/Leadership/HomePage";
import EnterpriseFeatures from "@/components/sections/Leadership/departments";
import Supermanagersection from "@/components/sections/Leadership/Supermanagersection";
import Prebulit from "@/components/sections/Leadership/Prebulit";
import WhyEnterprises from "@/components/sections/Leadership/Whyenterprises";

export default function LeadershipPage() {
  return (
    <>
      <HomePage />
      <Supermanagersection />
      <EnterpriseFeatures />
      <Prebulit />
      <WhyEnterprises />
    </>
  );
}
