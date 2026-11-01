"use client";

import React from "react";
import Image from "next/image";
import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";
import { getOrderWhatsAppUrl } from "@/utils/whatsapp";
import { useOrderQuantity } from "@/hooks/useOrderQuantity";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquireEmail: (e: React.MouseEvent) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  onInquireEmail,
}) => {
  const { quantity, increment, decrement, unitPrice, totalPrice } =
    useOrderQuantity(1, 1, 10);

  if (!isOpen) return null;

  const whatsappOrderUrl = getOrderWhatsAppUrl(quantity, unitPrice);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0e0e0e] text-white w-full max-w-lg rounded-[2px] p-6 sm:p-8 border border-white/20 shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-[2px] bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-all cursor-pointer"
          aria-label="Close Acquisition Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d08c81] block">
            DIRECT ALLOCATION DESK
          </span>
          <h3 className="text-xl sm:text-2xl font-medium uppercase text-white tracking-tight">
            Acquire Beauty Lotion
          </h3>
          <p className="text-xs text-stone-400 font-light font-mono">
            150 ML FLACON • COMPLIMENTARY EXPRESS GLOBAL DISPATCH
          </p>
        </div>

        {/* Product Summary Row */}
        <div className="bg-[#141414] rounded-[2px] p-4 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="relative w-14 h-14 rounded-[2px] bg-black overflow-hidden shrink-0 border border-white/15">
              <Image
                src="/assets/prototype%20produk%20lotion.jpg"
                alt="Beauty Lotion"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white uppercase tracking-wider">
                Beauty Lotion
              </h4>
              <span className="text-xs font-mono text-[#d08c81]">
                {formatCurrency(unitPrice)}
              </span>
            </div>
          </div>

          {/* Quantity Counter */}
          <div className="flex items-center gap-2 bg-black rounded-[2px] p-1 border border-white/15">
            <button
              onClick={decrement}
              className="w-7 h-7 rounded-[2px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-xs font-mono font-semibold">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="w-7 h-7 rounded-[2px] bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 text-xs font-mono border-y border-white/10 py-3 text-stone-300">
          <div className="flex justify-between">
            <span>
              SUBTOTAL ({quantity} UNIT{quantity > 1 ? "S" : ""})
            </span>
            <span className="text-white">{formatCurrency(totalPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span>PRIORITY INSURED DISPATCH</span>
            <span className="text-emerald-400 uppercase">COMPLIMENTARY</span>
          </div>
          <div className="flex justify-between text-sm pt-2 text-white border-t border-white/10 font-bold">
            <span>TOTAL ALLOCATION</span>
            <span className="text-[#d08c81] text-base">
              {formatCurrency(totalPrice)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-1">
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full rounded-[2px] bg-white hover:bg-stone-200 text-black font-semibold py-3.5 text-xs tracking-[0.25em] uppercase transition-all flex items-center justify-center gap-2 text-center"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirm Order via WhatsApp</span>
          </a>

          <button
            onClick={(e) => {
              onClose();
              onInquireEmail(e);
            }}
            className="w-full rounded-[2px] border border-white/20 hover:border-white text-white text-xs tracking-[0.2em] uppercase py-3 transition-all text-center cursor-pointer font-mono"
          >
            Inquire via Email Form
          </button>
        </div>
      </div>
    </div>
  );
};
