import Image from "next/image";
import Link from "next/link";
import image from "@/public/Image/logo1.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 text-center">
      {/* Logo */}
      <Image
        src={image}
        alt="SuperManager AGI Logo"
        width={140}
        height={140}
        priority
        className="mb-5 sm:mb-6 w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
        SuperManager AGI
      </h1>

      {/* Subtitle */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900 mb-4 sm:mb-6">
        Coming Soon
      </h2>

      {/* Description */}
      <p className="max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
        SuperManager AGI replaces half your project managers with autonomous AI
        agents—cutting costs, boosting productivity, and eliminating manual
        work.
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="rounded-xl bg-[#625FD0] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-medium text-white shadow-md transition hover:bg-[#5a57c0] focus:outline-none focus:ring-2 focus:ring-[#625FD0]/50"
      >
        Notify Me
      </Link>
    </main>
  );
}
