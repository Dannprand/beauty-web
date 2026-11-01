import { useRef, useState } from "react";

export function useVideoPlayer(defaultPlaying = true, defaultMuted = true) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(defaultPlaying);
  const [isMuted, setIsMuted] = useState(defaultMuted);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return {
    videoRef,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    togglePlay,
    toggleMute,
  };
}

