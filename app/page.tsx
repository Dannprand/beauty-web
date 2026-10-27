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
} from "lucide-react";

// Prototype images provided by user
const PROTOTYPE_IMAGES = [
  {
    id: "angle-1",
    src: "/assets/prototype%20produk%20lotion.jpg",
    title: "Architectural Vessel",
    subtitle: "Minimalist UV-protective bottle with a tactile matte-stone finish.",
    caption: "Front View",
  },
  {
    id: "angle-2",
    src: "/assets/prototype%20produk%20lotion%202.jpg",
    title: "Precision Dispenser",
    subtitle: "Airless micro-pump engineered to preserve formula potency and purity.",
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
    subtitle: "An understated tactile form designed to elevate your daily routine.",
    caption: "Vanity Display",
  },
];

// Key Ingredients & Scientific Profile
const INGREDIENTS = [
  {
    name: "Bio-Identical Ceramide Complex",
    type: "Ceramides NP, AP, EOP",
    role: "Lipid Matrix Reconstruction",
    description:
      "Identical to natural skin lipids, this complex fuses with intercellular layers to seal micro-cracks and restore barrier strength.",
  },
  {
    name: "Multi-Molecular Hyaluronic Acid",
    type: "5 Tiered Molecular Weights",
    role: "Cross-Layer Hydration",
    description:
      "Low-weight fractions penetrate deep into dermal layers, while high-weight polymers create a breathable protective moisture shield.",
  },
  {
    name: "Bio-Fermented Camellia & Rice",
    type: "Cultured Botanical Extracts",
    role: "Cellular Antioxidant Defense",
    description:
      "Fermentation unlocks high-potency polyphenols and amino acids to combat daily oxidative stress and restore natural luminosity.",
  },
  {
    name: "Centella Asiatica & Niacinamide 2%",
    type: "Micro-Circulatory Calming Complex",
    role: "Soothing & Tone Refinement",
    description:
      "Soothes reactive skin, reduces redness, and smooths epidermal texture into an even, balanced canvas.",
  },
];

// 4 Core Clinical Benefits
const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Barrier Fortification",
    desc: "Rebuilds the outer lipid matrix to shield against pollution, harsh climates, and environmental irritation.",
    highlight: "+98% Barrier Resilience",
  },
  {
    icon: Droplets,
    title: "24-Hour Hydration Lock",
    desc: "Absorbs in seconds to provide lasting internal hydration without surface heaviness or grease.",
    highlight: "Zero Surface Residue",
  },
  {
    icon: Leaf,
    title: "Calming & Redness Relief",
    desc: "Quickly eases skin tension and reactive redness, returning stressed skin to balanced comfort.",
    highlight: "Hypoallergenic Tested",
  },
  {
    icon: Sparkles,
    title: "Natural Healthy Radiance",
    desc: "Refines light reflection across the skin for a fresh, supple, and naturally luminous glow.",
    highlight: "Healthy Dewy Glow",
  },
];

