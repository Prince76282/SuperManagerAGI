"use client"

import React, { useState } from "react"



const DocViews = () => {
  const [active, setActive] = useState("overview")

  const handleNav = (id: string) => {
    setActive(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="flex flex-col mt-10 lg:flex-row min-h-screen bg-gray-50">

    
      <main className="flex-1 px-6 md:px-10 lg:px-16 py-12 max-w-[1200px] mx-auto w-full">

        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Technical Documentation
          </span>
          <h1 className="text-3xl md:text-5xl  mt-2 text-gray-900">
            SuperManagerAGI Documentation
          </h1>
          <p className="text-gray-500 mt-3 text-base leading-relaxed">
            Complete technical reference for deploying, configuring, and operating the SuperManagerAGI platform across your organization.
          </p>
        </div>

     
        <section id="overview" className="mb-20 scroll-mt-8">
          <SectionHeading number="1" title="Overview" />

          <p className="text-gray-600 leading-relaxed mb-4">
            SuperManagerAGI is an autonomous AI-powered project management intelligence layer designed to help managers oversee complex teams, tasks, and workflows with minimal manual intervention. It operates as a persistent, always-on system that sits above your existing tooling stack  continuously monitoring, synthesizing, and acting on the operational data that your organization generates every day.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The system continuously analyzes team productivity, project timelines, cross-functional dependencies, and operational risk signals to automatically optimize project execution and support management decision-making. Rather than presenting raw data and expecting managers to draw conclusions, SuperManagerAGI interprets that data and surfaces specific, actionable intelligence  telling managers not just what is happening, but what it means and what they should do about it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike traditional project management tools such as Jira, Trello, Linear, or Asana  which are fundamentally passive data stores that require humans to update, interpret, and act on them  SuperManagerAGI acts as an active operational participant. It does not wait to be queried. It monitors continuously, detects changes automatically, and initiates appropriate responses without requiring a human to notice a problem and decide to investigate it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            SuperManagerAGI is built for organizations managing complex, multi-team projects where coordination overhead is high, information is scattered across multiple tools, and the cost of delayed risk detection is significant. It is designed to integrate into existing workflows without requiring teams to change how they work, and to deliver measurable operational improvements from day one of deployment.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Average setup time", value: "< 2 hours" },
              { label: "Tool integrations", value: "40+" },
              { label: "Data refresh rate", value: "Real-time" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

      
        <section id="features" className="mb-20 scroll-mt-8">
          <SectionHeading number="2" title="Core Features" />

          <p className="text-gray-600 leading-relaxed mb-8">
            SuperManagerAGI's capabilities are organized into six core functional areas, each addressing a distinct dimension of the operational management challenge. Together they form a comprehensive management intelligence layer that handles the operational complexity that would otherwise require significant manual management effort.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              title="Autonomous Task Management"
              description="SuperManagerAGI automatically generates tasks from project goals and requirements, prioritizes them based on strategic importance and dependency relationships, and manages the full task lifecycle  from creation through assignment, progress tracking, and completion verification  without requiring manual intervention at each step. When new requirements emerge or priorities shift, the system automatically updates task priorities and reassigns work accordingly, ensuring the team is always focused on the highest-value activities."
            />
            <FeatureCard
              title="Intelligent Resource Allocation"
              description="The platform maintains a continuously updated model of each team member's current workload, demonstrated expertise, availability constraints, and capacity for additional assignments. When work needs to be allocated, it applies this model to match tasks to the people most likely to execute them effectively  balancing skill alignment, current capacity, team workload distribution, and developmental considerations to produce assignments that are simultaneously efficient, fair, and growth-oriented."
            />
            <FeatureCard
              title="Real-Time Risk Detection"
              description="SuperManagerAGI's risk engine continuously analyzes workflow signals across all connected tools  sprint velocity trends, PR review cycle times, backlog growth rates, dependency health indicators, and dozens of other operational signals  to identify risk patterns that predict delivery problems before they manifest. When a risk pattern is detected, the system generates a specific, confidence-scored alert with the nature of the risk, its potential impact, and concrete intervention options for the manager."
            />
            <FeatureCard
              title="AI Productivity Insights"
              description="The platform generates deep, continuously updated analytics on team productivity, workflow efficiency, delivery velocity, and operational health  synthesizing data from across the entire tool ecosystem into clear, manager-ready intelligence. Rather than presenting raw metrics that require significant analytical effort to interpret, SuperManagerAGI produces narrative insights that explain what the data means and where specific improvements would have the greatest impact."
            />
            <FeatureCard
              title="Async Stand-Up Automation"
              description="SuperManagerAGI replaces synchronous daily stand-up meetings with an intelligent async check-in system that collects personalized, context-aware updates from each team member through Slack or internal tools, cross-references their responses with actual project data from connected systems, and compiles a structured daily briefing that gives managers comprehensive team health visibility without requiring everyone to be available at the same time."
            />
            <FeatureCard
              title="Decision Support Intelligence"
              description="For management decisions that require human judgment, SuperManagerAGI provides structured decision support that presents the relevant facts, available options, and projected outcomes of each option in a format designed for fast, confident decision-making. This capability is particularly valuable in ambiguous, time-pressured situations  the resource allocation trade-offs, scope adjustment conversations, and stakeholder communication decisions where having comprehensive, current information makes a decisive difference."
            />
          </div>
        </section>

        <section id="workflow" className="mb-20 scroll-mt-8">
          <SectionHeading number="3" title="Workflow" />

          <p className="text-gray-600 leading-relaxed mb-8">
            SuperManagerAGI follows a continuous, self-reinforcing AI-driven workflow cycle that automatically adapts to project progress, team capacity changes, and evolving organizational priorities. The cycle runs perpetually once initialized  each phase feeding into the next and the whole system continuously recalibrating based on new information.
          </p>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Project Initialization",
                desc: "When a new project is created or connected to SuperManagerAGI, the system ingests all available project context  goals, deadlines, team composition, existing task structures, and historical performance data from comparable projects. It establishes baseline metrics, maps known dependencies, and builds an initial operational model that serves as the foundation for all subsequent monitoring and decision-making. This initialization phase typically completes within minutes for projects with connected tool integrations."
              },
              {
                step: "02",
                title: "AI Task Generation & Structuring",
                desc: "Based on project goals and requirements, SuperManagerAGI generates a structured task breakdown that accounts for dependencies, estimated complexity, required skills, and logical sequencing. Unlike manual task creation, the AI-generated task structure is informed by patterns from thousands of comparable projects  incorporating the dependency relationships and sequencing logic that experienced project managers develop over years of practice but that are difficult to apply consistently under time pressure."
              },
              {
                step: "03",
                title: "Smart Resource Allocation",
                desc: "With tasks structured and prioritized, the system allocates work to team members by matching task requirements against its continuously updated model of each individual's capacity, expertise, and current commitments. Allocation decisions incorporate not just current availability but also workload balance considerations, skill development goals, and the strategic importance of specific tasks. The allocation model updates dynamically as new information arrives  when a team member picks up unplanned work or reports a blocker, the model recalibrates automatically."
              },
              {
                step: "04",
                title: "Continuous Project Monitoring",
                desc: "Once work is in progress, SuperManagerAGI monitors every aspect of project execution continuously  tracking task completion rates against planned timelines, monitoring the health of cross-team dependencies, analyzing team productivity signals from connected tools, and maintaining an up-to-date operational picture of every active workstream. This monitoring operates without gaps or selective attention  every task, every dependency, and every productivity signal is tracked at all times."
              },
              {
                step: "05",
                title: "Risk Detection & Proactive Mitigation",
                desc: "The risk detection engine continuously correlates monitoring data against risk pattern models to identify emerging threats to delivery before they become visible through normal observation. When a risk pattern is detected, the system generates a structured alert with the risk description, confidence score, potential impact assessment, and specific recommended interventions. Managers typically receive these alerts two to four weeks before problems would become apparent through traditional project review processes."
              },
              {
                step: "06",
                title: "Automated Reporting & Briefings",
                desc: "SuperManagerAGI automatically compiles operational reports and manager briefings at the appropriate cadence for each audience  daily briefings for team managers, weekly summaries for department heads, and portfolio-level health reports for executive leadership. These reports are generated from the same continuously updated operational model that drives all other platform functions, ensuring that reporting is always current and accurate without requiring anyone to manually gather, compile, or format the underlying data."
              },
              {
                step: "07",
                title: "Continuous Learning & Adaptation",
                desc: "After each project cycle, SuperManagerAGI analyzes the full history of the project  comparing predictions against outcomes, identifying where its risk detection was accurate and where it missed signals, and updating its organizational model accordingly. This continuous learning process means that the system's recommendations improve over time as it accumulates more knowledge about the specific patterns, team dynamics, and delivery characteristics of the organization it serves."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-2xl font-bold text-gray-200 shrink-0 w-10">{item.step}</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="architecture" className="mb-20 scroll-mt-8">
          <SectionHeading number="4" title="System Architecture" />

          <p className="text-gray-600 leading-relaxed mb-4">
            The SuperManagerAGI platform is built on a modular, cloud-native architecture designed for enterprise-scale reliability, security, and extensibility. Each architectural layer is independently scalable and communicates through well-defined interfaces, allowing the system to handle organizational deployments ranging from single teams to global enterprises with hundreds of concurrent projects and thousands of active users.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            The architecture follows an event-driven design pattern in which operational data from connected tools flows continuously through a processing pipeline, triggering the appropriate AI analysis, recommendation generation, and notification workflows in near real-time. This ensures that insights and alerts are generated and delivered as quickly as the underlying data changes, rather than being constrained by periodic batch processing cycles.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Data Integration Layer",
                desc: "Manages bidirectional connections with all external tools and data sources through a library of purpose-built connectors. Unlike webhook-based integrations that capture only surface-level event notifications, this layer maintains persistent, authenticated connections with each connected tool and pulls comprehensive operational data  task states, user activity, code commit metadata, communication patterns, and more  normalized into a consistent internal schema."
              },
              {
                title: "AI Intelligence Engine",
                desc: "The core analytical component of the platform, responsible for processing the normalized operational data stream and generating risk assessments, resource allocation recommendations, productivity insights, and decision support intelligence. The engine runs multiple specialized AI models in parallel  each trained on patterns from thousands of project delivery cycles and continuously fine-tuned based on feedback from the specific organizational context."
              },
              {
                title: "Workflow Automation Layer",
                desc: "Translates the AI engine's recommendations and decisions into automated actions within connected tools  creating and assigning tasks, updating project statuses, triggering notifications, scheduling check-ins, and executing the coordination workflows that keep complex projects moving. Configurable autonomy settings allow organizations to define which actions the system can take autonomously versus which require human approval."
              },
              {
                title: "Organizational Knowledge Graph",
                desc: "A continuously maintained graph database that models the relationships between every entity in the organization's operational environment  people, teams, projects, tasks, tools, dependencies, skills, and historical performance patterns. The knowledge graph enables the AI engine to reason about complex relational contexts that would be invisible to analysis of individual data streams in isolation."
              },
              {
                title: "Manager Dashboard Interface",
                desc: "The primary human interface for the platform, providing managers at every organizational level with role-appropriate views of the operational intelligence that SuperManagerAGI continuously generates. The dashboard is designed around the information needs of busy managers who need to quickly assess organizational health and identify situations requiring their attention  not around comprehensive data presentation that requires significant time to navigate."
              },
              {
                title: "Notification & Communication Layer",
                desc: "Manages the delivery of alerts, briefings, and operational intelligence to the right people at the right time through the appropriate channels  including in-platform notifications, Slack messages, email digests, and API webhooks for custom integrations. Configurable filtering and prioritization rules ensure that managers receive the information they need without being overwhelmed by low-priority alerts."
              },
            ].map((card) => (
              <div key={card.title} className="p-6 bg-white border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">{card.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

 
        <section id="integrations" className="mb-20 scroll-mt-8">
          <SectionHeading number="5" title="Integrations" />

          <p className="text-gray-600 leading-relaxed mb-4">
            SuperManagerAGI is built to integrate deeply with the tools your organization already uses  not to replace them, but to connect them into a unified operational intelligence layer that is more than the sum of its parts. Each integration is purpose-built to capture the specific operational signals most relevant to project health monitoring and management intelligence, going well beyond the surface-level notifications that generic integration platforms provide.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            All integrations are configured through the SuperManagerAGI admin console and require appropriate OAuth or API key authentication with each connected service. Most integrations are operational within minutes of initial configuration and begin generating actionable intelligence immediately.
          </p>

          <div className="space-y-6">
            {[
              {
                category: "Project Management",
                tools: ["Jira", "Linear", "Asana", "Monday.com", "ClickUp", "Notion", "GitHub Projects"],
                desc: "Deep integrations with task management and project tracking platforms capture task states, sprint compositions, backlog metrics, velocity trends, and milestone progress in real time. SuperManagerAGI reads and writes to these platforms  surfacing insights within your existing project management tools rather than requiring managers to switch to a separate interface for AI-generated intelligence."
              },
              {
                category: "Engineering & Development",
                tools: ["GitHub", "GitLab", "Bitbucket", "CircleCI", "Jenkins", "Vercel"],
                desc: "Engineering integrations capture code commit frequency, pull request cycle times, code review patterns, deployment frequencies, and build pipeline health  providing the technical operational signals that are among the most reliable early indicators of delivery risk and team productivity trends. These signals are correlated with project management data to produce a unified picture of engineering team health."
              },
              {
                category: "Communication & Collaboration",
                tools: ["Slack", "Microsoft Teams", "Google Workspace", "Zoom", "Loom"],
                desc: "Communication integrations enable the async check-in workflows that replace synchronous stand-up meetings, and provide contextual signals from team communication patterns that complement structured operational data. SuperManagerAGI never stores or analyzes the content of private messages  only the structured metadata that indicates communication patterns relevant to coordination health."
              },
              {
                category: "Documentation & Knowledge",
                tools: ["Confluence", "Notion", "Google Docs", "SharePoint", "Coda"],
                desc: "Documentation integrations allow SuperManagerAGI to connect project plans, requirement documents, and decision records to the operational data it monitors  providing the contextual foundation needed to interpret operational signals accurately and generate recommendations that reflect the actual strategic intent behind the work being tracked."
              },
              {
                category: "Enterprise Systems",
                tools: ["Salesforce", "SAP", "ServiceNow", "Workday", "Azure DevOps"],
                desc: "Enterprise system integrations connect SuperManagerAGI to the broader organizational data environment  including HR systems for capacity and availability data, CRM systems for customer commitment context, and ERP systems for organizational priority alignment. These integrations are available on Enterprise plan deployments and require additional configuration and security review."
              },
            ].map((group) => (
              <div key={group.category} className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-1">{group.category}</h4>
                <div className="flex flex-wrap gap-2 my-3">
                  {group.tools.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{group.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="security" className="mb-20 scroll-mt-8">
          <SectionHeading number="6" title="Security" />

          <p className="text-gray-600 leading-relaxed mb-4">
            SuperManagerAGI is built on an enterprise-grade security architecture designed to meet the requirements of organizations with the most demanding data security, privacy, and compliance standards. Security is not an add-on feature  it is a foundational architectural principle that informs every aspect of how the platform handles, stores, processes, and protects organizational data.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            The platform maintains SOC 2 Type II certification, undergoes regular third-party penetration testing, and provides comprehensive audit logging for every data access and processing event  giving security teams full visibility into how organizational data flows through the platform at all times.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Role-Based Access Control",
                desc: "Granular RBAC allows organizations to define precisely which users can access which data, receive which categories of alerts, and perform which administrative actions. Access policies can be defined at the organization, team, project, and individual user level, and can be synchronized with existing identity management systems through SCIM provisioning to ensure permissions stay current as teams change."
              },
              {
                title: "End-to-End Encrypted Data Storage",
                desc: "All organizational data stored by SuperManagerAGI is encrypted at rest using AES-256 encryption with organization-specific encryption keys. Data in transit is encrypted using TLS 1.3. Organizations on Enterprise plans can bring their own encryption keys (BYOK) for maximum control over their data security posture."
              },
              {
                title: "Enterprise SSO & Authentication",
                desc: "SuperManagerAGI supports SAML 2.0 and OpenID Connect (OIDC) for enterprise single sign-on integration with all major identity providers including Okta, Microsoft Azure AD, Google Workspace, and OneLogin. MFA is supported and can be enforced at the organizational level. Session management policies are fully configurable by administrators."
              },
              {
                title: "Data Residency & Sovereignty",
                desc: "Organizations can specify the geographic regions in which their operational data is stored and processed  supporting compliance with data residency requirements in the EU (GDPR), UK, Australia, Canada, and other jurisdictions with specific data sovereignty regulations. Data residency configurations are enforced at the infrastructure level, providing verifiable compliance evidence for regulatory audits."
              },
              {
                title: "Audit Logging & Compliance",
                desc: "Comprehensive, immutable audit logs are maintained for every data access, processing operation, administrative action, and AI-generated decision. Audit logs are exportable in standard formats for integration with SIEM systems and compliance reporting workflows. The platform supports SOC 2 Type II, ISO 27001, HIPAA (with BAA), and GDPR compliance frameworks."
              },
              {
                title: "Data Isolation & Privacy",
                desc: "Every organization's data is processed in a logically isolated environment. SuperManagerAGI never uses customer operational data to train shared AI models  each organization's data is used exclusively to generate insights for that organization. Personal data handling complies with GDPR and CCPA, including support for data subject access requests, right to erasure, and data portability."
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

    
        <section id="deployment" className="mb-20 scroll-mt-8">
          <SectionHeading number="7" title="Deployment" />

          <p className="text-gray-600 leading-relaxed mb-8">
            SuperManagerAGI is available in three deployment configurations to accommodate organizations with different security requirements, infrastructure preferences, and compliance constraints. All configurations provide the full feature set  the choice of deployment model affects where data is processed and stored, not what capabilities are available.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                plan: "Cloud (SaaS)",
                badge: "Most Popular",
                desc: "The standard deployment runs entirely in Anthropic-managed cloud infrastructure. All data processing, storage, and AI model serving happens within SuperManagerAGI's secure, SOC 2 certified cloud environment. This option requires the least configuration overhead and provides the fastest time-to-value  most organizations complete initial setup and tool integration within two hours and begin receiving actionable operational intelligence on day one. Automatic updates ensure organizations always have access to the latest platform capabilities."
              },
              {
                plan: "Private Cloud",
                badge: "Enterprise",
                desc: "For organizations with requirements for dedicated infrastructure, the Private Cloud deployment runs SuperManagerAGI in a dedicated cloud environment provisioned exclusively for the customer's use. This provides physical data isolation and supports custom data residency configurations for organizations with specific geographic data storage requirements. Private Cloud deployments include dedicated support from SuperManagerAGI's enterprise implementation team and custom SLA commitments."
              },
              {
                plan: "On-Premises",
                badge: "Custom",
                desc: "The On-Premises deployment option allows organizations to run all SuperManagerAGI components within their own infrastructure environment  with no data leaving the organizational network perimeter. This configuration is available for organizations with the most stringent data security requirements, including those in regulated industries where data residency within organizational infrastructure is a regulatory requirement. On-Premises deployments are supported by SuperManagerAGI's enterprise implementation team through the full deployment lifecycle."
              },
            ].map((item) => (
              <div key={item.plan} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-semibold text-gray-900">{item.plan}</h4>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{item.badge}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Quick Start
            </p>
            <div className="space-y-3 text-sm font-mono">
              <p><span className="text-gray-400"># Install the SuperManagerAGI CLI</span></p>
              <p><span className="text-green-400">npm</span> install -g @supermanager/cli</p>
              <p className="pt-2"><span className="text-gray-400"># Authenticate with your organization</span></p>
              <p><span className="text-green-400">supermanager</span> auth login</p>
              <p className="pt-2"><span className="text-gray-400"># Initialize a new project</span></p>
              <p><span className="text-green-400">supermanager</span> init --project my-project</p>
              <p className="pt-2"><span className="text-gray-400"># Connect your first integration</span></p>
              <p><span className="text-green-400">supermanager</span> connect jira --workspace my-workspace</p>
            </div>
          </div>
        </section>


        <section id="api" className="mb-20 scroll-mt-8">
          <SectionHeading number="8" title="API Reference" />

          <p className="text-gray-600 leading-relaxed mb-4">
            The SuperManagerAGI REST API provides programmatic access to all platform capabilities  enabling organizations to build custom integrations, embed SuperManagerAGI intelligence into proprietary tools and dashboards, automate administrative workflows, and extend the platform's capabilities to meet specific organizational requirements. The API is versioned and designed for stability  breaking changes are never introduced without a deprecation notice and migration period of at least six months.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            All API requests require authentication using an API key issued through the SuperManagerAGI admin console. API keys can be scoped to specific capabilities and rate-limited to specific request volumes. The API is available over HTTPS only and enforces TLS 1.2 minimum for all connections.
          </p>

          <div className="space-y-3">
            {[
              { method: "GET",  path: "/v1/projects",                desc: "List all active projects with current health scores and summary metrics" },
              { method: "GET",  path: "/v1/projects/:id",            desc: "Retrieve full project details including task breakdown, team allocation, and risk assessments" },
              { method: "POST", path: "/v1/projects",                desc: "Create a new project and initialize the AI operational model" },
              { method: "GET",  path: "/v1/projects/:id/risks",      desc: "Retrieve current risk assessments with confidence scores and recommended interventions" },
              { method: "GET",  path: "/v1/projects/:id/tasks",      desc: "List all tasks with current assignments, statuses, and dependency relationships" },
              { method: "POST", path: "/v1/tasks/:id/assign",        desc: "Manually assign a task to a specific team member, overriding the AI allocation recommendation" },
              { method: "GET",  path: "/v1/teams/:id/capacity",      desc: "Retrieve current capacity model including individual availability and workload distribution" },
              { method: "GET",  path: "/v1/insights/briefing",       desc: "Generate an on-demand manager briefing for the specified scope and time period" },
              { method: "GET",  path: "/v1/integrations",            desc: "List all configured integrations with connection status and last sync timestamps" },
              { method: "POST", path: "/v1/integrations/:tool/sync", desc: "Trigger a manual data sync for a specific integration" },
              { method: "GET",  path: "/v1/audit-log",               desc: "Retrieve audit log entries with filtering by date range, user, and event type" },
            ].map((endpoint) => (
              <div key={`${endpoint.method}-${endpoint.path}`} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg px-5 py-4">
                <span className={`text-xs font-bold shrink-0 px-2 py-1 rounded font-mono ${
                  endpoint.method === "GET"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-green-50 text-green-600"
                }`}>
                  {endpoint.method}
                </span>
                <div>
                  <code className="text-sm text-gray-800 font-mono">{endpoint.path}</code>
                  <p className="text-xs text-gray-500 mt-1">{endpoint.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

 
        <section id="future" className="mb-20 scroll-mt-8">
          <SectionHeading number="9" title="Future Roadmap" />

          <p className="text-gray-600 leading-relaxed mb-4">
            The SuperManagerAGI product roadmap reflects our long-term vision of creating a fully autonomous management intelligence platform  one that handles the complete operational complexity of modern organizational management with the kind of contextual intelligence and adaptive judgment that has previously required experienced human management teams. The roadmap is organized into near-term, medium-term, and long-term horizons, each building on the capabilities established in the previous horizon.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Roadmap priorities are informed by customer feedback, usage analytics, and our ongoing research into the frontier of AI management capabilities. Timeline estimates reflect current development priorities and are subject to change as we learn more from customer deployments and as underlying AI capabilities evolve.
          </p>

          <div className="space-y-8">
            {[
              {
                horizon: "Near-Term",
                timeframe: "Q2–Q3 2026",
                color: "bg-green-500",
                items: [
                  {
                    title: "Autonomous Sprint Planning",
                    desc: "Full automation of sprint planning cycles  the system generates optimized sprint compositions based on backlog priority, team capacity, and velocity history, and presents them for manager review and approval. Eliminates the manual effort currently required for sprint planning ceremonies while preserving human oversight of the final plan."
                  },
                  {
                    title: "AI Meeting Summarization",
                    desc: "Automatic transcription, summarization, and action item extraction for meetings conducted through connected video conferencing platforms. Meeting summaries are automatically connected to the relevant projects and tasks in SuperManagerAGI, with action items assigned to the appropriate team members and tracked through to completion."
                  },
                  {
                    title: "Enhanced Slack Workspace Intelligence",
                    desc: "Deeper Slack integration that analyzes communication patterns to identify coordination bottlenecks, sentiment signals, and collaboration health indicators  providing an additional layer of operational intelligence beyond the structured data available from project management and engineering tools."
                  },
                ]
              },
              {
                horizon: "Medium-Term",
                timeframe: "Q4 2026–Q1 2027",
                color: "bg-blue-500",
                items: [
                  {
                    title: "Predictive Hiring Recommendations",
                    desc: "AI-powered hiring intelligence that analyzes current and projected project portfolios, team skill profiles, and historical capacity constraints to generate specific recommendations for when to hire, what skills to prioritize, and how to structure new roles to address the capability gaps most likely to limit organizational performance over the next six to twelve months."
                  },
                  {
                    title: "Cross-Project Portfolio Intelligence",
                    desc: "Organization-wide portfolio intelligence that analyzes relationships and resource dependencies across all active projects simultaneously  identifying resource conflicts that individual project analysis would miss, optimizing portfolio-level resource allocation, and generating executive-level insights about overall organizational capacity and delivery health."
                  },
                  {
                    title: "AI-Powered Performance Coaching",
                    desc: "Personalized, AI-generated development recommendations for individual team members based on their performance patterns, skill profiles, and career goals  providing managers with specific, evidence-based coaching guidance that helps them have more productive development conversations and make better decisions about growth opportunities."
                  },
                ]
              },
              {
                horizon: "Long-Term",
                timeframe: "2027 and Beyond",
                color: "bg-purple-500",
                items: [
                  {
                    title: "Fully Autonomous Project Orchestration",
                    desc: "A future state in which SuperManagerAGI manages the complete lifecycle of project delivery  from initial scoping through final delivery  with minimal human intervention, escalating to human decision-makers only for the genuinely judgment-intensive decisions that require human wisdom and contextual understanding."
                  },
                  {
                    title: "Organizational Design Intelligence",
                    desc: "AI-powered recommendations for organizational structure, team composition, and reporting relationships based on analysis of how the current organizational design affects operational performance  identifying structural inefficiencies, communication bottlenecks, and coordination patterns that suggest opportunities for organizational improvement."
                  },
                  {
                    title: "Strategic Planning Integration",
                    desc: "Deep integration between operational performance intelligence and strategic planning processes  connecting real-time data about organizational execution capability directly to the strategic planning decisions about what the organization can realistically commit to delivering, and continuously updating those commitments as capacity and performance data evolves."
                  },
                ]
              },
            ].map((horizon) => (
              <div key={horizon.horizon}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-3 h-3 rounded-full ${horizon.color}`} />
                  <h3 className="font-semibold text-gray-900">{horizon.horizon}</h3>
                  <span className="text-sm text-gray-400">{horizon.timeframe}</span>
                </div>
                <div className="space-y-3 pl-6">
                  {horizon.items.map((item) => (
                    <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}



const SectionHeading = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-6 pb-4 border-b border-gray-200">
    <h2 className="text-xl font-bold text-gray-900">
      <span className="text-gray-300 mr-2">{number}.</span>
      {title}
    </h2>
  </div>
)

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
    <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
)

export default DocViews