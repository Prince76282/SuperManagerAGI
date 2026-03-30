import React from 'react'
import HomePage from '@/components/sections/Strategy/HomePage';
import Challengessection from '@/components/sections/Strategy/Challengessection'
import SuperManagerImpact from '@/components/sections/Strategy/Supermanagerimpact';
import IntroducingAGI from '@/components/sections/Strategy/IntroducingAGI'

const Strategy = () => {
  return (
    <div>
        <HomePage/>
        <Challengessection/>
        <SuperManagerImpact/>
        <IntroducingAGI/>
       
    </div>
  )
}

export default Strategy