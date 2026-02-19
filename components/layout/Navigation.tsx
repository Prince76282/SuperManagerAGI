// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";
// import AGIManagersDropdown from "./navigation-dropdowns/AGIManagersDropdown";
// import IntelligenceDropdown from "./navigation-dropdowns/IntelligenceDropdown";
// import InsightsDropdown from "./navigation-dropdowns/InsightsDropdown";

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const dropdownLabels = {
//     "agi-managers": "AGI Managers",
//     intelligence: "Intelligence",
//     insights: "Insights",
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setOpenDropdown(null);
//   };

//   const toggleDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   const closeDropdown = () => setOpenDropdown(null);

//   // outside click close (desktop only)
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (window.innerWidth >= 1024) {
//         if (
//           !e.target.closest("[data-dropdown]") &&
//           !e.target.closest("[data-dropdown-toggle]")
//         ) {
//           setOpenDropdown(null);
//         }
//       }
//     };

//     if (openDropdown) {
//       document.addEventListener("click", handleClickOutside);
//       return () => document.removeEventListener("click", handleClickOutside);
//     }
//   }, [openDropdown]);

//   return (
//     <>
//       <style jsx global>{`
//         .mega-menu-wrap::-webkit-scrollbar,
//         .mega-column::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>

//       <div className="relative w-full">
//         {/* NAVBAR */}
//         <div className="fixed top-0 left-0 right-0 z-50">
//           <nav>
//             <div className="px-4 sm:px-6 lg:px-4">
//               <div className="max-w-[1240px] h-[62px] mx-auto bg-white rounded-b-2xl p-4  lg:px-6 py-2 flex items-center justify-between">
//                 {/* LEFT */}
//                 <div className="flex items-center gap-16">
//                   {/* LOGO */}
//                   <Link href="/" className="flex items-center ">
//                     <Image
//                       src="/image/logo1.png"
//                       alt="logo icon"
//                       width={30}
//                       height={30}
//                     />
//                     <Image
//                       src="/image/logo.png"
//                       alt="logo"
//                       width={170}
//                       height={60}
//                     />
//                   </Link>

//                   {/* DESKTOP NAV */}
//                   <div className="hidden lg:flex items-center gap-6 font-['League_Spartan']">
//                     {/* AGI */}
//                     <div className="relative" data-dropdown>
//                       <button
//                         onClick={() => toggleDropdown("agi-managers")}
//                         data-dropdown-toggle
//                         className="flex items-center gap-2 text-[14px] font-semibold hover:text-[#625FD0]"
//                       >
//                         AGI Managers
//                         <ChevronDown
//                           className={`w-4 h-4 transition ${openDropdown === "agi-managers" ? "rotate-180" : ""}`}
//                         />
//                       </button>

//                       {openDropdown === "agi-managers" && (
//                         <AGIManagersDropdown onClose={closeDropdown} />
//                       )}
//                     </div>

//                     {/* Intelligence */}
//                     <div className="relative" data-dropdown>
//                       <button
//                         onClick={() => toggleDropdown("intelligence")}
//                         data-dropdown-toggle
//                         className="flex items-center gap-2 text-[14px] font-semibold hover:text-[#625FD0]"
//                       >
//                         Intelligence
//                         <ChevronDown
//                           className={`w-4 h-4 transition ${openDropdown === "intelligence" ? "rotate-180" : ""}`}
//                         />
//                       </button>

//                       {openDropdown === "intelligence" && (
//                         <IntelligenceDropdown onClose={closeDropdown} />
//                       )}
//                     </div>

//                     {/* Pricing */}
//                     <Link
//                       href="/pricing/"
//                       className="text-[14px] font-semibold hover:text-[#625FD0]"
//                     >
//                       Pricing
//                     </Link>

//                     {/* Insights */}
//                     <div className="relative" data-dropdown>
//                       <button
//                         onClick={() => toggleDropdown("insights")}
//                         data-dropdown-toggle
//                         className="flex items-center gap-2 text-[14px] font-semibold hover:text-[#625FD0]"
//                       >
//                         Insights
//                         <ChevronDown
//                           className={`w-4 h-4 transition ${openDropdown === "insights" ? "rotate-180" : ""}`}
//                         />
//                       </button>

//                       {openDropdown === "insights" && (
//                         <InsightsDropdown onClose={closeDropdown} />
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* CTA */}

//                 <div className="flex gap-4">
//                   <Link
//                   href="https://agent.oqlous.com/login"
//                   className="hidden text-[#625FD0] hover:text-white lg:block items-center py-2 px-3 border-2 border-[#625FD0] hover:bg-[#625FD0]  rounded-lg text-[14px]  font-semibold transition"
//                 >
//                   OPEN APP
//                 </Link>

//                 <Link
//                   href="/get-in-touch/"
//                   className="hidden lg:block py-2 px-3 bg-[#625FD0] text-white rounded-lg text-[14px] font-semibold  transition"
//                 >
//                   GET IN TOUCH
//                 </Link>

//                 </div>

                
//                 {/* MOBILE TOGGLE */}
//                 <button
//                   onClick={toggleMenu}
//                   className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
//                 >
//                   <span
//                     className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
//                   />
//                   <span
//                     className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "scale-0" : ""}`}
//                   />
//                   <span
//                     className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
//                   />
//                 </button>
//               </div>
//             </div>
//           </nav>

//           {/* MOBILE MENU */}
//           {isMenuOpen && (
//             <div className="lg:hidden m-5 rounded-2xl bg-white animate-in fade-in duration-200">
//               <div className=" p-2 sm:p-4">
               
//                 {openDropdown ? (
//                   <div className="space-y-5">
                  
//                     <button
//                       onClick={() => setOpenDropdown(null)}
//                       className="flex items-center justify-between w-full text-base font-medium"
//                     >
//                       <span>{dropdownLabels[openDropdown]}</span>
//                       <ChevronDown className="w-4 h-4 rotate-180" />
//                     </button>

                   
//                     {openDropdown === "agi-managers" && <AGIManagersDropdown />}
//                     {openDropdown === "intelligence" && (
//                       <IntelligenceDropdown />
//                     )}
//                     {openDropdown === "insights" && <InsightsDropdown />}
//                   </div>
//                 ) : (
                  
//                   <div className="space-y-4">
//                     <MenuBtn
//                       label="AGI Managers"
//                       onClick={() => toggleDropdown("agi-managers")}
//                     />
//                     <MenuBtn
//                       label="Intelligence"
//                       onClick={() => toggleDropdown("intelligence")}
//                     />

//                     <LinkItem
//                       href="/pricing/"
//                       close={() => setIsMenuOpen(false)}
//                     />

//                     <MenuBtn
//                       label="Insights"
//                       onClick={() => toggleDropdown("insights")}
//                     />

//                     <Link
//                       href="/get-in-touch/"
//                       onClick={() => setIsMenuOpen(false)}
//                       className="block mt-4 text-center py-3 rounded-lg bg-[#625FD0] text-white font-semibold text-sm hover:bg-black transition"
//                     >
//                       Get in Touch
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* OVERLAY */}
//         {openDropdown && !isMenuOpen && (
//           <div
//             className="hidden lg:block fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
//             onClick={closeDropdown}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// /* SMALL COMPONENTS */

