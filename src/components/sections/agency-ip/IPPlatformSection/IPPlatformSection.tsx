import { IPPlatformContent } from "./IPPlatformContent";
import { IPPlatformOrbit } from "./IPPlatformOrbit";
import { StatsRow } from "./StatsRow";

export function IPPlatformSection() {
  return (
    <section
      className="
        py-24
        pb-48
        px-6 md:px-12 lg:px-20
        bg-gradient-to-b
        from-black
        via-black
        to-[#000D33]
      "
    >
      <div className="container mx-auto">
        {/* ===== BLOCK TRÊN ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <IPPlatformContent />
          <IPPlatformOrbit />
        </div>

        {/* ===== TÁCH KHỐI ===== */}
        <div className="relative my-28">
          <div
            className="
              mx-auto
              w-[80%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
          />
        </div>

        {/* ===== STATS ===== */}
        <div className="max-w-5xl mx-auto">
          <StatsRow />
        </div>
      </div>
    </section>
  );
}
