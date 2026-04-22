"use client";

import { useAutumnMode } from "./PetalContext";

const desktopPetals = [
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

const mobilePetals = [
  { pctTop: 5, pctLeft: 75, rx: 10, ry: 7, rotate: -20, fill: "#EAAFAF", opacity: 0.4 },
  { pctTop: 12, pctLeft: 88, rx: 7, ry: 5, rotate: 15, fill: "#F2C6C6", opacity: 0.35 },
  { pctTop: 8, pctLeft: 15, rx: 6, ry: 4, rotate: 40, fill: "#D4A0A0", opacity: 0.2 },
  { pctTop: 20, pctLeft: 92, rx: 9, ry: 6, rotate: -35, fill: "#E8B4B4", opacity: 0.38 },
  { pctTop: 28, pctLeft: 5, rx: 8, ry: 5.5, rotate: 25, fill: "#F2C6C6", opacity: 0.18 },
  { pctTop: 35, pctLeft: 82, rx: 11, ry: 7.5, rotate: -10, fill: "#EAAFAF", opacity: 0.42 },
  { pctTop: 42, pctLeft: 20, rx: 6, ry: 4, rotate: -45, fill: "#D4A0A0", opacity: 0.15 },
  { pctTop: 48, pctLeft: 70, rx: 8, ry: 5.5, rotate: 30, fill: "#E8B4B4", opacity: 0.3 },
  { pctTop: 55, pctLeft: 10, rx: 7, ry: 5, rotate: -28, fill: "#F2C6C6", opacity: 0.22 },
  { pctTop: 60, pctLeft: 90, rx: 9, ry: 6, rotate: 18, fill: "#EAAFAF", opacity: 0.35 },
  { pctTop: 68, pctLeft: 40, rx: 6, ry: 4, rotate: -50, fill: "#D4A0A0", opacity: 0.2 },
  { pctTop: 72, pctLeft: 85, rx: 10, ry: 7, rotate: 12, fill: "#E8B4B4", opacity: 0.32 },
  { pctTop: 78, pctLeft: 8, rx: 8, ry: 5.5, rotate: -22, fill: "#F2C6C6", opacity: 0.25 },
  { pctTop: 82, pctLeft: 60, rx: 7, ry: 5, rotate: 38, fill: "#EAAFAF", opacity: 0.28 },
  { pctTop: 88, pctLeft: 30, rx: 9, ry: 6, rotate: -15, fill: "#D4A0A0", opacity: 0.3 },
  { pctTop: 92, pctLeft: 78, rx: 11, ry: 7, rotate: 45, fill: "#E8B4B4", opacity: 0.36 },
  { pctTop: 15, pctLeft: 50, rx: 5, ry: 3.5, rotate: 55, fill: "#F2C6C6", opacity: 0.16 },
  { pctTop: 45, pctLeft: 95, rx: 7, ry: 5, rotate: -8, fill: "#EAAFAF", opacity: 0.33 },
];

function PetalSVG({ rx, ry, fill, rotate, opacity }: { rx: number; ry: number; fill: string; rotate: number; opacity: number }) {
  return (
    <svg width={rx * 2} height={ry * 2} viewBox={`0 0 ${rx * 2} ${ry * 2}`} fill="none">
      <ellipse cx={rx} cy={ry} rx={rx} ry={ry} fill={fill} transform={`rotate(${rotate} ${rx} ${ry})`} opacity={opacity} />
    </svg>
  );
}

export default function Petals() {
  const { autumnMode } = useAutumnMode();

  return (
    <>
      {/* Desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block" aria-hidden="true">
        {desktopPetals.map((p, i) => (
          <div
            key={i}
            className="absolute transition-opacity duration-700"
            style={{
              top: `${(p.top / 836) * 100}%`,
              left: `${(p.left / 1440) * 100}%`,
              opacity: autumnMode ? 1 : 0,
            }}
          >
            <PetalSVG rx={p.rx} ry={p.ry} fill={p.fill} rotate={p.rotate} opacity={p.opacity} />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none lg:hidden" aria-hidden="true">
        {mobilePetals.map((p, i) => (
          <div
            key={i}
            className="absolute transition-opacity duration-700"
            style={{
              top: `${p.pctTop}%`,
              left: `${p.pctLeft}%`,
              opacity: autumnMode ? 1 : 0,
            }}
          >
            <PetalSVG rx={p.rx} ry={p.ry} fill={p.fill} rotate={p.rotate} opacity={p.opacity} />
          </div>
        ))}
      </div>
    </>
  );
}
