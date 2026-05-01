import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Integrations  ',
  description:
    'Connect SuperManager AGI to 150+ enterprise tools — Slack, Jira, Salesforce, GitHub, and more. Seamless integrations for autonomous AI workflow automation.',
  alternates: { canonical: 'https://www.supermanager.co/enterprise-integrations' },
  openGraph: {
    title: 'Enterprise Integrations  ',
    description: 'Connect SuperManager AGI to 150+ enterprise tools for autonomous AI workflow automation.',
    url: 'https://www.supermanager.co/enterprise-integrations',
    type: 'website',
  },
}

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