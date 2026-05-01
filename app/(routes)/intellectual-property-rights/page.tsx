import Link from "next/link";

export const metadata = { title: "Intellectual Property Rights  SuperManager AGI" };

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

function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[15px] leading-[1.8] text-gray-600 mb-3 ${className}`}>
      {children}
    </p>
  );
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



export default function IntellectualPropertyRights() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

     
      <div className="bg-gradient-to-br from-[#F8F7FF] to-white border-b border-gray-100 px-6 sm:px-10 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            <Pill label="Intellectual Property Rights" />
            <Pill label="Effective: April 17, 2026" gray />
            <Pill label="Version 1.0" gray />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-gray-950 leading-tight tracking-tight mb-4">
            We built ADA.<br />You own what it builds for you.
          </h1>
          <p className="text-base sm:text-lg leading-[1.75] text-gray-500 max-w-xl">
            SuperManager AGI and ADA represent years of proprietary research and engineering. Your company data and the work ADA produces belong entirely to you. This policy defines both sides of that equation  precisely, and without ambiguity.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 ">

        <Section number="1" title="Ownership at a Glance">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {/* SuperManager owns */}
            <div className="bg-[#F8F7FF] border border-[#DDD9FA] rounded-xl p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#625FD0] mb-2">SuperManager AGI Owns</p>
              <p className="text-base font-semibold text-[#3A2F9E] mb-4">The Platform & ADA</p>
              <ul className="flex flex-col gap-2">
                {[
                  "The full platform stack and all infrastructure",
                  "ADA's models, weights, and reasoning architecture",
                  "The no-API, no-MCP direct data access method",
                  "All brand marks, logos, and visual identity",
                  "All future improvements and features",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-gray-600 leading-[1.6]">
                    <span className="text-[#625FD0] font-bold shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* You own */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">You Own</p>
              <p className="text-base font-semibold text-emerald-900 mb-4">Your Data & ADA's Output</p>
              <ul className="flex flex-col gap-2">
                {[
                  "All company data ADA accesses",
                  "All pre-existing IP you bring to the platform",
                  "All work product ADA generates for you",
                  "Reports, documents, and deliverables produced",
                  "Business value derived from ADA's work",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-gray-600 leading-[1.6]">
                    <span className="text-emerald-500 font-bold shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section number="2" title="SuperManager AGI's Intellectual Property">
          <P>SuperManager AGI holds all rights, title, and interest in and to the following, protected by copyright, trade secret, patent, trademark, and all other applicable intellectual property laws worldwide:</P>
          <SubHeading>Platform & Technology</SubHeading>
          <BulletList items={[
            "The complete SuperManager AGI platform stack  all software, interfaces, infrastructure, APIs, and underlying architecture",
            "ADA's underlying AI models, model weights, training methodology, reasoning architecture, memory systems, and task execution engine  including every current and future version",
            "The proprietary method by which ADA accesses live company data 1,000 feet deep without requiring APIs or MCP servers  this is a core trade secret of SuperManager AGI",
            "All platform documentation, onboarding materials, technical specifications, and published content",
          ]} />
          <SubHeading>Brand & Identity</SubHeading>
          <BulletList items={[
            "The \"SuperManager AGI\" and \"ADA\" names, trademarks, service marks, and logos",
            "All visual identity assets including typefaces, color systems, iconography, and design language",
            "Domain names, product names, and all associated brand assets",
          ]} />
          <SubHeading>Improvements & Derivatives</SubHeading>
          <BulletList items={[
            "All platform enhancements, new features, bug fixes, and capability expansions  whether developed independently, in response to user feedback, or through usage pattern analysis",
            "Any derivative works created from the platform, ADA's architecture, or our technology",
          ]} />
          <P>Nothing in these Terms or your use of the platform transfers any of these rights to you. Your subscription grants you a license to use the platform  not ownership of any part of it.</P>
        </Section>

        <Section number="3" title="Your Intellectual Property">
          <P>You retain full, unencumbered ownership of:</P>
          <BulletList items={[
            "All company data, files, databases, internal communications, business records, and information that ADA accesses during task execution",
            "All proprietary business logic, trade secrets, and confidential information that exists within your company environment",
            "Any intellectual property you or your organization created before or independently of using SuperManager AGI",
            "Any brand assets, creative works, or other IP you introduce into the platform for processing",
          ]} />
          <P>By using the platform, you grant SuperManager AGI a limited, non-exclusive, non-transferable, revocable license to access and process your data solely to provide the services you have requested. This license is strictly scoped  it ends when your subscription ends and does not extend to any independent use of your data.</P>
          <Highlight>
            <strong className="text-[#625FD0]">No training without consent.</strong> We do not use your company data, prompts, or outputs to train ADA or any AI model. The license above does not include training rights. Any model training on your data requires your explicit written consent in a separate agreement.
          </Highlight>
        </Section>

        <Section number="4" title="Who Owns ADA's Output">
          <P>When ADA completes work on your behalf  generating a report, drafting a document, summarizing data, completing a workflow, building an analysis  that output belongs to you. No caveats, no revenue share, no claim.</P>
          <P>This ownership is subject to three conditions:</P>
          <BulletList items={[
            "The output was generated using your own data and your own prompts",
            "The output does not reproduce or extract SuperManager AGI's proprietary logic, model internals, or platform architecture in an identifiable or extractable form",
            "Your account was in active, good standing at the time of generation",
          ]} />
          <P>If a third party holds rights in data that ADA accessed to generate the output, their rights apply to their materials within the output. We do not resolve those third-party claims on your behalf.</P>
        </Section>

        <Section number="5" title="What You Must Not Do With Our IP">
          <P>The following are strictly prohibited, regardless of intent or framing:</P>
          <BulletList items={[
            "Copying, reproducing, modifying, or creating derivative works based on the SuperManager AGI platform, ADA, or any component thereof",
            "Reverse-engineering, decompiling, disassembling, or attempting to extract ADA's source code, model weights, training data, or proprietary logic by any means",
            "Using the platform  or insights derived from using it  to develop, train, or inform a competing autonomous agent product or AI system",
            "Removing, obscuring, or altering any copyright, trademark, or proprietary rights notices appearing on or within the platform",
            "Using the SuperManager AGI or ADA names, logos, or brand marks in any commercial context without prior written authorization",
            "Representing that your product or service is affiliated with, endorsed by, certified by, or powered by SuperManager AGI without explicit written authorization",
            "Publishing or sharing platform internals, interface designs, or undisclosed features discovered through your use of the platform",
          ]} />
        </Section>

        <Section number="6" title="Feedback & Suggestions">
          <P>If you submit feedback, feature requests, bug reports, or product suggestions to SuperManager AGI  through any channel  you agree that we may use that input freely, without compensation or attribution, to improve ADA or develop new capabilities.</P>
          <P>You waive any IP claim over improvements derived from your feedback. You also acknowledge that we may already be working on similar features independently, and your feedback does not create any exclusivity or priority rights.</P>
          <Warn>
            <strong className="text-amber-700">Scope:</strong> "Feedback" means general product input  opinions, suggestions, and ideas. It does not include your company data, confidential business information, or any proprietary materials you submit for processing. Those remain yours.
          </Warn>
        </Section>

        <Section number="7" title="Open Source Components">
          <P>The SuperManager AGI platform may incorporate third-party open-source software components. Where used, such components are governed by their respective open-source licenses  we do not claim ownership over them. Our use of open-source software does not impose any obligations on your own use of the platform.</P>
          <P>A list of material open-source components used in the platform is available upon written request to <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>.</P>
        </Section>

        <Section number="8" title="Third-Party IP in Your Environment">
          <P>You are solely responsible for ensuring that the data, content, and materials you introduce into the platform  and that ADA accesses within your environment  do not infringe the intellectual property rights of any third party.</P>
          <P>This includes licensed databases, third-party software, copyrighted documents, proprietary content belonging to your clients or partners, and any data covered by confidentiality agreements.</P>
          <P>SuperManager AGI is not liable for IP infringement that originates in your data environment or results from prompts you issue. You agree to indemnify us for any claims arising from such infringement.</P>
        </Section>

        <Section number="9" title="Copyright Infringement  DMCA Notice">
          <P>If you believe content on the SuperManager AGI platform infringes your copyright, submit a written DMCA takedown notice to <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>. Your notice must include all of the following:</P>
          <div className="flex flex-col gap-3 mt-4">
            {[
              "A clear identification of the copyrighted work you claim has been infringed",
              "A precise identification of the infringing material on the platform, with sufficient detail to locate it",
              "Your contact information: full name, organization, email address, and phone number",
              "A statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or applicable law",
              "A statement under penalty of perjury that the information in the notice is accurate, and that you are the copyright owner or are authorized to act on their behalf",
              "Your physical or electronic signature",
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full bg-[#625FD0] text-white text-sm font-semibold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                <p className="text-[15px] leading-7 text-gray-600">{step}</p>
              </div>
            ))}
          </div>
          <P className="mt-4">We will respond to valid, complete takedown notices within 5 business days. Submitting a false or fraudulent DMCA notice may expose you to liability under applicable law.</P>
        </Section>

        <Section number="10" title="Licensing Inquiries">
          <P>If you are interested in licensing SuperManager AGI technology, using the ADA brand in co-marketing, or exploring a partnership arrangement, contact us at <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>. All licensing arrangements require a separate written agreement.</P>
        </Section>

        <Section number="11" title="Changes to This Policy">
          <P>This IP Policy may be updated as the platform evolves, as we develop new capabilities, or as applicable IP law changes. Material changes will be communicated via email at least 14 days before taking effect. Continued use of the platform constitutes acceptance.</P>
        </Section>

        <Section number="12" title="Contact">
          <P>IP questions, licensing inquiries, or DMCA notices:</P>
          <div className="inline-block bg-[#F8F7FF] border border-[#DDD9FA] rounded-xl px-6 py-5 mt-2">
            <p className="text-xs text-gray-400 mb-1">IP & Legal Contact</p>
            <a href="mailto:support@supermanager.co" className="text-[#625FD0] font-medium text-base hover:underline">support@supermanager.co</a>
          </div>
        </Section>

      </div>

      
    </div>
  );
}