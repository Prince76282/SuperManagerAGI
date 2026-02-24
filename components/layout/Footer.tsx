"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/Image/newimage/image1.png";
import img2 from "@/public/Image/newimage/image3.png";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 relative">
        <Image
          src={img2}
          alt="Background"
          fill
          className="object-cover opacity-5 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 mb-12 pb-8 border-b border-gray-200">
            <Link
              href="/"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <Image
                src="/image/logo1.png"
                alt="Logo Icon"
                width={40}
                height={30}
              />
              <Image src="/image/logo.png" alt="Logo" width={160} height={50} />
            </Link>

            <p className="text-center md:text-left text-base lg:text-lg">
              <span className="font-bold text-gray-900">
                Reimagine Enterprise Execution{" "}
              </span>
              <span className="text-gray-700">with SuperManager AGI</span>
            </p>
          </div>

          {/* Columns */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* LEFT SIDE LINKS */}
            <div className="flex-1">
              {/* TOP GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* Get Started */}
                <FooterCol
                  title="Get Started"
                  links={[
                    "Autonomous Execution",
                    "Project Intelligence",
                    "Management Replacement",
                    "Customer Outcomes",
                  ]}
                />

                {/* Platform */}
                <FooterCol
                  title="SuperManager AGI Intelligence"
                  links={[
                    "Platform Overview",
                    "Autonomous Agent Orchestration",
                    "Execution Intelligence Engine",
                    "Project & Workforce Intelligence",
                    "Security, Compliance & Governance",
                    "Low-Code & Pro Code Controls",
                    "Enterprise Integrations",
                  ]}
                />

                {/* Industry */}
                <FooterCol
                  title="Industry Deployments"
                  links={[
                    "Banking & Financial Services",
                    "Healthcare & Life Sciences",
                    "Retail & Commerce",
                    "Engineering & Product Teams",
                    "Enterprise Operations",
                    "IT & Delivery Organizations",
                  ]}
                />
              </div>

              {/* BOTTOM GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <FooterCol
                  title="Company"
                  links={[
                    "About SuperManager AGI",
                    "Leadership",
                    "Customer Stories",
                    "Partners",
                    "Industry Recognition",
                    "Newsroom",
                  ]}
                />

                <FooterCol
                  title="Resources"
                  links={[
                    "Documentation",
                    "Execution Insights",
                    "Whitepapers",
                    "Webinars",
                    "Research Reports",
                    "Execution Glossary",
                    "Videos",
                    "Autonomous Management 101",
                    "Responsible AI Framework",
                    "Executive Playbooks",
                  ]}
                />

                <FooterCol
                  title="Get Involved"
                  links={[
                    "Events",
                    "Support",
                    "Academy",
                    "Community",
                    "Careers",
                  ]}
                />
              </div>
            </div>


            <div className="lg:w-[280px] flex flex-col gap-6">

              <div className="border border-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Let's Build Autonomous Execution
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  Get Answers, Deployment Guidance, and a Customized Plan for
                  Replacing Manual Project Management.
                </p>

                <Link
                  href="/get-in-touch/"
                  className="block text-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold  transition"
                >
                  Submit RFP
                </Link>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-bold text-sm uppercase mb-5">
                  Follow us on
                </h4>

                <div className="flex  gap-4 mb-8">
                  <Link
                    href="https://www.linkedin.com/company/supermanagerai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialBtn"
                  >
                    <Image
                      src="/image/linkedin.png"
                      alt="LinkedIn"
                      width={30}
                      height={30}
                    />
                  </Link>

                  <Link
                    href="https://x.com/supermanageragi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialBtn"
                  >
                    <Image
                      src="/image/twitter.png"
                      alt="Twitter"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>

                {/* Contact */}
                <p className="text-sm mb-2">
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:support@supermanager.co"
                    className="hover:text-[#625FD0]"
                  >
                    support@supermanager.co
                  </a>
                </p>

                <p className="text-sm">
                  <b>Contact: </b>{" "}
                  <Link href="tel:+14084712875" className="hover:text-[#625FD0]">
                    +1 (408) 471-2875
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © 2026 SuperManager AGI. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { label: "Privacy Policy", href: "./privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                {
                  label: "Acceptable Use Policy",
                  href: "/acceptable-use-policy",
                },
                { label: "Cookie Policy", href: "/cookie-policy" },
                {
                  label: "Intellectual Property Rights",
                  href: "/intellectual-property-rights",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:underline"
                >
                  {item.label}
                </Link>
              ))}

              
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ml-4 w-10 h-10 rounded-full text-2xl bg-[#625FD0] text-white hover:bg-[#7d79f8]"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* Reusable Column Component */
const FooterCol = ({
  title,
  links,
  highlight = false,
}: {
  title: string;
  links: string[];
  highlight?: boolean;
}) => (
  <div>
    <h4
      className={`font-bold text-md uppercase mb-5 pb-2 inline-block ${highlight ? "border-b-2 border-[#625FD0]" : ""}`}
    >
      {title}
    </h4>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <Link
            href="/learnmore"
            className="text-gray-600 hover:text-[#625FD0] text-sm transition"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
