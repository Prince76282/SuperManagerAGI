import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Workforce ",
  description:
    "SuperManager  AI project workforce management  intelligently assign, track, and optimize team resources across projects using autonomous AI.",
  alternates: { canonical: "https://www.supermanager.co/project-workforce" },
  openGraph: {
    title: "Project Workforce ",
    description:
      "Intelligently assign, track, and optimize team resources using autonomous AI.",
    url: "https://www.supermanager.co/project-workforce",
    type: "website",
  },
};

import ProjectWorkforce from "@/components/Footer/ProjectWorkforce/ProjectWorkforce";
import ProjectWorkforceHero from "@/components/Footer/ProjectWorkforce/ProjectWorkforceHero";
import ProjectWorkforceSection from "@/components/Footer/ProjectWorkforce/ProjectWorkforceSection";
import ProjectWorkforceTabs from "@/components/Footer/ProjectWorkforce/ProjectWorkforceTabs";
import React from "react";

const page = () => {
  return (
    <div>
      <ProjectWorkforceHero />
      <ProjectWorkforceSection />
      <ProjectWorkforceTabs />
      <ProjectWorkforce />
    </div>
  );
};

export default page;
