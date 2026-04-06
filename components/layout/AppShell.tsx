"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Footer from "./Footer";
import Navigation from "./Navigation";

type AppShellProps = {
  children: ReactNode;
};

const isChromelessRoute = (pathname: string | null) =>
  pathname != null &&
  (pathname === "/d2c" || pathname.startsWith("/d2c/"));

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideGlobalChrome = isChromelessRoute(pathname);

  return (
    <>
      {!hideGlobalChrome && <Navigation />}
      <div className="flex-1 w-full">{children}</div>
      {!hideGlobalChrome && <Footer />}
    </>
  );
}
