"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { sectionVariant, gridVariant } from "./motion";

export function AgencyIPSection() {
  return (
    <motion.section
      id="services"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="
    relative overflow-hidden
    py-32 px-6 md:px-12 lg:px-20
    bg-gradient-to-b
    from-[#020617]
    via-[#04142E]
    to-[#030B1C]
    scroll-mt-[140px]
  "
    >
      <div
        className="
      absolute top-[-200px] left-1/2 -translate-x-1/2
      w-[900px] h-[900px]
      bg-cyan-500/15
      rounded-full blur-[160px]
    "
      />
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Dịch vụ <span className="text-cyan-400">Agency IP</span>
            <br />
            Toàn diện của Dipnet
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Chúng tôi đại diện ủy quyền từ Cục SHTT và Bộ Công An, hỗ trợ đăng
            ký, bảo vệ IP theo luật 2025.
          </p>
        </div>

        {/* SERVICES */}
        <motion.div
          variants={gridVariant}
          className="grid md:grid-cols-3 gap-12"
        >
          <ServiceCard
            image="/images/3.png"
            title="Dịch vụ đại diện sở hữu trí tuệ"
            desc="Đại diện khách hàng trong quy trình đăng ký IP, bao gồm nhãn hiệu, sáng chế, bản quyền."
          />

          <ServiceCard
            image="/images/2.png"
            title="Ủy quyền & Đăng ký IP"
            desc="Ủy quyền trực tiếp qua hệ thống, tuân thủ cải cách 2025."
          />

          <ServiceCard
            image="/images/1.png"
            title="Bảo vệ quyền sở hữu trí tuệ"
            desc="Giám sát và chống xâm phạm bằng công cụ blockchain."
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
