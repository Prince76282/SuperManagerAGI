import type { Metadata } from 'next';
import './globals.css';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'SuperManager AGI',
  description: 'Transform enterprise management with Autonomous General Intelligence',
};// app/layout.tsx
<head>
  <link rel="preconnect" href="https://assets.calendly.com" />
  <link rel="preconnect" href="https://calendly.com" />
  <link rel="dns-prefetch" href="https://assets.calendly.com" />
  <link rel="dns-prefetch" href="https://calendly.com" />
</head>

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
        <Navigation />

        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}