import Blogslider from "@/components/sections/Resource/Blogslider";
import CustomerStoriesSlider from "@/components/sections/Resource/Customerstoriesslider";
import InsightsSlider from "@/components/sections/Resource/Insightsslider";
import ResourcesHub from "@/components/sections/Resource/Resourceshub";
import WhitepapersSlider from "@/components/sections/Resource/Whitepapersslider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources ",
  description:
    "Explore guides, white papers, customer stories, and AI insights from SuperManager  AI to help your organization adopt autonomous AI management.",
  alternates: { canonical: "https://www.supermanager.co/resource" },
  openGraph: {
    title: "Resources ",
    description:
      "Explore guides, white papers, customer stories, and AI insights from SuperManager  AI.",
    url: "https://www.supermanager.co/resource",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <ResourcesHub />
      <InsightsSlider />
      <CustomerStoriesSlider />
      <Blogslider />
      <WhitepapersSlider />
    </div>
  );
};

export default page;
