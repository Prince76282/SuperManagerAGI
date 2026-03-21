"use client";

import Link from "next/link";
import {
  Phone,
  Activity,
  Users,
  Newspaper,
  Handshake,
  Calendar,
} from "lucide-react";

export default function SupermanageSupport() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6 ">
            Talk to the SuperManager AGI Team
          </h2>

          <p className="text-black/70 text-lg">
            Whether you are deploying your first specialist agent or scaling the
            Vibe Working Platform across an enterprise organisation, our team is
            here to provide strategic guidance, technical support and
            implementation expertise.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          
          {/* Enterprise Support */}
          <div className="border-2 border-[#625FD0] rounded-2xl p-10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#625FD0]/10 text-[#625FD0]">
                <Phone size={22} />
              </div>
              <h3 className="text-xl font-semibold">
                Enterprise Deployment Support
              </h3>
            </div>

            <p className="text-black/70 mb-6">
              Speak directly with our deployment specialists for ADA integration
              configuration, agent calibration, architecture consultation and
              human oversight design.
            </p>

           
          </div>

          {/* Platform Status */}
          <div className="border-2 border-[#625FD0] rounded-2xl p-10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#625FD0]/10 text-[#625FD0]">
                <Activity size={22} />
              </div>
              <h3 className="text-xl font-semibold">Platform Status</h3>
            </div>

            <p className="text-black/70 mb-6">
              Monitor real-time system health, ADA connector uptime, agent
              orchestration performance and infrastructure status.
            </p>

            
          </div>
        </div>

        

        {/* Ways to Reach Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10">Ways to Reach Us</h3>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Talk to Expert */}
            <div className="border rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#625FD0]" />
                <h4 className="font-semibold">Contact Our Expert Team</h4>
              </div>
              <p className="text-black/70 mb-4">
                Explore the platform, discuss your deployment needs or get access
                to start deploying agents immediately.
              </p>
              <Link href="#" className="text-[#625FD0] font-medium">
                Talk to an Expert 
              </Link>
            </div>

            {/* Press */}
            <div className="border rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="text-[#625FD0]" />
                <h4 className="font-semibold">Press and Media</h4>
              </div>
              <p className="text-black/70 mb-4">
                Contact our press and media team for research paper access,
                platform briefings and executive commentary.
              </p>
              <Link href="#" className="text-[#625FD0] font-medium">
                Submit an Enquiry 
              </Link>
            </div>

            {/* Partnership */}
            <div className="border rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="text-[#625FD0]" />
                <h4 className="font-semibold">Partnership Team</h4>
              </div>
              <p className="text-black/70 mb-4">
                Learn how becoming a SuperManager AGI implementation partner can
                help you deliver the platform to your clients.
              </p>
              <ul className="text-[#625FD0] font-medium space-y-1">
                <li>• Become a Partner</li>
                <li>• Partner Programme Details</li>
              </ul>
            </div>

            {/* Meeting */}
            <div className="border rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#625FD0]" />
                <h4 className="font-semibold">Schedule a Meeting</h4>
              </div>
              <p className="text-black/70 mb-4">
                Pick a time that works for you to speak with the SuperManager AGI
                team about your deployment.
              </p>
              <Link href="https://calendly.com/nirmalsupermanageragi/60min?back=1&month=2026-03" className="text-[#625FD0] font-medium">
                Book via Calendly →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}