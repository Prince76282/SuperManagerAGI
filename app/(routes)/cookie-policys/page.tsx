import Link from "next/link";

export const metadata = { title: "Cookie Policy — SuperManager AGI" };

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
          <span className="text-[#625FD0] font-semibold shrink-0 leading-7">—</span>
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

const cookieTypes = [
  {
    type: "Essential Cookies",
    required: true,
    desc: "These are non-negotiable. Without them, the platform cannot authenticate you, maintain your session, or protect against cross-site attacks. Blocking these cookies means you cannot log in or use the platform.",
    examples: "Session token, authentication state, CSRF protection token",
    duration: "Session (deleted on browser close)",
    thirdParty: "No — first-party only",
  },
  {
    type: "Security Cookies",
    required: true,
    desc: "Used to detect suspicious login attempts, identify anomalous access patterns, and protect your account from automated credential abuse. These run quietly in the background and do not track your browsing behavior.",
    examples: "Risk scoring token, device trust signal, login fingerprint",
    duration: "Up to 30 days",
    thirdParty: "No — first-party only",
  },
  {
    type: "Functional Cookies",
    required: false,
    desc: "Remember your platform preferences — workspace layout, notification settings, display preferences, language selection — so you don't have to reconfigure them every session.",
    examples: "Theme preference, sidebar layout, locale, notification preferences",
    duration: "Up to 365 days",
    thirdParty: "No — first-party only",
  },
  {
    type: "Analytics Cookies",
    required: false,
    desc: "Help us understand how users navigate the platform, which features are actually used, where errors occur, and where users encounter friction. Used exclusively to improve platform reliability and ADA's performance — never for advertising.",
    examples: "Page views, feature interaction events, error tracking, session replay (anonymized)",
    duration: "Up to 90 days",
    thirdParty: "Limited — via trusted analytics provider under DPA",
  },
];


