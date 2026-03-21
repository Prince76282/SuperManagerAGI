import AutonomousHero from "@/components/Footer/Autonomous/Autonomoushero";
import AutonomousProblems from "@/components/Footer/Autonomous/AutonomousProblems";
import AutonomousTabs from "@/components/Footer/Autonomous/Autonomoustabs";
import AutonomousUses from "@/components/Footer/Autonomous/Autonomoususes";
import React from "react";

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
