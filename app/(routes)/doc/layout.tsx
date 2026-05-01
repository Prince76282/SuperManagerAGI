import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Documentation  ',
  description:
    'SuperManager AGI documentation — technical guides, API references, and integration documentation to help you build and deploy autonomous AI management.',
  alternates: { canonical: 'https://www.supermanager.co/doc' },
  openGraph: {
    title: 'Documentation  ',
    description: 'Technical guides, API references, and integration documentation for SuperManager AGI.',
    url: 'https://www.supermanager.co/doc',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
