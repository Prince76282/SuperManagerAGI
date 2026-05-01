import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Case Studies  ',
  description:
    'Read real-world SuperManager AGI case studies showing how enterprises reduced management overhead, accelerated projects, and scaled operations with autonomous AI.',
  alternates: { canonical: 'https://www.supermanager.co/case-studies' },
  openGraph: {
    title: 'Case Studies  ',
    description: 'How enterprises reduced overhead and scaled operations with SuperManager AGI.',
    url: 'https://www.supermanager.co/case-studies',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
