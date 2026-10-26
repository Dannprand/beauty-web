"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Droplets,
  Sparkles,
  Leaf,
  CheckCircle2,
  Mail,
  MessageCircle,
  Volume2,
  VolumeX,
  Clock,
  Send,
  ExternalLink,
  Compass,
  Award,
} from "lucide-react";

// Prototype images provided by user
const PROTOTYPE_IMAGES = [
  {
    id: "angle-1",
    src: "/assets/prototype%20produk%20lotion.jpg",
    title: "Signature Architectural Vessel",
    subtitle: "Minimalist UV-protective flacon finished with a tactile, matte-stone ceramic feel",
    caption: "Studio Front View",
  },
  {
    id: "angle-2",
    src: "/assets/prototype%20produk%20lotion%202.jpg",
    title: "Hermetic Precision Dispenser",
    subtitle: "Airless micro-dosing pump engineered to preserve active ingredient potency and hygienic purity",
    caption: "Precision Pump Mechanism",
  },
  {
    id: "angle-3",
    src: "/assets/prototype%20produk%20lotion%203.jpg",
    title: "Weightless Micro-Emulsion Texture",
    subtitle: "Featherlight lipid sphere matrix that dissolves seamlessly into the stratum corneum with zero residue",
    caption: "Formulation & Texture Nuance",
  },
  {
    id: "angle-4",
    src: "/assets/prototype%20produk%20lotion%204.jpg",
    title: "The Curated Vanity Ritual",
    subtitle: "An understated tactile sculpture designed to elevate your contemplative daily skincare regimen",
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
      "A physiologically identical lipid triad engineered to seamlessly fuse with intercellular spaces, sealing microscopic barrier fractures caused by environmental stressors.",
  },
  {
    name: "Multi-Molecular Hyaluronic Vector",
    type: "5 Tiered Molecular Weights",
    role: "Cross-Stratum Hydration",
    description:
      "Micro-oligo fractions penetrate deeply into dermal reservoirs to stimulate turgor pressure, while high-weight polymers establish a breathable moisture veil at the surface.",
  },
  {
    name: "Korean Bio-Fermented Camellia & Rice",
    type: "Cultured Botanical Bio-Extracts",
    role: "Cellular Antioxidant Defense",
    description:
      "Bio-fermentation unlocks high-potency polyphenols and amino metabolites, dramatically accelerating cellular repair kinetics and shielding against daily oxidative decay.",
  },
  {
    name: "Centella Asiatica & Niacinamide 2%",
    type: "Micro-Circulatory Calming Complex",
    role: "Erythema Mitigation & Tone Refinement",
    description:
      "Downregulates inflammatory cytokine cascades, visibly placating sensitized skin and refining epidermal pore architecture into a smooth, luminous canvas.",
  },
];

// 4 Core Clinical Benefits
const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Cutaneous Barrier Fortification",
    desc: "Re-architects the stratum corneum with biomimetic lipids, protecting sensitive skin against micro-particulate pollution, arid climates, and oxidative stress.",
    highlight: "+98% Barrier Resilience",
  },
  {
    icon: Droplets,
    title: "24-Hour Sustained Hydration Lock",
    desc: "Engineered with proprietary micro-emulsion dynamics that absorb in seconds, delivering intense hydration without a trace of greasy occlusiveness.",
    highlight: "Zero Surface Residue",
  },
  {
    icon: Leaf,
    title: "Cellular Calming & Redness Relief",
    desc: "Rapidly attenuates cutaneous discomfort and reactive redness, bringing fragile, stressed skin back to a calm, equilibrated state.",
    highlight: "Hypoallergenic Certified",
  },
  {
    icon: Sparkles,
    title: "Lit-From-Within Natural Radiance",
    desc: "Restores optimal light refraction across the skin surface, imparting a supple, healthy, and youthful radiance that feels organic and alive.",
    highlight: "Clinical Dewy Finish",
  },
];

