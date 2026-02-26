import React from 'react'
import HomePage from '@/components/sections/Execution/HomePage'
import AIForService from '@/components/sections/Execution/Aiforservice'
import TransformServiceWithAI from '@/components/sections/Execution/Transformservicewithai'
import AcceleratorsSection from '@/components/sections/Execution/Acceleratorssection'
import ResourcesSection from '@/components/sections/Execution/Resourcessection'

const Execution = () => {
  return (
    <div>
      <HomePage/> 
      <AIForService/>
      <TransformServiceWithAI/>
      <AcceleratorsSection/>
      <ResourcesSection/>
    
    </div>
  )
}

export default Execution