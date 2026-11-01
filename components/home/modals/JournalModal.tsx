"use client";

import React from "react";
import { X } from "lucide-react";

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0e0e0e] text-white w-full max-w-2xl rounded-[2px] p-6 sm:p-10 border border-white/20 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-[2px] bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
          aria-label="Close Journal Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d08c81] block">
            JOURNAL // VOLUME 01
          </span>
          <h3 className="text-2xl sm:text-3xl font-medium uppercase text-white tracking-tight">
            The Cellular Paradigm
          </h3>
          <p className="text-xs text-stone-400 font-mono">
            WHY PASSIVE HYDRATION IS OBSOLETE
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-white/10 pt-4">
          <p>
            Conventional skincare treats dehydration as a transient defect,
            layering occlusive waxes over fatigued cells. The outcome is brief
            cosmetic lubrication followed by rapid barrier collapse.
          </p>
          <p>
            <strong>Beauty Lotion</strong> was designed with the mechanical
            precision of high-performance engineering. By synthesizing
            bio-identical ceramides (NP, AP, EOP) with multi-tiered hyaluronate
            polymers, we provide the dermal matrix with physiologically native
            reinforcement.
          </p>
          <p>
            The barrier conditions itself to withstand arid pressure, particulate
            smog, and oxidative decay with effortless serenity.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-[2px] bg-white text-black font-semibold px-6 py-2.5 text-xs tracking-[0.2em] uppercase cursor-pointer"
          >
            Close Journal
          </button>
        </div>
      </div>
    </div>
  );
};

