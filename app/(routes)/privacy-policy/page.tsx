export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-10">Effective Date: January 30</p>

      <section className="space-y-8 bg-white shadow-sm border rounded-2xl p-8">

        <p>
          This Privacy Policy describes what information we collect when you use our
          websites, applications, AI services, and project management tools
          (collectively referred to as the "Services"). It also explains how we
          store, transfer, use, and delete that information, and what choices you
          have regarding your data. This policy is designed to ensure that your
          information is handled safely and in accordance with applicable
          regulations and data protection laws.
        </p>

        <p>
          Please review this Privacy Policy carefully. By using our Services, you
          agree to the terms outlined in this policy. This policy applies to our
          websites, project management dashboards, AI automation tools,
          integrations, and applications (collectively referred to as the
          "Platform"), as well as other interactions such as customer support
          communications.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-2">Definitions</h3>

          <p>
            <strong>"Platform"</strong> refers to Services provided by SuperManager
            AGI ("Company", "We", "Our", or "Us"), including websites, dashboards,
            AI task automation systems, APIs, software applications, collaboration
            tools, and related services.
          </p>

          <p>
            <strong>"User" or "You"</strong> refers to any individual, team member,
            administrator, organization, or business entity accessing or using the
            Platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Data Use</h2>
          <p>
            SuperManager AGI is committed to protecting user privacy. Our platform
            provides AI-powered project management, workflow automation, task
            assignment intelligence, team collaboration, and productivity
            optimization. We only collect and process data necessary to provide,
            maintain, improve, and secure our Services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">General Information</h3>
          <p>When registering or using our Services, you may be required to provide:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Your name and role</li>
            <li>Valid communication details including email and phone number</li>
            <li>Organization name and size</li>
            <li>(Optionally) Your location and team structure</li>
          </ul>

          <p>
            <strong>Verification & Notifications:</strong> You must enter valid
            communication details so we may send verification codes and important
            notifications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Project Data and AGI Processing</h2>

          <p>
            SuperManager AGI processes project-related information to provide
            autonomous management services.
          </p>

          <p>
            <strong>Business Event Data:</strong> Client emails, change requests,
            defect reports, delivery risks, compliance findings, resource issues,
            SLA breaches, and directives.
          </p>

          <p>
            <strong>Decision Intelligence Data:</strong> Decision classification,
            approval chain, context, alternatives, timestamps, and state.
          </p>

          <p>
            <strong>Communication Data:</strong> Emails, chats, meeting transcripts,
            commit messages, and documents.
          </p>

          <p>
            <strong>Team Data:</strong> Roles, workload metrics, skills, calendar
            availability, and assignments.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Detect business events</li>
            <li>Classify and route decisions</li>
            <li>Create decision audit trails</li>
            <li>Balance workload</li>
            <li>Predict risks</li>
            <li>Generate reports and notes</li>
            <li>Improve services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">User Analytics</h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>IP address and location</li>
            <li>Browser and OS</li>
            <li>Page views and navigation paths</li>
            <li>Usage patterns</li>
            <li>Feature adoption</li>
            <li>API usage</li>
          </ul>

          <p>
            We may share aggregated anonymized reports that do not identify
            individuals or organizations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Prohibited Disclosure</h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>Racial or ethnic origin</li>
            <li>Political opinions</li>
            <li>Religious beliefs</li>
            <li>Genetic data</li>
            <li>Biometric data</li>
            <li>Health data</li>
            <li>Sex life or orientation</li>
          </ul>

          <p className="font-medium">
            We do NOT use your data to train generalized AI models for other
            customers or sell it to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Your Rights</h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Erase data</li>
            <li>Export data (JSON, CSV)</li>
            <li>Restrict processing</li>
            <li>Object to marketing</li>
          </ul>

          <p>
            To exercise these rights contact:
            <span className="font-medium"> privacy@supermanageragi.com</span>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact Us</h2>

          <p>
            Email:{" "}
            <a
              href="mailto:support@supermanager.co"
              className="text-black underline"
            >
              support@supermanager.co
            </a>
          </p>

          <p>
            We will acknowledge complaints within 48 hours and resolve them within
            30 days.
          </p>
        </div>
      </section>
    </main>
  );
}