import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Live Org Intelligence  ',
  description:
    'SuperManager AI live org intelligence  a real-time view of your entire organization including teams, workflows, and operational health in one unified dashboard.',
  alternates: { canonical: 'https://www.supermanager.co/intelligence/live-org' },
  openGraph: {
    title: 'Live Org Intelligence  ',
    description: 'Real-time view of your entire organization including teams, workflows, and operational health.',
    url: 'https://www.supermanager.co/intelligence/live-org',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
