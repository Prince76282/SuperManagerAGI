import Link from "next/link";

export const metadata = { title: "Terms of Service  SuperManager AGI" };

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


export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

   

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#F8F7FF] to-white border-b border-gray-100 px-6 sm:px-10 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            <Pill label="Terms of Service" />
            <Pill label="Effective: April 17, 2026" gray />
            <Pill label="Version 1.0" gray />
          </div>
          <h1 className=" text-4xl sm:text-5xl font-normal text-gray-950 leading-tight tracking-tight mb-4">
            The rules that make<br />autonomous work possible.
          </h1>
          <p className="text-base sm:text-lg leading-[1.75] text-gray-500 max-w-xl">
            ADA operates inside your company environment and takes real action on your behalf. These terms define what you can expect from us, what we expect from you, and how responsibility is shared when an agent acts at scale.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10">

        <Highlight>
          <strong className="text-[#625FD0]">Key point upfront:</strong> Using an autonomous agent that accesses live company data and executes tasks carries real accountability on both sides. These terms don't bury that  they address it directly.
        </Highlight>

        <Section number="1" title="Acceptance of Terms">
          <P>By creating an account, accessing the platform, or directing ADA to perform any task, you agree to these Terms of Service in full. If you are acting on behalf of an organization, you represent that you have authority to bind that organization  and that it agrees to these terms.</P>
          <P>If you do not agree to these terms, do not use the platform. Continued use after any update to these terms constitutes acceptance of the revised version.</P>
        </Section>

        <Section number="2" title="What SuperManager AGI Is">
          <P>SuperManager AGI is the AI Vibe Working Platform  an environment where ADA, our autonomous agent, accesses your live company data 1,000 feet deep and completes real work from a single prompt. No APIs. No MCP servers. Fully automatic.</P>
          <P>This is not a chatbot, a workflow builder, or a dashboard. ADA reads, synthesizes, and acts within your company's real data environment. That means:</P>
          <BulletList items={[
            "Tasks assigned to ADA may have real, immediate effects on your company's data, documents, and workflows",
            "You are responsible for scoping ADA's access appropriately within your environment",
            "Consequential or irreversible actions should have human review before execution",
          ]} />
          <Warn>
            <strong className="text-amber-700">This is a business platform.</strong> SuperManager AGI is designed for professional use within organizations. It is not a consumer product and should not be used for personal, household, or non-commercial purposes.
          </Warn>
        </Section>

        <Section number="3" title="Eligibility">
          <BulletList items={[
            "You must be at least 18 years old to create an account or use the platform",
            "You must have the legal capacity to enter into a binding contract in your jurisdiction",
            "If registering on behalf of an organization, you must have authority to bind that entity",
            "Use of the platform is prohibited in jurisdictions where it violates applicable law",
            "We reserve the right to refuse service to any person or entity at our discretion",
          ]} />
        </Section>

        <Section number="4" title="Your Account">
          <P>You are fully and solely responsible for:</P>
          <BulletList items={[
            "The security of your login credentials, API tokens, and any access keys associated with your account",
            "All activity that occurs under your account  including every task ADA executes based on prompts issued by you or your authorized users",
            "Ensuring that every person with access to your account understands and complies with these Terms",
            "Immediately notifying us at support@supermanager.co if you suspect unauthorized access",
            "Keeping your account information accurate and up to date",
          ]} />
          <P>SuperManager AGI is not liable for losses or damages arising from compromised credentials or unauthorized account access that originates on your side.</P>
        </Section>

        <Section number="5" title="License to Use the Platform">
          <P>Subject to your compliance with these Terms, SuperManager AGI grants you a limited, non-exclusive, non-transferable, revocable license to access and use the platform for your internal business purposes during the term of your subscription.</P>
          <P>This license does not include the right to:</P>
          <BulletList items={[
            "Sublicense, resell, or provide platform access to third parties",
            "Copy, modify, or create derivative works based on the platform or ADA",
            "Reverse-engineer any component of the platform or ADA's underlying models",
            "Use the platform to build a competing product",
          ]} />
        </Section>

        <Section number="6" title="Acceptable Use">
          <P>Your use of the platform must comply with our <Link href="/acceptable-use-policy" className="text-[#625FD0] hover:underline">Acceptable Use Policy</Link>. In summary, you must not direct ADA to:</P>
          <BulletList items={[
            "Access data you are not authorized to access within your own environment",
            "Take actions that violate applicable law, privacy rights, or third-party intellectual property",
            "Operate against external systems, third parties, or competitors",
            "Execute irreversible, high-impact actions without appropriate human oversight controls",
          ]} />
        </Section>

        <Section number="7" title="Your Data">
          <P>You retain full ownership of your company data  all files, databases, documents, and information that ADA accesses to complete your tasks. By using the platform, you grant SuperManager AGI a limited, non-exclusive, non-transferable license to access and process your data solely to provide the services you have requested. That license ends when your subscription ends.</P>
          <P>We do not claim ownership over, or independent rights to, your company data. We process it as your data processor. For full details, see our <Link href="/privacy-policy" className="text-[#625FD0] hover:underline">Privacy Policy</Link>.</P>
        </Section>

        <Section number="8" title="Intellectual Property">
          <P>SuperManager AGI owns all rights to the platform, ADA, and all underlying technology, models, interfaces, and documentation. These Terms grant you a license to use the platform  they do not transfer any intellectual property rights to you.</P>
          <P>You own the work product ADA generates using your data and your prompts. For full IP terms, see our <Link href="/intellectual-property-rights" className="text-[#625FD0] hover:underline">Intellectual Property Rights Policy</Link>.</P>
        </Section>

        <Section number="9" title="Fees & Billing">
          <BulletList items={[
            "Subscription fees are billed in advance on a monthly or annual cycle depending on your plan",
            "All fees are non-refundable unless otherwise required by applicable law or explicitly stated in your plan terms",
            "Failure to pay may result in account suspension after a 7-day grace period, followed by termination",
            "We will provide a minimum of 30 days notice before any price changes take effect",
            "Overdue payments may accrue interest at the rate permitted by applicable law",
            "You are responsible for all taxes applicable to your subscription in your jurisdiction",
          ]} />
        </Section>

        <Section number="10" title="Disclaimers & Platform Availability">
          <P>The platform is provided "as is" and "as available." SuperManager AGI does not warrant that:</P>
          <BulletList items={[
            "The platform will be uninterrupted, error-free, or available at any specific time",
            "ADA's outputs will be accurate, complete, or fit for any particular purpose",
            "Any defects or errors will be corrected within a specific timeframe",
          ]} />
          <Warn>
            <strong className="text-amber-700">Important:</strong> ADA operates autonomously and accesses live data. Its outputs should always be reviewed by a qualified human before being used to make consequential, financial, legal, or employment-related decisions. Do not treat ADA's output as a substitute for professional judgment.
          </Warn>
        </Section>

        <Section number="11" title="Limitation of Liability">
          <P>To the fullest extent permitted by applicable law, SuperManager AGI shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to your use of the platform  including but not limited to loss of profits, loss of data, business interruption, or reputational harm  even if we have been advised of the possibility of such damages.</P>
          <P>Our total aggregate liability for any claim arising under these Terms shall not exceed the total fees you paid to SuperManager AGI in the twelve (12) months immediately preceding the event giving rise to the claim.</P>
        </Section>

        <Section number="12" title="Indemnification">
          <P>You agree to indemnify, defend, and hold harmless SuperManager AGI and its officers, directors, employees, and agents from any claim, liability, loss, or expense (including reasonable legal fees) arising from:</P>
          <BulletList items={[
            "Your use of the platform in violation of these Terms",
            "Any prompts you issue to ADA that cause harm to a third party",
            "Your violation of any applicable law or third-party rights",
            "Any content or data you introduce into the platform",
          ]} />
        </Section>

        <Section number="13" title="Term & Termination">
          <P>These Terms remain in effect for the duration of your subscription. Either party may terminate at any time. We may suspend or terminate your access immediately and without prior notice if:</P>
          <BulletList items={[
            "You materially breach these Terms or the Acceptable Use Policy",
            "You fail to pay fees and do not cure within the grace period",
            "We are required to do so by applicable law or regulatory authority",
            "Continued operation of your account poses a risk to the platform or other users",
          ]} />
          <P>Upon termination, your right to use the platform and ADA ends immediately. Data deletion follows the schedule in our Privacy Policy.</P>
        </Section>

        <Section number="14" title="Governing Law & Disputes">
          <P>These Terms are governed by the laws of the jurisdiction in which SuperManager AGI is incorporated, without regard to conflict of law principles. Any dispute arising from these Terms or your use of the platform shall first be addressed through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration, except where prohibited by applicable law.</P>
          <P>Nothing in this clause prevents either party from seeking injunctive or other equitable relief from a court of competent jurisdiction to protect intellectual property or confidential information.</P>
        </Section>

        <Section number="15" title="Changes to These Terms">
          <P>We may update these Terms as the platform evolves, as our business changes, or as required by law. Material changes will be communicated via email at least 14 days before they take effect. The current version is always available at this URL.</P>
        </Section>

        <Section number="16" title="Contact">
          <P>Questions about these Terms:</P>
          <div className="inline-block bg-[#F8F7FF] border border-[#DDD9FA] rounded-xl px-6 py-5 mt-2">
            <p className="text-xs text-gray-400 mb-1">Legal Contact</p>
            <a href="mailto:support@supermanager.co" className="text-[#625FD0] font-medium text-base hover:underline">support@supermanager.co</a>
          </div>
        </Section>

      </div>

      
    </div>
  );
}