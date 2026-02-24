import Image from "next/image";
import Link from "next/link";
import image from "@/public/Image/logo1.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
      
      {/* Logo */}
      <Image
        src={image}
        alt="SuperManager AGI Logo"
        width={120}
        height={120}
        priority
        className="mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-black mb-3">
        SuperManager AGI
      </h1>

      {/* Subtitle */}
      <h2 className="text-5xl font-semibold text-gray-900 mb-6">
        Coming Soon
      </h2>

      {/* Description */}
      <p className="max-w-xl text-lg text-gray-600 mb-10 leading-relaxed">
        SuperManager AGI replaces half your project managers with autonomous AI
        agents cutting costs, boosting productivity, and eliminating manual work.
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="rounded-xl bg-[#625FD0] px-8 py-3 text-lg font-medium text-white shadow-md transition hover:bg-[#5a57c0] focus:outline-none focus:ring-2 focus:ring-[#625FD0]/50"
      >
        Notify Me
      </Link>

    </main>
  );
}