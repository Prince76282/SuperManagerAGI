"use client";

import { useRef } from "react";
import "./horizontalscroll.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./ImageContainer/ImageContainer";
import { features } from "@/lib/Dataset/features";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const endX = `-${(((features.length - 1) / features.length) * 100).toFixed(2)}%`;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", endX]);
  const scrollHeight = `${Math.max(features.length * 55, 250)}vh`;

  return (
    <section className="carousel" ref={targetRef} style={{ height: scrollHeight }}>
      <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="imageItem"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: Math.min(index * 0.05, 0.25),
              }}
            >
              <ImageContainer
                imageSource={feature.image}
                title={feature.title}
                description={feature.description}
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
