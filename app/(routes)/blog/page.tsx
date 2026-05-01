import BlogPage from "@/components/sections/Blogpage/Blogpage";
import EnterpriseSection from "@/components/sections/Blogpage/Enterprisesection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog  ",
  description:
    "Insights, research, and perspectives on autonomous AI management, workforce transformation, and the future of enterprise operations.",
  alternates: { canonical: "https://www.supermanager.co/blog" },
  openGraph: {
    title: "Blog  ",
    description:
      "Insights, research, and perspectives on autonomous AI management, workforce transformation, and the future of enterprise operations.",
    url: "https://www.supermanager.co/blog",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <BlogPage />
      <EnterpriseSection />
    </div>
  );
};

export default page;
