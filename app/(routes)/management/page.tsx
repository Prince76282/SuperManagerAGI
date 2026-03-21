
import ManagementCTA from '@/components/Footer/Management/ManagementCta'
import ManagementHero from '@/components/Footer/Management/ManagementHero'
import ManagementProblems from '@/components/Footer/Management/ManagementProblems'
import ManagementTabs from '@/components/Footer/Management/ManagementTabs'
import ManagementUses from '@/components/Footer/Management/ManagementUses'
import React from 'react'

const page = () => {
  return (
    <div>
        <ManagementHero/>
        <ManagementUses/>
        <ManagementProblems/>
        <ManagementTabs/>
        <ManagementCTA/>
    </div>
  )
}

export default page