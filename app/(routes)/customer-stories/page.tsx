import React from "react";
import HomePage from "@/components/sections/customer-stories/Homepage";
import CustomerReviews from "@/components/sections/customer-stories/Customerreviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Stories ",
  description:
    "Discover how leading enterprises use SuperManager  AI to automate management workflows, reduce overhead, and scale operations with autonomous AI.",
  alternates: { canonical: "https://www.supermanager.co/customer-stories" },
  openGraph: {
    title: "Customer Stories ",
    description:
      "Discover how leading enterprises use SuperManager  AI to automate management workflows and scale operations.",
    url: "https://www.supermanager.co/customer-stories",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <HomePage />
      <CustomerReviews />
    </div>
  );
};

export default page;
