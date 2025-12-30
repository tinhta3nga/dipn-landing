"use client";

import { motion } from "framer-motion";

export default function HeroOrbit() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-[260px]" />
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-[260px] -translate-y-1/2" />
    </motion.div>
  );
}
