import FeaturedSection from "@/components/sections/aboutpage/Featuredsection";
import HomePage from "@/components/sections/aboutpage/HomePage";
import LogoMarqueeSection from "@/components/sections/aboutpage/Logomarquee";
import TeamSection from "@/components/sections/aboutpage/Teamsection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us ",
  description:
    "Learn about SuperManager  AI  the team building the first autonomous AI management platform to redefine how enterprises operate, delegate, and scale.",
  alternates: { canonical: "https://www.supermanager.co/aboutus" },
  openGraph: {
    title: "About Us ",
    description:
      "Learn about SuperManager  AI  the team building the first autonomous AI management platform to redefine how enterprises operate, delegate, and scale.",
    url: "https://www.supermanager.co/aboutus",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <HomePage />
      <FeaturedSection />
      <LogoMarqueeSection />
      <TeamSection />
    </div>
  );
};

export default page;
