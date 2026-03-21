"use client";

import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  wide?: boolean;
};

type LogoBadgeProps = {
  label: string;
  wide?: boolean;
};

type ColumnProps = {
  title: string;
  children: ReactNode;
};

type ColumnSectionProps = {
  label?: string;
  children: ReactNode;
};

function Tag({ children, wide = false }: TagProps) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border border-gray-200 bg-white hover:shadow-sm transition ${wide ? "col-span-2" : ""}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#625FD0]" />
      {children}
    </div>
  );
}

function LogoBadge({ label, wide = false }: LogoBadgeProps) {
  return (
    <div
      className={`flex items-center justify-center px-3 py-2.5 rounded-lg border text-xs font-semibold tracking-wide transition hover:shadow-sm ${wide ? "col-span-2" : ""}`}
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

function Column({ title, children }: ColumnProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white">
      <div className="px-5 py-4 border-b border-gray-200 bg-[#625FD0]">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest">
          {title}
        </h3>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 flex-1">
        {children}
      </div>
    </div>
  );
}

function ColumnSection({ label, children }: ColumnSectionProps) {
  return (
    <div className="px-5 py-4 flex flex-col gap-3">
      {label && (
        <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">
          {label}
        </p>
      )}
      {children}
    </div>
  );
}

export default function ManagementUses() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden  bg-white  ">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-8 max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl leading-tight text-black mb-4">
              AI Agents Replacing Operational Coordination
              <span className="text-[#625FD0]">Across Every Function</span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              SuperManager AGI transforms how organisations manage operations by
              replacing the coordination layer of management with intelligent AI
              agents. Instead of relying on constant human supervision,
              organisations gain an autonomous workforce that monitors progress,
              executes routine workflows, surfaces exceptions and coordinates
              across systems so human leaders focus on strategy, client
              relationships and the decisions that require judgment.
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* COLUMN 1 */}
          <Column title="AI Management Execution">
            <ColumnSection label="Operations Management AI">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>
                  Automated inventory monitoring and reorder trigger across all
                  channels
                </Tag>
                <Tag wide>
                  Vendor PO drafting and sending on threshold trigger
                </Tag>
                <Tag wide>
                  Inward reconciliation — received vs ordered verified on
                  delivery
                </Tag>
                <Tag wide>
                  Daily overstock and understock position report generated
                </Tag>
                <Tag wide>
                  Launch readiness checks before every product or collection
                  go-live
                </Tag>
                <Tag wide>
                  Weekly operations MIS in Excel generated and distributed
                  automatically
                </Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Project & Product Leadership">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>
                  Automated inventory monitoring and reorder trigger across all
                  channels
                </Tag>
                <Tag wide>
                  Vendor PO drafting and sending on threshold trigger
                </Tag>
                <Tag wide>
                  Inward reconciliation — received vs ordered verified on
                  delivery
                </Tag>
                <Tag wide>
                  Daily overstock and understock position report generated
                </Tag>
                <Tag wide>
                  Launch readiness checks before every product or collection
                  go-live
                </Tag>
                <Tag wide>
                  Weekly operations MIS in Excel generated and distributed
                  automatically
                </Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Executive Oversight">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>
                  Overnight settlement reconciliation across every connected
                  platform
                </Tag>
                <Tag wide>
                  Payment gateway discrepancy detection and structured flagging
                </Tag>
                <Tag wide>
                  COD remittance shortfall identification and escalation
                </Tag>
                <Tag wide>
                  Monthly GST workings compiled by channel for the CA
                </Tag>
                <Tag wide>
                  Vendor payables aged report generated every Monday
                </Tag>
                <Tag wide>
                  Monthly P and L by channel generated in the right format
                  automatically
                </Tag>
              </div>
            </ColumnSection>
          </Column>

          {/* COLUMN 2 */}
          <Column title="SuperManagerAGI Platform">
            <ColumnSection>
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>
                  NDR report populated and categorised automatically every
                  morning
                </Tag>
                <Tag wide>
                  Re-delivery follow-up communication executed for all stuck
                  orders
                </Tag>
                <Tag wide>
                  Courier SLA compliance tracked and violations flagged daily
                </Tag>
                <Tag wide>
                  Return pickup monitored from customer request through
                  warehouse receipt
                </Tag>
                <Tag wide>
                  COD remittance matched against expected amounts across all
                  couriers
                </Tag>
                <Tag wide>
                  Weekly logistics summary in Excel generated and sent
                  automatically
                </Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Interfaces">
              <div className="grid grid-cols-3 gap-2">
                {[
                  "Slack",
                  "Teams",
                  "Web App",
                  "Email",
                  "SMS",
                  "Mobile",
                  "API",
                  "Dashboard",
                ].map((ch) => (
                  <Tag key={ch}>{ch}</Tag>
                ))}
              </div>
            </ColumnSection>

          

            <ColumnSection label="Security">
              <div className="grid grid-cols-3 gap-2">
                {[
                  "SOC 2",
                  "GDPR",
                  "ISO 27001",
                  "CCPA",
                  "SSO",
                  "Audit Logs",
                ].map((c) => (
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

          {/* COLUMN 3 */}
          <Column title="Enterprise Integrations">
            <ColumnSection label="Product & Development Platforms">
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Jira",
                  "Linear",
                  "GitHub",
                  "GitLab",
                  "Notion",
                  "Confluence",
                  "Asana",
                  "ClickUp",
                  "Shortcut",
                  "Azure DevOps",
                  "Figma",
                  "Basecamp",
                ].map((t) => (
                  <LogoBadge key={t} label={t} />
                ))}
              </div>
            </ColumnSection>

            <ColumnSection label="Business Systems">
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Salesforce",
                  "Slack",
                  "Microsoft Teams",
                  "Google Workspace",
                  "HubSpot",
                  "Zapier",
                ].map((t) => (
                  <LogoBadge key={t} label={t} />
                ))}
              </div>
            </ColumnSection>

              <ColumnSection label="Core Engine">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>
                  Daily cross-channel performance report from every connected ad
                  platform
                </Tag>
                <Tag wide>
                  Revenue attribution by campaign from actual Shopify purchase
                  data
                </Tag>
                <Tag wide>
                  Budget pacing alert fired before the week’s budget is consumed
                </Tag>
                <Tag wide>
                  Creative brief generated when fatigue signals are detected
                </Tag>
                <Tag wide>
                  Influencer attribution completed within 24 hours of every post
                </Tag>
                <Tag wide>
                  Monthly marketing MIS with actual ROAS, CAC and attribution
                  generated
                </Tag>
              </div>
            </ColumnSection>
          </Column>
        </div>
      </div>
    </section>
  );
}
