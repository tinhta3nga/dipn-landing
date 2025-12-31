// components/about/motion.ts
import { Variants } from "framer-motion";

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const rotateSlow: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
