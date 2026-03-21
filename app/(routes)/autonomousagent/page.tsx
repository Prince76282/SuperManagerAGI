
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