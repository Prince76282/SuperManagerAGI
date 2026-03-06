import AnalystRecognition from '@/components/sections/Analyst-Recognition/Analystrecognition'
import AwardsGrid from '@/components/sections/Analyst-Recognition/Awardsgrid'
import OtherInsights from '@/components/sections/Analyst-Recognition/Otherinsights'
import React from 'react'

const page = () => {
  return (
    <div>
        <AnalystRecognition/>
        <OtherInsights/>
        <AwardsGrid/>

    </div>
  )
}

export default page