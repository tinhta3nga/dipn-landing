"use client";

import { motion } from "framer-motion";
import { cardVariant } from "./motion";

export function ServiceCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        relative h-[520px] p-8
        rounded-2xl
        bg-gradient-to-b
        from-white/5 to-white/[0.02]
        border border-white/10
        overflow-hidden
      "
    >
      {/* glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,
          rgba(34,211,238,0.18),
          transparent_65%)]
          opacity-0 group-hover:opacity-100
          transition
        "
      />

      {/* image */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex justify-center mb-10"
      >
        <img
          src={image}
          alt={title}
          className="w-56 h-56 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      {/* content */}
      <div className="relative z-10 text-center space-y-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>

      {/* footer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          className="
            px-6 py-2 rounded-full
            bg-cyan-500/10 text-cyan-300
            border border-cyan-400/30
            text-sm
            hover:bg-cyan-400/20 transition
          "
        >
          Xem chi tiết
        </button>
      </div>
    </motion.div>
  );
}
