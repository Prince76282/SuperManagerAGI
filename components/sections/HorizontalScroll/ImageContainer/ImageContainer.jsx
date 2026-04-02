import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { features } from "@/lib/Dataset/features";

const ImageContainer = () => {
  return (
    /* PARENT CONTAINER CHANGES:
      1. flex: aligns children horizontally
      2. overflow-x-auto: enables horizontal scrolling
      3. gap-6: adds spacing between cards
      4. scrollbar-hide: (Optional) custom utility to hide scrollbars
      5. snap-x: enables scroll snapping for a premium feel
    */
    <div className="flex w-full overflow-x-auto gap-6 pb-10 px-4 scroll-smooth snap-x snap-mandatory no-scrollbar">
      {features.map((feature, index) => (
        <Link
          key={index}
          href={feature.href}
          /* CARD CHANGES:
            1. flex-shrink-0: prevents the card from squeezing
            2. snap-center: snaps the card to the middle of the screen on scroll
          */
          className="group relative h-[400px] w-[300px] md:h-[550px] md:w-[450px] flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-gray-300/40 bg-white/50 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="p-6">
            <h3 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold text-neutral-800">
              {feature.title}
            </h3>
            <p className="text-sm h-24 md:text-base text-neutral-600 line-clamp-3">
              {feature.description}
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-48 md:h-64 mt-auto overflow-hidden rounded-b-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full w-full"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <span className="px-6 py-2 bg-white/90 text-black font-bold rounded-full shadow-lg">
              Explore
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ImageContainer