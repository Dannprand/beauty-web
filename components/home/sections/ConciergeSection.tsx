"use client";

import React, { forwardRef } from "react";
import { MessageCircle, Mail, ExternalLink, Clock, Check, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER, CONCIERGE_EMAIL } from "@/constants/contact";
import { formatPhoneNumber } from "@/utils/formatters";
import { getGeneralWhatsAppUrl } from "@/utils/whatsapp";
import { useConcierge } from "@/hooks/useConcierge";

interface ConciergeSectionProps {
  messageInputRef?: React.RefObject<HTMLTextAreaElement | null>;
}

export const ConciergeSection = forwardRef<HTMLTextAreaElement, ConciergeSectionProps>(
  (props, ref) => {
    const {
      clientName,
      setClientName,
      clientContact,
      setClientContact,
      clientMessage,
      setClientMessage,
      isSubmitting,
      inquirySent,
      errorMessage,
      handleSubmit,
      resetForm,
    } = useConcierge();

    const whatsappUrl = getGeneralWhatsAppUrl();

    return (
      <section
        id="concierge"
        className="py-24 sm:py-36 bg-[#080808] text-white relative overflow-hidden"
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            {/* Left 6 Columns: Direct Channels */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d08c81] block">
                  05 // PRIVATE ADVISORY
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.92] text-white">
                  Direct Allocation & <br />
                  <span className="font-serif italic font-normal text-[#e8c5c1] lowercase">
                    bespoke
                  </span>{" "}
                  Consultation
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                  For reserved batch allocations, personal regimen guidance, or
                  priority worldwide delivery inquiries, our private client
                  advisors remain at your service.
                </p>
              </div>

              {/* Minimalist Channel Links */}
              <div className="space-y-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-[#0f0f0f] hover:bg-[#141414] border border-white/10 hover:border-[#d08c81]/60 rounded-[2px] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[2px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400 block">
                        PRIORITY WHATSAPP CHANNEL
                      </span>
                      <h4 className="text-sm font-mono text-white group-hover:text-[#d08c81] transition-colors">
                        {formatPhoneNumber(WHATSAPP_NUMBER)}
                      </h4>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={`mailto:${CONCIERGE_EMAIL}?subject=Inquiry%20Beauty%20Lotion`}
                  className="flex items-center justify-between p-5 bg-[#0f0f0f] hover:bg-[#141414] border border-white/10 hover:border-[#d08c81]/60 rounded-[2px] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[2px] bg-[#d08c81]/20 text-[#d08c81] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase text-[#d08c81] block">
                        ELECTRONIC CLIENT DESK
                      </span>
                      <h4 className="text-sm font-mono text-white group-hover:text-[#d08c81] transition-colors">
                        {CONCIERGE_EMAIL}
                      </h4>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-white/5 rounded-[2px] text-[11px] font-mono text-stone-400">
                  <Clock className="w-4 h-4 text-[#d08c81] shrink-0" />
                  <span>
                    DESK HOURS: MON – SAT (08:00 – 20:00). EXPRESS GLOBAL
                    ALLOCATION.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Spyker-Style Underline Baseline Form */}
            <div className="lg:col-span-6 border border-white/15 bg-[#0d0d0d] p-6 sm:p-10 rounded-[2px] space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-stone-400 block">
                  TRANSMISSION TERMINAL
                </span>
                <h3 className="text-xl sm:text-2xl font-medium uppercase text-white tracking-tight">
                  Request Allocation Dispatch
                </h3>
              </div>

              {inquirySent ? (
                <div className="border border-emerald-500/40 bg-emerald-950/20 p-8 text-center space-y-4 rounded-[2px]">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-medium text-white uppercase tracking-wider font-mono">
                    Transmission Received
                  </h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Thank you. A dedicated Beauty Lotion advisor has logged your
                    dispatch and will reply shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-xs text-[#d08c81] underline uppercase tracking-widest font-mono pt-2 cursor-pointer"
                  >
                    Submit Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3 text-xs font-mono text-rose-400 bg-rose-950/20 border border-rose-500/30 rounded-[2px]">
                      {errorMessage}
                    </div>
                  )}

                  {/* Underline Baseline Input 1 */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-transparent border-b border-white/30 hover:border-white focus:border-white py-2 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Underline Baseline Input 2 */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">
                      WhatsApp or Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+62 812-3456-7890 or eleanor@domain.com"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      className="w-full bg-transparent border-b border-white/30 hover:border-white focus:border-white py-2 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Underline Baseline Input 3 */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">
                      Inquiry Notes / Specific Bottle Allocation
                    </label>
                    <textarea
                      ref={ref}
                      id="concierge-message-input"
                      rows={2}
                      placeholder="Please note skin type, bottle quantities, or delivery preferences..."
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      className="w-full bg-transparent border-b border-white/30 hover:border-white focus:border-white py-2 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-[2px] bg-white text-black hover:bg-stone-200 font-semibold py-4 text-xs tracking-[0.25em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer pt-3 shadow-lg disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting ? "Transmitting..." : "Transmit To Advisory Desk"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ConciergeSection.displayName = "ConciergeSection";
