// components/about/AboutContent.tsx
"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "./motion";

export function AboutContent() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-8 max-w-xl"
    >
      <motion.p
        variants={fadeUp}
        className="text-cyan-400 text-xs uppercase tracking-[0.3em]"
      >
        About DipNET
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="text-4xl md:text-5xl font-bold leading-tight text-white"
      >
        Hạ Tầng Sở Hữu Trí Tuệ
        <br />
        <span className="text-cyan-400">Cho Kỷ Nguyên Số</span>
      </motion.h2>

      <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed">
        DipNET là Công ty Cổ phần Công nghệ chuyên về dịch vụ IP được ủy quyền
        từ Cục Sở Hữu Trí Tuệ và Bộ Công An. Chúng tôi xây dựng nền tảng giao
        dịch IP mã hóa, hướng tới cải cách hệ sinh thái IP Việt Nam từ năm 2025.
      </motion.p>

      <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
        DipNET kết nối chuyên gia pháp lý IP, blockchain và phát triển phần mềm
        để tạo nên hạ tầng IP minh bạch, an toàn và có thể mở rộng.
      </motion.p>

      <motion.div variants={fadeUp}>
        <button
          className="
            inline-flex items-center gap-2
            px-8 py-4 rounded-full
            bg-cyan-500 text-black font-medium
            hover:bg-cyan-400 transition
            shadow-[0_0_40px_rgba(34,211,238,0.4)]
          "
        >
          Khám phá DipNET
        </button>
      </motion.div>
    </motion.div>
  );
}
