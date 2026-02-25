import Image from "next/image";
import Link from "next/link";

export default function InfrastructurePartners() {
  return (
    <section className="bg-[#F0F6F9] py-10">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 flex max-w-3xl flex-col space-y-4">
            <h3 className="text-4xl md:text-5xl  text-gray-900 leading-tight" >
              Infrastructure & Security Built for Enterprise Grade Autonomous Execution
            </h3>
            <p className="text-base font-[var(--font-grotesk)] text-gray-700 md:text-lg">
             SuperManager AGI Operates Within Secure, Enterprise Grade Environments with Flexible Deployment Options. Whether You Require Full Infrastructure Control or a Secure Managed Cloud, We Ensure Data Protection, Compliance Alignment, and Reliable AI Execution for Mission Critical Project Operations.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* AWS Card */}
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src="/image/image2.6.png"
                  alt="Private Deployment"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col space-y-6 p-6">
                <div className="space-y-3 text-black font-[var(--font-grotesk)] text-sm md:text-base leading-relaxed">
                  <p className="font-semibold text-base md:text-lg">
                    Private Deployment Within Your Infrastructure
                  </p>

                  <p>
                    Deploy SuperManager AGI directly inside your AWS, Azure, GCP, or
                    on-prem environment with full data sovereignty and governance control.
                  </p>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>VPC , Private Network Deployment</li>
                    <li>Complete Data Residency & Ownership</li>
                    <li>SSO, RBAC & Enterprise Identity Integration</li>
                    <li>End-to-End Encryption (In Transit & At Rest)</li>
                    <li>Full Audit Logs & Decision Traceability</li>
                    <li>Human-in-the-Loop Controls for Critical Actions</li>
                    <li>No External Data Exposure</li>
                  </ul>

                  <p className="font-medium">
                    Built for enterprises requiring maximum security, compliance, and
                    internal control.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/learnmore/"
                    className="inline-flex items-center justify-center font-[var(--font-spartan)] rounded-lg bg-[#625FD0] px-3 py-2 text-white font-semibold  transition"
                  >
                    Read More
                  </Link>

                  <Link
                    href="/learnmore/"
                    className="inline-flex items-center justify-center font-[var(--font-spartan)] rounded-lg bg-[#625FD0] px-3 py-2 text-white font-semibold  transition"
                  >
                    PRIVATE DEPLOYMENT
                  </Link>
                </div>
              </div>
            </div>

            {/* Microsoft Card */}
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src="/image/image2.7.png"
                  alt="Secure Cloud Deployment"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col space-y-6 p-6">
                <div className="space-y-3 text-black  text-sm md:text-base leading-relaxed">
                  <p className="font-semibold text-base md:text-lg">
                    Secure Managed Cloud Deployment
                  </p>

                  <p>
                    Access SuperManager AGI through our secure, enterprise-grade cloud
                    infrastructure , fully isolated, monitored, and SLA-backed.
                  </p>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dedicated Tenant Architecture</li>
                    <li>Encrypted Data Storage & Processing</li>
                    <li>Continuous Security Monitoring</li>
                    <li>Automated Backups & Disaster Recovery</li>
                    <li>Enterprise Reliability & High Availability</li>
                    <li>Strict Access Governance</li>
                  </ul>

                  <p className="font-medium">
                    Ideal for fast deployment with enterprise-level security and
                    operational reliability.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/learnmore/"
                    className="inline-flex items-center justify-center font-[var(--font-spartan)] rounded-lg bg-[#625FD0] px-3 py-2 text-white font-semibold  transition"
                  >
                    Read More
                  </Link>

                  <Link
                    href="/learnmore/"
                    className="inline-flex items-center justify-center font-[var(--font-spartan)] rounded-lg bg-[#625FD0] px-3 py-2 text-white font-semibold  transition"
                  >
                    SECURE CLOUD DEPLOYMENT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
