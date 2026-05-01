import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Financial Intelligence  ',
  description:
    'SuperManager AGI financial intelligence — real-time AI monitoring of budgets, costs, and financial risks across your enterprise operations.',
  alternates: { canonical: 'https://www.supermanager.co/intelligence/financial-intel' },
  openGraph: {
    title: 'Financial Intelligence  ',
    description: 'Real-time AI monitoring of budgets, costs, and financial risks across your enterprise.',
    url: 'https://www.supermanager.co/intelligence/financial-intel',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
