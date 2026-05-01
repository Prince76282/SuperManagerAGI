import Link from "next/link";

export const metadata = { title: "Privacy Policy  SuperManager AGI" };

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 bg-[#625FD0] rounded-full shrink-0" />
        <h2 className="text-xl font-semibold text-gray-900">{number}. {title}</h2>
      </div>
      <div className="pl-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-3 flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="text-[#625FD0] font-bold shrink-0 leading-7"></span>
          <span className="text-gray-600 text-[15px] leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Pill({ label, gray }: { label: string; gray?: boolean }) {
  return (
    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${gray ? "bg-gray-50 text-gray-500 border-gray-200" : "bg-[#F3F2FE] text-[#625FD0] border-[#DDD9FA]"}`}>
      {label}
    </span>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] font-semibold text-gray-900 mt-5 mb-2">{children}</p>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-[1.8] text-gray-600 mb-3">{children}</p>;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8F7FF] border-l-4 border-[#625FD0] rounded-r-xl px-5 py-4 my-6">
      <p className="text-sm leading-7 text-gray-600">{children}</p>
    </div>
  );
}

function Warn({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 my-5">
      <p className="text-sm leading-7 text-gray-600">{children}</p>
    </div>
  );
}



export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white  text-gray-900">

    

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#F8F7FF] to-white border-b border-gray-100 px-6 sm:px-10 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            <Pill label="Privacy Policy" />
            <Pill label="Effective: April 17, 2026" gray />
            <Pill label="Version 1.0" gray />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-gray-950 leading-tight tracking-tight mb-4">
            Your data powers<br />your work. Not ours.
          </h1>
          <p className="text-base sm:text-lg leading-[1.75] text-gray-500 max-w-xl">
            SuperManager AGI's autonomous agent, ADA, operates inside your live company environment  accessing data without APIs or MCP servers, automatically, at depth. That architecture demands a clear, honest privacy policy. This is it.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 ">

        <Highlight>
          <strong className="text-[#625FD0]">The core commitment:</strong> We process your company data as your data processor  under your instructions, for your work. We do not sell it, mine it, or train AI models on it without your explicit written consent.
        </Highlight>

        <Section number="1" title="Who We Are">
          <P>SuperManager AGI operates the AI Vibe Working Platform  the environment where ADA, our autonomous agent, accesses your live company data 1,000 feet deep and completes real work from a single prompt. No APIs. No MCP servers. Fully automatic.</P>
          <P>In data protection terms: <strong className="text-gray-800">you are the data controller</strong>  you determine what data exists and what purposes it serves. <strong className="text-gray-800">We are the data processor</strong>  we access and process that data only to carry out the tasks you assign. That distinction is the legal and operational foundation of this policy.</P>
          <P>This policy applies to all users of the SuperManager AGI platform, including individual accounts, team accounts, and enterprise deployments.</P>
        </Section>

        <Section number="2" title="What Data We Collect">
          <SubHeading>Account & Identity Data</SubHeading>
          <P>Collected when you register or manage your account:</P>
          <BulletList items={[
            "Full name, work email address, and organization name",
            "Job title and role within your organization",
            "Billing details  processed via our payment provider; we do not store raw card data",
            "Access permissions and roles assigned within your account",
            "Communication preferences and notification settings",
          ]} />

          <SubHeading>Company Data Processed by ADA</SubHeading>
          <P>This is the data ADA accesses to do your work. It includes files, documents, databases, internal communications, spreadsheets, workflows, project records, and any other data sources within your company environment that you authorize ADA to access.</P>
          <P>We process this data as your data processor under your direct instructions. We do not store, index, or copy your company data beyond what is strictly required to complete the task you assigned, unless you explicitly configure persistent memory or knowledge base features.</P>

          <SubHeading>Platform Usage & Agent Activity Data</SubHeading>
          <BulletList items={[
            "Prompts submitted to ADA  retained for 12 months for debugging, audit, and compliance purposes",
            "Agent action logs: what ADA read, modified, created, or completed on your behalf",
            "Task completion rates, execution times, and error events",
            "Session timestamps, feature usage patterns, and navigation paths",
            "Feedback and ratings you submit on agent outputs",
          ]} />

          <SubHeading>Technical & Device Data</SubHeading>
          <BulletList items={[
            "IP address, browser type and version, operating system, and device identifiers",
            "Timezone, language settings, and screen resolution",
            "Collected automatically via cookies and server logs when you access the platform",
          ]} />
        </Section>

        <Section number="3" title="How We Use Your Data">
          <div className="overflow-x-auto rounded-xl border border-gray-100 my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">Purpose</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">What It Means</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Platform operation", "Running ADA and executing autonomous tasks on your behalf", "Contract performance"],
                  ["Authentication & access", "Verifying identity and enforcing role-based permissions", "Contract performance"],
                  ["Reliability & debugging", "Diagnosing errors, improving agent performance, maintaining uptime", "Legitimate interests"],
                  ["Security & fraud prevention", "Detecting unauthorized access, anomalous agent behavior, and abuse", "Legitimate interests"],
                  ["Billing & account management", "Processing payments, managing subscriptions, sending receipts", "Contract performance"],
                  ["Service communications", "Security alerts, downtime notices, and critical platform updates", "Legitimate interests"],
                  ["Legal compliance", "Meeting applicable legal, regulatory, or audit obligations", "Legal obligation"],
                ].map(([purpose, desc, basis], i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-800 align-top whitespace-nowrap">{purpose}</td>
                    <td className="px-4 py-3 text-gray-600 align-top leading-6">{desc}</td>
                    <td className="px-4 py-3 text-gray-500 align-top whitespace-nowrap">{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Warn>
            <strong className="text-amber-700">What we never do:</strong> We do not use your company data to train ADA or any AI model without your explicit written consent. We do not sell your data to any third party. We do not use your data for advertising targeting.
          </Warn>
        </Section>

        <Section number="4" title="Data Sharing">
          <P>We do not sell your data. Period. We share data only in these strictly limited circumstances:</P>
          <SubHeading>Infrastructure & Service Providers</SubHeading>
          <P>Cloud hosting, database storage, and processing infrastructure that powers the platform. All operate under data processing agreements that prohibit independent use of your data.</P>
          <SubHeading>Security & Fraud Prevention</SubHeading>
          <P>Services that help us monitor for unauthorized access, detect anomalies in agent activity, and protect platform integrity.</P>
          <SubHeading>Payment Processors</SubHeading>
          <P>Your payment details are handled by a PCI-DSS compliant payment provider. We pass only what's necessary for billing  we never see or store your full card number.</P>
          <SubHeading>Legal & Regulatory Authorities</SubHeading>
          <P>Where required by applicable law, court order, or regulatory directive  or where necessary to protect the rights, safety, or property of our users or the public. We notify you of such requests where legally permitted.</P>
          <SubHeading>Business Transfers</SubHeading>
          <P>If SuperManager AGI is acquired, merged, or its assets transferred, your data may be disclosed to the acquiring entity. You will be notified and your rights will be preserved.</P>
        </Section>

        <Section number="5" title="Data Retention">
          <div className="overflow-x-auto rounded-xl border border-gray-100 my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Data Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Retention Period</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Deletion Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Account & identity data", "Subscription + 90 days", "Account termination + grace period"],
                  ["Prompt & task logs", "12 months", "Rolling deletion after 12 months"],
                  ["Agent action logs", "12 months", "Rolling deletion after 12 months"],
                  ["Company data accessed by ADA", "Task duration only", "Immediately after task completion"],
                  ["Billing records", "7 years", "Tax & accounting compliance"],
                  ["Security & audit logs", "24 months", "Rolling deletion"],
                ].map(([type, period, trigger], i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-800 align-top">{type}</td>
                    <td className="px-4 py-3 text-gray-600 align-top">{period}</td>
                    <td className="px-4 py-3 text-gray-500 align-top">{trigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>You may request early deletion of your personal data at any time by emailing <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>. We process all valid requests within 30 days.</P>
        </Section>

        <Section number="6" title="Security">
          <P>Because ADA operates inside your live company environment, security is not an optional layer  it is built into the platform's architecture:</P>
          <BulletList items={[
            "Encryption in transit: TLS 1.3 on all data movement between your environment and our platform",
            "Encryption at rest: AES-256 for all persisted data on our infrastructure",
            "Role-based access controls: least-privilege enforcement across all internal systems and personnel",
            "Agent action monitoring: real-time anomaly detection that flags out-of-scope or unexpected agent behavior",
            "Penetration testing: regular third-party security assessments of platform infrastructure",
            "Incident response: breach notification within 72 hours of confirming a breach affecting personal data",
            "Employee access controls: strict internal policies limiting which employees can access customer data, with full audit logging",
          ]} />
          <Warn>
            <strong className="text-amber-700">Your responsibility:</strong> You are accountable for securing your own credentials, access tokens, and internal environment. We cannot protect against threats that originate from a compromised account or misconfigured permissions on your side.
          </Warn>
        </Section>

        <Section number="7" title="Your Privacy Rights">
          <P>Depending on your jurisdiction (GDPR, CCPA, PDPA, and equivalents), you may hold the following rights:</P>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-4">
            {[
              { icon: "📋", title: "Access", desc: "Request a copy of all personal data we hold about you." },
              { icon: "✏️", title: "Correction", desc: "Require us to fix inaccurate or incomplete data." },
              { icon: "🗑️", title: "Deletion", desc: "Request erasure where no overriding legal basis applies." },
              { icon: "⏸️", title: "Restriction", desc: "Limit how we process your data in specific circumstances." },
              { icon: "📦", title: "Portability", desc: "Receive your data in a machine-readable format." },
              { icon: "🚫", title: "Objection", desc: "Object to processing based on legitimate interests." },
              { icon: "↩️", title: "Withdraw Consent", desc: "Withdraw consent where processing is consent-based." },
              { icon: "🧑‍⚖️", title: "Complain", desc: "Lodge a complaint with your local supervisory authority." },
            ].map((r) => (
              <div key={r.title} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                <div className="text-xl mb-2">{r.icon}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{r.title}</div>
                <div className="text-xs text-gray-500 leading-[1.6]">{r.desc}</div>
              </div>
            ))}
          </div>
          <P>To exercise any right, email <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>. We respond within 30 days and may ask you to verify your identity before processing the request.</P>
        </Section>

        <Section number="8" title="Cookies">
          <P>We use cookies only for session management, security, functional preferences, and platform analytics. We do not use advertising cookies or third-party tracking pixels. Full details in our <Link href="/cookie-policy" className="text-[#625FD0] hover:underline">Cookie Policy</Link>.</P>
        </Section>

        <Section number="9" title="International Data Transfers">
          <P>Your data may be processed in countries other than your own. Where we transfer personal data outside the EEA, UK, or other jurisdictions with data protection frameworks, we implement Standard Contractual Clauses (SCCs), adequacy decisions, or equivalent mechanisms as required by applicable law.</P>
          <P>Customers subject to GDPR may request a copy of the relevant transfer mechanisms by contacting <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>.</P>
        </Section>

        <Section number="10" title="Children's Privacy">
          <P>SuperManager AGI is a business platform and is not directed at children under 18. We do not knowingly collect personal data from anyone under 18. If you believe we have inadvertently collected such data, contact us immediately and we will delete it.</P>
        </Section>

        <Section number="11" title="Changes to This Policy">
          <P>We may update this Privacy Policy as the platform evolves or as applicable law requires. Material changes will be communicated via email and a prominent platform notice at least 14 days before taking effect.</P>
          <P>The "Effective" date at the top of this page reflects the current version. Continued use of the platform after changes take effect constitutes acceptance.</P>
        </Section>

        <Section number="12" title="Contact">
          <P>For privacy questions, data requests, or concerns about how we handle your information:</P>
          <div className="inline-block bg-[#F8F7FF] border border-[#DDD9FA] rounded-xl px-6 py-5 mt-2">
            <p className="text-xs text-gray-400 mb-1">Privacy Contact</p>
            <a href="mailto:support@supermanager.co" className="text-[#625FD0] font-medium text-base hover:underline">support@supermanager.co</a>
          </div>
        </Section>

      </div>

     
    </div>
  );
}