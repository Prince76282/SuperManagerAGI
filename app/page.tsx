"use client";

import { useEffect } from "react";
import HomeScreen from "@/components/sections/HomeScreen";
import SuperManagerSection from "@/components/sections/SuperManagerSection";
import ProjectManagementPlatform from "@/components/sections/ProjectManagementPlatform";
import DecisionIntelligence from "@/components/sections/DecisionIntelligence";
import SuperManagerTabs from "@/components/sections/SuperManagerTabs";
import InfrastructurePartners from "@/components/sections/InfrastructurePartners";
import TestimonialsSection from "@/components/sections/Testimonialssection";

const Page = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <HomeScreen />
      <SuperManagerSection />
      <ProjectManagementPlatform />
      <DecisionIntelligence />
      <SuperManagerTabs />
      <TestimonialsSection />
      <InfrastructurePartners />
    </main>
  );
};

export default Page;