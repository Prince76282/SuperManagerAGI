import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.supermanager.co";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/aboutus`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/learnmore`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  
    {
      url: `${base}/get-in-touch`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/contactus`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
     {
      url: `${base}/leadership`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
     {
      url: `${base}/strategy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }, {
      url: `${base}/execution`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
{
      url: `${base}/managerplatform`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },


  
  ];
}