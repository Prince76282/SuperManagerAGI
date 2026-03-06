import Customersuccesssection from '@/components/sections/Partners/Customersuccesssection'
import PartnersHero from '@/components/sections/Partners/Partnershero'
import WhyPartnerSection from '@/components/sections/Partners/Whypartnersection'
import React from 'react'

const page = () => {
  return (
    <div>

        <PartnersHero/>
        <WhyPartnerSection/>
        <Customersuccesssection/>
    </div>
  )
}

export default page