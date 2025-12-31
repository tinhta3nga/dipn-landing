"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cpu, Apple, Bot } from "lucide-react";

export function IPPlatformOrbit() {
  return (
    <div className="relative w-[480px] h-[480px] mx-auto">
      {/* ===== RADIAL GLOW BACKGROUND ===== */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[radial-gradient(circle_at_center,
          rgba(34,211,238,0.18),
          rgba(0,0,0,0)_65%)]
          blur-3xl
        "
      />

      {/* ===== OUTER ORBIT ===== */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/5"
      />

      {/* ===== MIDDLE DASHED ORBIT ===== */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="
          absolute inset-10 rounded-full
          border border-dashed border-cyan-400/20
        "
      />

      {/* ===== INNER ORBIT ===== */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="
          absolute inset-20 rounded-full
          border border-blue-400/30
        "
      />

      {/* ===== CENTER CORE ===== */}
      <div
        className="
          absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
          w-24 h-24 rounded-2xl
          bg-gradient-to-br from-cyan-400 to-blue-500
          flex items-center justify-center
          shadow-[0_0_80px_rgba(34,211,238,0.7)]
        "
      >
        <img
          src="/images/logo.png"
          alt="DipNET"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* ===== ORBITING NODES ===== */}
      <OrbitNode radius={190} duration={32}>
        <Monitor />
      </OrbitNode>

      <OrbitNode radius={190} duration={32} offset={90}>
        <Smartphone />
      </OrbitNode>

      <OrbitNode radius={140} duration={24}>
        <Cpu />
      </OrbitNode>

      <OrbitNode radius={140} duration={24} offset={120}>
        <Apple />
      </OrbitNode>

      <OrbitNode radius={240} duration={48}>
        <Bot />
      </OrbitNode>
    </div>
  );
}

function OrbitNode({
  children,
  radius,
  duration,
  offset = 0,
}: {
  children: React.ReactNode;
  radius: number;
  duration: number;
  offset?: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0"
      style={{ rotate: offset }}
    >
      <div
        style={{ transform: `translateX(${radius}px)` }}
        className="
          w-12 h-12 rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          flex items-center justify-center
          text-cyan-300
          shadow-[0_0_30px_rgba(34,211,238,0.3)]
        "
      >
        {children}
      </div>
    </motion.div>
  );
}
