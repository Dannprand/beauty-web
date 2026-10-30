"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  ShoppingBag,
  Plus,
  Minus,
  MessageCircle,
  Mail,
  Clock,
  ExternalLink,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Droplets,
  Sparkles,
  Check,
  Send,
  ArrowRight,
  Maximize2,
} from "lucide-react";

// Prototype images provided by user
const PROTOTYPE_IMAGES = [
  {
    id: "angle-1",
    src: "/assets/prototype%20produk%20lotion.jpg",
    title: "Architectural Vessel",
    spec: "UV-Protective Ceramic Finish",
    caption: "Studio Front View",
  },
  {
    id: "angle-2",
    src: "/assets/prototype%20produk%20lotion%202.jpg",
    title: "Hermetic Micro-Pump",
    spec: "Airless Piston Dispenser",
    caption: "Actuator Precision",
  },
  {
    id: "angle-3",
    src: "/assets/prototype%20produk%20lotion%203.jpg",
    title: "Micro-Emulsion Texture",
    spec: "Sub-Micron Lipid Spheres",
    caption: "Formulation Nuance",
  },
  {
    id: "angle-4",
    src: "/assets/prototype%20produk%20lotion%204.jpg",
    title: "Curated Regimen",
    spec: "Minimalist Vanity Placement",
    caption: "Still Life Context",
  },
];

// Cinematic Video Reels (Featuring User's 3 Videos in Spyker Theatre Layout)
const SENSORY_REELS = [
  {
    id: "reel-1",
    title: "Formulation Craft & Whipped Texture",
    subtitle: "High-density micro-emulsion presented in glass flacon under studio illumination.",
    src: "/assets/video%20body%202.mp4",
    badge: "REEL 01 // 4K UHD",
    duration: "52S",
    telemetry: "LIPID REPLENISHMENT • VISCOSITY 5200 CPS",
  },
  {
    id: "reel-2",
    title: "Epidermal Contact & Assimilation",
    subtitle: "Direct skin application demonstrating rapid sub-micron absorption with zero residue.",
    src: "/assets/video%20body%203.mp4",
    badge: "REEL 02 // HD MOTION",
    duration: "8.7S",
    telemetry: "TRANSEPIDERMAL UPTAKE • INSTANT DEWY FINISH",
  },
  {
    id: "reel-3",
    title: "Atmospheric Essence & Fluidity",
    subtitle: "The tactile and sensory motion of Beauty Lotion conditioning the dermal matrix.",
    src: "/assets/video%20body.mp4",
    badge: "REEL 03 // AMBIENT",
    duration: "CINEMATIC",
    telemetry: "CELLULAR SCIENCE • HYPOALLERGENIC ACCORD",
  },
];

// Key Ingredients & Scientific Profile (Non-repetitive, high-precision)
const INGREDIENTS = [
  {
    code: "ACT // 01",
    name: "Bio-Identical Ceramide Triad",
    formula: "Ceramides NP, AP, EOP",
    category: "Lipid Matrix Reconstruction",
    detail: "Identical to human stratum corneum lipids; seamlessly seals microscopic barrier fractures.",
  },
  {
    code: "ACT // 02",
    name: "Multi-Molecular Hyaluronate",
    formula: "5 Distinct Molecular Weights",
    category: "Deep Stratum Hydration",
    detail: "Low fractions reach deeper reservoirs while high polymers form a breathable moisture barrier.",
  },
  {
    code: "ACT // 03",
    name: "Fermented Camellia & Rice Bio-Actives",
    formula: "Bio-Cultured Polyphenols & Amino Acids",
    category: "Oxidative Defense Matrix",
    detail: "Neutralizes urban environmental stress and restores natural epidermal refraction and radiance.",
  },
  {
    code: "ACT // 04",
    name: "Centella Asiatica & Niacinamide 2%",
    formula: "Phyto-Centella + Vitamin B3 Complex",
    category: "Cutaneous Equilibrium & Calming",
    detail: "Attenuates inflammatory cytokines and refines pore micro-texture into a calm, supple finish.",
  },
];

