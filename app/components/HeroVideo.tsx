"use client";

import { useRef, useEffect } from "react";
import { useAutumnMode } from "./PetalContext";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { autumnMode } = useAutumnMode();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (autumnMode) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [autumnMode]);

  return (
    <div
      className="absolute inset-0 overflow-hidden transition-opacity duration-1000"
      style={{ opacity: autumnMode ? 1 : 0 }}
    >
      <video
        ref={videoRef}
        src="/hero.mp4"
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
