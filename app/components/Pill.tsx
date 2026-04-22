"use client";

import { useAutumnMode } from "./PetalContext";

const TRACK_W = 64;
const TRACK_H = 34;
const KNOB = 28;
const PAD = 3;
const ICON_SIZE = 16;

function SunIcon({ size = ICON_SIZE }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function SakuraIcon({ size = ICON_SIZE }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 9.5 5.5 12 8.5C14.5 5.5 12 2 12 2Z" fill="currentColor" opacity="0.9" />
      <path d="M5.1 6.5C5.1 6.5 9.3 6.8 10.2 10.2C6.8 9.3 5.1 6.5 5.1 6.5Z" fill="currentColor" opacity="0.85" />
      <path d="M18.9 6.5C18.9 6.5 14.7 6.8 13.8 10.2C17.2 9.3 18.9 6.5 18.9 6.5Z" fill="currentColor" opacity="0.85" />
      <path d="M3 14C3 14 7.2 12.5 9.5 15.5C6 16 3 14 3 14Z" fill="currentColor" opacity="0.8" />
      <path d="M21 14C21 14 16.8 12.5 14.5 15.5C18 16 21 14 21 14Z" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="11" r="2.5" fill="currentColor" opacity="0.3" />
      <path d="M12 13.5C12 13.5 11 18 12 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export default function Pill() {
  const { autumnMode, toggleAutumn } = useAutumnMode();
  const knobX = autumnMode ? TRACK_W - KNOB - PAD : PAD;

  return (
    <button
      className="relative flex items-center shrink-0 rounded-full cursor-pointer select-none transition-colors duration-300"
      style={{ width: TRACK_W, height: TRACK_H, backgroundColor: autumnMode ? "#D4A59E66" : "#C8B4AF33" }}
      onClick={toggleAutumn}
      role="switch"
      aria-checked={autumnMode}
      aria-label="Toggle autumn cherry blossom mode"
    >
      <div
        className="absolute rounded-full bg-white flex items-center justify-center"
        style={{
          width: KNOB,
          height: KNOB,
          top: PAD,
          left: knobX,
          boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
          transition: "left 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          color: autumnMode ? "#C09088" : "#8A8580",
        }}
      >
        <div
          className="absolute transition-opacity duration-300"
          style={{ opacity: autumnMode ? 0 : 1 }}
        >
          <SunIcon />
        </div>
        <div
          className="absolute transition-opacity duration-300"
          style={{ opacity: autumnMode ? 1 : 0 }}
        >
          <SakuraIcon />
        </div>
      </div>
    </button>
  );
}
