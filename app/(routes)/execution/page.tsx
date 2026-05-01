import type { Metadata } from "next";
import React from "react";
import HomePage from "@/components/sections/Execution/HomePage";

export const metadata: Metadata = {
  title: "Autonomous Execution ",
  description:
    "SuperManager  AI execution engine turns high-level goals into completed work  orchestrating AI agents across your tools to deliver measurable outcomes.",
  alternates: { canonical: "https://www.supermanager.co/execution" },
  openGraph: {
    title: "Autonomous Execution ",
    description:
      "SuperManager  AI turns high-level goals into completed work via autonomous AI execution.",
    url: "https://www.supermanager.co/execution",
    type: "website",
  },
};
import AIForService from "@/components/sections/Execution/Aiforservice";
import TransformServiceWithAI from "@/components/sections/Execution/Transformservicewithai";
import AcceleratorsSection from "@/components/sections/Execution/Acceleratorssection";
import ResourcesSection from "@/components/sections/Execution/Resourcessection";

const Execution = () => {
  return (
    <div>
      <HomePage />
      <AIForService />
      <TransformServiceWithAI />
      <AcceleratorsSection />
      <ResourcesSection />
    </div>
  );
};

export default Execution;
