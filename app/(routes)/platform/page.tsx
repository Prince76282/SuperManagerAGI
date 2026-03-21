import AgentPlatformTabs from '@/components/Footer/Platform/Agentplatformtabs'
import AgentValueSection from '@/components/Footer/Platform/Agentvaluesection'
import AnalystRecognition from '@/components/Footer/Platform/Analystrecognition'
import Agentplatformhero  from '@/components/Footer/Platform/Agentplatformhero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Agentplatformhero/>
        <AgentValueSection/>
        <AgentPlatformTabs/>
        <AnalystRecognition/>

    </div>
  )
}

export default page