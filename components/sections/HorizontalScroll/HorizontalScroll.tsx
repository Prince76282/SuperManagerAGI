"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { features } from "@/lib/Dataset/features";

export default function FeaturesPage() {






  
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

   /**
   * RESPONSIVE CALCULATION:
   * On desktop, you move -70% to show all cards.
   * On mobile, cards are usually wider relative to the screen, 
   * so you might need to move further (e.g., -85%).
   */


  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    // Increase height (e.g., 300vh) to give the user more "room" to scroll 
    // without the cards flying past too quickly.
    <section ref={targetRef} className="relative  h-[120vh]  ">
      
      {/* Sticky wrapper: h-screen makes it take full view while scrolling */}
      <div className="sticky top-0 flex items-center justify-start overflow-hidden">
        
        <motion.div 
          style={{ x }} 

          
          className="flex gap-6 px-2 lg:px-16"
        >
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
               /**
               * RESPONSIVE SIZING:
               * Mobile: w-[300px] h-[400px]
               * Desktop: w-[450px] h-[550px]
               */
              className="group relative h-[400px] w-[300px] md:h-[550px] md:w-[450px] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-300/40 bg-white/50 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold text-neutral-800">
                  {feature.title}
                </h3>
                <p className="text-sm h-48 md:text-base text-neutral-600 line-clamp-3">
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

              {/* Hover overlay - Hidden on touch devices usually, works on hover */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="px-6 py-2 bg-white/90 text-black font-bold rounded-full shadow-lg">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}