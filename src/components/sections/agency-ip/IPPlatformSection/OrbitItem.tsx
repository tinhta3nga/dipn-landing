import { motion } from "framer-motion";

export function OrbitItem({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className={`absolute w-14 h-14 rounded-xl
        bg-[#0B0F19] border border-white/10
        flex items-center justify-center
        shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