export default function LuxuryResponsiveLanding() {
  // Gallery active index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Active Cinema Video Reel in Sensory section
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const cinemaVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isCinemaPlaying, setIsCinemaPlaying] = useState(true);
  const [isCinemaMuted, setIsCinemaMuted] = useState(true);

  // Hero Video state
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  // Mobile navigation drawer toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Quick Order & Allocation Modal state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const UNIT_PRICE = 349000;

  // Editorial Journal Modal state
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);

  // Privacy Policy Modal state
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Concierge Form state
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

  // Toggle hero audio
  const toggleHeroMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroVideoRef.current.muted;
      setIsHeroMuted(heroVideoRef.current.muted);
    }
  };

  // Toggle cinema video play/pause
  const toggleCinemaPlay = () => {
    if (cinemaVideoRef.current) {
      if (cinemaVideoRef.current.paused) {
        cinemaVideoRef.current.play();
        setIsCinemaPlaying(true);
      } else {
        cinemaVideoRef.current.pause();
        setIsCinemaPlaying(false);
      }
    }
  };

  // Toggle cinema video mute
  const toggleCinemaMute = () => {
    if (cinemaVideoRef.current) {
      cinemaVideoRef.current.muted = !cinemaVideoRef.current.muted;
      setIsCinemaMuted(cinemaVideoRef.current.muted);
    }
  };

  // When switching cinema reel, auto-play with current mute state
  const handleSelectReel = (index: number) => {
    setActiveReelIndex(index);
    setIsCinemaPlaying(true);
  };

  // Switch prototype image
  const nextAngle = () => {
    setActiveImageIndex((prev) => (prev + 1) % PROTOTYPE_IMAGES.length);
  };

  const prevAngle = () => {
    setActiveImageIndex((prev) => (prev - 1 + PROTOTYPE_IMAGES.length) % PROTOTYPE_IMAGES.length);
  };

  // Smooth scroll
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Direct Inquiry Click
  const handleDirectInquiryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const conciergeSec = document.getElementById("concierge");
    if (conciergeSec) {
      conciergeSec.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (messageInputRef.current) {
          messageInputRef.current.focus();
        }
      }, 500);
    }
  };

  // Submit concierge inquiry
  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName.trim() && clientContact.trim()) {
      setInquirySent(true);
    }
  };

  // WhatsApp link configuration
  const whatsappNumber = "6281234567890";
  const whatsappGeneralText = encodeURIComponent(
    "Hello Beauty Lotion Concierge, I would like to inquire about the Beauty Lotion formulation and allocation."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappGeneralText}`;

  // WhatsApp dynamic order link
  const whatsappOrderText = encodeURIComponent(
    `Hello Beauty Lotion Concierge, I would like to acquire ${orderQuantity} bottle(s) of Beauty Lotion (150ml). Total allocation: Rp ${(
      orderQuantity * UNIT_PRICE
    ).toLocaleString("id-ID")}. Please advise on express delivery.`
  );
  const whatsappOrderUrl = `https://wa.me/${whatsappNumber}?text=${whatsappOrderText}`;

  return (
    <div id="top" className="relative min-h-screen bg-[#070707] text-[#f4f4f4] antialiased selection:bg-[#d08c81]/30 selection:text-white">
      {/* ----------------- SPYKER-INSPIRED TELEMETRY TICKER ----------------- */}
      <div className="bg-[#0c0c0c] border-b border-white/10 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase py-2 px-4 font-mono text-stone-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d08c81] animate-ping" />
          <span className="text-stone-300 font-sans tracking-[0.2em]">CELLULAR SKIN FITNESS</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[9px] text-stone-400">
          <span>SPEC // BIOMIMETIC FORMULATION</span>
          <span>•</span>
          <span>150 ML // 5.1 FL. OZ</span>
          <span>•</span>
          <span className="text-[#e8c5c1]">GLOBAL EXPRESS ALLOCATION</span>
        </div>
        <div className="text-[9px] text-[#e8c5c1] font-sans tracking-widest font-semibold">
          BATCH N° 01 / READY
        </div>
      </div>

      {/* ----------------- SPYKER-INSPIRED MINIMALIST 3-WAY HEADER ----------------- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#070707]/90 border-b border-white/10 transition-all">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: Section Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] tracking-[0.22em] uppercase font-medium text-stone-400">
            <a
              href="#philosophy"
              onClick={(e) => scrollToSection(e, "philosophy")}
              className="hover:text-white transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#cinema"
              onClick={(e) => scrollToSection(e, "cinema")}
              className="hover:text-[#d08c81] transition-colors flex items-center gap-1.5 text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d08c81]" />
              <span>Motion Cinema</span>
            </a>
            <a
              href="#vessel"
              onClick={(e) => scrollToSection(e, "vessel")}
              className="hover:text-white transition-colors"
            >
              The Vessel
            </a>
            <a
              href="#science"
              onClick={(e) => scrollToSection(e, "science")}
              className="hover:text-white transition-colors"
            >
              Actives
            </a>
            <a
              href="#concierge"
              onClick={(e) => scrollToSection(e, "concierge")}
              className="hover:text-white transition-colors"
            >
              Concierge
            </a>
          </nav>

          {/* Center: Bold Architectural Wordmark */}
          <div className="flex items-center lg:justify-center">
            <a
              href="#top"
              onClick={(e) => scrollToSection(e, "top")}
              className="flex flex-col select-none group cursor-pointer"
              aria-label="Beauty Lotion Brand Mark"
            >
              <span className="font-sans text-lg sm:text-2xl md:text-3xl font-medium tracking-[0.3em] uppercase text-white group-hover:text-[#e8c5c1] transition-colors leading-none">
                BEAUTY LOTION
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.45em] uppercase text-[#d08c81] font-mono mt-1">
                Cellular Skin Fitness
              </span>
            </a>
          </div>

          {/* Right: Stark Spyker-Style Rectangular Action Buttons */}
          <div className="flex items-center justify-end space-x-3">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="rounded-[2px] bg-white text-black hover:bg-stone-200 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-semibold px-4 sm:px-6 py-2 sm:py-2.5 transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Acquire</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex rounded-[2px] border border-white/20 hover:border-white/50 text-stone-300 hover:text-white text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium px-4 py-2 transition-all items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#d08c81]" />
              <span>Desk</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-[2px] border border-white/20 text-white hover:bg-white/10"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#070707]/98 backdrop-blur-2xl px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-xs tracking-[0.25em] uppercase font-medium font-mono text-stone-300">
              <a
                href="#philosophy"
                onClick={(e) => scrollToSection(e, "philosophy")}
                className="py-2.5 border-b border-white/5 hover:text-white"
              >
                01 // Philosophy
              </a>
              <a
                href="#cinema"
                onClick={(e) => scrollToSection(e, "cinema")}
                className="py-2.5 border-b border-white/5 text-[#d08c81] flex items-center justify-between"
              >
                <span>02 // Motion Cinema</span>
                <span className="text-[10px] text-white">REELS</span>
              </a>
              <a
                href="#vessel"
                onClick={(e) => scrollToSection(e, "vessel")}
                className="py-2.5 border-b border-white/5 hover:text-white"
              >
                03 // The Vessel
              </a>
              <a
                href="#science"
                onClick={(e) => scrollToSection(e, "science")}
                className="py-2.5 border-b border-white/5 hover:text-white"
              >
                04 // Actives (Science)
              </a>
              <a
                href="#concierge"
                onClick={(e) => scrollToSection(e, "concierge")}
                className="py-2.5 hover:text-white flex items-center justify-between"
              >
                <span>05 // Concierge & Orders</span>
                <span>→</span>
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="w-full rounded-[2px] bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase py-3 text-center"
              >
                Acquire Beauty Lotion (Rp 349.000)
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-[2px] border border-white/20 text-white font-medium text-xs tracking-[0.2em] uppercase py-3 text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#d08c81]" />
                <span>Contact Private Concierge</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ----------------- 1. FULL-BLEED CINEMATIC HERO (SPYKER CARS AESTHETIC) ----------------- */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start overflow-hidden bg-black pb-12 sm:pb-20">
        {/* Full-bleed 100vw Video Canvas */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            ref={heroVideoRef}
            src="/assets/video%20body.mp4"
            autoPlay
            muted={isHeroMuted}
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.68] contrast-[1.12]"
          />
          {/* Subtle Spyker Vignette & Grid Lines */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
        </div>

        {/* Telemetry Corner Accents */}
        <div className="absolute top-8 left-4 sm:left-12 z-20 text-[10px] font-mono tracking-[0.25em] uppercase text-white/50 hidden sm:block">
          <div>LAT // 05.5 pH BIOMIMETIC</div>
          <div>SERIAL // BL-150-2026</div>
        </div>

        <div className="absolute top-8 right-4 sm:right-12 z-20 hidden sm:block">
          <button
            onClick={toggleHeroMute}
            className="rounded-[2px] px-3.5 py-1.5 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
          >
            {isHeroMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-[#d08c81]" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span>SOUND [{isHeroMuted ? "MUTED" : "PLAYING"}]</span>
          </button>
        </div>

        {/* Hero Narrative Overlay */}
        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-white/10 backdrop-blur-md border border-white/20 text-[#e8c5c1] text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d08c81]" />
              THE ARCHITECTURAL SKIN FORMULATION
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-medium text-white tracking-[-0.01em] uppercase leading-[0.9] [text-wrap:balance]">
              ENGINEERED <br />
              <span className="font-serif italic font-normal text-[#f4eae6] tracking-normal">Skin</span> FITNESS
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
              Beauty Lotion conditions the cutaneous lipid matrix. A sub-micron cellular micro-emulsion that trains skin to retain moisture, defend against environmental decay, and remain composed.
            </p>

            {/* Stark High-Contrast Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#cinema"
                onClick={(e) => scrollToSection(e, "cinema")}
                className="rounded-[2px] bg-white text-black hover:bg-stone-200 text-xs tracking-[0.25em] uppercase font-semibold px-8 py-3.5 sm:py-4 transition-all text-center flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Experience In Motion</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="rounded-[2px] bg-black/60 hover:bg-white/10 text-white backdrop-blur-md border border-white/25 text-xs tracking-[0.25em] uppercase font-medium px-8 py-3.5 sm:py-4 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#e8c5c1]" />
                <span>Acquire Bottle (Rp 349.000)</span>
              </button>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="pt-8 sm:pt-12 flex justify-between items-end border-t border-white/15 mt-8 sm:mt-12 text-stone-400 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase">
            <span className="hidden sm:inline">DERMATOLOGICAL RESEARCH // ZERO COMPROMISE</span>
            <button
              onClick={(e) => scrollToSection(e, "philosophy")}
              className="flex items-center gap-2 mx-auto sm:mx-0 hover:text-white transition-colors cursor-pointer"
            >
              <span>EXPLORE SPECIFICATION</span>
              <span className="text-[#d08c81]">↓</span>
            </button>
            <span className="hidden md:inline">150 ML • ALLOCATED EDITION</span>
          </div>
        </div>
      </section>

      {/* ----------------- 2. PHILOSOPHY SECTION (SPYKER GRID ARCHITECTURE) ----------------- */}
      <section id="philosophy" className="py-20 sm:py-28 bg-[#0a0a0a] border-y border-white/10 relative">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3 mb-14 sm:mb-20">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d08c81] block">
              01 // CORE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.95]">
              Formulated as a <br />
              <span className="font-serif italic font-normal text-[#e8c5c1] lowercase">tool for</span> Skin Longevity
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm md:text-base font-light leading-relaxed pt-2 max-w-2xl">
              Skin is an intelligent adaptive tissue. Rather than masking it with synthetic films, Beauty Lotion provides biomimetic lipid structures that actively reinforce the cellular barrier.
            </p>
          </div>

          {/* 3-Column Spyker Hairline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Pillar 01 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#0d0d0d] hover:bg-[#121212] transition-colors group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-stone-400 uppercase">
                  <span>PHASE 01</span>
                  <span className="text-[#d08c81]">RESILIENCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight uppercase text-white">
                  Protect
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                  Shields the lipid mantle against particulate urban pollution, climate aridness, and daily free-radical fatigue without suffocating pores.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#e8c5c1] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#d08c81]" />
                <span>Stratum Corneum Fortification</span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#0d0d0d] hover:bg-[#121212] transition-colors group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-stone-400 uppercase">
                  <span>PHASE 02</span>
                  <span className="text-[#d08c81]">SYNTHESIS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight uppercase text-white">
                  Recover
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                  Accelerates cellular recovery with bio-identical ceramides, repairing micro-fractures in the skin barrier to restore silky firmness.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#e8c5c1] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#d08c81]" />
                <span>Bio-Identical Lipid Repair</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#0d0d0d] hover:bg-[#121212] transition-colors group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-stone-400 uppercase">
                  <span>PHASE 03</span>
                  <span className="text-[#d08c81]">EQUILIBRIUM</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight uppercase text-white">
                  Maintain
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                  Maintains an uninterrupted 24-hour hydration lock while preserving natural elasticity and barrier equilibrium from morning until dusk.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#e8c5c1] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#d08c81]" />
                <span>24-Hour Sustained Reservoir</span>
              </div>
            </div>
          </div>

          {/* Stark Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-x border-b border-white/10 divide-x divide-white/10 text-center py-6 sm:py-8 bg-[#080808]">
            <div className="p-3">
              <div className="text-2xl sm:text-4xl md:text-5xl font-mono text-white">+98%</div>
              <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-400 mt-1">Barrier Fortification</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-4xl md:text-5xl font-mono text-[#e8c5c1]">24H</div>
              <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-400 mt-1">Hydration Lock</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-4xl md:text-5xl font-mono text-white">-89%</div>
              <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-400 mt-1">Water Loss (TEWL)</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-4xl md:text-5xl font-mono text-[#e8c5c1]">100%</div>
              <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-400 mt-1">Sensitive Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. SPYKER CINEMA THEATRE (MOTION SHOWCASE WITH 3 REELS) ----------------- */}
      <section id="cinema" className="py-20 sm:py-28 bg-[#060606] border-b border-white/10 relative overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d08c81] block">
                02 // SENSORY THEATRE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.95]">
                Formula In Motion
              </h2>
              <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl">
                Observe the whipped micro-emulsion texture, container craft, and instantaneous melting assimilation onto skin.
              </p>
            </div>

            {/* Reel Switcher Buttons (Spyker Style Hairline Tabs) */}
            <div className="flex flex-wrap items-center gap-2 border border-white/10 p-1 rounded-[2px] bg-[#0c0c0c]">
              {SENSORY_REELS.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => handleSelectReel(idx)}
                  className={`rounded-[2px] px-3.5 sm:px-5 py-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all cursor-pointer ${
                    activeReelIndex === idx
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  {reel.badge}
                </button>
              ))}
            </div>
          </div>

          {/* Main Cinema Screen (16:9 Widescreen Theatre) */}
          <div className="relative aspect-video w-full rounded-[2px] overflow-hidden border border-white/20 bg-black shadow-2xl group">
            {/* The Active Video */}
            <video
              ref={cinemaVideoRef}
              key={SENSORY_REELS[activeReelIndex].src}
              src={SENSORY_REELS[activeReelIndex].src}
              autoPlay
              muted={isCinemaMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Crosshair Coordinates (Spyker Aesthetic) */}
            <div className="absolute top-4 left-4 z-20 text-[9px] font-mono tracking-widest uppercase text-white/70 bg-black/60 px-3 py-1 border border-white/15 rounded-[2px]">
              {SENSORY_REELS[activeReelIndex].badge} • {SENSORY_REELS[activeReelIndex].telemetry}
            </div>

            <div className="absolute top-4 right-4 z-20 text-[9px] font-mono tracking-widest uppercase text-white/70 bg-black/60 px-3 py-1 border border-white/15 rounded-[2px]">
              FORMAT // 16:9 NATIVE
            </div>

            {/* Central Play/Pause Trigger */}
            <button
              onClick={toggleCinemaPlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-2xl hover:scale-110"
              aria-label={isCinemaPlaying ? "Pause Cinema Video" : "Play Cinema Video"}
            >
              {isCinemaPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>

            {/* Bottom Screen Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-2xl font-medium uppercase text-white tracking-tight">
                  {SENSORY_REELS[activeReelIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
                  {SENSORY_REELS[activeReelIndex].subtitle}
                </p>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={toggleCinemaPlay}
                  className="rounded-[2px] px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {isCinemaPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isCinemaPlaying ? "PAUSE" : "PLAY"}</span>
                </button>

                <button
                  onClick={toggleCinemaMute}
                  className="rounded-[2px] px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {isCinemaMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-[#d08c81]" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                  <span>{isCinemaMuted ? "UNMUTE" : "MUTED"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Dual Telemetry Previews (The other two videos side-by-side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {SENSORY_REELS.filter((_, idx) => idx !== activeReelIndex).map((subReel) => (
              <div
                key={subReel.id}
                onClick={() => {
                  const targetIdx = SENSORY_REELS.findIndex((r) => r.id === subReel.id);
                  if (targetIdx !== -1) handleSelectReel(targetIdx);
                }}
                className="border border-white/10 hover:border-[#d08c81]/50 p-4 rounded-[2px] bg-[#0b0b0b] flex items-center gap-4 cursor-pointer transition-all group"
              >
                <div className="relative aspect-video w-36 sm:w-48 rounded-[2px] overflow-hidden bg-black shrink-0 border border-white/10">
                  <video
                    src={subReel.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-1.5 left-1.5 text-[8px] font-mono px-1.5 py-0.5 bg-black/80 text-white border border-white/10">
                    {subReel.badge.split(" // ")[0]}
                  </div>
                </div>

                <div className="space-y-1 min-w-0">
                  <span className="text-[9px] font-mono text-[#d08c81] tracking-widest uppercase block">
                    SWITCH REEL VIEW →
                  </span>
                  <h4 className="text-sm font-medium text-white truncate group-hover:text-[#e8c5c1] transition-colors">
                    {subReel.title}
                  </h4>
                  <p className="text-[11px] text-stone-400 line-clamp-1 font-light">
                    {subReel.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 4. THE VESSEL (COACHBUILT PROTOTYPE GALLERY) ----------------- */}
      <section id="vessel" className="py-20 sm:py-28 bg-[#0a0a0a] border-b border-white/10">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d08c81] block">
              03 // THE FLACON
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.95]">
              The Architectural Vessel
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              Constructed with UV-blocking ceramic glass to protect active botanical bio-compounds against photochemical degradation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Gallery Frame (Left 7 Columns) */}
            <div className="lg:col-span-7 border border-white/10 bg-[#0d0d0d] p-4 sm:p-8 rounded-[2px] relative group">
              <div className="relative aspect-square sm:aspect-[4/3] w-full bg-[#050505] rounded-[2px] overflow-hidden flex items-center justify-center border border-white/10">
                <Image
                  src={PROTOTYPE_IMAGES[activeImageIndex].src}
                  alt={PROTOTYPE_IMAGES[activeImageIndex].title}
                  fill
                  className="object-contain p-4 sm:p-6 transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />

                {/* Left/Right Touch Arrows */}
                <button
                  onClick={prevAngle}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-[2px] bg-black/80 hover:bg-black border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-10"
                  aria-label="Previous Perspective"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextAngle}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-[2px] bg-black/80 hover:bg-black border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-10"
                  aria-label="Next Perspective"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Angle Description */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-white font-medium block">
                    {PROTOTYPE_IMAGES[activeImageIndex].title}
                  </span>
                  <span className="text-stone-400 text-[11px]">
                    {PROTOTYPE_IMAGES[activeImageIndex].spec}
                  </span>
                </div>
                <span className="text-[#d08c81] tracking-widest">
                  ANGLE // 0{activeImageIndex + 1} OF 04
                </span>
              </div>

              {/* 4 Thumbnails */}
              <div className="grid grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/10">
                {PROTOTYPE_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-square rounded-[2px] overflow-hidden border transition-all p-1 bg-black cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-[#d08c81] ring-1 ring-[#d08c81]"
                        : "border-white/10 opacity-50 hover:opacity-100"
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

            {/* Specifications & Acquisition (Right 5 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d08c81] block">
                  TECHNICAL SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium uppercase text-white tracking-tight">
                  150 ML Micro-Emulsion Vessel
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  Engineered with an airless piston pump that maintains nitrogen hermetic seal throughout product lifespan, preventing active ingredient oxidation.
                </p>
              </div>

              {/* Spyker-Style Spec Table */}
              <div className="border border-white/10 divide-y divide-white/10 text-xs font-mono bg-[#0d0d0d] rounded-[2px]">
                <div className="p-3.5 flex justify-between">
                  <span className="text-stone-400 uppercase">pH Equilibrium</span>
                  <span className="text-white font-medium">5.5 (Biomimetic Acid Mantle)</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-stone-400 uppercase">Volume</span>
                  <span className="text-white font-medium">150 ml / 5.1 fl. oz</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-stone-400 uppercase">Aromatic Profile</span>
                  <span className="text-white font-medium">100% Fragrance-Free</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-stone-400 uppercase">Certification</span>
                  <span className="text-white font-medium">100% Vegan • Cruelty-Free</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-stone-400 uppercase">Batch Integrity</span>
                  <span className="text-emerald-400 font-medium">Allocated Batch 01</span>
                </div>
              </div>

              {/* Acquisition Box */}
              <div className="border border-white/15 bg-[#101010] p-6 rounded-[2px] space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">
                      OFFICIAL OFFERING
                    </span>
                    <span className="text-2xl sm:text-3xl font-mono font-medium text-white">
                      Rp 349.000
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase border border-emerald-500/30 px-2.5 py-1">
                    READY TO DISPATCH
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="flex-1 rounded-[2px] bg-white text-black hover:bg-stone-200 text-xs tracking-[0.2em] uppercase font-semibold py-3.5 px-6 text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Acquire Vessel</span>
                  </button>
                  <button
                    onClick={handleDirectInquiryClick}
                    className="rounded-[2px] border border-white/20 hover:border-white text-white text-xs tracking-[0.2em] uppercase font-medium py-3.5 px-6 text-center transition-all cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 5. BIO-ACTIVES MATRIX (SCIENCE) ----------------- */}
      <section id="science" className="py-20 sm:py-28 bg-[#070707] border-b border-white/10">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d08c81] block">
              04 // BIO-ACTIVES
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.95]">
              Active Ingredient Architecture
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              Four bio-compatible actives selected for exact cellular affinity and zero pore-clogging occlusion.
            </p>
          </div>

          {/* 4-Grid Hairline Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {INGREDIENTS.map((item, idx) => (
              <div
                key={item.code}
                className={`p-6 sm:p-8 space-y-4 bg-[#0a0a0a] hover:bg-[#0e0e0e] transition-colors ${
                  idx >= 2 ? "md:border-t md:border-white/10" : ""
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
                  <span className="text-[#d08c81]">{item.code}</span>
                  <span className="text-stone-400">{item.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white uppercase tracking-tight">
                  {item.name}
                </h3>
                <div className="text-[11px] font-mono text-stone-400">
                  Formula: {item.formula}
                </div>
                <p className="text-xs text-stone-400 font-light leading-relaxed pt-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Standards Banner */}
          <div className="mt-8 border border-white/10 p-6 bg-[#0c0c0c] grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-mono">
            <div>
              <div className="text-white font-medium">0% PARABENS</div>
              <div className="text-[10px] text-stone-400 uppercase mt-0.5">Zero Preservatives</div>
            </div>
            <div>
              <div className="text-white font-medium">0% FRAGRANCE</div>
              <div className="text-[10px] text-stone-400 uppercase mt-0.5">Non-Sensitizing</div>
            </div>
            <div>
              <div className="text-white font-medium">100% VEGAN</div>
              <div className="text-[10px] text-stone-400 uppercase mt-0.5">Cruelty-Free</div>
            </div>
            <div>
              <div className="text-white font-medium">DERM TESTED</div>
              <div className="text-[10px] text-stone-400 uppercase mt-0.5">Hypoallergenic</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 6. PRIVATE CONCIERGE & DIRECT ORDERS ----------------- */}
      <section id="concierge" className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            {/* Left 6 Columns: Direct Channels */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d08c81] block">
                  05 // PRIVATE ADVISORY
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.95] text-white">
                  Direct Allocation & <br />
                  <span className="font-serif italic font-normal text-[#e8c5c1] lowercase">personal</span> Consultation
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                  For batch allocations, regimen integrations, or international priority shipping inquiries, our concierge desk is available directly.
                </p>
              </div>

              {/* Channel Cards */}
              <div className="space-y-4">
                {/* Priority WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-[#0a0a0a] hover:bg-[#101010] border border-white/10 hover:border-[#d08c81]/50 rounded-[2px] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[2px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400 block">
                        PRIORITY ADVISORY WHATSAPP
                      </span>
                      <h4 className="text-sm font-mono text-white group-hover:text-[#d08c81] transition-colors">
                        +62 812-3456-7890
                      </h4>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:concierge@beautylotion.com?subject=Inquiry%20Beauty%20Lotion"
                  className="flex items-center justify-between p-5 bg-[#0a0a0a] hover:bg-[#101010] border border-white/10 hover:border-[#d08c81]/50 rounded-[2px] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[2px] bg-[#d08c81]/20 text-[#d08c81] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase text-[#d08c81] block">
                        DEDICATED CLIENT DESK
                      </span>
                      <h4 className="text-sm font-mono text-white group-hover:text-[#d08c81] transition-colors">
                        concierge@beautylotion.com
                      </h4>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                </a>

                {/* Operating Telemetry */}
                <div className="flex items-center gap-3 p-4 bg-[#080808] border border-white/5 rounded-[2px] text-[11px] font-mono text-stone-400">
                  <Clock className="w-4 h-4 text-[#d08c81] shrink-0" />
                  <span>HOURS: MON – SAT (08:00 – 20:00). EXPRESS GLOBAL ALLOCATION.</span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Transmission Form */}
            <div className="lg:col-span-6 border border-white/15 bg-[#0a0a0a] p-6 sm:p-10 rounded-[2px]">
              <div className="space-y-2 mb-6">
                <h3 className="text-lg sm:text-xl font-medium uppercase text-white tracking-tight">
                  Transmit Allocation Request
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  Submit your request below. A client advisor will attend to your inquiry promptly.
                </p>
              </div>

              {inquirySent ? (
                <div className="border border-emerald-500/40 bg-emerald-950/20 p-8 text-center space-y-4 rounded-[2px]">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-medium text-white uppercase tracking-wider">
                    Transmission Logged
                  </h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Thank you. A dedicated Beauty Lotion advisor has received your dispatch and will reply shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setClientName("");
                      setClientContact("");
                      setClientMessage("");
                    }}
                    className="text-xs text-[#d08c81] underline uppercase tracking-widest font-mono pt-2 cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConciergeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-300 mb-1.5">
                      Client Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#111] border border-white/15 rounded-[2px] px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-300 mb-1.5">
                      Direct WhatsApp or Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+62 812-3456-7890 or eleanor@domain.com"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      className="w-full bg-[#111] border border-white/15 rounded-[2px] px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-300 mb-1.5">
                      Inquiry Notes or Allocation Details
                    </label>
                    <textarea
                      ref={messageInputRef}
                      rows={3}
                      placeholder="Please note skin sensitivities, bottle quantities, or delivery preferences..."
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      className="w-full bg-[#111] border border-white/15 rounded-[2px] px-4 py-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-[2px] bg-white text-black hover:bg-stone-200 font-semibold py-3.5 text-xs tracking-[0.25em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit To Advisory Desk</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Understated Editorial Footer */}
          <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-stone-500 gap-4 text-center sm:text-left">
            <div>
              © 2026 BEAUTY LOTION. ALL RIGHTS RESERVED. CELLULAR SKIN FITNESS.
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-6 text-[10px] tracking-widest uppercase text-stone-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TikTok
              </a>
              <span>•</span>
              <button
                onClick={() => setIsJournalModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Journal
              </button>
              <span>•</span>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPYKER-STYLE MINIMALIST LUXURY MODALS
          ========================================================================= */}

      {/* 1. Quick Acquisition & Allocation Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0e0e0e] text-white w-full max-w-lg rounded-[2px] p-6 sm:p-8 border border-white/20 shadow-2xl relative space-y-6">
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-[2px] bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
              aria-label="Close Acquisition Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d08c81] block">
                DIRECT ALLOCATION DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-medium uppercase text-white tracking-tight">
                Acquire Beauty Lotion
              </h3>
              <p className="text-xs text-stone-400 font-light font-mono">
                150 ML FLACON • COMPLIMENTARY EXPRESS GLOBAL DISPATCH
              </p>
            </div>

            {/* Product Summary Row */}
            <div className="bg-[#141414] rounded-[2px] p-4 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-[2px] bg-black overflow-hidden shrink-0 border border-white/15">
                  <Image
                    src="/assets/prototype%20produk%20lotion.jpg"
                    alt="Beauty Lotion"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider">Beauty Lotion</h4>
                  <span className="text-xs font-mono text-[#d08c81]">
                    Rp {UNIT_PRICE.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center gap-2 bg-black rounded-[2px] p-1 border border-white/15">
                <button
                  onClick={() => setOrderQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-[2px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs font-mono font-semibold">{orderQuantity}</span>
                <button
                  onClick={() => setOrderQuantity((q) => Math.min(10, q + 1))}
                  className="w-7 h-7 rounded-[2px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 text-xs font-mono border-y border-white/10 py-3 text-stone-300">
              <div className="flex justify-between">
                <span>SUBTOTAL ({orderQuantity} UNIT{orderQuantity > 1 ? "S" : ""})</span>
                <span className="text-white">
                  Rp {(orderQuantity * UNIT_PRICE).toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>PRIORITY INSURED DISPATCH</span>
                <span className="text-emerald-400 uppercase">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-sm pt-2 text-white border-t border-white/10 font-bold">
                <span>TOTAL ALLOCATION</span>
                <span className="text-[#d08c81] text-base">
                  Rp {(orderQuantity * UNIT_PRICE).toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-1">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOrderModalOpen(false)}
                className="w-full rounded-[2px] bg-white hover:bg-stone-200 text-black font-semibold py-3.5 text-xs tracking-[0.25em] uppercase transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Order via WhatsApp</span>
              </a>

              <button
                onClick={(e) => {
                  setIsOrderModalOpen(false);
                  handleDirectInquiryClick(e);
                }}
                className="w-full rounded-[2px] border border-white/20 hover:border-white text-white text-xs tracking-[0.2em] uppercase py-3 transition-all text-center cursor-pointer font-mono"
              >
                Inquire via Email Form
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Editorial Journal Modal */}
      {isJournalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0e0e0e] text-white w-full max-w-2xl rounded-[2px] p-6 sm:p-10 border border-white/20 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setIsJournalModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-[2px] bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
              aria-label="Close Journal Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d08c81] block">
                JOURNAL // VOLUME 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium uppercase text-white tracking-tight">
                The Cellular Paradigm
              </h3>
              <p className="text-xs text-stone-400 font-mono">
                WHY PASSIVE HYDRATION IS OBSOLETE
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-white/10 pt-4">
              <p>
                Conventional skincare treats dehydration as a transient defect, layering occlusive waxes over fatigued cells. The outcome is brief cosmetic lubrication followed by rapid barrier collapse.
              </p>
              <p>
                <strong>Beauty Lotion</strong> was designed with the mechanical precision of high-performance engineering. By synthesizing bio-identical ceramides (NP, AP, EOP) with multi-tiered hyaluronate polymers, we provide the dermal matrix with physiologically native reinforcement.
              </p>
              <p>
                The barrier conditions itself to withstand arid pressure, particulate smog, and oxidative decay with effortless serenity.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsJournalModalOpen(false)}
                className="rounded-[2px] bg-white text-black font-semibold px-6 py-2.5 text-xs tracking-[0.2em] uppercase cursor-pointer"
              >
                Close Journal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Privacy & Standards Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0e0e0e] text-white w-full max-w-lg rounded-[2px] p-6 sm:p-8 border border-white/20 shadow-2xl relative space-y-5">
            <button
              onClick={() => setIsPrivacyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-[2px] bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
              aria-label="Close Privacy Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d08c81] block">
                STANDARDS & COMPLIANCE
              </span>
              <h3 className="text-xl sm:text-2xl font-medium uppercase text-white tracking-tight">
                Formulation Commitments
              </h3>
            </div>

            <div className="space-y-3 text-xs text-stone-300 font-light leading-relaxed border-t border-white/10 pt-4">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
                <span><strong>Client Confidentiality:</strong> Concierge logs and consultation requests are strictly protected and never shared or monetized.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
                <span><strong>Zero Animal Testing:</strong> 100% Vegan certification across both active raw materials and finished Beauty Lotion batches.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
                <span><strong>UV Flacon Recycling:</strong> Non-reactive flacon designed for maximal compound preservation and recyclable end-of-life recovery.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="rounded-[2px] border border-white/20 text-white font-mono px-5 py-2 text-xs tracking-wider uppercase hover:border-white cursor-pointer"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
