"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Volume2,
  VolumeX,
  ShieldCheck,
  Droplets,
  Leaf,
  Sparkles,
  CheckCircle2,
  Send,
  MessageCircle,
  Mail,
  Clock,
  ExternalLink,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Plus,
  Minus,
  Play,
  Pause,
  ArrowRight,
  FileText,
  Check,
} from "lucide-react";

// Prototype images provided by user
const PROTOTYPE_IMAGES = [
  {
    id: "angle-1",
    src: "/assets/prototype%20produk%20lotion.jpg",
    title: "Architectural Vessel",
    subtitle: "Minimalist UV-protective flacon with a tactile matte-stone finish.",
    caption: "Front Profile",
  },
  {
    id: "angle-2",
    src: "/assets/prototype%20produk%20lotion%202.jpg",
    title: "Precision Dispenser",
    subtitle: "Airless micro-pump engineered to preserve formula potency and hygiene.",
    caption: "Airless Pump",
  },
  {
    id: "angle-3",
    src: "/assets/prototype%20produk%20lotion%203.jpg",
    title: "Weightless Texture",
    subtitle: "Featherlight micro-emulsion that melts into skin with zero residue.",
    caption: "Texture Nuance",
  },
  {
    id: "angle-4",
    src: "/assets/prototype%20produk%20lotion%204.jpg",
    title: "Curated Vanity Ritual",
    subtitle: "An understated tactile sculpture designed to elevate your daily regimen.",
    caption: "Vanity Still Life",
  },
];

// Key Ingredients & Scientific Profile
const INGREDIENTS = [
  {
    name: "Bio-Identical Ceramide Complex",
    type: "Ceramides NP, AP, EOP",
    role: "Lipid Matrix Reconstruction",
    description:
      "Physiologically identical lipids that integrate into intercellular spaces to seal micro-cracks and restore barrier strength.",
  },
  {
    name: "Multi-Molecular Hyaluronic Acid",
    type: "5 Tiered Molecular Weights",
    role: "Cross-Layer Hydration",
    description:
      "Low-weight fractions hydrate deep dermal layers, while high-weight polymers create an invisible, breathable moisture shield.",
  },
  {
    name: "Bio-Fermented Camellia & Rice",
    type: "Cultured Botanical Extracts",
    role: "Antioxidant Defense",
    description:
      "Fermentation unlocks concentrated polyphenols and amino acids to shield against oxidative stressors and enhance natural luminosity.",
  },
  {
    name: "Centella Asiatica & Niacinamide 2%",
    type: "Micro-Circulatory Calming Complex",
    role: "Soothing & Tone Refinement",
    description:
      "Calms reactive skin, minimizes surface redness, and refines epidermal texture into a balanced, silky canvas.",
  },
];

// Core Biological Benefits (Concise, Non-repetitive)
const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Barrier Fortification",
    desc: "Rebuilds the outer lipid matrix to defend against urban pollution and climate fatigue.",
    tag: "Resilience",
    target: "science",
  },
  {
    icon: Droplets,
    title: "All-Day Moisture Lock",
    desc: "Fast-absorbing micro-emulsion provides sustained cellular moisture without greasy film.",
    tag: "Hydration",
    target: "sensory",
  },
  {
    icon: Leaf,
    title: "Calming Relief",
    desc: "Quickly relieves skin tightness and visible redness, returning skin to balanced comfort.",
    tag: "Soothing",
    target: "science",
  },
  {
    icon: Sparkles,
    title: "Supple Dewy Glow",
    desc: "Restores natural light reflection across the skin for an effortless, healthy finish.",
    tag: "Radiance",
    target: "vessel",
  },
];

