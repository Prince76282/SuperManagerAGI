import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
   
      },
    ],
    sitemap: "https://www.supermanager.co/sitemap.xml",
    host: "https://www.supermanager.co", // optional but recommended
  };
}