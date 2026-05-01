import Customersuccesssection from "@/components/sections/Partners/Customersuccesssection";
import PartnersHero from "@/components/sections/Partners/Partnershero";
import WhyPartnerSection from "@/components/sections/Partners/Whypartnersection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners ",
  description:
    "Join the SuperManager  AI partner ecosystem. Partner with us to bring autonomous AI management solutions to enterprise clients worldwide.",
  alternates: { canonical: "https://www.supermanager.co/partners" },
  openGraph: {
    title: "Partners ",
    description:
      "Join the SuperManager  AI partner ecosystem and bring autonomous AI management to enterprise clients.",
    url: "https://www.supermanager.co/partners",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <PartnersHero />
      <WhyPartnerSection />
      <Customersuccesssection />
    </div>
  );
};

export default page;