// function MenuBtn({ label, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="flex w-full justify-between items-center  text-base hover:text-[#625FD0]"
//     >
//       {label}
//       <ChevronDown className="w-5 h-5" />
//     </button>
//   );
// }

// function LinkItem({ href, close }) {
//   return (
//     <Link
//       href={href}
//       onClick={close}
//       className="block py-2 text-base hover:text-[#625FD0]"
//     >
//       Pricing
//     </Link>
//   );
// }













"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import AGIManagersDropdown from "./navigation-dropdowns/AGIManagersDropdown";
import IntelligenceDropdown from "./navigation-dropdowns/IntelligenceDropdown";
import InsightsDropdown from "./navigation-dropdowns/InsightsDropdown";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const dropdownLabels = {
    "agi-managers": "AGI Managers",
    intelligence: "Intelligence",
    insights: "Insights",
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdown = () => setOpenDropdown(null);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openDropdown]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
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

                {/* LEFT: Logo + Desktop Nav */}
                <div className="flex items-center gap-16">
                  {/* LOGO */}
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/image/logo1.png"
                      alt="logo icon"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/image/logo.png"
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
                        onClick={() => toggleDropdown("agi-managers")}
                        aria-expanded={openDropdown === "agi-managers"}
                        aria-haspopup="true"
                        className="flex items-center gap-1 text-[14px] font-semibold hover:text-[#625FD0] transition-colors"
                      >
                        AGI Managers
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === "agi-managers" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === "agi-managers" && (
                        <AGIManagersDropdown onClose={closeDropdown} />
                      )}
                    </div>

                    {/* Intelligence */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("intelligence")}
                        aria-expanded={openDropdown === "intelligence"}
                        aria-haspopup="true"
                        className="flex items-center gap-1 text-[14px] font-semibold hover:text-[#625FD0] transition-colors"
                      >
                        Intelligence
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === "intelligence" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === "intelligence" && (
                        <IntelligenceDropdown onClose={closeDropdown} />
                      )}
                    </div>

                    {/* Pricing */}
                    <Link
                      href="/pricing/"
                      className="text-[14px] font-semibold hover:text-[#625FD0] transition-colors"
                    >
                      Pricing
                    </Link>

                    {/* Insights */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("insights")}
                        aria-expanded={openDropdown === "insights"}
                        aria-haspopup="true"
                        className="flex items-center gap-1 text-[14px] font-semibold hover:text-[#625FD0] transition-colors"
                      >
                        Insights
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === "insights" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === "insights" && (
                        <InsightsDropdown onClose={closeDropdown} />
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT: CTAs + Hamburger */}
                <div className="flex items-center gap-4">
                  {/* Open App */}
                  <Link
                    href="https://agent.oqlous.com/login"
                    className="hidden lg:flex items-center py-[6px] px-2 border-2 border-[#625FD0] text-[#625FD0] hover:text-white hover:bg-[#625FD0] rounded-lg text-[14px] font-semibold transition-colors"
                  >
                    OPEN APP
                  </Link>

                  {/* Get in Touch */}
                  <Link
                    href="/get-in-touch/"
                    className="hidden lg:flex items-center py-2 px-3 bg-[#625FD0] text-white hover:bg-[#4f4cb0] rounded-lg text-[14px] font-semibold transition-colors"
                  >
                    GET IN TOUCH
                  </Link>

                  {/* MOBILE HAMBURGER */}
                  <button
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
                  >
                    <span
                      className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center ${
                        isMenuOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    />
                    <span
                      className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                        isMenuOpen ? "opacity-0 scale-x-0" : ""
                      }`}
                    />
                    <span
                      className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center ${
                        isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden mx-4 mt-1 mb-4 rounded-2xl bg-white shadow-lg animate-in fade-in duration-200 max-h-[80vh] overflow-y-auto">
              <div className="p-4 space-y-2">
                {openDropdown ? (
                  /* Dropdown sub-view */
                  <div className="space-y-4">
                    <button
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2 text-base font-semibold text-[#625FD0]"
                    >
                      <ChevronDown className="w-4 h-4 rotate-90" />
                      <span>{dropdownLabels[openDropdown]}</span>
                    </button>

                    {openDropdown === "agi-managers" && (
                      <AGIManagersDropdown onClose={closeMobileMenu} />
                    )}
                    {openDropdown === "intelligence" && (
                      <IntelligenceDropdown onClose={closeMobileMenu} />
                    )}
                    {openDropdown === "insights" && (
                      <InsightsDropdown onClose={closeMobileMenu} />
                    )}
                  </div>
                ) : (
                  /* Main mobile menu */
                  <div className="space-y-1">
                    <MobileMenuBtn
                      label="AGI Managers"
                      onClick={() => toggleDropdown("agi-managers")}
                    />
                    <MobileMenuBtn
                      label="Intelligence"
                      onClick={() => toggleDropdown("intelligence")}
                    />
                    <Link
                      href="/pricing/"
                      onClick={closeMobileMenu}
                      className="flex w-full justify-between items-center py-3 px-2 rounded-lg text-base font-medium hover:text-[#625FD0] hover:bg-gray-50 transition-colors"
                    >
                      Pricing
                    </Link>
                    <MobileMenuBtn
                      label="Insights"
                      onClick={() => toggleDropdown("insights")}
                    />

                    <div className="pt-3 space-y-2 border-t border-gray-100">
                      <Link
                        href="https://agent.oqlous.com/login"
                        onClick={closeMobileMenu}
                        className="flex justify-center py-3 rounded-lg border-2 border-[#625FD0] text-[#625FD0] font-semibold text-sm hover:bg-[#625FD0] hover:text-white transition-colors"
                      >
                        OPEN APP
                      </Link>
                      <Link
                        href="/get-in-touch/"
                        onClick={closeMobileMenu}
                        className="flex justify-center py-3 rounded-lg bg-[#625FD0] text-white font-semibold text-sm hover:bg-[#4f4cb0] transition-colors"
                      >
                        GET IN TOUCH
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP OVERLAY */}
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

/* ── Small reusable components ── */

function MobileMenuBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full justify-between items-center py-3 px-2 rounded-lg text-base font-medium hover:text-[#625FD0] hover:bg-gray-50 transition-colors"
    >
      {label}
      <ChevronDown className="w-5 h-5" />
    </button>
  );
}