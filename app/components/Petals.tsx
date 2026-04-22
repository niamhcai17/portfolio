"use client";

import { useAutumnMode } from "./PetalContext";

const allPetals = [
  // Level 1 — 10 petals (25%) — scattered across the hero
  { top: 95, left: 1150, rx: 16, ry: 11, rotate: -20, fill: "#EAAFAF", opacity: 0.45 },
  { top: 290, left: 1100, rx: 11, ry: 7.5, rotate: -35, fill: "#F2C6C6", opacity: 0.5 },
  { top: 200, left: 180, rx: 8, ry: 5.5, rotate: 20, fill: "#F2C6C6", opacity: 0.18 },
  { top: 380, left: 1200, rx: 14, ry: 9.5, rotate: -10, fill: "#D4A0A0", opacity: 0.38 },
  { top: 60, left: 1300, rx: 10, ry: 7, rotate: 12, fill: "#E8B4B4", opacity: 0.3 },
  { top: 450, left: 200, rx: 7, ry: 5, rotate: -40, fill: "#EAAFAF", opacity: 0.2 },
  { top: 520, left: 1280, rx: 12, ry: 8, rotate: 15, fill: "#E8B4B4", opacity: 0.35 },
  { top: 160, left: 1380, rx: 9, ry: 6, rotate: -28, fill: "#D4A0A0", opacity: 0.32 },
  { top: 340, left: 50, rx: 6, ry: 4, rotate: 55, fill: "#F2C6C6", opacity: 0.14 },
  { top: 700, left: 1220, rx: 8, ry: 5.5, rotate: -18, fill: "#EAAFAF", opacity: 0.25 },

  // Level 2 — +10 petals (50%)
  { top: 180, left: 1260, rx: 13, ry: 9, rotate: 25, fill: "#D4A0A0", opacity: 0.4 },
  { top: 150, left: 1020, rx: 9, ry: 6.5, rotate: 40, fill: "#E8B4B4", opacity: 0.35 },
  { top: 480, left: 120, rx: 6.5, ry: 4.5, rotate: -25, fill: "#E8B4B4", opacity: 0.15 },
  { top: 30, left: 950, rx: 11, ry: 7, rotate: -8, fill: "#F2C6C6", opacity: 0.28 },
  { top: 620, left: 1050, rx: 10, ry: 7, rotate: 33, fill: "#D4A0A0", opacity: 0.3 },
  { top: 250, left: 320, rx: 7, ry: 5, rotate: -50, fill: "#EAAFAF", opacity: 0.16 },
  { top: 550, left: 350, rx: 9, ry: 6, rotate: 22, fill: "#E8B4B4", opacity: 0.22 },
  { top: 420, left: 1350, rx: 8, ry: 5.5, rotate: -15, fill: "#F2C6C6", opacity: 0.36 },
  { top: 100, left: 500, rx: 6, ry: 4, rotate: 60, fill: "#D4A0A0", opacity: 0.15 },
  { top: 680, left: 280, rx: 10, ry: 6.5, rotate: -42, fill: "#EAAFAF", opacity: 0.2 },

  // Level 3 — +10 petals (75%)
  { top: 460, left: 1080, rx: 10, ry: 7, rotate: 50, fill: "#F2C6C6", opacity: 0.42 },
  { top: 330, left: 1320, rx: 8, ry: 5.5, rotate: -45, fill: "#EAAFAF", opacity: 0.3 },
  { top: 220, left: 950, rx: 7, ry: 5, rotate: -20, fill: "#F2C6C6", opacity: 0.25 },
  { top: 580, left: 1150, rx: 9.5, ry: 6.5, rotate: 30, fill: "#D4A0A0", opacity: 0.32 },
  { top: 40, left: 700, rx: 13, ry: 8.5, rotate: -12, fill: "#EAAFAF", opacity: 0.34 },
  { top: 300, left: 600, rx: 8, ry: 5.5, rotate: 38, fill: "#E8B4B4", opacity: 0.22 },
  { top: 750, left: 900, rx: 11, ry: 7, rotate: -30, fill: "#F2C6C6", opacity: 0.28 },
  { top: 500, left: 500, rx: 7, ry: 5, rotate: 48, fill: "#D4A0A0", opacity: 0.18 },
  { top: 130, left: 80, rx: 9, ry: 6, rotate: -55, fill: "#EAAFAF", opacity: 0.12 },
  { top: 650, left: 650, rx: 10, ry: 6.5, rotate: 18, fill: "#E8B4B4", opacity: 0.26 },

  // Level 4 — +12 petals (100%)
  { top: 430, left: 920, rx: 7.5, ry: 5, rotate: -55, fill: "#EAAFAF", opacity: 0.22 },
  { top: 50, left: 800, rx: 10, ry: 7, rotate: 15, fill: "#F2C6C6", opacity: 0.35 },
  { top: 350, left: 300, rx: 9, ry: 6, rotate: -30, fill: "#D4A0A0", opacity: 0.28 },
  { top: 620, left: 400, rx: 11, ry: 7.5, rotate: 35, fill: "#EAAFAF", opacity: 0.32 },
  { top: 140, left: 600, rx: 8, ry: 5.5, rotate: -15, fill: "#E8B4B4", opacity: 0.2 },
  { top: 500, left: 700, rx: 12, ry: 8, rotate: 45, fill: "#F2C6C6", opacity: 0.38 },
  { top: 770, left: 150, rx: 13, ry: 9, rotate: -22, fill: "#D4A0A0", opacity: 0.3 },
  { top: 80, left: 400, rx: 7, ry: 4.5, rotate: 65, fill: "#EAAFAF", opacity: 0.18 },
  { top: 360, left: 780, rx: 10, ry: 6.5, rotate: -38, fill: "#F2C6C6", opacity: 0.24 },
  { top: 550, left: 1400, rx: 8, ry: 5.5, rotate: 28, fill: "#E8B4B4", opacity: 0.33 },
  { top: 720, left: 550, rx: 14, ry: 9, rotate: -5, fill: "#D4A0A0", opacity: 0.36 },
  { top: 190, left: 1180, rx: 6, ry: 4, rotate: 42, fill: "#EAAFAF", opacity: 0.27 },
];

export default function Petals() {
  const { autumnMode } = useAutumnMode();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block" aria-hidden="true">
      {allPetals.map((p, i) => {
        const pctLeft = (p.left / 1440) * 100;
        const pctTop = (p.top / 836) * 100;
        return (
          <svg
            key={i}
            width={p.rx * 2}
            height={p.ry * 2}
            viewBox={`0 0 ${p.rx * 2} ${p.ry * 2}`}
            fill="none"
            className="absolute transition-opacity duration-700"
            style={{
              top: `${pctTop}%`,
              left: `${pctLeft}%`,
              opacity: autumnMode ? 1 : 0,
            }}
          >
            <ellipse
              cx={p.rx}
              cy={p.ry}
              rx={p.rx}
              ry={p.ry}
              fill={p.fill}
              transform={`rotate(${p.rotate} ${p.rx} ${p.ry})`}
              opacity={p.opacity}
            />
          </svg>
        );
      })}
    </div>
  );
}
