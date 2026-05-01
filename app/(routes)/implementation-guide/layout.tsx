import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Implementation Guide ',
  description:
    'Step-by-step guide to implementing SuperManager AI in your organization from discovery to full autonomous deployment across your enterprise.',
  alternates: { canonical: 'https://www.supermanager.co/implementation-guide' },
  openGraph: {
    title: 'Implementation Guide ',
    description: 'Step-by-step guide to implementing SuperManager AGI in your organization.',
    url: 'https://www.supermanager.co/implementation-guide',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
