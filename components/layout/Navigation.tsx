"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import AGIManagersDropdown from "./navigation-dropdowns/AGIManagersDropdown";
import AgentsDropdown from "./navigation-dropdowns/IntelligenceDropdown";
import InsightsDropdown from "./navigation-dropdowns/InsightsDropdown";

/* ---------- TYPES ---------- */

type DropdownName = "Platform" | "Agents" | "insights";

type MobileMenuBtnProps = {
  label: string;
  onClick: () => void;
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const dropdownLabels: Record<DropdownName, string> = {
    Platform: "AGI Managers",
    Agents: "Agents",
    insights: "Insights",
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: DropdownName) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdown = () => setOpenDropdown(null);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  /* ---------- OUTSIDE CLICK ---------- */

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openDropdown]);

  /* ---------- CLOSE MOBILE ON DESKTOP ---------- */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <style jsx global>{`
        .mega-menu-wrap::-webkit-scrollbar,
        .mega-column::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div ref={navRef} className="relative w-full">
        {/* NAVBAR */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <nav>
            <div className="px-4 sm:px-6 lg:px-4">
              <div className="max-w-[1240px] h-[62px] mx-auto bg-white rounded-b-2xl px-4 lg:px-6 py-2 flex items-center justify-between">
                {/* LEFT */}
                <div className="flex items-center gap-16">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/Image/logo1.png"
                      alt="logo icon"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/Image/logo.png"
                      alt="logo"
                      width={170}
                      height={60}
                    />
                  </Link>

                  {/* DESKTOP NAV */}
                  <div className="hidden lg:flex items-center gap-6 font-['League_Spartan']">
                    {/* AGI Managers */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("Platform")}
                        aria-expanded={openDropdown === "Platform"}
                        className="flex items-center font-semibold gap-1 text-[14px]  hover:text-[#625FD0]"
                      >
                        Platform
                        <ChevronDown
                          className={`w-4 h-4 transition ${openDropdown === "Platform" ? "rotate-180" : ""}`}
                        />
                      </button>

                      {openDropdown === "Platform" && (
                        <AGIManagersDropdown onClose={closeDropdown} />
                      )}
                    </div>

                    {/* Agents */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("Agents")}
                        aria-expanded={openDropdown === "Agents"}
                        className="flex items-center font-semibold gap-1 text-[14px]  hover:text-[#625FD0]"
                      >
                        Agents
                        <ChevronDown
                          className={`w-4 h-4 transition ${openDropdown === "Agents" ? "rotate-180" : ""}`}
                        />
                      </button>

                      {openDropdown === "Agents" && (
                        <AgentsDropdown onClose={closeDropdown} />
                      )}
                    </div>

                    {/* Pricing */}
                    <Link
                      href="/pricing/"
                      className="text-[14px] font-semibold  hover:text-[#625FD0]"
                    >
                      Pricing
                    </Link>

                    {/* Insights */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("insights")}
                        aria-expanded={openDropdown === "insights"}
                        className="flex items-center font-semibold gap-1 text-[14px]  hover:text-[#625FD0]"
                      >
                        Insights
                        <ChevronDown
                          className={`w-4 h-4 transition ${openDropdown === "insights" ? "rotate-180" : ""}`}
                        />
                      </button>

                      {openDropdown === "insights" && (
                        <InsightsDropdown onClose={closeDropdown} />
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                  <Link
                    href="https://app.supermanager.co/login"
                    className="hidden lg:flex font-semibold py-[6px] px-2 border-2 border-[#625FD0] text-[#625FD0] hover:bg-[#625FD0] hover:text-white rounded-lg text-[14px] "
                  >
                    OPEN APP
                  </Link>

                  <Link
                    href="/get-in-touch/"
                    className="hidden font-semibold lg:flex py-2 px-3 bg-[#625FD0] text-white hover:bg-[#4f4cb0] rounded-lg text-[14px] "
                  >
                    GET IN TOUCH
                  </Link>

                  {/* MOBILE BUTTON */}
                  <button
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
                  >
                    <span
                      className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                      className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                      className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden mx-4 mt-2 mb-2 rounded-2xl bg-white shadow-lg max-h-[80vh] overflow-y-auto">
              <div className="p-2 space-y-2">
                {openDropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center font-semibold justify-center gap-5 text-base  text-[#625FD0]"
                    >
                      <ChevronDown className="w-5 h-5 rotate-180" />
                      <span>{dropdownLabels[openDropdown]}</span>
                    </button>

                    {openDropdown === "Platform" && (
                      <AGIManagersDropdown onClose={closeMobileMenu} />
                    )}
                    {openDropdown === "Agents" && (
                      <AgentsDropdown onClose={closeMobileMenu} />
                    )}
                    {openDropdown === "insights" && (
                      <InsightsDropdown onClose={closeMobileMenu} />
                    )}
                  </div>
                ) : (
                  <div className="space-y-1">
                    <MobileMenuBtn
                      label="AGI Managers"
                      onClick={() => toggleDropdown("Platform")}
                    />
                    <MobileMenuBtn
                      label="Agents"
                      onClick={() => toggleDropdown("Agents")}
                    />

                    <Link
                      href="/pricing/"
                      onClick={closeMobileMenu}
                      className="flex w-full justify-between items-center py-3 px-4 rounded-lg text-base font-medium hover:text-[#625FD0]"
                    >
                      Pricing
                    </Link>

                    <MobileMenuBtn
                      label="Insights"
                      onClick={() => toggleDropdown("insights")}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* OVERLAY */}
        {openDropdown && !isMenuOpen && (
          <div
            className="hidden lg:block fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={closeDropdown}
          />
        )}
      </div>
    </>
  );
}

function MobileMenuBtn({ label, onClick }: MobileMenuBtnProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full  justify-between items-center py-4 px-4 rounded-lg text-base font-medium hover:text-[#625FD0] hover:bg-gray-50"
    >
      {label}
      <ChevronDown className="w-5 h-5" />
    </button>
  );
}
