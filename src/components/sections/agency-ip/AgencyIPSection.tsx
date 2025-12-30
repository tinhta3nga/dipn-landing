"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { sectionVariant, gridVariant } from "./motion";

export function AgencyIPSection() {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6 md:px-12 lg:px-20"
    >
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
            bgSize="cover"
            bgPosition="50% 50%"
            title="Dịch vụ đại diện sở hữu trí tuệ"
            desc="Đại diện khách hàng trong quy trình đăng ký IP, bao gồm nhãn hiệu, sáng chế, bản quyền."
          />

          <ServiceCard
            image="/images/2.png"
            bgSize="144.578%"
            bgPosition="-49.928px -49.928px"
            title="Ủy quyền & Đăng ký IP"
            desc="Ủy quyền trực tiếp qua hệ thống, tuân thủ cải cách 2025."
          />

          <ServiceCard
            image="/images/1.png"
            bgSize="131.868%"
            bgPosition="-35.692px -35.692px"
            title="Bảo vệ quyền sở hữu trí tuệ"
            desc="Giám sát và chống xâm phạm bằng công cụ blockchain."
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
