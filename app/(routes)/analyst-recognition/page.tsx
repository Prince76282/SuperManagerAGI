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