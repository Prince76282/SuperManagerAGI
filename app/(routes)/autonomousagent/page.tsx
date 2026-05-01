import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Agent Platform  ',
  description:
    'Deploy autonomous AI agents that plan, execute, and report across your enterprise stack — SuperManager AGI agent platform for intelligent workflow automation.',
  alternates: { canonical: 'https://www.supermanager.co/autonomousagent' },
  openGraph: {
    title: 'Autonomous Agent Platform  ',
    description: 'Deploy autonomous AI agents that plan, execute, and report across your enterprise stack.',
    url: 'https://www.supermanager.co/autonomousagent',
    type: 'website',
  },
};

import AutonomousAgent from '@/components/Footer/AutonomousAgent/AutonomousAgent'
import AutonomousAgentHero from '@/components/Footer/AutonomousAgent/AutonomousAgentHero'
import AutonomousAgentSection from '@/components/Footer/AutonomousAgent/AutonomousAgentSection'
import AutonomousAgentTabs from '@/components/Footer/AutonomousAgent/AutonomousAgentTabs'
import React from 'react'

const page = () => {
  return (
    <div>
        <AutonomousAgentHero/>
        <AutonomousAgentSection/>
        <AutonomousAgentTabs/>
        <AutonomousAgent/>

    </div>
  )
}

export default page