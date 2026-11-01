"use client";

import React from "react";
import { X, Check } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0e0e0e] text-white w-full max-w-lg rounded-[2px] p-6 sm:p-8 border border-white/20 shadow-2xl relative space-y-5">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-[2px] bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
          aria-label="Close Privacy Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d08c81] block">
            STANDARDS & COMPLIANCE
          </span>
          <h3 className="text-xl sm:text-2xl font-medium uppercase text-white tracking-tight">
            Formulation Commitments
          </h3>
        </div>

        <div className="space-y-3 text-xs text-stone-300 font-light leading-relaxed border-t border-white/10 pt-4">
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
            <span>
              <strong>Client Confidentiality:</strong> Concierge logs and
              consultation requests are strictly protected and never shared or
              monetized.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
            <span>
              <strong>Zero Animal Testing:</strong> 100% Vegan certification
              across both active raw materials and finished Beauty Lotion
              batches.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#d08c81] shrink-0 mt-0.5" />
            <span>
              <strong>UV Flacon Recycling:</strong> Non-reactive flacon designed
              for maximal compound preservation and recyclable end-of-life
              recovery.
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-[2px] border border-white/20 text-white font-mono px-5 py-2 text-xs tracking-wider uppercase hover:border-white cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};

