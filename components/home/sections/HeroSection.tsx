"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";
import { UNIT_PRICE } from "@/constants/product";

interface HeroSectionProps {
  onOpenOrder: () => void;
  onNavigate: (e: React.MouseEvent, id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenOrder,
  onNavigate,
}) => {
  const [isHeroMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black pb-14 sm:pb-20">
      {/* Full-bleed 100vw Video Canvas */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={heroVideoRef}
          src="/assets/video%20body.mp4"
          autoPlay
          muted={isHeroMuted}
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.70] contrast-[1.15]"
        />
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      </div>

      {/* Hero Narrative Overlay */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-medium text-white tracking-[-0.01em] uppercase leading-[0.88] [text-wrap:balance]">
            ENGINEERED <br />
            <span className="font-serif italic font-normal text-[#f4eae6] tracking-normal">
              Skin
            </span>{" "}
            FITNESS
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
            Beauty Lotion conditions the cutaneous lipid matrix. A sub-micron
            cellular micro-emulsion that trains skin to retain hydration,
            defend against environmental decay, and remain composed.
          </p>

          {/* Stark High-Contrast Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#cinema"
              onClick={(e) => onNavigate(e, "cinema")}
              className="rounded-[2px] bg-white text-black hover:bg-stone-200 text-xs tracking-[0.25em] uppercase font-semibold px-8 py-3.5 sm:py-4 transition-all text-center flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <span>Experience In Motion</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenOrder}
              className="rounded-[2px] bg-black/60 hover:bg-white/10 text-white backdrop-blur-md border border-white/25 text-xs tracking-[0.25em] uppercase font-medium px-8 py-3.5 sm:py-4 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#e8c5c1]" />
              <span>Acquire Bottle ({formatCurrency(UNIT_PRICE)})</span>
            </button>
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="pt-8 sm:pt-12 flex justify-between items-end border-t border-white/15 mt-8 sm:mt-12 text-stone-400 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase">
          <span className="hidden sm:inline">
            DERMATOLOGICAL RESEARCH // ZERO COMPROMISE
          </span>
          <button
            onClick={(e) => onNavigate(e, "philosophy")}
            className="flex items-center gap-2 mx-auto sm:mx-0 hover:text-white transition-colors cursor-pointer"
          >
            <span>EXPLORE ARCHITECTURE</span>
            <span className="text-[#d08c81]">↓</span>
          </button>
          <span className="hidden md:inline">150 ML • ALLOCATED EDITION</span>
        </div>
      </div>
    </section>
  );
};
