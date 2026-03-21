"use client";

import type { ReactNode } from "react";

/* ---------- Small Components ---------- */

type TagProps = {
  children: ReactNode;
  wide?: boolean;
};

type LogoBadgeProps = {
  label: string;
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
      className={`flex items-start gap-2 px-3 py-2 rounded-md text-xs leading-relaxed border bg-white transition hover:shadow-sm hover:border-[#625FD0]/30 ${
        wide ? "col-span-2" : ""
      }`}
    >
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#625FD0]" />
      <span className="text-gray-700">{children}</span>
    </div>
  );
}

function LogoBadge({ label }: LogoBadgeProps) {
  return (
    <div className="flex items-center justify-center px-3 py-2.5 rounded-md border text-xs font-semibold tracking-wide bg-white hover:shadow-sm transition text-gray-800">
      {label}
    </div>
  );
}

function Column({ title, children }: ColumnProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border bg-white shadow-sm">
      <div className="px-5 py-4 bg-[#625FD0]">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest">
          {title}
        </h3>
      </div>

      <div className="flex flex-col divide-y flex-1">{children}</div>
    </div>
  );
}

function ColumnSection({ label, children }: ColumnSectionProps) {
  return (
    <div className="px-5 py-5 flex flex-col gap-4">
      {label && (
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
          {label}
        </p>
      )}
      {children}
    </div>
  );
}



export default function AutonomousUses() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl leading-tight text-black mb-4 font-semibold">
             Work Moves Forward Automatically. {" "}
              <span className="text-[#625FD0]">Without Anyone Asking.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
             SuperManager AGI’s autonomous execution layer continuously monitors every connected system, detects what needs to happen and executes it  without prompts, without manual triggers and without being asked. Instead of relying on constant human coordination, organisations gain an AI workforce that keeps every operational workflow moving forward at all times.
            </p>
          </div>

          
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* COLUMN 1 */}
          <Column title="Autonomous Execution Agents">
            
            <ColumnSection label="Finance & Operations">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>
                  Settlement reconciliation across Amazon, Flipkart and Shopify
                </Tag>
                <Tag wide>
                  Payment gateway discrepancy detection and flagging
                </Tag>
                <Tag wide>COD remittance matching automation</Tag>
                <Tag wide>GST workings compiled monthly by channel</Tag>
                <Tag wide>Vendor payables tracked and surfaced weekly</Tag>
                <Tag wide>P&L generated automatically by channel</Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Logistics & Operations">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>NDR dashboard auto-populated daily</Tag>
                <Tag wide>NDR follow-ups triggered automatically</Tag>
                <Tag wide>Courier performance scoring with alerts</Tag>
                <Tag wide>Return pickup tracking end-to-end</Tag>
                <Tag wide>COD shortfalls detected and escalated</Tag>
                <Tag wide>Weekly logistics reports generated</Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Engineering & Product">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>Sprint plans generated from velocity data</Tag>
                <Tag wide>Daily standups auto-generated</Tag>
                <Tag wide>Blockers detected before delays occur</Tag>
                <Tag wide>Release notes generated on merge</Tag>
                <Tag wide>Risk prediction 2–3 weeks in advance</Tag>
                <Tag wide>Stakeholder updates auto-sent</Tag>
              </div>
            </ColumnSection>

          </Column>

          {/* COLUMN 2 */}
          <Column title="SuperManager AGI Platform">
            
            <ColumnSection>
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>Daily intelligence brief from all systems</Tag>
                <Tag wide>KPI anomaly alerts in real-time</Tag>
                <Tag wide>Investor reports generated monthly</Tag>
                <Tag wide>OKR alignment tracked continuously</Tag>
                <Tag wide>Competitive signals monitored</Tag>
                <Tag wide>Cross-team coordination automated</Tag>
              </div>
            </ColumnSection>

            <ColumnSection label="Interfaces">
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Slack",
                  "Microsoft Teams",
                  "Web App",
                  "WhatsApp Business",
                  "Email",
                  "Mobile",
                  "API",
                  "Dashboard",
                ].map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </ColumnSection>

            <ColumnSection label="Core Engine">
              <div className="grid grid-cols-2 gap-2">
                <Tag wide>Beehive Controller (DAG orchestration)</Tag>
                <Tag wide>ADA Integration Layer (2–15ms latency)</Tag>
                <Tag wide>Evidence-Majority validation</Tag>
                <Tag wide>Work-Stealing scheduler (6.7× throughput)</Tag>
                <Tag wide>No-code agent builder</Tag>
              </div>
            </ColumnSection>

          </Column>

          {/* COLUMN 3 */}
          <Column title="Integrations & Security">
            
            <ColumnSection label="Dev & Project Tools">
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Jira",
                  "GitHub",
                  "GitLab",
                  "Notion",
                  "Asana",
                  "ClickUp",
                  "Figma",
                  "Azure DevOps",
                ].map((t) => (
                  <LogoBadge key={t} label={t} />
                ))}
              </div>
            </ColumnSection>

            <ColumnSection label="Enterprise Systems">
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

            <ColumnSection label="Security & Compliance">
              <div className="grid grid-cols-2 gap-2">
                {[
                  "SOC 2 Type II",
                  "GDPR Ready",
                  "ISO 27001",
                  "CCPA",
                  "SSO Integration",
                  "Audit Logs",
                  "End-to-End Encryption",
                  "Human-in-the-Loop",
                ].map((c) => (
                  <LogoBadge key={c} label={c} />
                ))}
              </div>
            </ColumnSection>

          </Column>
        </div>
      </div>
    </section>
  );
}
