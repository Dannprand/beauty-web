"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// Types
interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: string;
  step: string;
  image: string;
  description: string;
  details: string[];
}

interface CartItem extends Product {
  quantity: number;
}

const PRODUCTS: Product[] = [
  {
    id: "hydra-restore-lotion",
    name: "Hydra-Restore Bio-Lotion",
    subtitle: "Cellular Barrier Conditioning",
    price: 58,
    category: "Lotion & Emulsion",
    step: "Step 03 • Recovery",
    image: "/assets/prototype%20produk%20lotion.jpg",
    description:
      "A barrier-training daily restorative lotion engineered with bio-fermented ceramides and Korean botanical actives to reinforce cellular hydration and defensive tolerance.",
    details: [
      "Bio-identical Ceramide Complex (NP, AP, EOP)",
      "High & Low Molecular Weight Hyaluronic Acid",
      "Korean Camellia & Fermented Rice Extract",
      "Non-greasy, fast-absorbing micro-emulsion",
    ],
  },
  {
    id: "reset-serum",
    name: "Reset Cellular Serum",
    subtitle: "PDRN Core Activation",
    price: 75,
    category: "Serum",
    step: "Step 02 • Activate",
    image: "/assets/prototype%20produk%20lotion.jpg",
    description:
      "A targeted activation serum that stimulates the skin cells in regaining strength, density, and balance — preparing tissue for sustained environmental resilience.",
    details: [
      "Micro-purified Salmon PDRN (DNA Repair)",
      "Tri-Peptide 1 & Hexapeptide-8 Complex",
      "Niacinamide 5% for pore-density optimization",
      "Clinical glow finish within 7 days",
    ],
  },
  {
    id: "hydra-foam-cleanser",
    name: "Hydra-Foam Recovery Cleanser",
    subtitle: "Lipid-Preserving Cleanser",
    price: 35,
    category: "Cleanser",
    step: "Step 01 • Cleanse",
    image: "/assets/prototype%20produk%20lotion.jpg",
    description:
      "A recovery-first cleansing step that purifies while preserving the skin barrier from the very first contact. Leaves your skin feeling clean, elastic, and hydrated.",
    details: [
      "Amino-acid surfactant complex",
      "pH 5.5 skin-compatible formula",
      "Centella Asiatica & Green Tea soothing extract",
      "Zero tightness or barrier disruption",
    ],
  },
  {
    id: "eye-lash-conditioner",
    name: "Eye & Lash Density Conditioner",
    subtitle: "Dual Fitness Orbital Care",
    price: 65,
    category: "Eye Care",
    step: "Step 04 • Maintain",
    image: "/assets/prototype%20produk%20lotion.jpg",
    description:
      "A multi-tasking eye fitness serum formulated to support the skin around the eyes and lashes, reducing darkness, puffiness, and crepiness over time.",
    details: [
      "Copper Tripeptide-1 for orbital firmness",
      "Biotinoyl Tripeptide for follicle stimulation",
      "Caffeine & Licorice Root for micro-circulation",
      "Ophthalmologist & Dermatologist tested",
    ],
  },
];

const SYSTEM_STEPS = [
  {
    number: "01",
    tag: "CLEANSE",
    title: "HYDRA-FOAM CLEANSER",
    short: "Recovery-first cleansing that purifies while preserving lipid barrier.",
    desc: "A gentle yet deeply purifying foam powered by gentle amino surfactants and fermented botanicals. It lifts pollution and sebum without disturbing the moisture mantle, preparing the skin surface for optimal serum uptake.",
    badge: "Prep & Preserve",
  },
  {
    number: "02",
    tag: "ACTIVATE",
    title: "RESET CELLULAR SERUM",
    short: "Targeted activation serum stimulating cellular turnover and elasticity.",
    desc: "Engineered with micro-PDRN and Korean peptide complexes to signal regenerative cellular activity. Restores micro-density and strengthens the epidermal architecture against daily oxidative stress.",
    badge: "Core Stimulator",
  },
  {
    number: "03",
    tag: "RECOVERY",
    title: "HYDRA-RESTORE LOTION",
    short: "Barrier-training moisturiser reinforcing long-term tolerance & hydration.",
    desc: "Our breakthrough daily restorative emulsion (Prototype Edition). Enriched with biomimetic ceramides and moisture-capturing micro-lipids that fuse effortlessly into the stratum corneum for a velvety, dewy, 24-hour hydration lock.",
    badge: "Barrier Fortifier",
  },
  {
    number: "04",
    tag: "MAINTAIN",
    title: "EYE & LASH CONDITIONER",
    short: "Multi-tasking orbital and lash fitness serum for delicate micro-tissue.",
    desc: "Delivers concentrated nourishment to the thinnest skin on the face. Supports orbital firmness, reduces dark zones, and conditions lash root follicles for resilience and full appearance.",
    badge: "Precision Care",
  },
];

