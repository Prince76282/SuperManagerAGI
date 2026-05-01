import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'FAQ  ',
  description:
    'Frequently asked questions about SuperManager AGI — the autonomous AI management platform. Learn how it works, pricing, security, integrations, and more.',
  alternates: { canonical: 'https://www.supermanager.co/FAQ' },
  openGraph: {
    title: 'FAQ  ',
    description: 'Frequently asked questions about SuperManager AGI.',
    url: 'https://www.supermanager.co/FAQ',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
