import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Intelligence SuperManager AI",
  description:
    "SuperManager  AI project intelligence provides real-time visibility into project health, risks, and outcomes  powered by autonomous AI monitoring and analysis.",
  alternates: { canonical: "https://www.supermanager.co/project-intelligence" },
  openGraph: {
    title: "Project Intelligence SuperManager AI",
    description:
      "Real-time project health, risks, and outcomes powered by autonomous AI monitoring.",
    url: "https://www.supermanager.co/project-intelligence",
    type: "website",
  },
};

import ProjectIntelligenceHero from "@/components/Footer/Project/Projecthero";
import ProjectIntelligenceCTA from "@/components/Footer/Project/Projectintelligencecta";
import ProjectIntelligenceProblems from "@/components/Footer/Project/Projectintelligenceproblems";
import ProjectIntelligenceTabs from "@/components/Footer/Project/Projectintelligencetabs";
import ProjectIntelligenceUses from "@/components/Footer/Project/Projectintelligenceuses";
import React from "react";

const page = () => {
  return (
    <div>
      <ProjectIntelligenceHero />
      <ProjectIntelligenceUses />
      <ProjectIntelligenceProblems />
      <ProjectIntelligenceTabs />
      <ProjectIntelligenceCTA />
    </div>
  );
};

export default page;
