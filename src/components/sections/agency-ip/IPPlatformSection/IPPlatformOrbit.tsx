"use client";

import { motion } from "framer-motion";
import { orbitRotate, scaleIn } from "./motion";
import { OrbitItem } from "./OrbitItem";
import { Monitor, Smartphone, Cpu, Apple, Bot } from "lucide-react";

export function IPPlatformOrbit() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-[360px] h-[360px] mx-auto"
    >
      {/* vòng quay */}
      <motion.div
        variants={orbitRotate}
        animate="animate"
        className="absolute inset-0 rounded-full border border-white/10"
      />

      {/* center logo */}
      <div
        className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
        w-20 h-20 rounded-2xl
        bg-gradient-to-br from-cyan-400 to-blue-500
        flex items-center justify-center shadow-xl"
      >
        <span className="text-black font-bold text-xl">
          <img
            src="/images/logo.png"
            alt="AI"
            width={50}
            height={50}
            className="shrink-0 aspect-[321/292] object-contain"
          />
        </span>
      </div>

      <OrbitItem className="top-0 left-1/2 -translate-x-1/2">
        <Monitor />
      </OrbitItem>

      <OrbitItem className="right-0 top-1/2 -translate-y-1/2">
        <Smartphone />
      </OrbitItem>

      <OrbitItem className="bottom-0 left-1/2 -translate-x-1/2">
        <Cpu />
      </OrbitItem>

      <OrbitItem className="left-0 top-1/2 -translate-y-1/2">
        <Apple />
      </OrbitItem>

      <OrbitItem className="top-8 right-8">
        <Bot />
      </OrbitItem>
    </motion.div>
  );
}
