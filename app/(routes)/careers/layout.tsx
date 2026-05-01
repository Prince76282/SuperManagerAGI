import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Careers  ',
  description:
    'Join SuperManager AI and help build the operating system for enterprise AI. Explore open roles in engineering, AI research, product, and go-to-market.',
  alternates: { canonical: 'https://www.supermanager.co/careers' },
  openGraph: {
    title: 'Careers  ',
    description: 'Join open roles in engineering, AI research, product, and go-to-market.',
    url: 'https://www.supermanager.co/careers',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
