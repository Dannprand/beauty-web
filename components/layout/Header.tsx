"use client";

import React from "react";
import { ShoppingBag, MessageCircle } from "lucide-react";

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenOrder: () => void;
  onNavigate: (e: React.MouseEvent, id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenOrder,
  onNavigate,
}) => {
  return (
    <header className="relative w-full bg-[#070707] border-b border-white/10 text-white z-30 transition-all">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 grid grid-cols-3 items-center">
        {/* Left: Menu Trigger */}
        <div className="flex items-center justify-start">
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-3 group cursor-pointer p-2 -ml-2 text-white hover:text-[#d08c81] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <div className="w-6 flex flex-col justify-center space-y-1.5">
              <span className="block h-[1.5px] w-6 bg-white group-hover:bg-[#d08c81] transition-transform group-hover:translate-x-1" />
              <span className="block h-[1.5px] w-4 bg-white group-hover:bg-[#d08c81] transition-all group-hover:w-6" />
            </div>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/90 group-hover:text-white">
              Menu
            </span>
          </button>
        </div>

        {/* Center: Brand Title */}
        <div className="flex items-center justify-center">
          <a
            href="#top"
            onClick={(e) => onNavigate(e, "top")}
            className="flex flex-col items-center select-none group cursor-pointer text-center"
            aria-label="Beauty Lotion Brand Mark"
          >
            <span className="font-sans text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white group-hover:text-[#e8c5c1] transition-colors leading-none whitespace-nowrap">
              BEAUTY LOTION
            </span>
          </a>
        </div>

        {/* Right: Acquire & Contact */}
        <div className="flex items-center justify-end space-x-2 sm:space-x-3">
          <button
            onClick={onOpenOrder}
            className="rounded-[2px] bg-white text-black hover:bg-stone-200 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] uppercase font-semibold px-4 sm:px-6 py-2.5 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-lg whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Acquire</span>
          </button>

          <a
            href="#concierge"
            onClick={(e) => onNavigate(e, "concierge")}
            className="hidden sm:flex rounded-[2px] border border-white/25 hover:border-white text-white text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium px-4 py-2.5 transition-all items-center gap-1.5 bg-white/5 whitespace-nowrap cursor-pointer hover:bg-white/10"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#d08c81]" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};
