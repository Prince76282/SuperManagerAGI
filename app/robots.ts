import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/static/", "/_next/image/"],
      },
    ],
    sitemap: "https://www.supermanager.co/sitemap.xml",
    host: "https://www.supermanager.co",
  };
}
