import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AGIManagersDropdown({ onClose }) {

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div
      className="
      absolute lg:left-1/2 lg:-translate-x-1/2
      left-0 top-full md:mt-2
      w-full lg:w-screen max-w-[1290px] lg:ml-70
      z-50 dropdown-open
      "
    >
      <div
        className="
        p-4 sm:p-6 lg:p-8
        max-h-[90vh] overflow-y-auto scroll-smooth scrollbar-hide
        lg:max-h-[90vh] lg:overflow-y-auto lg:scroll-smooth
        "
      >
       
       

        {/* GRID */}
        <div className="grid grid-cols-1 mb-25 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* LEFT BIG COLUMN */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-6 space-y-4">

            {[
              {
                title: "AGI for Leadership",
                desc: "Replace team leads and engineering managers with AGI. Autonomous coordination. Intelligent decisions. Drive performance.",
              },
              {
                title: "AGI for Execution",
                desc: "Leverage AGI capabilities to autonomously execute projects and deliver outcomes without human intervention.",
              },
              {
                title: "AGI for Strategy",
                desc: "Streamline strategic planning and resource allocation with autonomous AGI intelligence.",
              },
            ].map((section, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl hover:bg-blue-50 transition-all duration-300 ease-in-out p-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                  {/* INFO */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      {section.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {section.desc}
                    </p>

                    <Link
                      href="/learnmore/"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold  transition-all duration-300 ease-in-out"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* CAPABILITIES */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 uppercase mb-3">
                      CAPABILITIES
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Autonomous Decisions</li>
                      <li>Coordination</li>
                      <li>Task Automation</li>
                      <li>Tracking</li>
                      <li>Optimization</li>
                    </ul>
                  </div>

                  {/* USE CASES */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 uppercase mb-3">
                      USE CASES
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Automate Workflows</li>
                      <li>Remove Meetings</li>
                      <li>Predict Risks</li>
                      <li>Optimize Teams</li>
                    </ul>
                  </div>

                  {/* PREBUILT */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 uppercase mb-3">
                      PREBUILT
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Strategy AGI</li>
                      <li>Delivery AGI</li>
                      <li>Resource AGI</li>
                      <li>TaskMaster AGI</li>
                    </ul>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">

            {/* RESOURCES */}
            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-xs font-semibold text-gray-700 uppercase mb-4">
                TOP RESOURCES
              </h4>

              {[
                {
                  img: "/image/ManagerReplacement.png",
                  text: "Manager Replacement Economics: practical insights from AGI deployments",
                },
                {
                  img: "/image/AGIleadership.png",
                  text: "AGI leadership case studies from companies who replaced managers",
                },
                {
                  img: "/image/Beyondhuman.png",
                  text: "Beyond human management: how AGI leads teams autonomously",
                },
              ].map((item, i) => (
                <Link key={i} href="/learnmore/" onClick={handleClose} className="block mb-4 group">
                  <div className="flex gap-3">
                    <Image
                      src={item.img}
                      alt=""
                      width={80}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-sm text-gray-700 group-hover:text-[#625FD0] transition-colors duration-300 ease-in-out line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 uppercase mb-3">
                QUICK LINKS
              </h4>

              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link href="/about.html" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">About SuperManager AGI</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Customer Stories</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Partners</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Resources</Link></li>
                <li><Link href="/blog.html" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Blog</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Whitepapers</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Documentation</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Support</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Community</Link></li>
                <li><Link href="/learnmore/" onClick={handleClose} className="hover:text-[#625FD0] transition-colors duration-300 ease-in-out">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}