"use client";

import Image from "next/image";
import Link from "next/link";

import img2 from "@/public/Image/newimage/image3.png";

type FooterLink = {
  label: string;
  href: string;
};

const Footer = () => {
  return (
    <footer className="relative">
      <div className="relative bg-[#F6F7FE]">
        <Image
          src={img2}
          alt="Background"
          fill
          className="pointer-events-none object-cover opacity-5"
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-12 flex flex-col items-center gap-4 border-b border-gray-200 pb-8 md:flex-row lg:gap-6">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/Image/logo1.png"
                alt="Logo Icon"
                width={30}
                height={30}
              />
              <Image
                src="/Image/logo.png"
                alt="Logo"
                width={160}
                height={50}
                className="h-auto w-auto"
              />
            </Link>

            <p className="text-center text-base md:text-left lg:text-lg">
              <span className="font-semibold text-gray-800">
                Reimagine Enterprise Execution{" "}
              </span>
              <span className="text-gray-700">with SuperManager AGI</span>
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1">
              <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <FooterCol
                  title="Get Started"
                  links={[
                    { label: "Autonomous Execution", href: "/autonomous/" },
                    {
                      label: "Project Intelligence",
                      href: "/project-intelligence/",
                    },
                    { label: "Management Replacement", href: "/management" },
                  ]}
                />

                <FooterCol
                  title="SuperManager AGI Intelligence"
                  links={[
                    { label: "Platform Overview", href: "/platform/" },
                    {
                      label: "Autonomous Agent Orchestration",
                      href: "/autonomousagent/",
                    },
                    {
                      label: "Project & Workforce Intelligence",
                      href: "/project-workforce/",
                    },
                    {
                      label: "Enterprise Integrations",
                      href: "/enterprise-integrations/",
                    },
                  ]}
                />

                <FooterCol
                  title="AGI Deployments"
                  links={[
                    { label: "AGI for Leadership", href: "/leadership/" },
                    { label: "AGI for Execution", href: "/execution/" },
                    { label: "AGI for Strategy", href: "/strategy/" },
                    { label: "Manager Platform", href: "/managerplatform/" },
                  ]}
                />
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <FooterCol
                  title="Company"
                  links={[
                    { label: "About SuperManager AGI", href: "/aboutus/" },
                    { label: "Leadership", href: "/leadership" },
                    { label: "Customer Stories", href: "/customer-stories" },
                    { label: "Partners", href: "/partners" },
                  ]}
                />

                <FooterCol
                  title="Resources"
                  links={[
                    { label: "Documentation", href: "/doc" },
                    { label: "Whitepapers", href: "/white-papers" },
                    { label: "Research Reports", href: "/research-reports" },
                  ]}
                />

                <FooterCol
                  title="Get Involved"
                  links={[
                    { label: "Resources", href: "/resource/" },
                    { label: "Blog", href: "/blog/" },
                    { label: "Support", href: "/support" },
                  ]}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-70">
              <div className="rounded-lg p-4">
                <h3 className="mb-3 text-2xl text-gray-900">
                  Let&apos;s Build Autonomous Execution
                </h3>

                <p className="mb-6 text-sm text-gray-600">
                  Get Answers, Deployment Guidance, and a Customized Plan for
                  Replacing Manual Project Management.
                </p>

                <Link
                  href="/get-in-touch"
                  className="block rounded-lg bg-[#625FD0] px-4 py-2 text-center font-semibold text-white"
                >
                  Submit RFP
                </Link>
              </div>

              <div>
                <h4 className="mb-5 text-md uppercase">Follow us on</h4>

                <div className="mb-8 flex gap-4">
                  <Link
                    href="https://www.linkedin.com/company/supermanagerai/"
                    target="_blank"
                  >
                    <Image
                      src="/Image/linkedin.png"
                      alt="LinkedIn"
                      width={30}
                      height={30}
                    />
                  </Link>

                  <Link href="https://x.com/supermanageragi" target="_blank">
                    <Image
                      src="/Image/twitter.png"
                      alt="Twitter"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>

                <p className="mb-2 text-sm">
                  <b>Email:</b>{" "}
                  <Link href="mailto:support@supermanager.co">
                    support@supermanager.co
                  </Link>
                </p>

                <p className="text-sm">
                  <b>Contact:</b>{" "}
                  <Link href="tel:+14084712875">+1 (408) 471-2875</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
            <p className="text-sm text-gray-600">
              &copy; 2026 SuperManager AGI. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link className="hover:text-[#625FD0]" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="hover:text-[#625FD0]" href="/learnmore">
                Terms of Service
              </Link>
              <Link className="hover:text-[#625FD0]" href="/learnmore">
                Acceptable Use Policy
              </Link>
              <Link className="hover:text-[#625FD0]" href="/learnmore">
                Cookie Policy
              </Link>
              <Link className="hover:text-[#625FD0]" href="/learnmore">
                Intellectual Property Rights
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ml-4 h-10 w-10 rounded-full bg-[#625FD0] text-2xl text-white"
              >
                &uarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterCol = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h4 className="mb-5 inline-block pb-2 text-md uppercase">{title}</h4>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-md text-gray-600 transition hover:text-[#625FD0]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
