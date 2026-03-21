
import ProjectWorkforce from '@/components/Footer/ProjectWorkforce/ProjectWorkforce'
import ProjectWorkforceHero from '@/components/Footer/ProjectWorkforce/ProjectWorkforceHero'
import ProjectWorkforceSection from '@/components/Footer/ProjectWorkforce/ProjectWorkforceSection'
import ProjectWorkforceTabs from '@/components/Footer/ProjectWorkforce/ProjectWorkforceTabs'
import React from 'react'

const page = () => {
  return (
    <div>
        <ProjectWorkforceHero/>
        <ProjectWorkforceSection/>
        <ProjectWorkforceTabs/>
        <ProjectWorkforce/>

    </div>
  )
}

export default page