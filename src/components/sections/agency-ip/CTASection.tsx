"use client";

export default function CTASection() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 pb-40 bg-black scroll-mt-[140px]">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0B1C3F] via-[#081733] to-black px-8 md:px-16 lg:px-24 py-24 text-center overflow-hidden">
          {/* glow bottom */}
          <div className="pointer-events-none absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-gradient-to-t from-blue-500/40 via-blue-500/20 to-transparent blur-3xl" />

          {/* content */}
          <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Từ ý tưởng đến tài sản số.
            <br />
            <span className="text-cyan-400">An toàn, minh bạch!</span>
          </h2>

          <p className="relative z-10 text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Hãy liên hệ với chúng tôi! Chúng tôi luôn sẵn sàng giải đáp thắc mắc
            của bạn 24/7.
          </p>

          <div className="relative z-10">
            <button className="px-14 py-5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all hover:scale-[1.05]">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
