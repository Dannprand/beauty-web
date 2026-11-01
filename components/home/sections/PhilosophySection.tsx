"use client";

import React from "react";
import Image from "next/image";

interface PhilosophySectionProps {
  onOpenJournal: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onOpenJournal,
}) => {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 bg-white text-black border-b border-[#e5e5e5] relative"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4 mb-14 sm:mb-20">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400">
            01 // THE MAKING OF BEAUTY LOTION
          </span>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-black font-semibold">
            BIOMIMETIC ARCHITECTURE
          </span>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 5 Columns: Narrow Narrative + Low Offset Visual Card */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-12">
            <div className="space-y-5 max-w-[440px]">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight uppercase leading-[0.85] text-black">
                Pure <br />
                Formulation
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base font-normal leading-[1.6]">
                At a time when skincare is saturated with superficial silicones,
                Beauty Lotion remains deliberately physiological. Its
                bio-identical lipid complex, whipped micro-emulsion texture, and
                airless preservation celebrate the synergy between skin and
                cellular science.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenJournal}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-black hover:text-[#d08c81] transition-colors border-b border-black pb-1 cursor-pointer"
                >
                  <span>Read The Formulation Journal</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Staggered Offset Card: Flacon Detail */}
            <div className="relative aspect-[3/4] w-full max-w-[380px] bg-neutral-100 rounded-[2px] overflow-hidden border border-[#e5e5e5]">
              <Image
                src="/assets/prototype%20produk%20lotion%202.jpg"
                alt="Hermetic Dispenser Precision"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2.5 text-[9px] font-mono tracking-widest uppercase text-black border border-[#e5e5e5] flex justify-between">
                <span>DISPENSER DETAIL</span>
                <span>0% CONTAMINATION</span>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: High-Anchored Macro & Staggered 3-Pillar Architecture */}
          <div className="lg:col-span-7 space-y-12">
            {/* High-Anchored Horizontal Visual Card */}
            <div className="relative aspect-[16/10] w-full bg-neutral-100 rounded-[2px] overflow-hidden border border-[#e5e5e5]">
              <Image
                src="/assets/prototype%20produk%20lotion.jpg"
                alt="Beauty Lotion Studio Prototype"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-[2px] text-[9px] font-mono tracking-widest uppercase text-black border border-[#e5e5e5]">
                FLACON DESIGN // 150 ML STUDIO FRONT
              </div>
            </div>

            {/* 3 Pillars in Clean Hairline Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e5e5e5] divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5] bg-neutral-50">
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 block tracking-widest">
                  PHASE 01
                </span>
                <h3 className="text-lg font-medium uppercase text-black tracking-tight">
                  Protect
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Fortifies the lipid threshold against smog, climate aridness,
                  and free-radical stress.
                </p>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 block tracking-widest">
                  PHASE 02
                </span>
                <h3 className="text-lg font-medium uppercase text-black tracking-tight">
                  Recover
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Bio-identical ceramides fuse with intercellular cracks to
                  restore elasticity and smoothness.
                </p>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 block tracking-widest">
                  PHASE 03
                </span>
                <h3 className="text-lg font-medium uppercase text-black tracking-tight">
                  Maintain
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Sustains a 24-hour hydration lock without suffocating the skin
                  or leaving grease.
                </p>
              </div>
            </div>

            {/* Clinical Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e5e5e5] divide-x divide-[#e5e5e5] text-center py-6 bg-white">
              <div>
                <div className="text-2xl sm:text-4xl font-mono font-medium text-black">
                  +98%
                </div>
                <div className="text-[9px] font-mono uppercase text-neutral-400 mt-0.5">
                  Barrier Strength
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-mono font-medium text-black">
                  24H
                </div>
                <div className="text-[9px] font-mono uppercase text-neutral-400 mt-0.5">
                  Hydration Lock
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-mono font-medium text-black">
                  -89%
                </div>
                <div className="text-[9px] font-mono uppercase text-neutral-400 mt-0.5">
                  Moisture Loss
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-mono font-medium text-black">
                  100%
                </div>
                <div className="text-[9px] font-mono uppercase text-neutral-400 mt-0.5">
                  Sensitive Tested
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
