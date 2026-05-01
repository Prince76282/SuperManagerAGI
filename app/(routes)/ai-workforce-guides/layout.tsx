import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AI Workforce Guides ',
  description:
    'Comprehensive guides on building and managing AI workforces. Learn how SuperManager AGI deploys autonomous AI teams to replace manual management tasks.',
  alternates: { canonical: 'https://www.supermanager.co/ai-workforce-guides' },
  openGraph: {
    title: 'AI Workforce Guides ',
    description: 'Guides on building and managing AI workforces with SuperManager AGI.',
    url: 'https://www.supermanager.co/ai-workforce-guides',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
