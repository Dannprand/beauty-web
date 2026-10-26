"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Droplets,
  Sparkles,
  HeartHandshake,
  Leaf,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Volume2,
  VolumeX,
  ArrowRight,
  ChevronRight,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react";

// Prototype images provided by user
const PROTOTYPE_IMAGES = [
  {
    id: "angle-1",
    src: "/assets/prototype%20produk%20lotion.jpg",
    title: "Signature Packaging",
    subtitle: "Desain botol minimalis dengan estetika bersih dan mewah",
    caption: "Tampilan Studio Utama",
  },
  {
    id: "angle-2",
    src: "/assets/prototype%20produk%20lotion%202.jpg",
    title: "Ergonomic & Precision Pump",
    subtitle: "Aplikator pompa presisi higienis menjaga kestabilan formula",
    caption: "Mekanisme Pompa Presisi",
  },
  {
    id: "angle-3",
    src: "/assets/prototype%20produk%20lotion%203.jpg",
    title: "Micro-Emulsion Texture",
    subtitle: "Tekstur ringan yang meleleh cepat di kulit tanpa rasa berminyak",
    caption: "Detail Formulasi & Tekstur",
  },
  {
    id: "angle-4",
    src: "/assets/prototype%20produk%20lotion%204.jpg",
    title: "Daily Skincare Ritual",
    subtitle: "Elemen esensial melengkapi meja rias dan perawatan harian Anda",
    caption: "Estetika Meja Rias",
  },
];

// Key Ingredients
const INGREDIENTS = [
  {
    name: "Bio-Identical Ceramide Complex",
    type: "Ceramide NP, AP, EOP",
    role: "Restrukturisasi Lipid",
    description:
      "Struktur lipid yang identik dengan minyak alami kulit manusia untuk menyatukan kembali celah pada skin barrier yang rusak.",
  },
  {
    name: "Multi-Molecular Hyaluronic Acid",
    type: "5 Bobot Molekul Berbeda",
    role: "Hidrasi Bertingkat",
    description:
      "Molekul mikro menembus ke dermis dalam untuk hidrasi inti, sedangkan molekul makro mengunci kelembapan di permukaan kulit.",
  },
  {
    name: "Korean Fermented Camellia & Rice",
    type: "Ekstrak Bio-Fermentasi",
    role: "Antioksidan Seluler",
    description:
      "Proses fermentasi alami meningkatkan bioavailabilitas nutrisi sehingga lebih cepat diserap dan melindungi kulit dari radikal bebas.",
  },
  {
    name: "Centella Asiatica & Niacinamide 2%",
    type: "K-Biotech Calming Blend",
    role: "Menenangkan & Meratakan Nada",
    description:
      "Menenangkan kemerahan, meredakan iritasi akibat polusi, dan memperhalus tekstur pori-pori secara bertahap.",
  },
];

// Benefits
const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Pemulihan Skin Barrier Seketika",
    desc: "Membangun kembali lapisan pertahanan pelindung kulit yang terganggu akibat polusi, cuaca ekstrem, atau eksfoliasi berlebih.",
    highlight: "+98% Kekuatan Barrier",
  },
  {
    icon: Droplets,
    title: "24 Jam Hidrasi Tanpa Lengket",
    desc: "Teknologi micro-emulsion menyerap dalam 5 detik, memberikan rasa lembap yang dalam dengan hasil akhir velvety yang nyaman.",
    highlight: "Zero Residu Berminyak",
  },
  {
    icon: Leaf,
    title: "Menenangkan Sensitivitas & Kemerahan",
    desc: "Diformulasikan khusus untuk meredakan inflamasi ringan dan mengembalikan keseimbangan mikrobioma kulit sensitif.",
    highlight: "Hypoallergenic Tested",
  },
  {
    icon: Sparkles,
    title: "Kulit Kenyal & Glowing Alami",
    desc: "Meningkatkan elastisitas alami jaringan kulit sehingga wajah tampak lebih segar, padat, dan bercahaya dari dalam.",
    highlight: "Clinical Natural Glow",
  },
];

