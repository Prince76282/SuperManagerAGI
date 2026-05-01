import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Risk Prediction  ',
  description:
    'SuperManager AI risk prediction — autonomous AI that detects project risks, delivery bottlenecks, and operational threats before they impact your business.',
  alternates: { canonical: 'https://www.supermanager.co/intelligence/risk-prediction' },
  openGraph: {
    title: 'Risk Prediction  ',
    description: 'Autonomous AI detects project risks and operational threats before they impact your business.',
    url: 'https://www.supermanager.co/intelligence/risk-prediction',
    type: 'website',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
