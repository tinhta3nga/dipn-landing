// components/about/AboutVisual.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { rotateSlow } from "./motion";

export function AboutVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex justify-center"
    >
      <div className="relative w-[380px] h-[380px]">
        {/* radial glow */}
        <div
          className="
            absolute inset-0 rounded-full
            bg-[radial-gradient(circle_at_center,
            rgba(34,211,238,0.25),
            transparent_65%)]
            blur-3xl
          "
        />

        {/* orbit ring */}
        <motion.div
          variants={rotateSlow}
          animate="animate"
          className="absolute inset-0 rounded-full border border-cyan-400/20"
        />

        {/* CORE IMAGE */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
    absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
    w-[280px] h-[280px]
    flex items-center justify-center
    z-10
  "
        >
          <Image
            src="/images/ai-logo.png"
            alt="DipNET AI Core"
            width={360}
            height={360}
            className="object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          />
        </motion.div>
        {/* ENERGY RING 1 */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="
    absolute inset-0 rounded-full
    border border-cyan-400/15
  "
        />

        {/* ENERGY RING 2 */}
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 90, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="
    absolute inset-8 rounded-full
    border border-blue-400/10
  "
        />

        {/* PULSING GLOW */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
    absolute inset-0 rounded-full
    bg-[radial-gradient(circle_at_center,
    rgba(34,211,238,0.35),
    transparent_65%)]
    blur-3xl
  "
        />
      </div>
    </motion.div>
  );
}
