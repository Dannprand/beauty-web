"use client";

import React from "react";
import { INGREDIENTS } from "@/constants/product";

export const ScienceSection: React.FC = () => {
  return (
    <section
      id="science"
      className="py-24 sm:py-32 bg-white text-black border-b border-[#e5e5e5]"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4 mb-12 sm:mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400">
            04 // BIO-ACTIVES MATRIX
          </span>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-black font-semibold">
            BIOCOMPATIBLE SYNTHESIS
          </span>
        </div>

        <div className="max-w-3xl space-y-3 mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.95] text-black">
            Active Ingredient Architecture
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
            Four physiologically native actives calibrated for instantaneous dermal affinity with zero pore-clogging residue.
          </p>
        </div>

        {/* 4-Grid Hairline Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#e5e5e5] divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5]">
          {INGREDIENTS.map((item, idx) => (
            <div
              key={item.code}
              className={`p-8 space-y-4 bg-white hover:bg-[#faf9f7] transition-colors ${
                idx >= 2 ? "md:border-t md:border-[#e5e5e5]" : ""
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
                <span className="text-[#d08c81] font-semibold">{item.code}</span>
                <span className="text-neutral-400">{item.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-black uppercase tracking-tight">
                {item.name}
              </h3>
              <div className="text-[11px] font-mono text-neutral-500">
                Formula: {item.formula}
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Standards Banner */}
        <div className="mt-8 border border-[#e5e5e5] p-6 bg-neutral-50 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-mono">
          <div>
            <div className="text-black font-semibold">0% PARABENS</div>
            <div className="text-[10px] text-neutral-500 uppercase mt-0.5">Zero Preservatives</div>
          </div>
          <div>
            <div className="text-black font-semibold">0% FRAGRANCE</div>
            <div className="text-[10px] text-neutral-500 uppercase mt-0.5">Non-Sensitizing</div>
          </div>
          <div>
            <div className="text-black font-semibold">100% VEGAN</div>
            <div className="text-[10px] text-neutral-500 uppercase mt-0.5">Cruelty-Free</div>
          </div>
          <div>
            <div className="text-black font-semibold">DERM TESTED</div>
            <div className="text-[10px] text-neutral-500 uppercase mt-0.5">Hypoallergenic</div>
          </div>
        </div>
      </div>
    </section>
  );
};
