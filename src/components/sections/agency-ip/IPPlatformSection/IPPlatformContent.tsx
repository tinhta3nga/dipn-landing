"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeUp, textStagger } from "./motion";

export function IPPlatformContent() {
  return (
    <motion.div
      variants={textStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-xl"
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl font-bold text-white mb-6"
      >
        Nền Tảng Giao Dịch IP
        <br />
        <span className="text-cyan-400">Mã Hóa Của DipNET</span>
      </motion.h2>

      <motion.p variants={fadeUp} className="text-gray-400 mb-8">
        Sử dụng blockchain để mã hóa và giao dịch IP an toàn.
      </motion.p>

      <ul className="space-y-4">
        {[
          "Giao Dịch IP (IP Trading)",
          "Mã Hóa Sản Phẩm (Product Tokenization)",
          "Hướng Dẫn Sử Dụng (User Guide)",
          "Tích Hợp Blockchain (Blockchain Integration)",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-center gap-3 text-gray-300"
          >
            <CheckCircle className="w-5 h-5 text-green-400" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
