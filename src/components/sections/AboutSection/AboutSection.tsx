// components/about/AboutSection.tsx
"use client";

import { AboutVisual } from "./AboutVisual";
import { AboutContent } from "./AboutContent";

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        py-32 px-6 md:px-12 lg:px-20
        bg-gradient-to-b
        from-[#030B1C]
        via-[#04142E]
        to-[#020617]
        scroll-mt-[140px]
      "
    >
      {/* background ambient glow */}
      <div
        className="
          absolute top-[-300px] left-1/2 -translate-x-1/2
          w-[900px] h-[900px]
          bg-cyan-500/20
          rounded-full blur-[180px]
        "
      />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <AboutVisual />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
