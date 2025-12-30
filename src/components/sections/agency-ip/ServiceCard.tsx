"use client";

import { motion } from "framer-motion";
import { cardVariant } from "./motion";

type ServiceCardProps = {
  image: string;
  bgSize: string;
  bgPosition: string;
  title: string;
  desc: string;
};

export function ServiceCard({
  image,
  bgSize,
  bgPosition,
  title,
  desc,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260 }}
      className="
        flex flex-col items-center text-center
        h-[500px] p-6 gap-8
        rounded-xl
        bg-white/5 hover:bg-white/10
        transition-colors
      "
    >
      {/* IMAGE */}
      <div
        className="w-[224px] h-[224px] shrink-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
        }}
      />

      {/* TITLE */}
      <h3 className="text-white text-lg font-semibold h-[56px] flex items-center justify-center">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-gray-400 text-sm leading-relaxed h-[72px]">{desc}</p>

      {/* CTA */}
      <button className="mt-auto px-6 py-2 rounded-full bg-blue-600 text-white text-sm">
        Xem thêm
      </button>
    </motion.div>
  );
}