export default function SingleProductLanding() {
  // Gallery active index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Video sound toggle
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  // Toggle video mute
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Submit contact form
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName.trim() && contactPhone.trim()) {
      setFormSent(true);
    }
  };

  // Pre-filled WhatsApp message URL
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor yang diinginkan
  const whatsappText = encodeURIComponent(
    `Halo Beauty In Stem, saya tertarik untuk memesan / konsultasi produk Hydra-Restore Bio-Lotion.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="relative min-h-screen bg-[#fbfaf9] text-[#1c1a19] antialiased selection:bg-[#d08c81]/30 selection:text-[#1c1a19]">
      {/* ----------------- ANNOUNCEMENT TOP BAR ----------------- */}
      <div className="bg-[#181615] text-[#e8c5c1] text-[11px] md:text-xs tracking-[0.2em] uppercase py-2 px-4 text-center font-medium border-b border-white/5 flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d08c81] animate-ping" />
        <span>KOREAN CELLULAR SKINCARE • FORMULASI KHUSUS SKIN FITNESS</span>
      </div>

      {/* ----------------- MINIMALIST STICKY HEADER ----------------- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#141312]/85 text-[#f5f2f0] border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex flex-col cursor-pointer select-none">
            <span className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase text-white font-sans">
              BEAUTY IN STEM
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#d08c81] font-medium -mt-1">
              Hydra-Restore Bio-Lotion
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium text-stone-300">
            <a href="#filosofi" className="hover:text-[#d08c81] transition-colors py-1">
              Filosofi
            </a>
            <a href="#produk" className="hover:text-[#d08c81] transition-colors py-1">
              Produk
            </a>
            <a href="#manfaat" className="hover:text-[#d08c81] transition-colors py-1">
              Manfaat
            </a>
            <a href="#bahan" className="hover:text-[#d08c81] transition-colors py-1">
              Bahan
            </a>
            <a href="#kontak" className="hover:text-[#d08c81] transition-colors py-1">
              Kontak
            </a>
          </nav>

          {/* Direct Action Button */}
          <div className="flex items-center space-x-3">
            <a
              href="#kontak"
              className="flex items-center gap-2 bg-[#d08c81] hover:bg-[#c47f74] text-stone-950 font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-all shadow-md hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </header>

      {/* ----------------- 1. HERO SECTION (VIDEO & EDITORIAL TITLE) ----------------- */}
      <section className="relative w-full h-[90vh] min-h-[580px] flex items-end pb-12 md:pb-20 overflow-hidden bg-stone-950">
        {/* Background Video (public/assets/video body.mp4) */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/assets/video%20body.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/35 to-black/50" />
        </div>

        {/* Video Sound Toggle Button */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={toggleSound}
            className="flex items-center space-x-2 bg-stone-950/70 backdrop-blur-md hover:bg-stone-900 px-3.5 py-1.5 rounded-full border border-white/15 text-stone-200 text-[10px] tracking-widest uppercase transition-all shadow-lg"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span>Sound Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#d08c81]" />
                <span className="text-[#e8c5c1]">Sound On</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e8c5c1] text-[11px] font-medium tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#d08c81]" />
              Korean Skincare Formula
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05]">
              Engineered for <br />
              <span className="font-serif italic font-normal text-[#f3efe9]">Ultimate Skin</span> Fitness
            </h1>

            <p className="text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Memperkenalkan <strong>Hydra-Restore Bio-Lotion</strong>. Formula restoratif seluler yang dirancang bukan hanya untuk melembapkan sesaat, melainkan melatih kekuatan barrier kulit Anda agar tahan terhadap stres lingkungan.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#produk"
                className="bg-[#d08c81] hover:bg-[#c47f74] text-stone-950 font-semibold px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase transition-all shadow-xl hover:scale-105"
              >
                Lihat Produk
              </a>
              <a
                href="#filosofi"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase transition-all"
              >
                Filosofi Kami
              </a>
            </div>
          </div>

          {/* Bottom Scroll Cue */}
          <div className="pt-10 flex justify-between items-end border-t border-white/15 mt-10 text-stone-400 text-[10px] tracking-[0.25em] uppercase">
            <span>KOREAN DERMATOLOGY RESEARCH</span>
            <div className="flex items-center gap-2">
              <span>SCROLL DOWN</span>
              <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
                <div className="w-1.5 h-1.5 bg-[#d08c81] rounded-full animate-bounce" />
              </div>
            </div>
            <span className="hidden sm:inline">SINGLE MASTERPIECE PRODUCT</span>
          </div>
        </div>
      </section>

      {/* ----------------- 2. FILOSOFI SECTION (SKIN FITNESS PHILOSOPHY) ----------------- */}
      <section id="filosofi" className="py-24 bg-[#181615] text-[#f5f2f0] relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#d08c81]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Filosofi Kami
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
              Our products are designed as <br />
              <span className="font-serif italic font-normal text-[#e8c5c1]">Skin Fitness Tools</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed">
              Kulit manusia adalah organ hidup adaptif. Alih-alih melindunginya secara pasif, 
              kami merancang formula lotion yang melatih kemampuan kulit untuk memperbaiki, 
              memulihkan, dan mempertahankan performa terbaiknya secara mandiri.
            </p>
          </div>

          {/* 3 Pillars of Skin Fitness */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Pillar 1 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-sm font-bold text-[#d08c81]">
                    01
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">PILAR KETAHANAN</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  SUPPORTING
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Memperkuat kapabilitas biologis kulit untuk menahan tekanan polusi, sinar UV, dan radikal bebas tanpa merusak lipid barrier.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-4 h-4 text-[#d08c81]" />
                <span>Memperkokoh Lapisan Stratum Corneum</span>
              </div>
            </div>

            {/* Pillar 2 (Center Highlight) */}
            <div className="bg-gradient-to-b from-[#252220] to-[#1c1a19] rounded-2xl p-8 border border-[#d08c81]/50 shadow-2xl flex flex-col justify-between relative group scale-100 md:scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d08c81] text-stone-950 text-[10px] tracking-[0.25em] uppercase font-bold px-4 py-1 rounded-full shadow-md">
                KOREAN BIO-FERMENTATION
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center text-sm font-bold shadow-lg">
                    02
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#e8c5c1]">RESTORASI INTI</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  RECOVER
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Mempercepat regenerasi sel-sel kulit dengan nutrisi bio-fermentasi dan ceramide identik, mengembalikan kepadatan dan tekstur halus.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-4 h-4 text-[#d08c81]" />
                <span>Siklus Pemulihan Seluler Lebih Cepat</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-sm font-bold text-[#d08c81]">
                    03
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">KEBERLANJUTAN</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  MAINTAIN
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Mempertahankan hidrasi stabil hingga 24 jam dan menjaga elastisitas jaringan kulit agar awet muda dalam jangka panjang.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-4 h-4 text-[#d08c81]" />
                <span>Kekenyalan & Kelembaban Awet</span>
              </div>
            </div>
          </div>

          {/* Clinical Highlights Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-white/10 pt-10">
            <div>
              <div className="text-4xl md:text-5xl font-light text-white font-serif">+98%</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Perbaikan Skin Barrier</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">24 Jam</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Kunci Hidrasi Seluler</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-white font-serif">-89%</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Kehilangan Air (TEWL)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">100%</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Uji Kulit Sensitif</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. SINGLE PRODUCT SPOTLIGHT & PROTOTYPE GALLERY ----------------- */}
      <section id="produk" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
              The Single Masterpiece
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900">
              Hydra-Restore <span className="font-serif italic">Bio-Lotion</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-600 text-sm max-w-md font-light leading-relaxed">
            Menghubungkan sains biologi Korea dengan keanggunan ritual harian. Setiap tetesnya bekerja harmonis dengan biologi alami kulit Anda.
          </p>
        </div>

        {/* Interactive Prototype Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Preview Image (Interactive Switcher) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Top Indicator */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
              <span className="text-xs tracking-widest uppercase text-stone-400 font-medium">
                PROTOTYPE SHOWCASE • {PROTOTYPE_IMAGES[activeImageIndex].caption}
              </span>
              <span className="bg-[#d08c81]/15 text-[#b56d62] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                150 ML / 5.1 FL.OZ
              </span>
            </div>

            {/* Main Image with Smooth Transition */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#fbfaf9] rounded-2xl overflow-hidden flex items-center justify-center border border-stone-100">
              <Image
                key={activeImageIndex}
                src={PROTOTYPE_IMAGES[activeImageIndex].src}
                alt={PROTOTYPE_IMAGES[activeImageIndex].title}
                fill
                className="object-contain p-4 transition-all duration-700 ease-out transform group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Active Angle Info */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-stone-900">
                  {PROTOTYPE_IMAGES[activeImageIndex].title}
                </h3>
                <p className="text-xs text-stone-500 font-light mt-0.5">
                  {PROTOTYPE_IMAGES[activeImageIndex].subtitle}
                </p>
              </div>

              {/* Angle Indicator Pill */}
              <div className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">
                Sudut {activeImageIndex + 1} dari 4
              </div>
            </div>

            {/* Thumbnail Selector Buttons */}
            <div className="grid grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-100">
              {PROTOTYPE_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#fbfaf9] ${
                    activeImageIndex === idx
                      ? "border-[#d08c81] shadow-md scale-105 ring-2 ring-[#d08c81]/20"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Description & Specification (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d08c81]">
                <Sparkles className="w-4 h-4" />
                <span>Teknologi Micro-Emulsion</span>
              </div>
              <h3 className="text-3xl font-light text-stone-900 tracking-tight">
                Keringanan Air, Kekuatan Pelembab Intensif
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Dirancang khusus untuk iklim tropis maupun dingin. Hydra-Restore Bio-Lotion memiliki tekstur susu yang sangat ringan namun kaya akan lipid esensial. Formula ini menyerap seketika tanpa sensasi lengket, memberikan efek velvet lembut sejak pemakaian pertama.
              </p>
            </div>

            {/* Quick Specs Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">pH Level</span>
                <span className="text-sm font-semibold text-stone-900">5.5 (Ramah Kulit)</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">Cocok Untuk</span>
                <span className="text-sm font-semibold text-stone-900">Semua Jenis Kulit</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">Aroma</span>
                <span className="text-sm font-semibold text-stone-900">Bebas Fragrance Sintetis</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">Sertifikasi</span>
                <span className="text-sm font-semibold text-stone-900">100% Cruelty Free</span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[#f5f2f0] p-6 rounded-2xl border border-stone-200/80 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-stone-500 block uppercase tracking-wider">Harga Resmi</span>
                  <span className="text-3xl font-bold text-stone-900">Rp 485.000</span>
                </div>
                <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Ready Stock • Original
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#1c1a19] hover:bg-[#d08c81] hover:text-stone-950 text-white font-semibold py-3.5 px-6 rounded-full text-xs tracking-[0.2em] uppercase text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#d08c81]" />
                  <span>Pesan via WhatsApp</span>
                </a>
                <a
                  href="#kontak"
                  className="bg-white hover:bg-stone-100 text-stone-800 font-medium py-3.5 px-6 rounded-full text-xs tracking-wider uppercase text-center transition-all border border-stone-300"
                >
                  Tanya Dulu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. MANFAAT UTAMA (BENEFITS) ----------------- */}
      <section id="manfaat" className="py-24 bg-[#f3efea] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Manfaat Utama
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-900">
              Mengapa Kulit Anda Membutuhkannya?
            </h2>
            <p className="text-stone-600 text-sm font-light">
              Diformulasikan secara ilmiah untuk mengatasi 4 tantangan utama kesehatan kulit modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f5f2f0] flex items-center justify-center text-[#d08c81] border border-stone-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-medium text-stone-900 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[#b56d62] font-semibold tracking-wider">
                      {b.highlight}
                    </span>
                    <span className="text-stone-300 font-bold">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- 5. INFORMASI BAHAN & SAINS (INGREDIENTS) ----------------- */}
      <section id="bahan" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
            Bahan & Komposisi
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-900">
            Kekuatan Sains Bahan <span className="font-serif italic">Aktif Alami</span>
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Tanpa filler tidak berguna. Setiap bahan dipilih karena memiliki bukti klinis dalam mendukung regenerasi dan hidrasi lapisan kulit.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INGREDIENTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:border-[#d08c81]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#d08c81] bg-[#d08c81]/10 px-2.5 py-1 rounded-full">
                    {item.role}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-stone-900">{item.name}</h3>
                <span className="text-xs text-stone-500 font-medium block -mt-1">
                  Kategori: {item.type}
                </span>
                <p className="text-xs text-stone-600 font-light leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-100 flex items-center text-[11px] text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d08c81] mr-1.5" />
                <span>Teruji Klinis pada Kulit Asia & Tropis</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Standard Badges */}
        <div className="mt-12 bg-[#1c1a19] text-[#f5f2f0] rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-sm font-semibold text-white">0% Paraben</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Bebas Pengawet Keras</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-sm font-semibold text-white">0% Fragrance</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Bebas Pewangi Sintetis</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-sm font-semibold text-white">100% Vegan</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Tanpa Bahan Hewani</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-sm font-semibold text-white">Dermatologist Tested</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Aman untuk Kulit Sensitif</div>
          </div>
        </div>
      </section>

      {/* ----------------- 6. CARA PENGGUNAAN (HOW TO USE) ----------------- */}
      <section className="py-20 bg-[#f7f5f3] border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
              Ritual Harian
            </span>
            <h2 className="text-3xl font-light text-stone-900">
              3 Langkah Sederhana Menuju Kulit Fit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-sm mx-auto">
                1
              </span>
              <h3 className="text-base font-medium text-stone-900">Bersihkan Wajah</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Cuci wajah dengan pembersih lembut ber-pH seimbang pada pagi dan malam hari. Keringkan perlahan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center font-bold text-sm mx-auto">
                2
              </span>
              <h3 className="text-base font-medium text-stone-900">Tekan 1-2 Pump</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Keluarkan 1 hingga 2 tetes Hydra-Restore Bio-Lotion pada telapak tangan yang bersih.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-sm mx-auto">
                3
              </span>
              <h3 className="text-base font-medium text-stone-900">Tepuk & Rasakan Kelembaban</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Ratakan ke seluruh wajah dan leher dengan gerakan menepuk lembut hingga micro-emulsion terserap sempurna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. KONTAK PERSON & PEMESANAN (PALING BAWAH) ----------------- */}
      <section id="kontak" className="py-24 bg-[#141312] text-white relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d08c81]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Person Info (Left 6 Cols) */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
                  Kontak Person & Pemesanan
                </span>
                <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  Konsultasi & Pesan <br />
                  <span className="font-serif italic font-normal text-[#e8c5c1]">Langsung Bersama Kami</span>
                </h2>
                <p className="text-stone-400 text-sm font-light leading-relaxed max-w-lg">
                  Punya pertanyaan seputar kecocokan jenis kulit, bahan aktif, atau ingin memesan langsung tanpa antre? Hubungi customer care personal kami. Kami siap melayani Anda dengan sepenuh hati.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-4">
                {/* WhatsApp Channel */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/15 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider uppercase text-emerald-400 font-semibold block">
                        FAST RESPONSE WHATSAPP
                      </span>
                      <h4 className="text-base font-medium text-white group-hover:text-[#d08c81] transition-colors">
                        +62 812-3456-7890
                      </h4>
                      <p className="text-xs text-stone-400 font-light">
                        Chat langsung untuk order atau tanya formula
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                </a>

                {/* Email Channel */}
                <a
                  href="mailto:contact@stembeauty.id?subject=Tanya%20Produk%20Hydra-Restore%20Bio-Lotion"
                  className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/15 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d08c81]/20 text-[#d08c81] flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider uppercase text-[#d08c81] font-semibold block">
                        EMAIL OFFICIAL
                      </span>
                      <h4 className="text-base font-medium text-white group-hover:text-[#d08c81] transition-colors">
                        contact@stembeauty.id
                      </h4>
                      <p className="text-xs text-stone-400 font-light">
                        Kerjasama, pertanyaan umum, dan informasi produk
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                </a>

                {/* Operation Hours */}
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-stone-400">
                  <Clock className="w-4 h-4 text-[#d08c81] shrink-0" />
                  <span>Jam Layanan: Senin – Sabtu (08:00 – 20:00 WIB). Pengiriman dari Jakarta.</span>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form (Right 6 Cols) */}
            <div className="lg:col-span-6 bg-stone-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl">
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-medium text-white">Tinggalkan Pesan</h3>
                <p className="text-xs text-stone-400 font-light">
                  Isi formulir singkat di bawah ini dan kami akan menghubungi Anda via WhatsApp.
                </p>
              </div>

              {formSent ? (
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Pesan Anda Terkirim!</h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Terima kasih telah menghubungi Beauty In Stem. Customer care kami akan segera merespons Anda melalui nomor WhatsApp yang Anda masukkan.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setContactName("");
                      setContactPhone("");
                      setContactMessage("");
                    }}
                    className="text-xs text-[#d08c81] underline uppercase tracking-wider font-semibold pt-2"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Pesan atau Pertanyaan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tuliskan pertanyaan seputar jenis kulit atau rencana pemesanan..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d08c81] hover:bg-[#c47f74] text-stone-950 font-semibold py-4 rounded-xl text-xs tracking-[0.2em] uppercase transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Simple Bottom Footer */}
          <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4">
            <div>
              © 2026 BEAUTY IN STEM. All rights reserved. Korean Skincare Formulation.
            </div>
            <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase text-stone-400">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
