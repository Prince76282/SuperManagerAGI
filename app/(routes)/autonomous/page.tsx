import type { Metadata } from "next";
import AutonomousHero from "@/components/Footer/Autonomous/Autonomoushero";
import AutonomousProblems from "@/components/Footer/Autonomous/AutonomousProblems";
import AutonomousTabs from "@/components/Footer/Autonomous/Autonomoustabs";
import AutonomousUses from "@/components/Footer/Autonomous/Autonomoususes";
import React from "react";

export const metadata: Metadata = {
  title: "Autonomous AI  ",
  description:
    "SuperManager AGI's autonomous execution layer handles management tasks end-to-end — from task delegation to decision-making — without human intervention.",
  alternates: { canonical: "https://www.supermanager.co/autonomous" },
  openGraph: {
    title: "Autonomous AI  ",
    description: "SuperManager AGI's autonomous execution handles management tasks end-to-end.",
    url: "https://www.supermanager.co/autonomous",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <AutonomousHero />
      <AutonomousUses />
      <AutonomousProblems />
      <AutonomousTabs />
    </div>
  );
};

export default page;
