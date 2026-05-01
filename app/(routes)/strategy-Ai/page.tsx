import type { Metadata } from "next";
import React from "react";
import HomePage from "@/components/sections/Strategy/HomePage";

export const metadata: Metadata = {
  title: "AI Strategy ",
  description:
    "SuperManager AGI strategy AI translates organizational goals into executable workflows  providing intelligent foresight and autonomous strategic execution.",
  alternates: { canonical: "https://www.supermanager.co/strategy-Ai" },
  openGraph: {
    title: "AI Strategy ",
    description:
      "Translate organizational goals into executable workflows with autonomous strategic AI.",
    url: "https://www.supermanager.co/strategy-Ai",
    type: "website",
  },
};
import Challengessection from "@/components/sections/Strategy/Challengessection";
import SuperManagerImpact from "@/components/sections/Strategy/Supermanagerimpact";
import IntroducingAGI from "@/components/sections/Strategy/IntroducingAGI";

const Strategy = () => {
  return (
    <div>
      <HomePage />
      <Challengessection />
      <SuperManagerImpact />
      <IntroducingAGI />
    </div>
  );
};

export default Strategy;
