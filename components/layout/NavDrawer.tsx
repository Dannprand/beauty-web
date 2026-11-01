"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { UNIT_PRICE } from "@/constants/product";
import { WHATSAPP_NUMBER, CONCIERGE_EMAIL } from "@/constants/contact";
import { formatCurrency, formatPhoneNumber } from "@/utils/formatters";
import { getGeneralWhatsAppUrl } from "@/utils/whatsapp";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
  onNavigate: (e: React.MouseEvent, id: string) => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  onClose,
  onOpenOrder,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <div className="fixed inset-0 z-50 bg-white text-black flex flex-col justify-between animate-fadeIn overflow-y-auto">
      {/* Top Bar of Drawer */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#e5e5e5]">
        <button
          onClick={onClose}
          className="flex items-center gap-2 p-2 -ml-2 text-black hover:opacity-60 transition-opacity cursor-pointer"
          aria-label="Close Navigation"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase hidden sm:inline">
            Close
          </span>
        </button>

        <div className="text-center font-sans text-xl sm:text-2xl font-medium tracking-[0.35em] uppercase text-black">
          BEAUTY LOTION
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              onClose();
              onOpenOrder();
            }}
            className="rounded-[2px] bg-black text-white px-5 py-2 text-xs tracking-widest uppercase font-medium hover:bg-neutral-800 cursor-pointer"
          >
            Acquire ({formatCurrency(UNIT_PRICE)})
          </button>
        </div>
      </div>

      {/* 50/50 Architectural Body */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        {/* Left Column: Giant Monolithic Navigation Links */}
        <nav className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => onNavigate(e, item.target)}
              className="group flex items-baseline justify-between py-2 border-b border-[#f0f0f0] transition-colors"
            >
              <span className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-black group-hover:text-[#d08c81] transition-colors">
                {item.name}
              </span>
              <span className="font-mono text-xs sm:text-sm text-neutral-400 group-hover:text-black">
                {item.num}
              </span>
            </a>
          ))}
        </nav>

        {/* Right Column: Macro Craftsmanship Editorial Photo */}
        <div className="hidden lg:block lg:col-span-5 relative aspect-[4/5] w-full rounded-[2px] overflow-hidden bg-neutral-100 border border-[#e5e5e5]">
          <Image
            src="/assets/prototype%20produk%20lotion%203.jpg"
            alt="Beauty Lotion Craftsmanship"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-black flex justify-between border border-[#e5e5e5]">
            <span>CRAFT // SUB-MICRON EMULSION</span>
            <span>EDITION 2026</span>
          </div>
        </div>
      </div>

      {/* Bottom Tabular Metadata Strip */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-6 border-t border-[#e5e5e5] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-neutral-500">
        <div>
          <span className="text-black uppercase block font-semibold mb-1">Direct Advisory</span>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black">
            {formatPhoneNumber(WHATSAPP_NUMBER)}
          </a>
        </div>
        <div>
          <span className="text-black uppercase block font-semibold mb-1">Electronic Desk</span>
          <a href={`mailto:${CONCIERGE_EMAIL}`} className="hover:text-black">
            {CONCIERGE_EMAIL}
          </a>
        </div>
        <div>
          <span className="text-black uppercase block font-semibold mb-1">Dispatch Logistics</span>
          <span>Express Insured Global</span>
        </div>
        <div>
          <span className="text-black uppercase block font-semibold mb-1">Formulation Standard</span>
          <span>100% Vegan • 0% Fragrance</span>
        </div>
      </div>
    </div>
  );
};
