"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { PROTOTYPE_IMAGES, UNIT_PRICE } from "@/constants/product";
import { formatCurrency } from "@/utils/formatters";

interface VesselSectionProps {
  onOpenOrder: () => void;
  onInquire: (e: React.MouseEvent) => void;
}

export const VesselSection: React.FC<VesselSectionProps> = ({
  onOpenOrder,
  onInquire,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextAngle = () => {
    setActiveImageIndex((prev) => (prev + 1) % PROTOTYPE_IMAGES.length);
  };

  const prevAngle = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + PROTOTYPE_IMAGES.length) % PROTOTYPE_IMAGES.length
    );
  };

  return (
    <section
      id="vessel"
      className="py-24 sm:py-32 bg-[#faf8f5] text-black border-b border-[#e5e5e5]"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4 mb-12 sm:mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400">
            03 // THE FLACON SPECIFICATION
          </span>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-black font-semibold">
            HERMETIC NITROGEN DISPENSING
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Gallery Frame (Left 7 Columns) */}
          <div className="lg:col-span-7 border border-[#e5e5e5] bg-white p-4 sm:p-8 rounded-[2px] relative group">
            <div className="relative aspect-square sm:aspect-[4/3] w-full bg-[#f4f2ee] rounded-[2px] overflow-hidden flex items-center justify-center border border-[#e5e5e5]">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-[2px] bg-white hover:bg-neutral-100 border border-[#e5e5e5] flex items-center justify-center text-black transition-all cursor-pointer z-10 shadow-sm"
                aria-label="Previous Perspective"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextAngle}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-[2px] bg-white hover:bg-neutral-100 border border-[#e5e5e5] flex items-center justify-center text-black transition-all cursor-pointer z-10 shadow-sm"
                aria-label="Next Perspective"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Angle Description */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-black font-medium block">
                  {PROTOTYPE_IMAGES[activeImageIndex].title}
                </span>
                <span className="text-neutral-500 text-[11px]">
                  {PROTOTYPE_IMAGES[activeImageIndex].spec}
                </span>
              </div>
              <span className="text-[#d08c81] tracking-widest font-semibold">
                ANGLE // 0{activeImageIndex + 1} OF 04
              </span>
            </div>

            {/* 4 Thumbnails */}
            <div className="grid grid-cols-4 gap-3 mt-5 pt-4 border-t border-[#e5e5e5]">
              {PROTOTYPE_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-[2px] overflow-hidden border transition-all p-1 bg-[#f4f2ee] cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-black ring-1 ring-black"
                      : "border-[#e5e5e5] opacity-60 hover:opacity-100"
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
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 block">
                CRAFT & ENGINEERING
              </span>
              <h3 className="text-3xl sm:text-4xl font-medium uppercase text-black tracking-tight leading-[0.95]">
                150 ML Hermetic Flacon
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Engineered with an airless piston actuator that maintains
                nitrogen hermetic seal throughout product lifespan, protecting
                the formula against oxidation and photochemical breakdown.
              </p>
            </div>

            {/* Spec Table */}
            <div className="border border-[#e5e5e5] divide-y divide-[#e5e5e5] text-xs font-mono bg-white rounded-[2px]">
              <div className="p-3.5 flex justify-between">
                <span className="text-neutral-500 uppercase">pH Equilibrium</span>
                <span className="text-black font-medium">5.5 (Acid Mantle Affinity)</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-neutral-500 uppercase">Volume</span>
                <span className="text-black font-medium">150 ml / 5.1 fl. oz</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-neutral-500 uppercase">Aromatic Accord</span>
                <span className="text-black font-medium">100% Fragrance-Free</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-neutral-500 uppercase">Certification</span>
                <span className="text-black font-medium">100% Vegan • Cruelty-Free</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-neutral-500 uppercase">Allocation Status</span>
                <span className="text-emerald-700 font-semibold">Allocated Batch 01</span>
              </div>
            </div>

            {/* Acquisition Box */}
            <div className="border border-[#e5e5e5] bg-white p-6 rounded-[2px] space-y-4 shadow-sm">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    OFFICIAL OFFERING
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-medium text-black">
                    {formatCurrency(UNIT_PRICE)}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 tracking-wider uppercase border border-emerald-200 px-2.5 py-1">
                  READY TO DISPATCH
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onOpenOrder}
                  className="flex-1 rounded-[2px] bg-black text-white hover:bg-neutral-800 text-xs tracking-[0.2em] uppercase font-semibold py-3.5 px-6 text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Acquire Vessel</span>
                </button>
                <button
                  onClick={onInquire}
                  className="rounded-[2px] border border-neutral-300 hover:border-black text-black text-xs tracking-[0.2em] uppercase font-medium py-3.5 px-6 text-center transition-all cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
