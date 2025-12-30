"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, UserCheck, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "330+",
    label: "Người Dùng & Đối Tác Hoạt Động",
    color: "text-blue-400",
  },
  {
    icon: DollarSign,
    value: "10000+",
    label: "Tài Sản Trí Tuệ Được Nộp Niêm",
    color: "text-purple-400",
  },
  {
    icon: UserCheck,
    value: "25+",
    label: "Chuyên Gia & Cố Vấn Đồng Hành",
    color: "text-cyan-400",
  },
  {
    icon: TrendingUp,
    value: "4+",
    label: "Năm Hoạt Động & Phát Triển",
    color: "text-green-400",
  },
];

export function StatsRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
    >
      {stats.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="space-y-3">
            <Icon className={`w-8 h-8 mx-auto ${item.color}`} />
            <div className="text-3xl font-bold text-white">{item.value}</div>
            <p className="text-sm text-gray-400">{item.label}</p>
          </div>
        );
      })}
    </motion.div>
  );
}
