"use client";

import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import Image from "next/image";
import {
  NetflixSvg,
  YoutubeSvg,
  NikeSvg,
  NokiaSvg,
  PaypalSvg,
  StarWarsSvg,
  RedBullSvg,
  SamsungSvg,
  SlackSvg,
  SonySvg,
  SpotifySvg,
} from "@/components/partner-logos";
import { AgencyIPSection } from "@/components/sections/agency-ip/AgencyIPSection";
import { IPPlatformSection } from "@/components/sections/agency-ip/IPPlatformSection/IPPlatformSection";
import BenefitMarqueeSection from "@/components/sections/agency-ip/BenefitMarqueeSection";
import CTASection from "@/components/sections/agency-ip/CTASection";
import HeroSection from "@/components/hero/HeroSection";

export default function DipNetLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000D33] via-[#001A4D] to-[#000D33] text-white overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#000D33] shadow-lg" : "bg-transparent"
        }`}
      >
        <nav
          className="flex flex-row items-center px-8 py-8 gap-44 h-[116px] max-w-[1440px] mx-auto"
          style={{ paddingLeft: "112px", paddingRight: "112px" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-ngang-trang1.png"
              alt="DipNET Logo"
              width={150}
              height={40}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[32px] flex-1">
            <a
              href="#home"
              className="text-cyan-400 transition whitespace-nowrap"
            >
              Trang chủ
            </a>

            <a
              href="#services"
              className="text-white transition whitespace-nowrap hover:text-cyan-400"
            >
              Dịch vụ
            </a>

            <a
              href="#about"
              className="text-white transition whitespace-nowrap hover:text-cyan-400"
            >
              Về chúng tôi
            </a>

            <a
              href="#testimonials"
              className="text-white transition whitespace-nowrap hover:text-cyan-400"
            >
              Tin tức
            </a>

            <a
              href="#contact"
              className="text-white transition whitespace-nowrap hover:text-cyan-400"
            >
              Liên hệ
            </a>
          </div>

          {/* Search & CTA */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
            <button className="hidden md:block text-white hover:text-blue-400 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* CTA Button */}
            <button className="hidden md:flex h-[48px] px-[24px] py-[12px] items-start gap-[8px] rounded-[16px] bg-[#0D52FF] text-white text-sm font-medium whitespace-nowrap transition shadow-[0_0_24px_12px_rgba(111,17,242,0.25)]">
              Đăng ký giao dịch IP
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu*/}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#000D33]/95 backdrop-blur-lg px-8 py-6 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-blue-400 py-2">
                Trang chủ
              </a>
              <a href="#" className="py-2 hover:text-blue-400 transition">
                Dịch vụ
              </a>
              <a href="#" className="py-2 hover:text-blue-400 transition">
                Về chúng tôi
              </a>
              <a href="#" className="py-2 hover:text-blue-400 transition">
                Tin tức
              </a>
              <a href="#" className="py-2 hover:text-blue-400 transition">
                Liên hệ
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition font-medium mt-2">
                Đăng ký giao dịch IP
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Partners Section */}
      <section className="relative pt-32 pb-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#020B2A] via-[#020B2A] to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-16">
            Đơn vị hợp tác
          </h2>

          <div className="relative mx-auto max-w-[1100px] rounded-3xl bg-white/5 backdrop-blur border border-white/10 py-16">
            <div className="flex flex-col gap-[52px]">
              {/* ROW 1 */}
              <div className="flex justify-center items-center gap-[52px] h-[92px]">
                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  {/* Netflix SVG */}
                  <NetflixSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <YoutubeSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <NikeSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <NokiaSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <PaypalSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <StarWarsSvg />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="flex justify-center items-center gap-[52px] h-[92px]">
                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <RedBullSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <SamsungSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <SlackSvg />
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <SonySvg />
                </div>

                <div className="w-[92px] h-[92px] flex items-center justify-center text-white font-bold opacity-80 hover:opacity-100 hover:scale-105 transition">
                  SPACEX
                </div>

                <div className="w-[92px] h-[92px] opacity-80 hover:opacity-100 hover:scale-105 transition">
                  <SpotifySvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency IP Section */}
      <AgencyIPSection />

      {/* AI Section */}
      <section
        id="about"
        className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-600 to-blue-700 scroll-mt-[140px]"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-blue-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-blue-300 to-blue-500 rounded-3xl p-12 flex items-center justify-center">
                  <Image
                    src="/images/ai-logo.png"
                    alt="AI"
                    width={642}
                    height={584}
                    className="shrink-0 aspect-[321/292] object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-blue-200 text-sm uppercase tracking-wider">
                VỀ DIPNET
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                Tiên Phong Trong
                <br />
                Sở Hữu Trí Tuệ
                <br />
                Kỷ Thuật Số
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Dipnet là Công ty Cổ phần Công nghệ Chuyên về dịch vụ Agency IP
                được ủy quyền từ Cục Sở Hữu Trí Tuệ và Bộ Công An. Chúng tôi xây
                dựng nên tảng giao dịch IP mã hóa, hỗ trợ đăng ký ngành Việt Nam
                trong bối cảnh cải cách IP 2025.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Dipnet hợp tác đối tác các chuyên gia và linh vực pháp lý IP,
                công nghệ blockchain, và phát triển phần mềm.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}

      <IPPlatformSection />

      {/* Testimonials Section */}
      <BenefitMarqueeSection />
      <div className="h-40 md:h-48 lg:h-56 bg-black" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-20 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">DipNET</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                >
                  t
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                >
                  in
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Trang chủ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold mb-4">Liên hệ</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📧</span> info@dipnet.vn
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span> 19002288
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span> Số 37, Ngõ 45 Trần Thái Tông, phường Cầu Giấy,
                  Hà Nội
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            Copyright © 2025 by DipNET. All Rights Reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
