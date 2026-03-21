import ProjectIntelligenceHero from '@/components/Footer/Project/Projecthero'
import ProjectIntelligenceCTA from '@/components/Footer/Project/Projectintelligencecta'
import ProjectIntelligenceProblems from '@/components/Footer/Project/Projectintelligenceproblems'
import ProjectIntelligenceTabs from '@/components/Footer/Project/Projectintelligencetabs'
import ProjectIntelligenceUses from '@/components/Footer/Project/Projectintelligenceuses'
import React from 'react'

const page = () => {
  return (
    <div>
        <ProjectIntelligenceHero/>
        <ProjectIntelligenceUses/>
        <ProjectIntelligenceProblems/>
        <ProjectIntelligenceTabs/>
        <ProjectIntelligenceCTA/>
    </div>
  )
}

export default page