export default function LuxuryResponsiveLanding() {
  // Gallery active index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Hero Video state
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  // Video 2 (Sensory Application) state
  const [isVideo2Playing, setIsVideo2Playing] = useState(true);
  const [isVideo2Muted, setIsVideo2Muted] = useState(true);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  // Video 3 (Sensory Texture) state
  const [isVideo3Playing, setIsVideo3Playing] = useState(true);
  const video3Ref = useRef<HTMLVideoElement | null>(null);

  // Mobile navigation drawer toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Quick Order & Acquisition Modal state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const UNIT_PRICE = 349000;

  // Editorial Journal Modal state
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);

  // Privacy Policy Modal state
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Private Concierge form state
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);
  const contactInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

  // Toggle hero video mute
  const toggleHeroMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroVideoRef.current.muted;
      setIsHeroMuted(heroVideoRef.current.muted);
    }
  };

  // Toggle Video 2 Play/Pause
  const toggleVideo2Play = () => {
    if (video2Ref.current) {
      if (video2Ref.current.paused) {
        video2Ref.current.play();
        setIsVideo2Playing(true);
      } else {
        video2Ref.current.pause();
        setIsVideo2Playing(false);
      }
    }
  };

  // Toggle Video 2 Mute
  const toggleVideo2Mute = () => {
    if (video2Ref.current) {
      video2Ref.current.muted = !video2Ref.current.muted;
      setIsVideo2Muted(video2Ref.current.muted);
    }
  };

  // Toggle Video 3 Play/Pause
  const toggleVideo3Play = () => {
    if (video3Ref.current) {
      if (video3Ref.current.paused) {
        video3Ref.current.play();
        setIsVideo3Playing(true);
      } else {
        video3Ref.current.pause();
        setIsVideo3Playing(false);
      }
    }
  };

  // Switch prototype image by next/previous
  const nextAngle = () => {
    setActiveImageIndex((prev) => (prev + 1) % PROTOTYPE_IMAGES.length);
  };

  const prevAngle = () => {
    setActiveImageIndex((prev) => (prev - 1 + PROTOTYPE_IMAGES.length) % PROTOTYPE_IMAGES.length);
  };

  // Smooth scroll helper
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Focus concierge form on Direct Inquiry
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

  // Pre-configured VIP WhatsApp link
  const whatsappNumber = "6281234567890";
  const whatsappText = encodeURIComponent(
    "Hello Beauty Lotion Concierge, I would like to inquire about Beauty Lotion and place an allocation order."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  // WhatsApp order link with dynamic quantity
  const whatsappOrderText = encodeURIComponent(
    `Hello Beauty Lotion Concierge, I would like to acquire ${orderQuantity} bottle(s) of Beauty Lotion (150ml). Total offering: Rp ${(
      orderQuantity * UNIT_PRICE
    ).toLocaleString("id-ID")}. Please advise on express delivery.`
  );
  const whatsappOrderUrl = `https://wa.me/${whatsappNumber}?text=${whatsappOrderText}`;

  return (
    <div id="top" className="relative min-h-screen bg-[#fbfaf9] text-[#1c1a19] antialiased selection:bg-[#d08c81]/30 selection:text-[#1c1a19]">
      {/* ----------------- TOP TICKER / DISPATCH BAR ----------------- */}
      <div className="bg-[#141312] text-[#e8c5c1] text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase py-2 sm:py-2.5 px-3 sm:px-4 text-center font-medium border-b border-white/5 flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d08c81] animate-ping shrink-0" />
        <span className="truncate">ADVANCED CELLULAR SCIENCE • COMPLIMENTARY EXPRESS DISPATCH</span>
      </div>

      {/* ----------------- RESPONSIVE LUXURY HEADER ----------------- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#141312]/90 text-[#f5f2f0] border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Wordmark: "Beauty Lotion" */}
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, "top")}
            className="flex flex-col cursor-pointer select-none group"
            aria-label="Beauty Lotion Home"
          >
            <span className="text-base sm:text-xl md:text-2xl font-light tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white font-sans group-hover:text-[#e8c5c1] transition-colors">
              BEAUTY LOTION
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.35em] sm:tracking-[0.45em] uppercase text-[#d08c81] font-medium -mt-0.5 sm:-mt-1">
              Cellular Skin Fitness
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-9 text-[11px] tracking-[0.25em] uppercase font-medium text-stone-300">
            <a
              href="#philosophy"
              onClick={(e) => scrollToSection(e, "philosophy")}
              className="hover:text-[#d08c81] transition-colors py-1 relative group"
            >
              Philosophy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#vessel"
              onClick={(e) => scrollToSection(e, "vessel")}
              className="hover:text-[#d08c81] transition-colors py-1 relative group"
            >
              The Vessel
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#sensory"
              onClick={(e) => scrollToSection(e, "sensory")}
              className="hover:text-[#d08c81] transition-colors py-1 relative group"
            >
              Sensory In Motion
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#science"
              onClick={(e) => scrollToSection(e, "science")}
              className="hover:text-[#d08c81] transition-colors py-1 relative group"
            >
              Science
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#concierge"
              onClick={(e) => scrollToSection(e, "concierge")}
              className="hover:text-[#d08c81] transition-colors py-1 relative group"
            >
              Concierge
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Action / Mobile Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 sm:gap-2 bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-lg hover:scale-105"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Acquire</span>
            </button>

            {/* Quick Mobile Order Button */}
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="sm:hidden p-2 rounded-full bg-[#d08c81] text-stone-950 font-semibold shadow-md"
              aria-label="Quick Acquire Modal"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>

            {/* Quick Mobile WhatsApp Icon Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#d08c81] border border-white/15 transition-all"
              aria-label="Direct WhatsApp Concierge"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
              aria-label="Toggle Navigation Drawer"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#141312]/98 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3 text-xs tracking-[0.25em] uppercase font-medium">
              <a
                href="#philosophy"
                onClick={(e) => scrollToSection(e, "philosophy")}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                Philosophy
              </a>
              <a
                href="#vessel"
                onClick={(e) => scrollToSection(e, "vessel")}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                The Vessel (Gallery)
              </a>
              <a
                href="#sensory"
                onClick={(e) => scrollToSection(e, "sensory")}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                Sensory In Motion
              </a>
              <a
                href="#science"
                onClick={(e) => scrollToSection(e, "science")}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                Key Actives (Science)
              </a>
              <a
                href="#concierge"
                onClick={(e) => scrollToSection(e, "concierge")}
                className="py-2.5 text-[#d08c81] font-semibold transition-colors flex items-center justify-between"
              >
                <span>Private Concierge Desk</span>
                <span className="text-stone-400">→</span>
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#d08c81] text-stone-950 font-semibold text-xs tracking-wider uppercase py-3 rounded-full shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Acquire Beauty Lotion (Rp 349.000)</span>
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-medium text-xs tracking-wider uppercase py-3 rounded-full border border-white/15"
              >
                <MessageCircle className="w-4 h-4 text-[#d08c81]" />
                <span>Chat with Advisory</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ----------------- 1. HERO VIDEO & MANIFESTO SECTION ----------------- */}
      <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-black py-16 sm:py-20">
        {/* Background Video Player */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            ref={heroVideoRef}
            src="/assets/video%20body.mp4"
            autoPlay
            muted={isHeroMuted}
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.72] contrast-[1.08]"
          />
          {/* Multi-layered responsive gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/40 to-black/60" />
        </div>

        {/* Hero Narrative */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-4 sm:space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e8c5c1] text-[9px] sm:text-[10px] font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d08c81]" />
              Biomimetic Science • Daily Skin Fitness
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05]">
              Engineered for <br />
              <span className="font-serif italic font-normal text-[#f3efe9]">Ultimate Skin</span> Fitness
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xl">
              Introducing <strong>Beauty Lotion</strong>. A cellular micro-emulsion engineered to strengthen barrier resilience and deliver lasting, weightless hydration.
            </p>

            {/* Responsive Hero Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#vessel"
                onClick={(e) => scrollToSection(e, "vessel")}
                className="bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all shadow-xl text-center hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Discover The Vessel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all text-center flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#e8c5c1]" />
                <span>Acquire Bottle</span>
              </button>
            </div>
          </div>

          {/* Bottom Cue Indicator */}
          <div className="pt-8 sm:pt-10 flex justify-between items-end border-t border-white/15 mt-8 sm:mt-10 text-stone-400 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            <span className="hidden sm:inline">ADVANCED DERMATOLOGICAL RESEARCH</span>
            <button
              onClick={(e) => scrollToSection(e, "philosophy")}
              className="flex items-center gap-2 mx-auto sm:mx-0 hover:text-white transition-colors cursor-pointer group"
            >
              <span>EXPLORE BELOW</span>
              <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-[#d08c81] transition-colors">
                <div className="w-1.5 h-1.5 bg-[#d08c81] rounded-full animate-bounce" />
              </div>
            </button>
            <span className="hidden md:inline">SINGLE MASTERPIECE EDITION</span>
          </div>
        </div>

        {/* Hero Audio Control Floating Pill */}
        <button
          onClick={toggleHeroMute}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs tracking-wider transition-all shadow-lg"
          aria-label={isHeroMuted ? "Unmute Ambient Sound" : "Mute Sound"}
        >
          {isHeroMuted ? (
            <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81]" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
          )}
          <span className="uppercase text-[9px] sm:text-[10px]">{isHeroMuted ? "Unmute Audio" : "Sound Playing"}</span>
        </button>
      </section>

      {/* ----------------- 2. PHILOSOPHY SECTION (3 BIOLOGICAL PILLARS) ----------------- */}
      <section id="philosophy" className="py-16 sm:py-20 md:py-24 bg-[#181615] text-[#f5f2f0] relative overflow-hidden">
        {/* Soft Ambient Radial Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#d08c81]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Our Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Formulated as a <br />
              <span className="font-serif italic font-normal text-[#e8c5c1]">Skin Fitness Tool</span>
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Skin is an intelligent adaptive ecosystem. Instead of temporary surface moisture, Beauty Lotion trains the cutaneous barrier to stay balanced, resilient, and hydrated.
            </p>
          </div>

          {/* Three Non-Overlapping Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Pillar 01 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-xs sm:text-sm font-bold text-[#d08c81]">
                    01
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-stone-400">DEFENSE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-2 sm:mb-3">
                  PROTECT
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  Shields the lipid mantle against particulate pollution, dry air, and daily environmental fatigue.
                </p>
              </div>
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81] shrink-0" />
                <span>Barrier Integrity Fortification</span>
              </div>
            </div>

            {/* Pillar 02 (Center Highlight) */}
            <div className="bg-gradient-to-b from-[#252220] to-[#1c1a19] rounded-2xl p-6 sm:p-8 border border-[#d08c81]/50 shadow-2xl flex flex-col justify-between relative group scale-100 md:scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d08c81] text-stone-950 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md whitespace-nowrap">
                BIOMIMETIC FORMULATION
              </div>
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                    02
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#e8c5c1]">RESTORATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-2 sm:mb-3">
                  RECOVER
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  Accelerates cellular recovery with bio-identical ceramides, restoring natural smoothness and supple firmness.
                </p>
              </div>
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81] shrink-0" />
                <span>Rapid Epidermal Rejuvenation</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-xs sm:text-sm font-bold text-[#d08c81]">
                    03
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-stone-400">LONGEVITY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-2 sm:mb-3">
                  MAINTAIN
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  Locks in multi-tiered moisture reserves around the clock without heaviness or clogged pores.
                </p>
              </div>
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81] shrink-0" />
                <span>Sustained Hydration Equilibrium</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics (Non-repetitive) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center border-t border-white/10 pt-8 sm:pt-10">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-serif">+98%</div>
              <div className="text-[10px] sm:text-[11px] text-stone-400 tracking-wider uppercase mt-1">Barrier Fortification</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">24H</div>
              <div className="text-[10px] sm:text-[11px] text-stone-400 tracking-wider uppercase mt-1">Sustained Moisture</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-serif">-89%</div>
              <div className="text-[10px] sm:text-[11px] text-stone-400 tracking-wider uppercase mt-1">Transepidermal Water Loss</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">100%</div>
              <div className="text-[10px] sm:text-[11px] text-stone-400 tracking-wider uppercase mt-1">Sensitive Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. THE VESSEL & PROTOTYPE GALLERY SECTION ----------------- */}
      <section id="vessel" className="py-16 sm:py-20 md:py-24 bg-[#fbfaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Signature Design
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900">
              The Beauty Lotion Vessel
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light leading-relaxed">
              Tactile ceramic flacon engineered for hygienic micro-dosing and UV formula protection.
            </p>
          </div>

          {/* Interactive Prototype Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Prototype Viewer (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-[#f5f2f0] p-4 sm:p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-sm relative group">
              {/* Main Active Angle Frame */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white/70 shadow-inner flex items-center justify-center">
                <Image
                  src={PROTOTYPE_IMAGES[activeImageIndex].src}
                  alt={PROTOTYPE_IMAGES[activeImageIndex].title}
                  fill
                  className="object-contain p-2 sm:p-4 transition-all duration-700 ease-out transform group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />

                {/* Touch Arrows for Easy Mobile Browsing */}
                <button
                  onClick={prevAngle}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-stone-200 flex items-center justify-center text-stone-800 hover:bg-white transition-all z-10"
                  aria-label="Previous Angle"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextAngle}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-stone-200 flex items-center justify-center text-stone-800 hover:bg-white transition-all z-10"
                  aria-label="Next Angle"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Active Angle Description */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-stone-900">
                    {PROTOTYPE_IMAGES[activeImageIndex].title}
                  </h3>
                  <p className="text-xs text-stone-500 font-light mt-0.5">
                    {PROTOTYPE_IMAGES[activeImageIndex].subtitle}
                  </p>
                </div>

                <div className="text-[10px] sm:text-[11px] font-bold text-stone-400 uppercase tracking-widest shrink-0">
                  Angle 0{activeImageIndex + 1} of 04
                </div>
              </div>

              {/* Thumbnail Switcher Matrix */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-stone-100">
                {PROTOTYPE_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#fbfaf9] min-h-[44px] min-w-[44px] ${
                      activeImageIndex === idx
                        ? "border-[#d08c81] shadow-md scale-105 ring-2 ring-[#d08c81]/25"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View ${img.caption}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      className="object-contain p-0.5 sm:p-1"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Profile & Acquisition Panel (Right Column) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#d08c81]">
                  <Sparkles className="w-4 h-4" />
                  <span>The Singular Formulation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight leading-snug">
                  The Fluidity of Water. The Nourishment of Cream.
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  Specifically engineered for daily elegance. Beauty Lotion absorbs seamlessly upon contact, leaving a velvet, weightless touch that lasts all day.
                </p>
              </div>

              {/* Refined Specifications */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-400 block">pH Level</span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">5.5 (Skin-Neutral)</span>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-400 block">Volume</span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">150 ml / 5.1 fl. oz</span>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-400 block">Formula</span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">100% Fragrance-Free</span>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-400 block">Standard</span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">100% Vegan Certified</span>
                </div>
              </div>

              {/* Acquisition Box */}
              <div className="bg-[#f5f2f0] p-5 sm:p-6 rounded-2xl border border-stone-200/80 space-y-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-stone-500 block uppercase tracking-wider">Official Offering</span>
                    <span className="text-2xl sm:text-3xl font-bold text-stone-900">Rp 349.000</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-emerald-800 font-semibold bg-emerald-100/70 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-300">
                    Allocated Batch • Ready for Dispatch
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="flex-1 bg-[#1c1a19] hover:bg-[#d08c81] hover:text-stone-950 text-white font-semibold py-3.5 sm:py-4 px-5 sm:px-6 rounded-full text-xs tracking-[0.18em] uppercase text-center transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#d08c81]" />
                    <span>Acquire via Concierge</span>
                  </button>
                  <button
                    onClick={handleDirectInquiryClick}
                    className="bg-white hover:bg-stone-100 text-stone-800 font-medium py-3.5 sm:py-4 px-5 sm:px-6 rounded-full text-xs tracking-wider uppercase text-center transition-all border border-stone-300 cursor-pointer"
                  >
                    Direct Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. SENSORY IN MOTION (FEATURING THE 2 NEW USER VIDEOS) ----------------- */}
      <section id="sensory" className="py-16 sm:py-20 md:py-24 bg-[#141312] text-white relative overflow-hidden border-y border-white/10">
        {/* Soft Ambient Blur */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d08c81]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Formula In Motion
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              The Sensory Experience
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              Experience the micro-emulsion texture and fluid application in motion.
            </p>
          </div>

          {/* Dual Editorial Video Cards (Replacing Heavy Text with Visual Aesthetics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
            {/* Video Card 1: video body 2.mp4 (Formulation & Cream Texture) */}
            <div className="bg-white/5 rounded-3xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between group hover:border-[#d08c81]/40 transition-all">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/80 shadow-2xl">
                <video
                  ref={video2Ref}
                  src="/assets/video%20body%202.mp4"
                  autoPlay
                  muted={isVideo2Muted}
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/20 text-[#e8c5c1] text-[9px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                  Formulation Nuance • 01
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={toggleVideo2Play}
                    className="p-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                    aria-label={isVideo2Playing ? "Pause Video 1" : "Play Video 1"}
                  >
                    {isVideo2Playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={toggleVideo2Mute}
                    className="p-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                    aria-label={isVideo2Muted ? "Unmute Video 1" : "Mute Video 1"}
                  >
                    {isVideo2Muted ? <VolumeX className="w-3.5 h-3.5 text-[#d08c81]" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                </div>
              </div>

              {/* Minimal Caption */}
              <div className="pt-4 sm:pt-5 space-y-1">
                <h3 className="text-base sm:text-lg font-medium text-white">Whipped Micro-Emulsion Texture</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Engineered to deliver intense lipid replenishment with a velvety, breathable finish that never feels heavy.
                </p>
              </div>
            </div>

            {/* Video Card 2: video body 3.mp4 (Skin Contact & Application) */}
            <div className="bg-white/5 rounded-3xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between group hover:border-[#d08c81]/40 transition-all">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/80 shadow-2xl">
                <video
                  ref={video3Ref}
                  src="/assets/video%20body%203.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/20 text-[#e8c5c1] text-[9px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                  Skin Application • 02
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={toggleVideo3Play}
                    className="p-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                    aria-label={isVideo3Playing ? "Pause Video 2" : "Play Video 2"}
                  >
                    {isVideo3Playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Minimal Caption */}
              <div className="pt-4 sm:pt-5 space-y-1">
                <h3 className="text-base sm:text-lg font-medium text-white">Instant Melting Assimilation</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Glides smoothly across the skin surface, absorbing within seconds into an understated, dewy glow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 5. CLINICAL EFFICACY & FUNCTIONAL LINKS ----------------- */}
      <section id="efficacy" className="py-16 sm:py-20 md:py-24 bg-[#f3efea] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Clinical Performance
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900">
              Designed for Daily Balance
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Every benefit is backed by skin-neutral biocompatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <button
                  key={i}
                  onClick={(e) => scrollToSection(e, b.target)}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md hover:border-[#d08c81]/60 transition-all flex flex-col justify-between group text-left cursor-pointer"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f5f2f0] text-stone-900 group-hover:bg-[#d08c81]/15 group-hover:text-[#d08c81] flex items-center justify-center mb-4 sm:mb-5 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-stone-900 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed mt-2 sm:mt-2.5">
                      {b.desc}
                    </p>
                  </div>
                  <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#d08c81] group-hover:translate-x-0.5 transition-transform">
                    <span>{b.tag}</span>
                    <span className="text-stone-400 group-hover:text-[#d08c81] transition-colors">→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- 6. ACTIVE ACTIVES ARCHITECTURE (SCIENCE) ----------------- */}
      <section id="science" className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
            Clean Formulation
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900">
            Active Ingredient Architecture
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            Four biocompatible bio-actives selected for maximum cutaneous compatibility.
          </p>
        </div>

        {/* 2x2 Ingredient Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {INGREDIENTS.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:border-[#d08c81]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2 sm:space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#d08c81]">
                    {item.role}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-stone-900">{item.name}</h3>
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium block -mt-1">
                  Chemical Category: {item.type}
                </span>
                <p className="text-xs text-stone-600 font-light leading-relaxed pt-1.5 sm:pt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 sm:mt-6 border-t border-stone-100 flex items-center text-[10px] sm:text-[11px] text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d08c81] mr-1.5 shrink-0" />
                <span>Clinically Evaluated on Sensitive Skin</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra-Clean Standard Banners */}
        <div className="mt-10 sm:mt-12 bg-[#1c1a19] text-[#f5f2f0] rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:flex md:flex-row items-center justify-around gap-6 text-center">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-white">0% Parabens</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-widest mt-0.5">Zero Preservatives</div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-xs sm:text-sm font-semibold text-white">0% Fragrance</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-widest mt-0.5">Non-Irritating</div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-xs sm:text-sm font-semibold text-white">100% Vegan</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-widest mt-0.5">Cruelty-Free Certified</div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-xs sm:text-sm font-semibold text-white">Dermatologist Tested</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-widest mt-0.5">Hypoallergenic Certified</div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. THE DAILY THREE-STEP RITUAL ----------------- */}
      <section className="py-16 sm:py-20 bg-[#f7f5f3] border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 sm:space-y-12">
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
              The Daily Ritual
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-stone-900">
              Three Simple Steps to Balanced Skin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm mx-auto">
                01
              </span>
              <h3 className="text-base font-medium text-stone-900">Purify</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Cleanse face with lukewarm water and a gentle wash. Pat dry with a clean linen cloth.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center font-bold text-xs sm:text-sm mx-auto">
                02
              </span>
              <h3 className="text-base font-medium text-stone-900">Dispense</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Dispense one to two pumps of Beauty Lotion into clean, warmed palms.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm mx-auto">
                03
              </span>
              <h3 className="text-base font-medium text-stone-900">Press & Absorb</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Gently press across face, neck, and throat until the micro-emulsion fully absorbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 8. PRIVATE CLIENT CONCIERGE & ACQUISITIONS ----------------- */}
      <section id="concierge" className="py-16 sm:py-20 md:py-24 bg-[#141312] text-white relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#d08c81]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            {/* VIP Concierge Information (Left 6 Columns) */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-2.5 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
                  Private Client Concierge
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
                  Bespoke Advisory & <br />
                  <span className="font-serif italic font-normal text-[#e8c5c1]">Direct Orders</span>
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                  For personalized skin consultations, batch allocation orders, or express shipping, our private client advisors remain at your service.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3.5 sm:space-y-4">
                {/* Priority WhatsApp Channel */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 sm:p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-emerald-400 font-semibold block">
                        PRIORITY ADVISORY WHATSAPP
                      </span>
                      <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-[#d08c81] transition-colors truncate">
                        +62 812-3456-7890
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-400 font-light truncate">
                        Direct conversation for tailored consultations
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400 group-hover:text-white transition-colors shrink-0 ml-2" />
                </a>

                {/* Official Concierge Email */}
                <a
                  href="mailto:concierge@beautylotion.com?subject=Inquiry%20Beauty%20Lotion"
                  className="flex items-center justify-between p-4 sm:p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d08c81]/20 text-[#d08c81] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#d08c81] font-semibold block">
                        DEDICATED CLIENT DESK
                      </span>
                      <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-[#d08c81] transition-colors truncate">
                        concierge@beautylotion.com
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-400 font-light truncate">
                        Orders, press inquiries, and international dispatch
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400 group-hover:text-white transition-colors shrink-0 ml-2" />
                </a>

                {/* Concierge Hours */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 bg-white/5 rounded-xl border border-white/10 text-[11px] sm:text-xs text-stone-400">
                  <Clock className="w-4 h-4 text-[#d08c81] shrink-0" />
                  <span>Advisory Hours: Monday – Saturday (08:00 – 20:00). Express Global Dispatch.</span>
                </div>
              </div>
            </div>

            {/* Private Inquiry Form (Right 6 Columns) */}
            <div className="lg:col-span-6 bg-stone-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/15 shadow-2xl">
              <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-medium text-white">Transmit an Inquiry</h3>
                <p className="text-xs text-stone-400 font-light">
                  Complete the confidential form below. An advisor will attend to your request promptly.
                </p>
              </div>

              {inquirySent ? (
                <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-2xl p-6 sm:p-8 text-center space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-white">Transmission Received</h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Thank you. A dedicated Beauty Lotion client advisor will review your message and contact you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setClientName("");
                      setClientContact("");
                      setClientMessage("");
                    }}
                    className="text-xs text-[#d08c81] underline uppercase tracking-wider font-semibold pt-2 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConciergeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Client Full Name *
                    </label>
                    <input
                      ref={contactInputRef}
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      WhatsApp or Email Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+62 812-3456-7890 or eleanor@domain.com"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Cutaneous Profile or Order Request
                    </label>
                    <textarea
                      ref={messageInputRef}
                      rows={3}
                      placeholder="Please note your skin type, specific sensitivities, or order allocation inquiries..."
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold py-3.5 sm:py-4 rounded-xl text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all shadow-lg flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit to Advisory Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Understated Luxury Editorial Footer */}
          <div className="pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-stone-500 font-light gap-4 text-center sm:text-left">
            <div>
              © 2026 BEAUTY LOTION. All rights reserved. Advanced Cellular Science.
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 text-[10px] sm:text-[11px] tracking-wider uppercase text-stone-400">
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
                Editorial Journal
              </button>
              <span>•</span>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy & Standards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LUXURY MODALS (ELEVATING UX & FUNCTIONALITY)
          ========================================================================= */}

      {/* 1. Quick Acquisition & Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1c1a19] text-white w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all"
              aria-label="Close Acquisition Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
                Direct Allocation Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white">Acquire Beauty Lotion</h3>
              <p className="text-xs text-stone-400 font-light">
                150ml Flacon • Complimentary Express Worldwide Dispatch
              </p>
            </div>

            {/* Product Summary Row */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-xl bg-white/10 overflow-hidden shrink-0 border border-white/15">
                  <Image
                    src="/assets/prototype%20produk%20lotion.jpg"
                    alt="Beauty Lotion"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Beauty Lotion</h4>
                  <span className="text-xs text-[#d08c81] font-semibold">
                    Rp {UNIT_PRICE.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center gap-2 bg-black/40 rounded-full p-1 border border-white/15">
                <button
                  onClick={() => setOrderQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs font-semibold">{orderQuantity}</span>
                <button
                  onClick={() => setOrderQuantity((q) => Math.min(10, q + 1))}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Price Calculation Details */}
            <div className="space-y-2 text-xs border-y border-white/10 py-3 text-stone-300">
              <div className="flex justify-between">
                <span>Subtotal ({orderQuantity} unit{orderQuantity > 1 ? "s" : ""})</span>
                <span className="font-semibold text-white">
                  Rp {(orderQuantity * UNIT_PRICE).toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Express Insured Shipping</span>
                <span className="text-emerald-400 font-semibold uppercase text-[11px]">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-semibold pt-2 text-white border-t border-white/10">
                <span>Total Offering</span>
                <span className="text-[#d08c81] font-bold text-base">
                  Rp {(orderQuantity * UNIT_PRICE).toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="space-y-3 pt-1">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOrderModalOpen(false)}
                className="w-full bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold py-3.5 rounded-full text-xs tracking-[0.2em] uppercase transition-all shadow-lg flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm via Priority WhatsApp</span>
              </a>

              <button
                onClick={(e) => {
                  setIsOrderModalOpen(false);
                  handleDirectInquiryClick(e);
                }}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-full text-xs tracking-wider uppercase transition-all border border-white/15 text-center cursor-pointer"
              >
                Prefer Email Concierge Form
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Editorial Journal Modal */}
      {isJournalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1c1a19] text-white w-full max-w-2xl rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setIsJournalModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
              aria-label="Close Journal Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
                Editorial Journal • Volume 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white font-serif">
                The Skin Fitness Paradigm
              </h3>
              <p className="text-xs text-stone-400 font-light">
                Why modern dermatological science is moving past passive hydration.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-white/10 pt-4">
              <p>
                For decades, commercial skincare treated hydration as an ephemeral coat of surface water. Once the emulsion evaporated, the skin returned to its baseline state of fatigue, vulnerable to climate fluctuations and oxidative stress.
              </p>
              <p>
                <strong>Beauty Lotion</strong> was conceived around a radically different thesis: <em>Skin Fitness</em>. Rather than merely supplying moisture, we formulate bio-identical lipid structures (Ceramides NP, AP, EOP) and bio-fermented botanical complexes that reinforce intercellular adhesion.
              </p>
              <p>
                The outcome is an intelligent barrier that trains itself to retain vital hydration, calm inflammatory spikes, and remain luminous from within.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsJournalModalOpen(false)}
                className="bg-[#d08c81] text-stone-950 font-semibold px-6 py-2.5 rounded-full text-xs tracking-wider uppercase cursor-pointer"
              >
                Close Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Privacy & Standards Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1c1a19] text-white w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative space-y-5">
            <button
              onClick={() => setIsPrivacyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
              aria-label="Close Privacy Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
                Ethical Formulation & Privacy
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white">Our Commitments</h3>
            </div>

            <div className="space-y-3 text-xs text-stone-300 font-light leading-relaxed border-t border-white/10 pt-4">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
                <span><strong>Data Confidentiality:</strong> Your concierge contact details and skin consultation logs are never traded, sold, or shared with third parties.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
                <span><strong>100% Vegan & Cruelty-Free:</strong> Neither the raw ingredients nor the final Beauty Lotion formulation are ever tested on animals.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
                <span><strong>Sustainable Packaging:</strong> UV-protective flacon manufactured with recyclable components to preserve formula efficacy and reduce footprint.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 rounded-full text-xs tracking-wider uppercase border border-white/15 cursor-pointer"
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
