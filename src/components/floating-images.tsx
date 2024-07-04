"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingImages() {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          delay: 1,
          amplitude: 15,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/hero-section/analytics.webp"
          alt="hero image"
          width={260}
          height={132}
          unoptimized
          className="card-shadow-phone md:card-shadow-tablet lg:card-shadow-desktop xs:h-[99px] xs:w-[195px] absolute right-0 top-0 m-0 h-[50px] w-[98px] md:m-0 lg:m-0 lg:h-[132px] lg:w-[260px]"
        />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Image
          src="/hero-section/short-link.webp"
          alt="hero image"
          width={98}
          height={50}
          unoptimized
          className="card-shadow-phone md:card-shadow-tablet lg:card-shadow-desktop xs:h-[99px] xs:w-[195px] absolute left-0 top-8 m-0 h-[50px] w-[98px] md:m-0 lg:m-0 lg:h-[132px] lg:w-[260px]"
        />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          delay: 0.5,
          amplitude: 12,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1 left-0 right-0"
      >
        <Image
          src="/hero-section/scannable-link.webp"
          alt="hero image"
          width={98}
          height={50}
          unoptimized
          className="card-shadow-phone md:card-shadow-tablet lg:card-shadow-desktop xs:h-[99px] xs:w-[195px] mx-auto my-0 h-[50px] w-[98px] md:my-0 lg:my-0 lg:h-[132px] lg:w-[260px]"
        />
      </motion.div>
    </>
  );
}
