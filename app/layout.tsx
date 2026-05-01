import type { Metadata } from 'next';
import './globals.css';

import AppShell from '@/components/layout/AppShell';





export const metadata: Metadata = {
  metadataBase: new URL("https://www.supermanager.co"),
  title: 'SuperManager AI',
  description:
   'Where AI Meets Vibe Working',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.supermanager.co",
  },
  openGraph: {
    type: "website",
    siteName: "SuperManager AI",
    title: "SuperManager AI",
    description:
      'Where AI Meets Vibe Working',
    url: "https://www.supermanager.co",
    images: [
      {
        url: "/Image/introducing-supermanager AI.jpg",
        width: 1200,
        height: 630,
        alt: "SuperManager AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperManager AI Autonomous AI Management Platform",
    description:
      "SuperManager  AI is the first autonomous AI management platform that delegates, strategizes, and executes workflows across your organization.",
    images: ["/Image/introducing-supermanager AI.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col antialiased bg-white text-gray-900"
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
