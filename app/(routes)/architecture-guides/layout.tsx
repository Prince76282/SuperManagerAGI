import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Architecture Guides  ',
  description:
    'Technical architecture guides for SuperManager AGI — learn how to design and deploy autonomous AI management systems in enterprise environments.',
  alternates: { canonical: 'https://www.supermanager.co/architecture-guides' },
  openGraph: {
    title: 'Architecture Guides  ',
    description: 'Technical guides for designing autonomous AI management systems with SuperManager AGI.',
    url: 'https://www.supermanager.co/architecture-guides',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