export default function CookiePolicy() {
  return (
    <div className="min-h-screen  bg-white text-gray-900">


      {/* Hero */}
      <div className="bg-gradient-to-br from-[#F8F7FF] to-white border-b border-gray-100 px-6 sm:px-10 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            <Pill label="Cookie Policy" />
            <Pill label="Effective: April 17, 2026" gray />
            <Pill label="Version 1.0" gray />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-gray-950 leading-tight tracking-tight mb-4">
            Minimal cookies.<br />Zero ad tracking.
          </h1>
          <p className="text-base sm:text-lg leading-[1.75] text-gray-500 max-w-xl">
            SuperManager AGI is a business platform, not a consumer app. We use only the cookies necessary to keep the platform secure, functional, and improving. No advertising networks. No third-party tracking pixels. No profiling.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 ">

        <Highlight>
          <strong className="text-[#625FD0]">Our position:</strong> We believe cookies should serve users, not advertisers. Every cookie we set has a specific operational purpose. If it doesn't make the platform work better for you, it doesn't exist.
        </Highlight>

        <Section number="1" title="What Are Cookies">
          <P>Cookies are small text files stored on your device when you use a web application. They allow the platform to recognize your session, remember preferences, and collect usage signals over time.</P>
          <P>We also use related technologies — including local storage, session storage, and server-side session tokens — all referred to collectively as "cookies" in this policy. The same rules apply to all equivalent tracking technologies.</P>
        </Section>

        <Section number="2" title="Cookies We Use">
          <div className="flex flex-col gap-4 mt-2">
            {cookieTypes.map((c) => (
              <div key={c.type} className="border border-gray-100 rounded-xl overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-gray-900">{c.type}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.required ? "bg-[#F3F2FE] text-[#625FD0] border-[#DDD9FA]" : "bg-gray-100 text-gray-500 border-gray-200"}`}>
                    {c.required ? "Required" : "Optional"}
                  </span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[15px] leading-[1.8] text-gray-600 mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Examples</p>
                      <p className="text-sm text-gray-500">{c.examples}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Duration</p>
                      <p className="text-sm text-gray-500">{c.duration}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Third-party</p>
                      <p className="text-sm text-gray-500">{c.thirdParty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="3" title="What We Do Not Do">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {[
              { icon: "🚫", text: "No advertising cookies or retargeting pixels of any kind" },
              { icon: "🚫", text: "No Google Ads, Meta Pixel, or other ad network trackers" },
              { icon: "🚫", text: "No selling of cookie-derived data to data brokers or third parties" },
              { icon: "🚫", text: "No behavioral profiling for resale or targeting outside the platform" },
              { icon: "🚫", text: "No social media share buttons or widgets that track your activity" },
              { icon: "🚫", text: "No cross-site tracking of your activity on other websites" },
            ].map((item) => (
              <div key={item.text} className="bg-[#F3F2FE] border border-[#DDD9FA] rounded-xl p-4 flex gap-3 items-start">
                <span className="text-base shrink-0">{item.icon}</span>
                <span className="text-sm text-gray-700 leading-[1.6]">{item.text}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section number="4" title="Third-Party Cookies">
          <P>We use a small number of trusted third-party providers — specifically for platform analytics and security monitoring. Where these providers set cookies, they do so under strict data processing agreements that prohibit using your data for advertising or independent commercial purposes.</P>
          <P>We do not embed any third-party content (social media buttons, video players, external widgets) that would allow outside platforms to track your activity while you use SuperManager AGI.</P>
          <P>You can request the current list of our third-party data processors at any time by contacting <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a>.</P>
        </Section>

        <Section number="5" title="Your Controls">
          <SubHeading>Consent Banner</SubHeading>
          <P>On your first visit to the platform, you will see a cookie consent banner. Required cookies (essential and security) are always active. You can accept or decline optional categories (functional and analytics) individually.</P>

          <SubHeading>Cookie Preference Center</SubHeading>
          <P>After your initial choice, you can update your cookie preferences at any time via the cookie settings link in the platform footer. Your preferences are saved and respected across sessions.</P>

          <SubHeading>Browser-Level Controls</SubHeading>
          <P>Most modern browsers allow you to view, block, or delete cookies at the browser level. Blocking essential cookies will prevent you from logging in or using the platform.</P>

          <SubHeading>Opt Out of Analytics Cookies</SubHeading>
          <P>To opt out of analytics tracking entirely, email <a href="mailto:support@supermanager.co" className="text-[#625FD0] hover:underline">support@supermanager.co</a> with the subject line "Analytics Opt Out". We will update your account preference immediately.</P>

          <SubHeading>Do Not Track</SubHeading>
          <P>Some browsers send a "Do Not Track" (DNT) signal. We honor DNT signals by disabling all non-essential cookies for browsers where it is enabled.</P>
        </Section>

        <Section number="6" title="Cookie Lifespan Reference">
          <div className="overflow-x-auto rounded-xl border border-gray-100 my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Lifespan</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Deletable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Essential", "Session token", "Session", "On logout / browser close"],
                  ["Essential", "CSRF token", "Session", "On logout / browser close"],
                  ["Security", "Device trust", "30 days", "Via browser settings"],
                  ["Security", "Risk score", "30 days", "Via browser settings"],
                  ["Functional", "Preferences", "365 days", "Via cookie settings"],
                  ["Analytics", "Usage events", "90 days", "Via opt-out or browser settings"],
                ].map(([cat, type, life, del], i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-800">{cat}</td>
                    <td className="px-4 py-3 text-gray-600">{type}</td>
                    <td className="px-4 py-3 text-gray-600">{life}</td>
                    <td className="px-4 py-3 text-gray-500">{del}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="7" title="Changes to This Policy">
          <P>We will update this Cookie Policy if our use of cookies changes — for example, when we add new platform features, switch analytics providers, or in response to legal requirements. Material changes will be communicated via platform notice. Continued use constitutes acceptance.</P>
        </Section>

        <Section number="8" title="Contact">
          <P>Questions about cookies or to exercise your preferences:</P>
          <div className="inline-block bg-[#F8F7FF] border border-[#DDD9FA] rounded-xl px-6 py-5 mt-2">
            <p className="text-xs text-gray-400 mb-1">Cookie Contact</p>
            <a href="mailto:support@supermanager.co" className="text-[#625FD0] font-medium text-base hover:underline">support@supermanager.co</a>
          </div>
        </Section>

      </div>

      
    </div>
  );
}