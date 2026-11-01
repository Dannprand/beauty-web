"use client";

import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { SENSORY_REELS } from "@/constants/product";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";

export const CinemaSection: React.FC = () => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const {
    videoRef,
    isPlaying,
    setIsPlaying,
    isMuted,
    togglePlay,
    toggleMute,
  } = useVideoPlayer(true, true);

  const handleSelectReel = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
  };

  const currentReel = SENSORY_REELS[activeReelIndex];

  return (
    <section
      id="cinema"
      className="py-24 sm:py-36 bg-black text-white relative overflow-hidden border-b border-white/10"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Monumental Motto */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16 sm:mb-24">
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#d08c81] block">
            LATIN FORMULATION MAXIM
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[100px] font-medium tracking-tight uppercase leading-[0.85] [text-wrap:balance]">
            SANITAS IN CORPORE VIVIDO
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light italic font-serif tracking-wide pt-2">
            “For the resilient, no cutaneous barrier is fragile.”
          </p>
        </div>

        {/* Cinema Theatre Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-white/15 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 block">
              02 // MOTION CINEMA THEATRE
            </span>
            <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-tight text-white">
              The Living Formulation In Motion
            </h3>
          </div>

          {/* Reel Tabs */}
          <div className="flex flex-wrap items-center gap-2 border border-white/20 p-1 rounded-[2px] bg-[#0c0c0c]">
            {SENSORY_REELS.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => handleSelectReel(idx)}
                className={`rounded-[2px] px-3.5 sm:px-5 py-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all cursor-pointer ${
                  activeReelIndex === idx
                    ? "bg-white text-black font-semibold shadow-lg"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {reel.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Main Cinema Screen */}
        <div className="relative aspect-video w-full rounded-[2px] overflow-hidden border border-white/20 bg-neutral-950 shadow-2xl group">
          <video
            ref={videoRef}
            key={currentReel.src}
            src={currentReel.src}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Corner Crosshairs & Telemetry */}
          <div className="absolute top-4 left-4 z-20 text-[9px] font-mono tracking-widest uppercase text-white/80 bg-black/70 px-3 py-1 border border-white/15 rounded-[2px]">
            {currentReel.badge} • {currentReel.telemetry}
          </div>

          <div className="absolute top-4 right-4 z-20 text-[9px] font-mono tracking-widest uppercase text-white/80 bg-black/70 px-3 py-1 border border-white/15 rounded-[2px]">
            FORMAT // 16:9 NATIVE
          </div>

          {/* Central Play/Pause Trigger */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-2xl hover:scale-110"
            aria-label={isPlaying ? "Pause Cinema Video" : "Play Cinema Video"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>

          {/* Bottom Screen Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20">
            <div className="space-y-1">
              <h4 className="text-base sm:text-xl font-medium uppercase text-white tracking-tight">
                {currentReel.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
                {currentReel.subtitle}
              </p>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={togglePlay}
                className="rounded-[2px] px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                onClick={toggleMute}
                className="rounded-[2px] px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-[#d08c81]" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
                <span>{isMuted ? "UNMUTE" : "MUTED"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Dual Telemetry Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {SENSORY_REELS.filter((_, idx) => idx !== activeReelIndex).map(
            (subReel) => (
              <div
                key={subReel.id}
                onClick={() => {
                  const targetIdx = SENSORY_REELS.findIndex(
                    (r) => r.id === subReel.id
                  );
                  if (targetIdx !== -1) handleSelectReel(targetIdx);
                }}
                className="border border-white/10 hover:border-[#d08c81]/60 p-4 rounded-[2px] bg-[#0c0c0c] flex items-center gap-4 cursor-pointer transition-all group"
              >
                <div className="relative aspect-video w-36 sm:w-48 rounded-[2px] overflow-hidden bg-black shrink-0 border border-white/10">
                  <video
                    src={subReel.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-1.5 left-1.5 text-[8px] font-mono px-1.5 py-0.5 bg-black/80 text-white border border-white/10">
                    {subReel.badge.split(" // ")[0]}
                  </div>
                </div>

                <div className="space-y-1 min-w-0">
                  <span className="text-[9px] font-mono text-[#d08c81] tracking-widest uppercase block">
                    SWITCH REEL VIEW →
                  </span>
                  <h5 className="text-sm font-medium text-white truncate group-hover:text-[#e8c5c1] transition-colors">
                    {subReel.title}
                  </h5>
                  <p className="text-[11px] text-stone-400 line-clamp-1 font-light">
                    {subReel.subtitle}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
