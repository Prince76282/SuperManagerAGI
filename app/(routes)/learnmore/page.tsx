import Image from "next/image";

import image from '@/public/Image/logo1.png'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center px-6">


      <Image
        src={image}
        alt="SuperManager AGI Logo"
        width={120}
        height={120}
        priority
        className="mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">
        SuperManager AGI
      </h1>

      <h2 className="text-5xl font-semibold mb-6">
        Upcoming
      </h2>

      <p className="max-w-xl text-lg text-gray-600 mb-10">
        SuperManager AGI replaces half your project managers with autonomous AI agents —
        cutting costs, boosting productivity, and eliminating manual work.
      </p>

      <button className="rounded-xl bg-[#625FD0] px-8 py-3 text-lg font-medium text-white shadow-md transition ">
        Notify Me
      </button>

      <p className="absolute bottom-6 text-sm text-gray-500">
        © 2026 SuperManager AGI. All rights reserved.
      </p>

    </main>
  );
}
