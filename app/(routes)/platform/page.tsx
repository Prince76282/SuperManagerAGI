import type { Metadata } from "next";
import AgentPlatformTabs from "@/components/Footer/Platform/Agentplatformtabs";
import AgentValueSection from "@/components/Footer/Platform/Agentvaluesection";
import AnalystRecognition from "@/components/Footer/Platform/Analystrecognition";
import Agentplatformhero from "@/components/Footer/Platform/Agentplatformhero";
import React from "react";

export const metadata: Metadata = {
  title: "AI Agent Platform SuperManager AI",
  description:
    "The SuperManager  AI agent platform  a unified infrastructure for deploying, man AIng, and scaling autonomous AI agents across your enterprise operations.",
  alternates: { canonical: "https://www.supermanager.co/platform" },
  openGraph: {
    title: "AI Agent Platform SuperManager AI",
    description:
      "Deploy, manage, and scale autonomous AI agents across your enterprise with SuperManager  AI.",
    url: "https://www.supermanager.co/platform",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <Agentplatformhero />
      <AgentValueSection />
      <AgentPlatformTabs />
      <AnalystRecognition />
    </div>
  );
};

export default page;
