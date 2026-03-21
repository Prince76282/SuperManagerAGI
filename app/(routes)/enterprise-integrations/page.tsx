
import EnterpriseIntegrations from '@/components/Footer/EnterpriseIntegrations/EnterpriseIntegrations'
import EnterpriseIntegrationsHero from '@/components/Footer/EnterpriseIntegrations/EnterpriseIntegrationsHero'
import EnterpriseIntegrationsSection from '@/components/Footer/EnterpriseIntegrations/EnterpriseIntegrationsSection'
import EnterpriseIntegrationsTabs from '@/components/Footer/EnterpriseIntegrations/EnterpriseIntegrationsTabs'
import React from 'react'

const page = () => {
  return (
    <div>
        <EnterpriseIntegrationsHero/>
        <EnterpriseIntegrationsSection/>
        <EnterpriseIntegrationsTabs/>
        <EnterpriseIntegrations/>

    </div>
  )
}

export default page