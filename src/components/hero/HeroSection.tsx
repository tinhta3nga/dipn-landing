"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { heroTextVariant, heroImageVariant } from "./hero.motion";
import HeroOrbit from "./HeroOrbit";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section id="home" className="relative pt-44 pb-40 overflow-hidden scroll-mt-[140px]">
      <div className="container mx-auto px-6 lg:px-20 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            className="space-y-8 max-w-[720px] relative z-10"
          >
            <motion.p
              variants={heroTextVariant}
              custom={0}
              className="text-[16px] font-semibold uppercase text-[#0D52FF]"
            >
              CHÀO MỪNG ĐẾN VỚI DIPNET
            </motion.p>

            <motion.h1
              variants={heroTextVariant}
              custom={1}
              className="font-extrabold leading-[1.15] text-[56px] lg:text-[72px]"
            >
              <span className="bg-gradient-to-r from-[#0D52FF] to-[#00F3F1] bg-clip-text text-transparent">
                DipNET
              </span>{" "}
              <span className="text-white">
                – Vững tấm khiên
                <br />
                bản quyền trong
                <br />
              </span>
              <span className="bg-gradient-to-r from-[#0D52FF] to-[#00F3F1] bg-clip-text text-transparent">
                kỷ nguyên số
              </span>
            </motion.h1>

            <motion.p
              variants={heroTextVariant}
              custom={2}
              className="text-[#768F72] text-[16px] leading-[24px] max-w-[426px]"
            >
              Chúng tôi cung cấp dịch vụ uỷ quyền từ Cục Sở Hữu Trí Tuệ và Bộ
              Công An, kết hợp nền tảng giao dịch IP mã hoá bằng blockchain.
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={heroImageVariant}
            initial="hidden"
            animate="show"
            className="relative flex justify-center"
          >
            <HeroOrbit />

            <motion.div style={{ y: yParallax }} className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/30 blur-[120px] rounded-full" />

              {/* Light sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.img
                src="/images/shield.png"
                className="relative z-10 w-[620px] lg:translate-x-16"
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
