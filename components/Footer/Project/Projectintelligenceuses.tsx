"use client";

import Link from "next/link";

function Tag({ children, wide }) {
  return (
    <div
      className={`flex items-start gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border border-gray-200 bg-white hover:shadow-sm transition ${
        wide ? "col-span-2" : ""
      }`}
    >
      <span className="w-1.5 h-1.5 mt-1 rounded-full bg-[#625FD0]" />
      <span className="leading-snug">{children}</span>
    </div>
  );
}

function LogoBadge({ label, wide }) {
  return (
    <div
      className={`flex items-center justify-center px-3 py-2 rounded-lg border text-xs sm:text-sm font-semibold tracking-wide transition hover:shadow-sm ${
        wide ? "col-span-2" : ""
      }`}
      style={{
        background: "#fff",
        borderColor: "rgba(0,0,0,0.08)",
        color: "#111",
      }}
    >
      {label}
    </div>
  );
}

function Column({ title, children }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white">
      <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-200 bg-[#625FD0]">
        <h3 className="text-xs sm:text-sm text-white uppercase tracking-widest">
          {title}
        </h3>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 flex-1">
        {children}
      </div>
    </div>
  );
}

function ColumnSection({ label, children }) {
  return (
    <div className="px-4 sm:px-5 py-3 sm:py-4 flex flex-col gap-3">
      {label && (
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600 mb-1">
          {label}
        </p>
      )}
      {children}
    </div>
  );
}

export default function ProjectIntelligenceUses() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto w-full py-10 sm:py-14">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl leading-tight text-black mb-4">
              Intelligence Across Every Workflow Layer
              <span className="text-[#625FD0]"> Workflow Layer </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              SuperManager AGI connects every department’s data sources into a
              unified intelligence layer from founder to analyst, every role
              gets the live, grounded view of what is actually happening across
              connected systems. Risks are detected before they compound.
              Decisions are made on actual data, not approximations.
            </p>
          </div>

          <Link
            href="/get-in-touch"
            className="w-full sm:w-auto text-center shrink-0 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#625FD0] hover:opacity-90 transition"
          >
            Request a demo
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* COLUMN 1 */}
          <Column title="AGI Project Agents">
            <ColumnSection label="D2C and E-commerce Intelligence">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Tag wide>Sell-through rate tracked by SKU, size, colour and channel from hour one of any launch</Tag>
                <Tag wide>Revenue vs target by channel updated in real time from Shopify, Amazon and Flipkart</Tag>
                <Tag wide>Return rate by product and traffic source tracked continuously</Tag>
                <Tag wide>Promotional uplift calculated in real time during any active sale</Tag>
                <Tag wide>Inventory coverage days calculated by SKU based on live velocity</Tag>
                <Tag wide>Marketplace ranking and Buy Box status monitored continuously</Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Marketing and Growth Intelligence">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Tag wide>Revenue per rupee of ad spend calculated by channel from actual purchases</Tag>
                <Tag wide>New vs returning customer revenue split by campaign and channel</Tag>
                <Tag wide>Customer acquisition cost by channel and cohort tracked continuously</Tag>
                <Tag wide>Attribution window analysis for influencer and organic content</Tag>
                <Tag wide>Audience overlap and frequency saturation by campaign detected early</Tag>
                <Tag wide>Post-return ROAS calculated by feeding logistics data into attribution</Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Security">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["SOC 2", "GDPR", "ISO 27001", "CCPA", "SSO", "Audit Logs"].map((c) => (
                  <div
                    key={c}
                    className="flex items-center justify-center px-2 py-2 rounded-lg text-xs font-semibold border border-gray-200"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </ColumnSection>
          </Column>

          {/* COLUMN 2 */}
          <Column title="Logistics and Delivery Intelligence">
            <ColumnSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Tag wide>Delivery success rate by courier, geography and product category</Tag>
                <Tag wide>Average delivery time tracked against committed SLAs</Tag>
                <Tag wide>NDR rate by reason, courier and geography analysed daily</Tag>
                <Tag wide>Return pickup SLA compliance monitored from initiation to receipt</Tag>
                <Tag wide>COD collection rate vs prepaid tracked by channel and geography</Tag>
                <Tag wide>Effective cost per delivered order calculated from all logistics inputs</Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Interfaces">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Slack","Teams","Web App","Email","SMS","Mobile","API","Dashboard","CLI"].map((ch) => (
                  <Tag key={ch}>{ch}</Tag>
                ))}
              </div>
            </ColumnSection>

            <ColumnSection label="Finance and Commercial Intelligence">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Tag wide>Settlement collection rate by platform tracked daily</Tag>
                <Tag wide>Payment gateway success rates monitored in real time</Tag>
                <Tag wide>Outstanding receivables aged by number of days automatically</Tag>
                <Tag wide>Budget utilisation vs plan by department tracked continuously</Tag>
                <Tag wide>Unit economics by channel calculated from live order and cost data</Tag>
                <Tag wide>Working capital position updated daily from connected financial systems</Tag>
              </div>
            </ColumnSection>
          </Column>

          {/* COLUMN 3 */}
          <Column title="Integrations">
            <ColumnSection label="Project & Dev Tools">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {["Jira","Linear","GitHub","GitLab","Notion","Confluence","Asana","ClickUp","Shortcut","Azure DevOps","Figma","Basecamp"].map((t) => (
                  <LogoBadge key={t} label={t} />
                ))}
              </div>
            </ColumnSection>

            <ColumnSection label="Enterprise Systems">
              <div className="grid grid-cols-2 gap-2">
                {["Salesforce","Slack","Microsoft Teams","Google Workspace","HubSpot","Zapier"].map((t) => (
                  <LogoBadge key={t} label={t} />
                ))}
              </div>
            </ColumnSection>

            <ColumnSection label="Operations and Supply Chain Intelligence">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Tag wide>Unified inventory position across all locations and channels one number per SKU</Tag>
                <Tag wide>Vendor delivery performance tracked against committed timelines</Tag>
                <Tag wide>Inward vs ordered reconciliation completed automatically on receipt</Tag>
                <Tag wide>Procurement cycle time monitored from PO to deliveryQuality signal detection from customer return reason patterns</Tag>
                <Tag wide>Overstock and understock positions calculated from live velocity data</Tag>
              </div>
            </ColumnSection>
          </Column>

        </div>
      </div>
    </section>
  );
}