export default function LuxuryResponsiveLanding() {
  // Gallery active index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Video mute state
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Mobile navigation drawer toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Private Concierge form state
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  // Toggle video mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Switch image by next/previous
  const nextAngle = () => {
    setActiveImageIndex((prev) => (prev + 1) % PROTOTYPE_IMAGES.length);
  };

  const prevAngle = () => {
    setActiveImageIndex((prev) => (prev - 1 + PROTOTYPE_IMAGES.length) % PROTOTYPE_IMAGES.length);
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
    "Hello Beauty In Stem Concierge, I would like to inquire about the Hydra-Restore Bio-Lotion."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="relative min-h-screen bg-[#fbfaf9] text-[#1c1a19] antialiased selection:bg-[#d08c81]/30 selection:text-[#1c1a19]">
      {/* ----------------- TOP TICKER / DISPATCH BAR ----------------- */}
      <div className="bg-[#141312] text-[#e8c5c1] text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase py-2 sm:py-2.5 px-3 sm:px-4 text-center font-medium border-b border-white/5 flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d08c81] animate-ping shrink-0" />
        <span className="truncate">ADVANCED CELLULAR SCIENCE • COMPLIMENTARY EXPRESS DISPATCH</span>
      </div>

      {/* ----------------- RESPONSIVE LUXURY HEADER ----------------- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#141312]/90 text-[#f5f2f0] border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex flex-col cursor-pointer select-none group">
            <span className="text-base sm:text-xl md:text-2xl font-light tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white font-sans group-hover:text-[#e8c5c1] transition-colors">
              BEAUTY IN STEM
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.35em] sm:tracking-[0.45em] uppercase text-[#d08c81] font-medium -mt-0.5 sm:-mt-1">
              Hydra-Restore Bio-Lotion
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-9 text-[11px] tracking-[0.25em] uppercase font-medium text-stone-300">
            <a href="#philosophy" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              Philosophy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#vessel" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              The Vessel
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#efficacy" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              Efficacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#science" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              Science
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#concierge" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              Concierge
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Action / Mobile Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="#concierge"
              className="hidden sm:flex items-center gap-1.5 sm:gap-2 bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Private Concierge</span>
            </a>

            {/* Quick Mobile WhatsApp Icon Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#d08c81] border border-white/15"
              aria-label="Direct WhatsApp"
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

        {/* Mobile Navigation Drawer / Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#141312]/98 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3 text-xs tracking-[0.25em] uppercase font-medium">
              <a
                href="#philosophy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                Philosophy
              </a>
              <a
                href="#vessel"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                The Vessel (Gallery)
              </a>
              <a
                href="#efficacy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                Efficacy & Benefits
              </a>
              <a
                href="#science"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-stone-200 hover:text-[#d08c81] border-b border-white/5 transition-colors"
              >
                Key Ingredients
              </a>
              <a
                href="#concierge"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-[#d08c81] font-semibold transition-colors flex items-center justify-between"
              >
                <span>Private Concierge Desk</span>
                <span className="text-stone-400">→</span>
              </a>
            </nav>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#d08c81] text-stone-950 font-semibold text-xs tracking-wider uppercase py-3 rounded-full shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
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
            ref={videoRef}
            src="/assets/video%20body.mp4"
            autoPlay
            muted={isMuted}
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
              Biomimetic Science • Skin Fitness Formula
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05]">
              Engineered for <br />
              <span className="font-serif italic font-normal text-[#f3efe9]">Ultimate Skin</span> Fitness
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xl">
              Introducing <strong>Hydra-Restore Bio-Lotion</strong>. A cellular micro-emulsion engineered to strengthen skin barrier resilience and deliver lasting, weightless hydration.
            </p>

            {/* Responsive Hero Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#vessel"
                className="bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all shadow-xl text-center hover:scale-105"
              >
                Discover The Vessel
              </a>
              <a
                href="#philosophy"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all text-center"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          {/* Bottom Cue Indicator */}
          <div className="pt-8 sm:pt-10 flex justify-between items-end border-t border-white/15 mt-8 sm:mt-10 text-stone-400 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            <span className="hidden sm:inline">ADVANCED DERMATOLOGICAL RESEARCH</span>
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <span>EXPLORE BELOW</span>
              <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
                <div className="w-1.5 h-1.5 bg-[#d08c81] rounded-full animate-bounce" />
              </div>
            </div>
            <span className="hidden md:inline">SINGLE MASTERPIECE EDITION</span>
          </div>
        </div>

        {/* Video Audio Control Floating Pill */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs tracking-wider transition-all shadow-lg"
          aria-label={isMuted ? "Unmute Ambient Sound" : "Mute Sound"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81]" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />}
          <span className="uppercase text-[9px] sm:text-[10px]">{isMuted ? "Unmute Audio" : "Sound Playing"}</span>
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
              Our products are designed as <br />
              <span className="font-serif italic font-normal text-[#e8c5c1]">Skin Fitness Tools</span>
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Skin is an adaptive living system. Instead of fleeting moisture, we engineer cellular formulas that train your skin to stay balanced, resilient, and clear.
            </p>
          </div>

          {/* Three Pillars Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Pillar 01 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-xs sm:text-sm font-bold text-[#d08c81]">
                    01
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-stone-400">PILLAR OF RESILIENCE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-2 sm:mb-3">
                  SUPPORTING
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  Reinforces the outer barrier against pollution, dry climates, and daily oxidative stress.
                </p>
              </div>
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81] shrink-0" />
                <span>Cutaneous Barrier Defense</span>
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
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#e8c5c1]">ACTIVE RECOVERY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-2 sm:mb-3">
                  RECOVER
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  Accelerates cellular recovery with bio-identical ceramides, restoring natural density and smooth texture.
                </p>
              </div>
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81] shrink-0" />
                <span>Rapid Skin Rejuvenation</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-xs sm:text-sm font-bold text-[#d08c81]">
                    03
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-stone-400">SUSTAINED LONGEVITY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-2 sm:mb-3">
                  MAINTAIN
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  Maintains a 24-hour hydration lock while preserving natural elasticity and barrier comfort.
                </p>
              </div>
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d08c81] shrink-0" />
                <span>All-Day Moisture Lock</span>
              </div>
            </div>
          </div>

          {/* Clinical Efficacy Statistics (Responsive Grid) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center border-t border-white/10 pt-8 sm:pt-10">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-serif">+98%</div>
              <div className="text-[10px] sm:text-[11px] text-stone-400 tracking-wider uppercase mt-1">Barrier Fortification</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">24H</div>
              <div className="text-[10px] sm:text-[11px] text-stone-400 tracking-wider uppercase mt-1">Moisture Retention</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-serif">-89%</div>
              <div className="text-[10px] sm:text-[11px] text-stone-400 tracking-wider uppercase mt-1">Water Loss (TEWL)</div>
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
              The Hydra-Restore Vessel
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light leading-relaxed">
              Formulated in absolute harmony with natural skin biology.
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

              {/* Thumbnail Switcher Matrix (Optimized Touch Targets) */}
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
                  <span>Proprietary Micro-Emulsion</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight leading-snug">
                  The Fluidity of Water. The Nourishment of Cream.
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  A fast-absorbing micro-emulsion that melts into the skin in seconds, delivering deep nourishment with a weightless, velvet finish.
                </p>
              </div>

              {/* Refined Specifications (Responsive Grid) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-400 block">pH Level</span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">5.5 (Skin-Neutral)</span>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-stone-200">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-400 block">Skin Type</span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">All Skin Types</span>
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
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#1c1a19] hover:bg-[#d08c81] hover:text-stone-950 text-white font-semibold py-3.5 sm:py-4 px-5 sm:px-6 rounded-full text-xs tracking-[0.18em] uppercase text-center transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#d08c81]" />
                    <span>Acquire via Concierge</span>
                  </a>
                  <a
                    href="#concierge"
                    className="bg-white hover:bg-stone-100 text-stone-800 font-medium py-3.5 sm:py-4 px-5 sm:px-6 rounded-full text-xs tracking-wider uppercase text-center transition-all border border-stone-300"
                  >
                    Direct Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. EFFICACY & CLINICAL BENEFITS ----------------- */}
      <section id="efficacy" className="py-16 sm:py-20 md:py-24 bg-[#f3efea] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Clinical Performance
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900">
              Engineered for Proven Results
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Formulated without compromise. Validated through clinical evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md hover:border-[#d08c81]/40 transition-all flex flex-col justify-between group"
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
                  <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#d08c81]">
                    <span>{b.highlight}</span>
                    <span className="text-stone-300">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- 5. KEY INGREDIENTS & SCIENTIFIC PROFILE ----------------- */}
      <section id="science" className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
            Clean Formulation
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900">
            Active Ingredient Architecture
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            Four biocompatible actives selected for maximum cutaneous compatibility.
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

      {/* ----------------- 6. THE DAILY THREE-STEP RITUAL ----------------- */}
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
                Cleanse face with lukewarm water and a gentle wash. Pat dry with a clean towel.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center font-bold text-xs sm:text-sm mx-auto">
                02
              </span>
              <h3 className="text-base font-medium text-stone-900">Dispense</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Dispense one to two measured pumps into the palms of your clean hands.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm mx-auto">
                03
              </span>
              <h3 className="text-base font-medium text-stone-900">Press & Absorb</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Gently press across face and neck until the micro-emulsion fully absorbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. PRIVATE CLIENT CONCIERGE & ACQUISITIONS (FOOT OF PAGE) ----------------- */}
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
                  For personalized consultations or direct allocation orders, our client advisors are ready to assist you.
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
                  href="mailto:concierge@stembeauty.com?subject=Inquiry%20Hydra-Restore%20Bio-Lotion"
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
                        concierge@stembeauty.com
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
                  Complete the form below. An advisor will attend to your request promptly.
                </p>
              </div>

              {inquirySent ? (
                <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-2xl p-6 sm:p-8 text-center space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-white">Transmission Received</h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Thank you. A dedicated client advisor will review your message and contact you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setClientName("");
                      setClientContact("");
                      setClientMessage("");
                    }}
                    className="text-xs text-[#d08c81] underline uppercase tracking-wider font-semibold pt-2"
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
                      Skin Concerns or Order Allocation
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please note your skin type, specific sensitivities, or order requests..."
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold py-3.5 sm:py-4 rounded-xl text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
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
              © 2026 BEAUTY IN STEM. All rights reserved. Advanced Cellular Science.
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 text-[10px] sm:text-[11px] tracking-wider uppercase text-stone-400">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Editorial Journal</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
