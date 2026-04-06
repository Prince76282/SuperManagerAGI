import type { Metadata } from 'next';
import './globals.css';

import AppShell from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'SuperManager AGI',
  description: 'Transform enterprise management with Autonomous General Intelligence',
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
