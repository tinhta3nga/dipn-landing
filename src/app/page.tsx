"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  CheckCircle,
  FileText,
  Users,
  DollarSign,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

export default function DipNetLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      title: "Ask anything",
      desc: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    },
    {
      title: "Ask anything",
      desc: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    },
    {
      title: "Ask anything",
      desc: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    },
  ];

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
            <a href="#" className="text-cyan-400 transition whitespace-nowrap">
              Trang chủ
            </a>

            <a
              href="#"
              className="text-white transition whitespace-nowrap hover:text-cyan-400"
            >
              Dịch vụ
            </a>

            <a
              href="#"
              className="text-white transition whitespace-nowrap hover:text-cyan-400"
            >
              Về chúng tôi
            </a>

            <a
              href="#"
              className="text-white transition whitespace-nowrap hover:text-cyan-400"
            >
              Tin tức
            </a>

            <a
              href="#"
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
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="space-y-8 max-w-[720px]">
              <p className="text-[16px] font-semibold leading-[24px] uppercase text-[#0D52FF]">
                CHÀO MỪNG ĐẾN VỚI DIPNET
              </p>

              <h1 className="font-extrabold leading-[1.2] text-[56px] lg:text-[72px]">
                <span className="bg-gradient-to-r from-[#0D52FF] to-[#00F3F1] bg-clip-text text-transparent">
                  DipNET
                </span>{" "}
                <span className="text-white">
                  – Vững tấm khiên
                  <br />
                  bản quyền trong
                  <br />
                </span>
                <span className="bg-gradient-to-r from-[#0D52FF] to-[#00F3F1] bg-clip-text text-transparent">
                  kỷ nguyên số
                </span>
              </h1>

              <p className="text-[#768F72] text-[16px] leading-[24px] max-w-[426px]">
                Chúng tôi cung cấp dịch vụ uỷ quyền từ Cục Sở Hữu Trí Tuệ và Bộ
                Công An, kết hợp nền tảng giao dịch IP mã hoá bằng blockchain.
                Biến ý tưởng của bạn thành tài sản an toàn và dễ giao dịch.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <img src="/images/shield.png" className="w-[486px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-16">
            Đơn vị hợp tác
          </h2>

          <div className="flex flex-col gap-[52px]">
            {/* ROW 1 */}
            <div className="flex justify-center items-center gap-[52px] h-[92px]">
              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                {/* Netflix SVG */}
                <NetflixSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <YoutubeSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <NikeSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <NokiaSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <PaypalSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <StarWarsSvg />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex justify-center items-center gap-[52px] h-[92px]">
              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <RedBullSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <SamsungSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <SlackSvg />
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <SonySvg />
              </div>

              <div className="w-[92px] h-[92px] flex items-center justify-center text-white font-bold opacity-70 hover:opacity-100 transition">
                SPACEX
              </div>

              <div className="w-[92px] h-[92px] opacity-70 hover:opacity-100 transition">
                <SpotifySvg />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency IP Section */}
      <AgencyIPSection />

      {/* AI Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-600 to-blue-700">
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
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Nền Tảng Giao Dịch IP
              <br />
              <span className="text-cyan-400">Mã Hóa Của DipNET</span>
            </h2>
            <p className="text-gray-400">
              Sử dụng blockchain để mã hóa và giao dịch IP an toàn.
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Giao Dịch IP (IP Trading)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Mã Hóa Sản Phẩm (Product Tokenization)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Hướng Dẫn Sử Dụng (User Guide)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Tích Hợp Blockchain (Blockchain Integration)</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 flex items-center justify-center hover:scale-105 transition"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black to-[#000D33]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <StatCard
              icon={<Users className="w-12 h-12 text-blue-400 mx-auto" />}
              value="330+"
              label="Người Dùng & Đối Tác Hoạt Động"
            />
            <StatCard
              icon={
                <DollarSign className="w-12 h-12 text-purple-400 mx-auto" />
              }
              value="10000+"
              label="Tài Sản Trí Tuệ Được Nộp Nếu"
            />
            <StatCard
              icon={<Users className="w-12 h-12 text-blue-400 mx-auto" />}
              value="25+"
              label="Chuyên Gia & Cố Vấn Đồng Hành"
            />
            <StatCard
              icon={<TrendingUp className="w-12 h-12 text-green-400 mx-auto" />}
              value="4+"
              label="Năm Hoạt Động & Phát Triển"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Chúng Tôi Mang Đến
            <br />
            <span className="text-cyan-400">Cho Bạn</span>
          </h2>

          <div className="relative mt-16 max-w-5xl mx-auto">
            <div className="flex gap-6 overflow-hidden">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-full md:w-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 transition-all ${
                    i === activeSlide
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-50"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === activeSlide ? "bg-blue-400 w-8" : "bg-gray-600"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-t from-blue-600/20 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Từ ý tưởng đến tài sản số.
            <br />
            <span className="text-cyan-400">An toàn, minh bạch!</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi! Chúng tôi luôn sẵn sàng giải đáp thắc mắc
            của bạn 24/7
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-full font-medium transition">
            Liên hệ ngay
          </button>
        </div>
      </section>

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

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-8 hover:scale-105 transition">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-sm transition">
        Xem thêm
      </button>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="mb-4">{icon}</div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
