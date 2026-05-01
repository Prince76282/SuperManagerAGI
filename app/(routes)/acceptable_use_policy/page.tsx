import Link from "next/link";

export const metadata = { title: "Acceptable Use Policy  SuperManager AGI" };

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
          <span className="text-[#625FD0] font-semibold shrink-0 leading-7"></span>
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

function Danger({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl px-5 py-4 my-6">
      <p className="text-sm leading-7 text-gray-600">{children}</p>
    </div>
  );
}

function ProhibitedBlock({ icon, title, items }: { icon: string; title: string; items: string[] }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden mb-4">
      <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center gap-2">
        <span className="text-base">{icon}</span>
        <span className="text-sm font-semibold text-gray-900">{title}</span>
      </div>
      <div className="px-5 py-4">
        <BulletList items={items} />
      </div>
    </div>
  );
}



export default function AcceptableUsePolicy() {
  return (
    <div className="min-h-screen bg-white  text-gray-900">

   

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#F8F7FF] to-white border-b border-gray-100 px-6 sm:px-10 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            <Pill label="Acceptable Use Policy" />
            <Pill label="Effective: April 17, 2026" gray />
            <Pill label="Version 1.0" gray />
          </div>
          <h1 className=" text-4xl sm:text-5xl font-normal text-gray-950 leading-tight tracking-tight mb-4">
            ADA can do a lot.<br />Here's what it must not.
          </h1>
          <p className="text-base sm:text-lg leading-[1.75] text-gray-500 max-w-xl">
            ADA accesses your live company data and takes real actions at scale without human intervention at each step. That power demands clear rules. This policy defines the line between legitimate use and misuse  and makes clear who is accountable when ADA acts.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 ">

        <Danger>
          <strong className="text-red-600">Violation of this policy</strong> may result in immediate suspension or permanent termination of your account without refund. In serious cases, we may report violations to relevant legal authorities.
        </Danger>

        <Section number="1" title="What the Platform Is Built For">
          <P>SuperManager AGI is a business-grade autonomous agent platform. ADA is designed to complete legitimate, authorized work within your own organization  not as a general-purpose tool with unlimited scope. Permitted uses include:</P>
          <BulletList items={[
            "Automating internal business workflows, reporting pipelines, and task management within your organization",
            "Accessing and analyzing your organization's own live data to generate actionable insights and complete assigned work",
            "Coordinating cross-functional work across your teams, tools, and departments using ADA agents",
            "Reducing operational overhead through safe, supervised, and reviewable autonomous task execution",
            "Drafting, summarizing, organizing, and acting on internal business documents and communications",
            "Generating business reports, analyses, and operational summaries from your company's data",
          ]} />
        </Section>

        <Section number="2" title="Prohibited Uses">
          <P>The following uses are strictly prohibited. Directing ADA to perform any of these actions  intentionally or through negligent prompting  violates this policy.</P>

          <ProhibitedBlock
            icon="🔒"
            title="Unauthorized Data Access"
            items={[
              "Accessing data belonging to individuals or organizations you are not explicitly authorized to access",
              "Directing ADA to bypass authentication systems, permission boundaries, access controls, or data classification policies",
              "Extracting, scraping, or exfiltrating data from your environment for purposes beyond your own authorized business operations",
              "Accessing employee, customer, or partner data beyond your authorized scope and role",
            ]}
          />

          <ProhibitedBlock
            icon="⚖️"
            title="Illegal or Harmful Activity"
            items={[
              "Violating any applicable law, regulation, employment law, data protection law, or contractual obligation",
              "Facilitating fraud, financial deception, misrepresentation, or manipulation of records",
              "Using ADA to surveil, stalk, monitor, or collect personal information about individuals without lawful basis",
              "Violating the privacy rights of employees, customers, partners, or any other individuals",
              "Generating or distributing defamatory, abusive, harassing, or discriminatory content",
              "Using the platform to circumvent legal obligations, evade regulatory oversight, or conceal wrongdoing",
            ]}
          />

          <ProhibitedBlock
            icon="🛡️"
            title="Platform & Security Abuse"
            items={[
              "Reverse-engineering, decompiling, or attempting to extract ADA's underlying models, weights, or proprietary logic",
              "Using SuperManager AGI to build, train, or power a competing autonomous agent product or service",
              "Probing, scanning, or testing the platform's infrastructure, APIs, or security boundaries without authorization",
              "Circumventing rate limits, billing controls, usage caps, or access tier restrictions",
              "Introducing malware, adversarial inputs, or code designed to corrupt, manipulate, or disrupt ADA's behavior",
              "Sharing account access in ways that violate your subscription terms or enable unauthorized users to access the platform",
            ]}
          />

          <ProhibitedBlock
            icon="🤖"
            title="Autonomous Agent Misuse"
            items={[
              "Directing ADA to take irreversible or high-impact actions  data deletion, financial transactions, access changes  without appropriate human review controls in place",
              "Using ADA to make or automate consequential decisions about individuals (employment, compensation, performance, access rights) without human oversight and sign-off",
              "Deploying ADA to operate against third-party systems, external organizations, or competitors you do not own or have authorization to access",
              "Using ADA to generate misleading, fabricated, or manipulated outputs and presenting them as authoritative business intelligence without review",
              "Operating ADA in fully autonomous loops  where it takes actions that trigger further autonomous actions  without defined human checkpoints",
            ]}
          />
        </Section>

        <Section number="3" title="You Are Accountable for ADA's Actions">
          <P>ADA executes based on your prompts. Every instruction you give is your responsibility:</P>
          <BulletList items={[
            "You are accountable for reviewing ADA's outputs before acting on them in high-stakes contexts  financial, legal, personnel, or operational",
            "You must ensure that any data ADA accesses within your environment is covered by appropriate internal authorizations and data governance policies",
            "You are liable for harm caused by your prompts, even where the resulting action was carried out autonomously by ADA without further human input",
            "If you grant ADA broad access permissions within your environment, the downstream consequences of that access scope are your responsibility to manage",
            "You are responsible for ensuring all authorized users within your organization understand and comply with this policy",
          ]} />
          <Highlight>
            <strong className="text-[#625FD0]">The rule is simple:</strong> If you would not be comfortable doing it yourself  or having a human employee do it on your behalf  do not instruct ADA to do it for you.
          </Highlight>
        </Section>

        <Section number="4" title="High-Risk Use Cases">
          <P>Certain use cases require extra care regardless of whether they are explicitly prohibited above. We strongly recommend implementing human review checkpoints before ADA takes action in any of the following contexts:</P>
          <BulletList items={[
            "Financial approvals, payments, or budget allocations",
            "Personnel decisions  hiring, firing, performance management, or compensation changes",
            "Sending external communications on behalf of your organization",
            "Modifying, deleting, or archiving records that may have legal, regulatory, or audit significance",
            "Granting or revoking access rights for users or systems",
            "Any task where an error would be difficult or impossible to reverse",
          ]} />
        </Section>

        <Section number="5" title="Reporting Violations">
          <P>If you become aware of any misuse of the platform  by users within your organization or externally  report it immediately to <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>. Include as much detail as possible: account information, the nature of the violation, and any evidence you can share.</P>
          <P>We investigate all reports seriously and take appropriate action. Reports made in good faith will not result in any adverse action against the reporter.</P>
        </Section>

        <Section number="6" title="Enforcement">
          <P>We reserve the right to investigate suspected violations at any time. Enforcement actions we may take include:</P>
          <BulletList items={[
            "Issuing a formal warning and requiring corrective action",
            "Temporarily suspending access to the platform or specific features",
            "Permanently terminating your account without refund",
            "Reporting violations to relevant legal, regulatory, or law enforcement authorities",
          ]} />
          <P>We are not obligated to provide warnings before enforcement action in cases of serious, intentional, or repeated misuse.</P>
        </Section>

        <Section number="7" title="Changes to This Policy">
          <P>This policy may be updated as the platform evolves, as new capabilities are added, or as applicable law changes. Material changes will be communicated via email. Continued use of the platform constitutes acceptance of the updated policy.</P>
        </Section>

        <Section number="8" title="Contact">
          <P>Questions about this policy or to report a violation:</P>
          <div className="inline-block bg-[#F8F7FF] border border-[#DDD9FA] rounded-xl px-6 py-5 mt-2">
            <p className="text-xs text-gray-400 mb-1">Policy Contact</p>
            <a href="mailto:support@supermanager.co" className="text-[#625FD0] font-medium text-base hover:underline">support@supermanager.co</a>
          </div>
        </Section>

      </div>

     
    </div>
  );
}