import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Get in Touch  ',
  description:
    'Book a demo or speak with the SuperManager AGI team. See how autonomous AI management can transform your organization in a personalized session.',
  alternates: { canonical: 'https://www.supermanager.co/get-in-touch' },
  openGraph: {
    title: 'Get in Touch  ',
    description: 'Book a demo and see how SuperManager AGI can transform your organization.',
    url: 'https://www.supermanager.co/get-in-touch',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
