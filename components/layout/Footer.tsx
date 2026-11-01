"use client";

import React from "react";
import { getGeneralWhatsAppUrl } from "@/utils/whatsapp";

interface FooterProps {
  onOpenJournal: () => void;
  onOpenPrivacy: () => void;
  onNavigate: (e: React.MouseEvent, id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenJournal,
  onOpenPrivacy,
  onNavigate,
}) => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <footer className="bg-white text-black border-t border-[#e5e5e5] py-14 sm:py-20">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Top Row: Wordmark & Core Motto */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e5e5e5] pb-8 gap-6">
          <div>
            <span className="font-sans text-2xl sm:text-3xl font-medium tracking-[0.35em] uppercase text-black block">
              BEAUTY LOTION
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-neutral-400 mt-1 block">
              Cellular Skin Fitness • Single Masterpiece Edition
            </span>
          </div>

          <div className="font-serif italic text-neutral-600 text-sm">
            Nulla Tenaci Invia Est Via — Cellular Resilience
          </div>
        </div>

        {/* 4-Column Swiss Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono text-neutral-500">
          <div className="space-y-2">
            <span className="text-black uppercase block font-semibold">Navigation</span>
            <ul className="space-y-1.5">
              <li>
                <a href="#philosophy" onClick={(e) => onNavigate(e, "philosophy")} className="hover:text-black">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#cinema" onClick={(e) => onNavigate(e, "cinema")} className="hover:text-black">
                  Motion Cinema
                </a>
              </li>
              <li>
                <a href="#vessel" onClick={(e) => onNavigate(e, "vessel")} className="hover:text-black">
                  The Vessel
                </a>
              </li>
              <li>
                <a href="#science" onClick={(e) => onNavigate(e, "science")} className="hover:text-black">
                  Actives Matrix
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-black uppercase block font-semibold">Concierge</span>
            <ul className="space-y-1.5">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a href="mailto:concierge@beautylotion.com" className="hover:text-black">
                  Electronic Desk
                </a>
              </li>
              <li>
                <a href="#concierge" onClick={(e) => onNavigate(e, "concierge")} className="hover:text-black">
                  Direct Dispatch
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-black uppercase block font-semibold">Journal & Media</span>
            <ul className="space-y-1.5">
              <li>
                <button onClick={onOpenJournal} className="hover:text-black cursor-pointer">
                  Editorial Volume 01
                </button>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  Instagram Journal
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  TikTok Motion
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-black uppercase block font-semibold">Governance</span>
            <ul className="space-y-1.5">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-black cursor-pointer">
                  Privacy & Data
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-black cursor-pointer">
                  Ethical Standards
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-black cursor-pointer">
                  100% Vegan Charter
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 gap-4">
          <div>© 2026 BEAUTY LOTION. ALL RIGHTS RESERVED.</div>
          <div>ADVANCED CELLULAR RESEARCH // GLOBAL DISPATCH</div>
        </div>
      </div>
    </footer>
  );
};