export default function LuxurySingleProductLanding() {
  // Gallery active index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Video mute state
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Private Concierge form state
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  // Toggle video audio
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
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
    "Hello Beauty In Stem Concierge, I would like to inquire about the Hydra-Restore Bio-Lotion and personalized consultation."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="relative min-h-screen bg-[#fbfaf9] text-[#1c1a19] antialiased selection:bg-[#d08c81]/30 selection:text-[#1c1a19]">
      {/* ----------------- TOP TICKER / DISPATCH BAR ----------------- */}
      <div className="bg-[#141312] text-[#e8c5c1] text-[10px] md:text-[11px] tracking-[0.25em] uppercase py-2.5 px-4 text-center font-medium border-b border-white/5 flex items-center justify-center gap-2.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d08c81] animate-ping" />
        <span>KOREAN ADVANCED CELLULAR SCIENCE • COMPLIMENTARY EXPRESS CONCIERGE DISPATCH</span>
      </div>

      {/* ----------------- MINIMALIST LUXURY HEADER ----------------- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#141312]/85 text-[#f5f2f0] border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex flex-col cursor-pointer select-none group">
            <span className="text-lg md:text-2xl font-light tracking-[0.35em] uppercase text-white font-sans group-hover:text-[#e8c5c1] transition-colors">
              BEAUTY IN STEM
            </span>
            <span className="text-[9px] tracking-[0.45em] uppercase text-[#d08c81] font-medium -mt-1">
              Hydra-Restore Bio-Lotion
            </span>
          </a>

          {/* Editorial Nav Links */}
          <nav className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] uppercase font-medium text-stone-300">
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

          {/* Concierge CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="#concierge"
              className="flex items-center gap-2 bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Private Concierge</span>
            </a>
          </div>
        </div>
      </header>

      {/* ----------------- 1. HERO SECTION (CINEMATIC VIDEO & EDITORIAL HEADLINE) ----------------- */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-14 md:pb-20 overflow-hidden bg-stone-950">
        {/* Fullscreen Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/assets/video%20body.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.72] contrast-[1.08]"
          />
          {/* Subtle Multi-gradient overlay for editorial contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/35 to-black/55" />
        </div>

        {/* Audio Mute/Unmute Control */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={toggleSound}
            className="flex items-center space-x-2 bg-stone-950/75 backdrop-blur-md hover:bg-stone-900 px-4 py-2 rounded-full border border-white/15 text-stone-200 text-[10px] tracking-widest uppercase transition-all shadow-xl"
            aria-label="Toggle Hero Video Sound"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span>Audio Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#d08c81]" />
                <span className="text-[#e8c5c1]">Audio Active</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Narrative */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e8c5c1] text-[10px] font-medium tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d08c81]" />
              Formulated in Seoul • Engineered for Skin Fitness
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.03]">
              Engineered for <br />
              <span className="font-serif italic font-normal text-[#f3efe9]">Ultimate Skin</span> Fitness
            </h1>

            <p className="text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Introducing <strong>Hydra-Restore Bio-Lotion</strong>. A pioneering cellular micro-emulsion conceived not merely to hydrate, but to systematically condition cutaneous barrier resilience against oxidative fatigue.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#vessel"
                className="bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase transition-all shadow-xl hover:scale-105"
              >
                Discover The Vessel
              </a>
              <a
                href="#philosophy"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase transition-all"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          {/* Bottom Metagrid Cue */}
          <div className="pt-10 flex justify-between items-end border-t border-white/15 mt-10 text-stone-400 text-[10px] tracking-[0.25em] uppercase">
            <span>COLLABORATIVE SEOUL DERMATOLOGICAL RESEARCH</span>
            <div className="flex items-center gap-2.5">
              <span>EXPLORE BELOW</span>
              <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
                <div className="w-1.5 h-1.5 bg-[#d08c81] rounded-full animate-bounce" />
              </div>
            </div>
            <span className="hidden sm:inline">SINGLE MASTERPIECE EDITION</span>
          </div>
        </div>
      </section>

      {/* ----------------- 2. PHILOSOPHY SECTION (THE THREE BIOLOGICAL PILLARS) ----------------- */}
      <section id="philosophy" className="py-24 bg-[#181615] text-[#f5f2f0] relative overflow-hidden">
        {/* Ambient Warm Radial Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#d08c81]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d08c81] font-semibold">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
              Our products are designed as <br />
              <span className="font-serif italic font-normal text-[#e8c5c1]">Skin Fitness Tools</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed">
              Human skin is an inherently adaptive, intelligent biological system. Rather than providing passive, fleeting moisture, we engineer cellular tools that train the cutaneous architecture to withstand, repair, and maintain its peak performance over time.
            </p>
          </div>

          {/* The Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Pillar 01 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-sm font-bold text-[#d08c81]">
                    01
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">PILLAR OF RESILIENCE</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  SUPPORTING
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Reinforcing the biological threshold of the skin mantle to withstand urban particulate matter, seasonal shifts, and free radical cascades without barrier destabilization.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-4 h-4 text-[#d08c81]" />
                <span>Stratum Corneum Architecture Defense</span>
              </div>
            </div>

            {/* Pillar 02 (Center Highlight) */}
            <div className="bg-gradient-to-b from-[#252220] to-[#1c1a19] rounded-2xl p-8 border border-[#d08c81]/50 shadow-2xl flex flex-col justify-between relative group scale-100 md:scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d08c81] text-stone-950 text-[10px] tracking-[0.25em] uppercase font-bold px-4 py-1 rounded-full shadow-md">
                KOREAN BIO-FERMENTATION
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center text-sm font-bold shadow-lg">
                    02
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#e8c5c1]">ACTIVE RECONSTRUCTION</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  RECOVER
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Accelerating cellular recovery kinetics through bio-identical ceramides and fermented botanical bio-actives, re-establishing tissue density and silk-like equilibrium.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-4 h-4 text-[#d08c81]" />
                <span>Accelerated Cutaneous Rejuvenation</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-sm font-bold text-[#d08c81]">
                    03
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">SUSTAINED LONGEVITY</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  MAINTAIN
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Sustaining an uninterrupted 24-hour hydration lock while preserving tensile elasticity, preventing moisture attrition and signs of premature environmental aging.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <CheckCircle2 className="w-4 h-4 text-[#d08c81]" />
                <span>Long-Term Elastic Turgor Preservation</span>
              </div>
            </div>
          </div>

          {/* Clinical Efficacy Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-white/10 pt-10">
            <div>
              <div className="text-4xl md:text-5xl font-light text-white font-serif">+98%</div>
              <div className="text-[11px] text-stone-400 tracking-wider uppercase mt-1">Barrier Fortification Index</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">24H</div>
              <div className="text-[11px] text-stone-400 tracking-wider uppercase mt-1">Continuous Moisture Retention</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-white font-serif">-89%</div>
              <div className="text-[11px] text-stone-400 tracking-wider uppercase mt-1">Transepidermal Water Loss</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">100%</div>
              <div className="text-[11px] text-stone-400 tracking-wider uppercase mt-1">Certified for Sensitive Skin</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. THE VESSEL & PROTOTYPE GALLERY SHOWCASE ----------------- */}
      <section id="vessel" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              The Masterpiece Formulation
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900">
              Hydra-Restore <span className="font-serif italic font-normal">Bio-Lotion</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-600 text-sm max-w-md font-light leading-relaxed">
            Bridging Seoul bio-cellular science with sensory ritual. Each measure works in absolute harmony with the natural rhythm of human skin biology.
          </p>
        </div>

        {/* Interactive Multi-Angle Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Display Flacon Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Spec Bar */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
              <span className="text-[11px] tracking-widest uppercase text-stone-400 font-medium">
                PROTOTYPE STILL • {PROTOTYPE_IMAGES[activeImageIndex].caption}
              </span>
              <span className="bg-[#d08c81]/15 text-[#b56d62] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                150 ML / 5.1 FL. OZ
              </span>
            </div>

            {/* High-Resolution Main Angle View */}
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

            {/* Active Angle Description */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-stone-900">
                  {PROTOTYPE_IMAGES[activeImageIndex].title}
                </h3>
                <p className="text-xs text-stone-500 font-light mt-0.5">
                  {PROTOTYPE_IMAGES[activeImageIndex].subtitle}
                </p>
              </div>

              <div className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">
                Angle 0{activeImageIndex + 1} of 04
              </div>
            </div>

            {/* Thumbnail Switcher Matrix */}
            <div className="grid grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-100">
              {PROTOTYPE_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#fbfaf9] ${
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
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Profile & Acquisition Panel (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d08c81]">
                <Sparkles className="w-4 h-4" />
                <span>Proprietary Micro-Emulsion</span>
              </div>
              <h3 className="text-3xl font-light text-stone-900 tracking-tight">
                The Fluidity of Water, The Sustained Nourishment of Rich Cream
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Specifically calibrated for discerning skin. Hydra-Restore Bio-Lotion yields an imperceptible micro-milky consistency that permeates the lipid matrix in fractions of a second, leaving a radiant, weightless velvet veil that lasts from dawn until dusk.
              </p>
            </div>

            {/* Refined Specifications */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">pH Equilibrium</span>
                <span className="text-sm font-semibold text-stone-900">5.5 (Biomimetic)</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">Cutaneous Profile</span>
                <span className="text-sm font-semibold text-stone-900">Universal Affinity</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">Olfactory Character</span>
                <span className="text-sm font-semibold text-stone-900">100% Fragrance-Free</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <span className="text-[10px] tracking-wider uppercase text-stone-400 block">Ethics & Standards</span>
                <span className="text-sm font-semibold text-stone-900">100% Vegan & Leaping Bunny</span>
              </div>
            </div>

            {/* Acquisition Box */}
            <div className="bg-[#f5f2f0] p-6 rounded-2xl border border-stone-200/80 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-stone-500 block uppercase tracking-wider">Official Offering</span>
                  <span className="text-3xl font-bold text-stone-900">$58.00 USD</span>
                </div>
                <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300">
                  Allocated Batch • Ready for Dispatch
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#1c1a19] hover:bg-[#d08c81] hover:text-stone-950 text-white font-semibold py-4 px-6 rounded-full text-xs tracking-[0.2em] uppercase text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#d08c81]" />
                  <span>Acquire via Concierge</span>
                </a>
                <a
                  href="#concierge"
                  className="bg-white hover:bg-stone-100 text-stone-800 font-medium py-4 px-6 rounded-full text-xs tracking-wider uppercase text-center transition-all border border-stone-300"
                >
                  Direct Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. EFFICACY & CLINICAL BENEFITS ----------------- */}
      <section id="efficacy" className="py-24 bg-[#f3efea] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Proven Clinical Efficacy
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-900">
              Why Discerning Skin Demands It
            </h2>
            <p className="text-stone-600 text-sm font-light">
              Architectured to address the four critical vulnerabilities of contemporary urban living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
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
                    <span className="text-stone-300 font-mono font-bold">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- 5. INGREDIENTS & CLEAN SCIENCE ----------------- */}
      <section id="science" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
            Formula Transparence & Purity
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-900">
            The Potency of Bio-Identical <span className="font-serif italic font-normal">Active Science</span>
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Zero gratuitous fillers. Every botanical metabolite, ceramide, and peptide is chosen solely for its peer-reviewed efficacy in reconditioning the cutaneous matrix.
          </p>
        </div>

        {/* Ingredients Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INGREDIENTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:border-[#d08c81]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#d08c81] bg-[#d08c81]/10 px-3 py-1 rounded-full">
                    {item.role}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-stone-900">{item.name}</h3>
                <span className="text-xs text-stone-500 font-medium block -mt-1">
                  Chemical Category: {item.type}
                </span>
                <p className="text-xs text-stone-600 font-light leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-100 flex items-center text-[11px] text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d08c81] mr-1.5" />
                <span>Clinically Evaluated on Reactive & Stressed Skin</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra-Clean Standard Banners */}
        <div className="mt-12 bg-[#1c1a19] text-[#f5f2f0] rounded-2xl p-7 md:p-9 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-sm font-semibold text-white">0% Parabens & Sulfates</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Zero Harsh Preservatives</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-sm font-semibold text-white">0% Synthetic Fragrance</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Zero Artificial Olfactive Additives</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-sm font-semibold text-white">100% Certified Vegan</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Cruelty-Free Formulation</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-sm font-semibold text-white">Dermatologist Tested</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest">Certified Hypoallergenic</div>
          </div>
        </div>
      </section>

      {/* ----------------- 6. THE DAILY THREE-STEP RITUAL ----------------- */}
      <section className="py-20 bg-[#f7f5f3] border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
              The Daily Application
            </span>
            <h2 className="text-3xl font-light text-stone-900">
              Three Steps Toward Optimum Cutaneous Equilibrium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-sm mx-auto">
                01
              </span>
              <h3 className="text-base font-medium text-stone-900">Purify</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Cleanse the face with a neutral, pH-equilibrated wash morning and evening. Pat gently dry with clean linen.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center font-bold text-sm mx-auto">
                02
              </span>
              <h3 className="text-base font-medium text-stone-900">Dispense</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Release one to two measured doses of Hydra-Restore Bio-Lotion into the cup of warmed palms.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-sm mx-auto">
                03
              </span>
              <h3 className="text-base font-medium text-stone-900">Press & Absorb</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Press with contemplative, gentle motions across face and throat until the micro-emulsion fully assimilates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. PRIVATE CLIENT CONCIERGE & ACQUISITIONS (FOOT OF PAGE) ----------------- */}
      <section id="concierge" className="py-24 bg-[#141312] text-white relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d08c81]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* VIP Concierge Information (Left 6 Columns) */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] tracking-[0.35em] uppercase text-[#d08c81] font-semibold">
                  Private Client Concierge
                </span>
                <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  Bespoke Advisory & <br />
                  <span className="font-serif italic font-normal text-[#e8c5c1]">Direct Acquisition</span>
                </h2>
                <p className="text-stone-400 text-sm font-light leading-relaxed max-w-lg">
                  Whether you require personalized guidance on integrating Hydra-Restore Bio-Lotion into an existing clinical regimen, or wish to place a direct allocation order, our private client advisors remain at your service.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-4">
                {/* Priority WhatsApp Channel */}
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
                        PRIORITY ADVISORY WHATSAPP
                      </span>
                      <h4 className="text-base font-medium text-white group-hover:text-[#d08c81] transition-colors">
                        +62 812-3456-7890
                      </h4>
                      <p className="text-xs text-stone-400 font-light">
                        Direct conversation for tailored consultations and private orders
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                </a>

                {/* Official Concierge Email */}
                <a
                  href="mailto:concierge@stembeauty.com?subject=Inquiry%20Hydra-Restore%20Bio-Lotion"
                  className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/15 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d08c81]/20 text-[#d08c81] flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider uppercase text-[#d08c81] font-semibold block">
                        DEDICATED CLIENT DESK
                      </span>
                      <h4 className="text-base font-medium text-white group-hover:text-[#d08c81] transition-colors">
                        concierge@stembeauty.com
                      </h4>
                      <p className="text-xs text-stone-400 font-light">
                        Press, institutional partnerships, and global dispatch inquiries
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                </a>

                {/* Concierge Hours */}
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-stone-400">
                  <Clock className="w-4 h-4 text-[#d08c81] shrink-0" />
                  <span>Advisory Hours: Monday – Saturday (08:00 – 20:00 GMT+7). Dispatched from Jakarta Hub.</span>
                </div>
              </div>
            </div>

            {/* Private Inquiry Form (Right 6 Columns) */}
            <div className="lg:col-span-6 bg-stone-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl">
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-medium text-white">Transmit an Inquiry</h3>
                <p className="text-xs text-stone-400 font-light">
                  Complete the confidential dispatch form below. Our private advisor will attend to your request promptly.
                </p>
              </div>

              {inquirySent ? (
                <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Your Transmission is Received</h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Thank you for contacting Beauty In Stem. A dedicated client advisor will review your profile and respond via your preferred contact channel shortly.
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
                    <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Direct WhatsApp or Email Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+62 812-3456-7890 or eleanor@domain.com"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Cutaneous Profile or Order Request
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please note your skin type, specific sensitivities, or order allocation inquiries..."
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d08c81] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold py-4 rounded-xl text-xs tracking-[0.25em] uppercase transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit to Advisory Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Understated Luxury Editorial Footer */}
          <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4">
            <div>
              © 2026 BEAUTY IN STEM. All rights reserved. Advanced Korean Cellular Dermatological Science.
            </div>
            <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase text-stone-400">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Editorial Journal</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Confidentiality Policy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
