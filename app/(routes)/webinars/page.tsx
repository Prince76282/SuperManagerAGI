import AIPulseSection from "@/components/Footer/Webinars/Aipulsesection";
import BrowseWebinars from "@/components/Footer/Webinars/Browsewebinars";
import FeaturedWebinars from "@/components/Footer/Webinars/Featuredwebinars";
import UpcomingWebinars from "@/components/Footer/Webinars/Upcomingwebinars";
import WebinarsSection from "@/components/Footer/Webinars/Webinarssection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars ",
  description:
    "Join live and on-demand SuperManager  AI webinars to learn how autonomous AI is transforming enterprise management, workflows, and team productivity.",
  alternates: { canonical: "https://www.supermanager.co/webinars" },
  openGraph: {
    title: "Webinars ",
    description:
      "Join live and on-demand SuperManager  AI webinars on autonomous AI management.",
    url: "https://www.supermanager.co/webinars",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <WebinarsSection />
      <FeaturedWebinars />

      <AIPulseSection />
      <UpcomingWebinars />
      <BrowseWebinars />
    </div>
  );
};

export default page;
