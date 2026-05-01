import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analyst Recognition  ',
  description:
    'SuperManager AGI recognized by leading industry analysts as a top AI-powered enterprise management platform in autonomous workflow and decision intelligence.',
  alternates: { canonical: 'https://www.supermanager.co/analyst-recognition' },
  openGraph: {
    title: 'Analyst Recognition  ',
    description: 'SuperManager AGI recognized by leading analysts for autonomous AI management.',
    url: 'https://www.supermanager.co/analyst-recognition',
    type: 'website',
  },
};

import AnalystRecognition from '@/components/sections/Analyst-Recognition/Analystrecognition'
import Homepage from '@/components/sections/Analyst-Recognition/Homepage'

import OtherInsights from '@/components/sections/Analyst-Recognition/Otherinsights'
import React from 'react'

const page = () => {
  return (
    <div>
      <Homepage/>
        <AnalystRecognition/>
        <OtherInsights/>


    </div>
  )
}

export default page