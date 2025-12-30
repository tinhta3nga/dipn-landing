"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Ask anything",
    desc: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    title: "Fast support",
    desc: "AI-powered responses help reduce response time significantly.",
  },
  {
    title: "Smart automation",
    desc: "Automate repetitive workflows using intelligent systems.",
  },
  {
    title: "Secure by design",
    desc: "Built with privacy-first and security-focused architecture.",
  },
];

export default function BenefitMarqueeSection() {
  return (
    <section
      id="testimonials"
      className="py-40 px-6 md:px-12 lg:px-20 bg-black overflow-hidden scroll-mt-[140px]"
    >
      <div className="mx-auto max-w-[1800px]">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-40 text-white">
          Chúng Tôi Mang Đến
          <br />
          <span className="text-cyan-400">Cho Bạn</span>
        </h2>

        {/* ===== MARQUEE ===== */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-64 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="
                  relative
                  flex-shrink-0
                  w-[420px] md:w-[480px] lg:w-[520px]
                  rounded-3xl
                  p-10
                  bg-gradient-to-b from-[#0B1220] to-black
                  border border-white/20
                  shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
                  transition-all duration-300
                  hover:border-cyan-400/50
                  hover:scale-[1.05]
                "
              >
                {/* accent overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-transparent opacity-0 hover:opacity-100 transition" />

                <h3 className="text-2xl font-semibold mb-6 text-white relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
