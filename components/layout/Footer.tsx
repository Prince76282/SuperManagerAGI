"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/Image/newimage/image1.png";
import img2 from "@/public/Image/newimage/image3.png";

type FooterLink = {
  label: string;
  href: string;
};

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-[#F6F7FE] relative">
        <Image
          src={img2}
          alt="Background"
          fill
          className="object-cover opacity-5 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* TOP */}
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 mb-12 pb-8 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/image/logo1.png"
                alt="Logo Icon"
                width={30}
                height={30}
              />
              <Image src="/image/logo.png" alt="Logo" width={160} height={50} />
            </Link>

            <p className="text-center md:text-left text-base lg:text-lg">
              <span className="font-semibold text-gray-800">
                Reimagine Enterprise Execution{" "}
              </span>
              <span className="text-gray-700">with SuperManager AGI</span>
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            <div className="flex-1">

              {/* TOP GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                <FooterCol
                  title="Get Started"
                  links={[
                    { label: "Autonomous Execution", href: "/learnmore/" },
                    { label: "Project Intelligence", href: "/learnmore/" },
                    { label: "Management Replacement", href: "/learnmore/" },
                    { label: "Customer Outcomes", href: "/learnmore/" },
                  ]}
                />

                <FooterCol
                  title="SuperManager AGI Intelligence"
                  links={[
                    { label: "Platform Overview", href: "/learnmore/" },
                    { label: "Autonomous Agent Orchestration", href: "/learnmore/" },
                    { label: "Execution Intelligence Engine", href: "/learnmore/" },
                    { label: "Project & Workforce Intelligence", href: "/learnmore/" },
                    { label: "Enterprise Integrations", href: "/learnmore/" },
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

              {/* BOTTOM GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <FooterCol
                  title="Company"
                  links={[
                    { label: "About SuperManager AGI", href: "/aboutus/" },
                    { label: "Leadership", href: "/leadership" },
                    { label: "Customer Stories", href: "/customer-stories" },
                    { label: "Partners", href: "/partners" },
                  
                    { label: "Newsroom", href: "/news-room" },
                  ]}
                />

                <FooterCol
                  title="Resources"
                  links={[
                    { label: "Documentation", href: "/doc" },
                    { label: "Whitepapers", href: "/white-papers" },
                    { label: "Webinars", href: "/learnmore" },
                    { label: "Research Reports", href: "/learnmore" },
                    { label: "Videos", href: "/learnmore" },
                  
           
                 
                  ]}
                />

                <FooterCol
                  title="Get Involved"
                  links={[
                    { label: "Events", href: "/learnmore" },
                    { label: "Support", href: "/support" },
                    
                    { label: "Community", href: "/learnmore" },
                    { label: "Careers", href: "/learnmore" },
                  ]}
                />

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:w-70 flex flex-col gap-6">

              <div className="p-4 rounded-lg">
                <h3 className="text-2xl mb-3 text-gray-900">
                  Let's Build Autonomous Execution
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  Get Answers, Deployment Guidance, and a Customized Plan for
                  Replacing Manual Project Management.
                </p>

                <Link
                  href="/get-in-touch"
                  className="block text-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold"
                >
                  Submit RFP
                </Link>
              </div>

              {/* SOCIAL */}
              <div>
                <h4 className="text-md uppercase mb-5">Follow us on</h4>

                <div className="flex gap-4 mb-8">

                  <Link
                    href="https://www.linkedin.com/company/supermanagerai/"
                    target="_blank"
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
                  >
                    <Image
                      src="/image/twitter.png"
                      alt="Twitter"
                      width={30}
                      height={30}
                    />
                  </Link>

                </div>

                <p className="text-sm mb-2">
                  <b>Email:</b>{" "}
                  <a href="mailto:support@supermanager.co">
                    support@supermanager.co
                  </a>
                </p>

                <p className="text-sm">
                  <b>Contact:</b>{" "}
                  <Link href="tel:+14084712875">
                    +1 (408) 471-2875
                  </Link>
                </p>
              </div>

            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-sm text-gray-600">
              © 2026 SuperManager AGI. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">

              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/learnmore">Terms of Service</Link>
              <Link href="/learnmore">Acceptable Use Policy</Link>
              <Link href="/learnmore">Cookie Policy</Link>
              <Link href="/learnmore">Intellectual Property Rights</Link>

              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="ml-4 w-10 h-10 rounded-full text-2xl bg-[#625FD0] text-white"
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



const FooterCol = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h4 className="text-md uppercase mb-5 pb-2 inline-block">
      {title}
    </h4>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-gray-600 hover:text-[#625FD0] text-md transition"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);