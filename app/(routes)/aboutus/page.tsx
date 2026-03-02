import FeaturedSection from '@/components/sections/aboutpage/Featuredsection'
import HomePage from '@/components/sections/aboutpage/HomePage'
import LogoMarqueeSection from '@/components/sections/aboutpage/Logomarquee'
import TeamSection from '@/components/sections/aboutpage/Teamsection'
import React from 'react'

const page = () => {
  return (
    <div>
        <HomePage/>
        <FeaturedSection/>
        <LogoMarqueeSection/>
        <TeamSection/>
    </div>
  )
}

export default page