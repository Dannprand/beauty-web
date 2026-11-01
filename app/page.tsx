"use client";

import React, { useState, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { NavDrawer } from "@/components/layout/NavDrawer";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { PhilosophySection } from "@/components/home/sections/PhilosophySection";
import { CinemaSection } from "@/components/home/sections/CinemaSection";
import { VesselSection } from "@/components/home/sections/VesselSection";
import { ScienceSection } from "@/components/home/sections/ScienceSection";
import { ConciergeSection } from "@/components/home/sections/ConciergeSection";
import { OrderModal } from "@/components/home/modals/OrderModal";
import { JournalModal } from "@/components/home/modals/JournalModal";
import { PrivacyModal } from "@/components/home/modals/PrivacyModal";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function LuxuryResponsiveLanding() {
  const { scrollTo } = useScrollTo();

  // Navigation drawer state
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  // Modals state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Ref for concierge direct inquiry focus
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleNavigate = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsNavDrawerOpen(false);
    scrollTo(id);
  };

  const handleDirectInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("concierge", "concierge-message-input");
  };

  return (
    <div
      id="top"
      className="relative min-h-screen bg-[#070707] text-[#111111] antialiased selection:bg-[#d08c81]/30 selection:text-white"
    >
      {/* 1. Header Navigation */}
      <Header
        onOpenMenu={() => setIsNavDrawerOpen(true)}
        onOpenOrder={() => setIsOrderModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Fullscreen Editorial Navigation Drawer */}
      <NavDrawer
        isOpen={isNavDrawerOpen}
        onClose={() => setIsNavDrawerOpen(false)}
        onOpenOrder={() => setIsOrderModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 3. Hero Section */}
      <HeroSection
        onOpenOrder={() => setIsOrderModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 4. Architectural Cellular Philosophy */}
      <PhilosophySection onOpenJournal={() => setIsJournalModalOpen(true)} />

      {/* 5. Motion Cinema Theatre */}
      <CinemaSection />

      {/* 6. The Vessel Specification & Acquisition */}
      <VesselSection
        onOpenOrder={() => setIsOrderModalOpen(true)}
        onInquire={handleDirectInquiry}
      />

      {/* 7. Bio-Actives Matrix */}
      <ScienceSection />

      {/* 8. Private Concierge & Consultation Terminal */}
      <ConciergeSection ref={messageInputRef} />

      {/* 9. Swiss Editorial Footer */}
      <Footer
        onOpenJournal={() => setIsJournalModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* ================= MODALS ================= */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onInquireEmail={handleDirectInquiry}
      />

      <JournalModal
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
