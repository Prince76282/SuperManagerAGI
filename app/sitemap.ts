import { readdirSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { MetadataRoute } from "next";

import { getAllBlogIds } from "@/lib/Dataset/blogData";
import { guides, insights, managers } from "@/lib/Dataset/contentData";
import {
  intelligencePageSlugs,
  standalonePageSlugs,
} from "@/lib/Dataset/dropdownRouteContent";
import { features } from "@/lib/Dataset/features";
import { HomeData } from "@/lib/Dataset/homedata";
import { INFRASTRUCTURE_DATA } from "@/lib/Dataset/InfrastructureData";
import { getAllReportIds } from "@/lib/Dataset/reportData";
import { WHITEPAPERS } from "@/lib/Dataset/whitepapersData";

const BASE_URL = "https://www.supermanager.co";
const APP_DIR = join(process.cwd(), "app");
const PAGE_FILE_PATTERN = /^page\.(js|jsx|ts|tsx)$/;
const ROUTE_GROUP_PATTERN = /^\(.*\)$/;

function toRoutePath(segments: string[]) {
  if (segments.length === 0) {
    return "/";
  }

  return `/${segments.join("/")}`;
}

function getStaticRoutes(
  rootDir: string,
  currentDir: string = rootDir,
): string[] {
  const routes: string[] = [];

  for (const entry of readdirSync(currentDir, { withFileTypes: true })) {
    const entryPath = join(currentDir, entry.name);

    if (entry.isDirectory()) {
      routes.push(...getStaticRoutes(rootDir, entryPath));
      continue;
    }

    if (!PAGE_FILE_PATTERN.test(entry.name)) {
      continue;
    }

    const routeDir = dirname(entryPath);
    const relativeDir = relative(rootDir, routeDir);
    const segments =
      relativeDir === ""
        ? []
        : relativeDir
            .split(sep)
            .filter(Boolean)
            .filter((segment) => !ROUTE_GROUP_PATTERN.test(segment));

    if (segments.some((segment) => segment.startsWith("["))) {
      continue;
    }

    routes.push(toRoutePath(segments));
  }

  return routes;
}

function getHomeDetailRoutes() {
  return Array.from(
    new Set([
      ...HomeData.map(({ id }) => id),
      ...features.map(({ id }) => id),
      ...INFRASTRUCTURE_DATA.cards.map(({ id }) => id),
    ]),
  ).map((id) => `/home/${id}`);
}

function getResourceRoutes() {
  return [...managers, ...guides, ...insights].map(({ id }) => `/resource/${id}`);
}

function getDynamicRoutes() {
  const rootStandaloneRoutes = standalonePageSlugs
    .filter((slug) => slug !== "intelligence")
    .map((slug) => `/${slug}`);

  const intelligenceRoutes = intelligencePageSlugs.map(
    (slug) => `/intelligence/${slug}`,
  );
  const blogRoutes = getAllBlogIds().map((id) => `/blog/${id}`);
  const researchReportRoutes = getAllReportIds().map(
    (id) => `/research-reports/${id}`,
  );
  const whitepaperRoutes = WHITEPAPERS.map((paper) => `/white-papers/${paper.id}`);

  return [
    ...rootStandaloneRoutes,
    ...intelligenceRoutes,
    ...blogRoutes,
    ...getResourceRoutes(),
    ...researchReportRoutes,
    ...whitepaperRoutes,
    ...getHomeDetailRoutes(),
  ];
}

function getPriority(route: string) {
  if (route === "/") {
    return 1;
  }

  const depth = route.split("/").filter(Boolean).length;

  if (depth === 1) {
    return 0.8;
  }

  if (depth === 2) {
    return 0.7;
  }

  return 0.6;
}

function getChangeFrequency(
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  const depth = route.split("/").filter(Boolean).length;

  if (route === "/" || depth <= 1) {
    return "weekly";
  }

  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const allRoutes = Array.from(
    new Set([...getStaticRoutes(APP_DIR), ...getDynamicRoutes()]),
  ).sort((left, right) => {
    if (left === "/") {
      return -1;
    }

    if (right === "/") {
      return 1;
    }

    return left.localeCompare(right);
  });

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));
}