export default function LandingPage() {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    { ...PRODUCTS[0], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Video mute state
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Active collection filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Active step in system
  const [activeStep, setActiveStep] = useState(0);

  // Quick view modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Newsletter state
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const freeShippingThreshold = 80;
  const freeShippingProgress = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);

  // Filter products
  const filteredProducts =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fbfaf9] text-[#1c1a19] antialiased selection:bg-[#d08c81]/30 selection:text-[#1c1a19]">
      {/* ----------------- TOP ANNOUNCEMENT BANNER ----------------- */}
      <div className="bg-[#181615] text-[#e8c5c1] text-[11px] md:text-xs tracking-[0.2em] uppercase py-2 px-4 text-center font-medium border-b border-white/5 flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d08c81] animate-ping" />
        <span>KOREAN PDRN SCIENCE • COMPLIMENTARY EXPRESS DELIVERY OVER $80</span>
      </div>

      {/* ----------------- FIXED FROSTED HEADER ----------------- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#141312]/80 text-[#f5f2f0] border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Left Nav (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium">
            <a href="#philosophy" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              Science
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#collection" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              Collection
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#system" className="hover:text-[#d08c81] transition-colors py-1 relative group">
              System (4 Steps)
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d08c81] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Center Brand Logo */}
          <div className="flex flex-col items-center cursor-pointer select-none">
            <a href="#" className="flex flex-col items-center">
              <span className="text-lg md:text-2xl font-light tracking-[0.35em] uppercase text-white drop-shadow-sm font-sans">
                BEAUTY IN STEM
              </span>
              <span className="text-[9px] tracking-[0.45em] uppercase text-[#d08c81] -mt-0.5 font-medium">
                Korean Skincare
              </span>
            </a>
          </div>

          {/* Right Nav */}
          <div className="flex items-center space-x-6 text-xs tracking-[0.18em] uppercase font-medium">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full border border-white/15 transition-all text-[#f5f2f0] group"
            >
              <svg className="w-4 h-4 text-[#d08c81] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden sm:inline">CART</span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#d08c81] text-stone-950 font-bold text-[10px]">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-1 hover:text-[#d08c81] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#141312] px-6 py-6 space-y-4 text-xs tracking-[0.25em] uppercase animate-fadeIn">
            <a
              href="#philosophy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-stone-200 hover:text-[#d08c81]"
            >
              Science & Philosophy
            </a>
            <a
              href="#collection"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-stone-200 hover:text-[#d08c81]"
            >
              The Collection
            </a>
            <a
              href="#system"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-stone-200 hover:text-[#d08c81]"
            >
              4-Step Fitness System
            </a>
            <div className="pt-4 border-t border-white/10 flex justify-between text-stone-400">
              <span>Account</span>
              <span>USD ($)</span>
            </div>
          </div>
        )}
      </header>

      {/* ----------------- HERO SECTION (STEM BEAUTY LAYOUT) ----------------- */}
      <section className="relative w-full h-[92vh] min-h-[600px] flex items-end pb-12 md:pb-20 overflow-hidden bg-stone-950">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/assets/video%20body.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.78] contrast-[1.05]"
          />
          {/* Multi-layered Vignette and Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/30 to-black/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* Sound toggle button on Hero */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={toggleSound}
            className="flex items-center space-x-2 bg-stone-950/60 backdrop-blur-md hover:bg-stone-900 px-3.5 py-1.5 rounded-full border border-white/15 text-stone-200 text-[10px] tracking-widest uppercase transition-all shadow-lg"
          >
            {isMuted ? (
              <>
                <svg className="w-3.5 h-3.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span>Sound Off</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-[#d08c81]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span className="text-[#e8c5c1]">Sound On</span>
              </>
            )}
          </button>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e8c5c1] text-[11px] font-medium tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#d08c81]" />
              Korean Formulas
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05]">
              Engineered for <br />
              <span className="font-serif italic font-normal text-[#f3efe9]">Ultimate Skin</span> Fitness
            </h1>

            {/* Subtext */}
            <p className="text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Advanced PDRN cellular science developed in collaboration with Korean dermatological scientists. 
              Formulas designed not merely to moisturize, but to actively condition your skin barrier.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 font-semibold px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                The Collection
              </a>
              <a
                href="#philosophy"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 px-8 py-4 rounded-full text-xs tracking-[0.25em] uppercase transition-all"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          {/* Bottom Scroll Indicator Bar */}
          <div className="pt-12 flex justify-between items-end border-t border-white/15 mt-12 text-stone-400 text-[10px] tracking-[0.25em] uppercase">
            <span className="hidden sm:inline">DEVELOPED WITH KOREAN SKIN SCIENTISTS</span>
            <div className="flex items-center gap-3 mx-auto sm:mx-0">
              <span>SCROLL DOWN</span>
              <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
                <div className="w-1.5 h-2 bg-[#d08c81] rounded-full animate-bounce" />
              </div>
            </div>
            <span className="hidden sm:inline">SKIN FITNESS SYSTEM • 4 STEPS</span>
          </div>
        </div>
      </section>

      {/* ----------------- STATEMENT STRIP ----------------- */}
      <section className="bg-[#1c1a19] text-[#f5f2f0] py-14 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] tracking-[0.35em] text-[#d08c81] uppercase font-semibold">
            THE BIOLOGICAL SHIFT
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-wide">
            “Our products are designed as <span className="font-serif italic text-[#e8c5c1]">Skin Fitness Tools</span> — 
            conditioning the skin the same way disciplined athletic training conditions the body.”
          </h2>
          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-stone-400 font-light tracking-widest uppercase">
            <span>• PDRN Cellular Repair</span>
            <span>• Korean Bio-Fermentation</span>
            <span>• Barrier Tolerance</span>
          </div>
        </div>
      </section>

      {/* ----------------- THE COLLECTION SECTION ----------------- */}
      <section id="collection" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] uppercase text-[#d08c81] font-semibold">
              The Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900">
              Formulated for <span className="font-serif italic">Resilience</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 text-xs tracking-wider uppercase font-medium">
            {["All", "Lotion & Emulsion", "Serum", "Cleanser", "Eye Care"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === category
                    ? "bg-[#1c1a19] text-white shadow-md"
                    : "bg-stone-200/70 text-stone-700 hover:bg-stone-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Product Image Box */}
              <div className="relative w-full aspect-square bg-[#f5f2f0] rounded-xl overflow-hidden mb-5 flex items-center justify-center">
                {/* Step Pill */}
                <span className="absolute top-3 left-3 z-10 text-[9px] font-semibold tracking-widest uppercase bg-white/90 backdrop-blur-md text-stone-900 px-2.5 py-1 rounded-full shadow-sm">
                  {product.step.split("•")[0]}
                </span>

                <div className="relative w-4/5 h-4/5 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-white/95 hover:bg-white text-stone-900 font-semibold py-2.5 rounded-lg text-xs tracking-widest uppercase shadow-lg transition-transform"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-stone-500">
                    {product.category}
                  </span>
                  <h3 className="text-base font-medium text-stone-900 tracking-tight mt-0.5 group-hover:text-[#d08c81] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-600 font-light mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-base font-semibold text-stone-900">
                    ${product.price}.00
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-1.5 bg-[#1c1a19] hover:bg-[#d08c81] hover:text-stone-950 text-white text-[11px] font-medium tracking-wider uppercase px-4 py-2 rounded-full transition-all"
                  >
                    <span>SELECT</span>
                    <span className="text-xs font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- OUR PHILOSOPHY SECTION (BIOLOGICAL CORE) ----------------- */}
      <section id="philosophy" className="py-24 bg-[#181615] text-[#f5f2f0] relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d08c81]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
              Our products are designed as <br />
              <span className="font-serif italic font-normal text-[#e8c5c1]">Skin Fitness Tools</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
              True skin radiance is an outcome of cellular health and stress resilience. 
              Our formulas train the skin matrix through three foundational pillars:
            </p>
          </div>

          {/* 3 Pillars Visual Diagram (Stem Beauty Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
            {/* Pillar 1 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-sm font-bold text-[#d08c81]">
                    01
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">PILLAR</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  SUPPORTING
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  The skin’s innate ability to withstand environmental stress, pollution, and climate shifts without barrier compromise.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <span className="w-2 h-2 rounded-full bg-[#d08c81]" />
                <span>Lipid-Barrier Reinforcement</span>
              </div>
            </div>

            {/* Pillar 2 (Center Highlight) */}
            <div className="bg-gradient-to-b from-[#242120] to-[#1c1a19] rounded-2xl p-8 border border-[#d08c81]/40 shadow-2xl flex flex-col justify-between relative group scale-100 md:scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d08c81] text-stone-950 text-[10px] tracking-[0.25em] uppercase font-bold px-4 py-1 rounded-full shadow-md">
                KOREAN CORE SCIENCE
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81] text-stone-950 flex items-center justify-center text-sm font-bold shadow-lg">
                    02
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#e8c5c1]">ACTIVE REPAIR</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  RECOVER
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Accelerating cellular recovery speed through bio-identical PDRN molecules and targeted signaling peptides.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <span className="w-2 h-2 rounded-full bg-[#d08c81] animate-ping" />
                <span>Cellular Turn-Over Speed</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#d08c81]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#d08c81]/20 border border-[#d08c81]/40 flex items-center justify-center text-sm font-bold text-[#d08c81]">
                    03
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">MAINTENANCE</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">
                  MAINTAIN
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Sustaining optimal hydration retention and tissue elasticity over time for long-term youthful fitness.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#e8c5c1]">
                <span className="w-2 h-2 rounded-full bg-[#d08c81]" />
                <span>Cumulative Longevity</span>
              </div>
            </div>
          </div>

          {/* Clinical Evidence Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-white/10 pt-12">
            <div>
              <div className="text-4xl md:text-5xl font-light text-white font-serif">+98%</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Barrier Integrity Repair</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">24H</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Cellular Hydration Lock</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-white font-serif">-89%</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Water Loss (TEWL)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-[#e8c5c1] font-serif">100%</div>
              <div className="text-xs text-stone-400 tracking-wider uppercase mt-1">Clean & Sensitive Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- THE SKIN FITNESS SYSTEM (4 STEPS) ----------------- */}
      <section id="system" className="py-24 bg-[#f3efea] text-stone-900 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
                The Skin Fitness System
              </span>
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-8xl font-serif text-stone-900 font-light">4</span>
                <div>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight">essential steps</h2>
                  <p className="text-stone-600 text-sm font-light">
                    that support recovery, strength, and long-term skin performance.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById("collection");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 md:mt-0 bg-stone-900 text-white hover:bg-[#d08c81] hover:text-stone-950 font-semibold px-8 py-3.5 rounded-full text-xs tracking-[0.25em] uppercase transition-all self-start md:self-auto"
            >
              Shop The System
            </button>
          </div>

          {/* Interactive Step Switcher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selection List (Left Column) */}
            <div className="lg:col-span-5 space-y-3">
              {SYSTEM_STEPS.map((step, idx) => (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    activeStep === idx
                      ? "bg-white border-stone-900 shadow-md translate-x-1"
                      : "bg-white/50 border-stone-200 hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-widest text-[#d08c81]">
                      {step.number} / {step.tag}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-stone-900">{step.title}</h3>
                  <p className="text-xs text-stone-600 font-light mt-1">{step.short}</p>
                </div>
              ))}
            </div>

            {/* Active Step Feature Box (Right Column) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-lg flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <span className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium">
                    STEP {SYSTEM_STEPS[activeStep].number} IN DETAIL
                  </span>
                  <span className="bg-[#d08c81]/15 text-[#b56d62] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                    {SYSTEM_STEPS[activeStep].tag}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900">
                  {SYSTEM_STEPS[activeStep].title}
                </h3>

                <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
                  {SYSTEM_STEPS[activeStep].desc}
                </p>

                {/* Spotlight on user's prototype product when on step 3 */}
                <div className="bg-[#fbfaf9] rounded-2xl p-6 border border-stone-200 flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-36 h-36 bg-white rounded-xl overflow-hidden shrink-0 border border-stone-100 shadow-sm">
                    <Image
                      src="/assets/prototype%20produk%20lotion.jpg"
                      alt="Featured Formula"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#d08c81]">
                      FEATURED FORMULATION
                    </span>
                    <h4 className="text-base font-medium text-stone-900">
                      Korean Bio-Restorative Complex
                    </h4>
                    <p className="text-xs text-stone-600 font-light">
                      Engineered for high bioavailability with clean skin compatibility. Free from synthetic fragrances, drying alcohols, and harsh sulfates.
                    </p>
                    <button
                      onClick={() => addToCart(PRODUCTS[0])}
                      className="text-xs font-semibold tracking-wider uppercase text-stone-900 underline hover:text-[#d08c81] pt-1"
                    >
                      Add To Cart • $58.00 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- NEWSLETTER SECTION ----------------- */}
      <section className="bg-[#181615] text-white py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs tracking-[0.3em] uppercase text-[#d08c81] font-semibold">
            THE SCIENTIFIC DISPATCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Subscribe for Korean Skincare Innovations
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
            Receive exclusive formulation drops, skin fitness clinical reports, and member-only private access.
          </p>

          {subscribed ? (
            <div className="bg-[#d08c81]/20 border border-[#d08c81] text-[#e8c5c1] py-3.5 px-6 rounded-full max-w-md mx-auto text-xs tracking-widest uppercase font-medium">
              Thank you for subscribing to Beauty In Stem.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex items-center border border-white/20 rounded-full overflow-hidden bg-white/5 backdrop-blur-md p-1 focus-within:border-[#d08c81] transition-all">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-transparent px-5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#d08c81] hover:bg-[#c27c71] text-stone-950 px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shrink-0"
              >
                SUBMIT
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ----------------- FOOTER (STEM BEAUTY LAYOUT) ----------------- */}
      <footer className="bg-[#141312] text-stone-400 py-16 text-xs border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Col 1: Brand Info */}
            <div className="col-span-2 space-y-4">
              <span className="text-base tracking-[0.3em] uppercase text-white font-light">
                BEAUTY IN STEM
              </span>
              <p className="text-stone-400 font-light text-xs leading-relaxed max-w-sm">
                Advanced Korean skincare formulas engineered for ultimate skin fitness. 
                Collaborative research between Seoul dermatology laboratories and modern barrier science.
              </p>
              <div className="flex items-center space-x-4 pt-2 text-[11px] tracking-widest uppercase text-stone-300">
                <a href="#" className="hover:text-[#d08c81] transition-colors">Instagram</a>
                <span>•</span>
                <a href="#" className="hover:text-[#d08c81] transition-colors">TikTok</a>
                <span>•</span>
                <a href="#" className="hover:text-[#d08c81] transition-colors">YouTube</a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">Navigation</h4>
              <ul className="space-y-2 text-xs font-light">
                <li><a href="#philosophy" className="hover:text-white transition-colors">Science</a></li>
                <li><a href="#collection" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="#system" className="hover:text-white transition-colors">Skin System</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Col 3: Customer Care */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">Client Care</h4>
              <ul className="space-y-2 text-xs font-light">
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>

            {/* Col 4: Shop In / Regions */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">Shop In:</h4>
              <ul className="space-y-1.5 text-xs font-light text-stone-400">
                <li className="text-white font-medium">United States (USD $)</li>
                <li>Indonesia (IDR Rp)</li>
                <li>Singapore (SGD $)</li>
                <li>United Kingdom (GBP £)</li>
                <li>Canada (CAD $)</li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 font-light gap-4">
            <div>
              © 2026 BEAUTY IN STEM. All rights reserved. Korean Skincare Technologies.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ----------------- CART SLIDE-OVER DRAWER ----------------- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-md bg-[#fbfaf9] h-full shadow-2xl flex flex-col justify-between z-10 animate-slideLeft">
            {/* Drawer Header */}
            <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-stone-900">
                  SHOPPING CART
                </span>
                <span className="text-xs font-semibold text-stone-500">
                  ({cartCount})
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-stone-500 hover:text-stone-900 p-1 text-xs tracking-wider uppercase font-semibold"
              >
                CLOSE ✕
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="px-6 py-3.5 bg-[#f5f2f0] border-b border-stone-200 text-xs">
              {cartSubtotal >= freeShippingThreshold ? (
                <div className="text-emerald-700 font-medium flex items-center gap-1.5">
                  <span>✓</span> You have unlocked <strong>Free Worldwide Shipping</strong>!
                </div>
              ) : (
                <div className="text-stone-700">
                  Add <strong>${(freeShippingThreshold - cartSubtotal).toFixed(2)}</strong> more for <strong>Free Shipping</strong>
                </div>
              )}
              <div className="w-full h-1.5 bg-stone-300 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-[#d08c81] transition-all duration-300"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="text-4xl">🛍️</div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-stone-700">
                    Your shopping cart is empty
                  </h4>
                  <p className="text-xs text-stone-500 font-light">
                    Explore our collection and optimize your skin fitness.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-white rounded-xl border border-stone-200/80 items-center justify-between"
                  >
                    <div className="relative w-16 h-16 bg-[#f5f2f0] rounded-lg shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-stone-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-stone-500 uppercase tracking-wider">
                        ${item.price}.00
                      </p>
                      {/* Quantity selector */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-700"
                        >
                          -
                        </button>
                        <span className="text-xs font-medium text-stone-900 px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-700"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-stone-900">
                        ${item.price * item.quantity}.00
                      </div>
                      <button
                        onClick={() => updateQuantity(item.id, -item.quantity)}
                        className="text-[10px] text-red-500 hover:underline mt-2 inline-block"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-stone-200 space-y-4">
                <div className="flex justify-between text-xs tracking-wider uppercase font-semibold text-stone-900">
                  <span>SUBTOTAL</span>
                  <span>${cartSubtotal}.00</span>
                </div>
                <p className="text-[10px] text-stone-500 text-center">
                  Taxes and duties calculated at checkout.
                </p>
                <button
                  onClick={() => alert("Simulasi checkout: Pesanan sedang diproses dengan aman!")}
                  className="w-full bg-[#1c1a19] hover:bg-[#d08c81] hover:text-stone-950 text-white font-semibold py-4 rounded-full text-xs tracking-[0.25em] uppercase transition-all shadow-lg"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ----------------- QUICK VIEW MODAL ----------------- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 z-10 shadow-2xl space-y-6 overflow-hidden">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 text-sm font-bold"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-square bg-[#f5f2f0] rounded-2xl overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#d08c81]">
                  {selectedProduct.step}
                </span>
                <h3 className="text-xl font-medium text-stone-900">
                  {selectedProduct.name}
                </h3>
                <div className="text-lg font-bold text-stone-900">
                  ${selectedProduct.price}.00
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Key ingredients */}
                <div className="space-y-1 pt-2">
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-700">
                    Key Ingredients & Science:
                  </span>
                  <ul className="text-[11px] text-stone-600 space-y-1 list-disc list-inside">
                    {selectedProduct.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-[#1c1a19] hover:bg-[#d08c81] hover:text-stone-950 text-white font-semibold py-3.5 rounded-full text-xs tracking-[0.2em] uppercase transition-all shadow-md"
                  >
                    ADD TO CART • ${selectedProduct.price}.00
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
