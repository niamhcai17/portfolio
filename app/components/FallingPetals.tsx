"use client";

import { useEffect, useRef } from "react";
import { useAutumnMode } from "./PetalContext";

const COLORS = ["#EAAFAF", "#D4A0A0", "#F2C6C6", "#E8B4B4"];
const MAX_FALLING = 40;
const MAX_GROUND = 90;
const SPAWN_INTERVAL = 50;

type FallingPetal = {
  x: number;
  y: number;
  rx: number;
  ry: number;
  rotation: number;
  rotationSpeed: number;
  speedY: number;
  swayAmplitude: number;
  swaySpeed: number;
  swayOffset: number;
  drift: number;
  opacity: number;
  targetOpacity: number;
  color: string;
};

type GroundPetal = {
  xPct: number;
  rx: number;
  ry: number;
  rotation: number;
  opacity: number;
  targetOpacity: number;
  color: string;
  yOffset: number;
};

function makeFalling(vw: number): FallingPetal {
  const rx = 5 + Math.random() * 9;
  return {
    x: Math.random() * vw,
    y: -(Math.random() * 150 + 20),
    rx,
    ry: rx * 0.65,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 1.4,
    speedY: 0.25 + Math.random() * 0.55,
    swayAmplitude: 20 + Math.random() * 35,
    swaySpeed: 0.6 + Math.random() * 0.8,
    swayOffset: Math.random() * Math.PI * 2,
    drift: (Math.random() - 0.5) * 0.2,
    opacity: 0,
    targetOpacity: 0.2 + Math.random() * 0.35,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

function makeGround(): GroundPetal {
  const rx = 5 + Math.random() * 11;
  return {
    xPct: Math.random(),
    rx,
    ry: rx * 0.65,
    rotation: Math.random() * 360,
    opacity: 0,
    targetOpacity: 0.25 + Math.random() * 0.4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    yOffset: Math.random() * 35,
  };
}

export default function FallingPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { autumnMode } = useAutumnMode();
  const modeRef = useRef(autumnMode);
  const fallingRef = useRef<FallingPetal[]>([]);
  const groundRef = useRef<GroundPetal[]>([]);
  const frameRef = useRef(0);
  const timeRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const groundSpawnTimerRef = useRef(0);

  modeRef.current = autumnMode;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvas.width = vw * dpr;
      canvas.height = vh * dpr;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const drawEllipse = (
      cx: number,
      cy: number,
      rx: number,
      ry: number,
      rot: number,
      color: string,
      alpha: number,
    ) => {
      if (alpha < 0.01) return;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    };

    const getFooterY = (): number | null => {
      const footer = document.querySelector("footer");
      if (!footer) return null;
      return footer.getBoundingClientRect().top;
    };

    const animate = () => {
      if (!running) return;

      const on = modeRef.current;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const footerY = getFooterY();
      const floorY = footerY !== null ? Math.min(footerY, vh) : vh;

      timeRef.current += 16;
      const t = timeRef.current / 1000;

      const isMobile = vw < 1024;

      if (on) {
        if (!isMobile) {
          spawnTimerRef.current += 16;
          if (fallingRef.current.length < MAX_FALLING && spawnTimerRef.current >= SPAWN_INTERVAL) {
            fallingRef.current.push(makeFalling(vw));
            spawnTimerRef.current = 0;
          }
        }

        groundSpawnTimerRef.current += 16;
        if (groundRef.current.length < MAX_GROUND && groundSpawnTimerRef.current >= SPAWN_INTERVAL * 0.6) {
          groundRef.current.push(makeGround());
          groundSpawnTimerRef.current = 0;
        }
      }

      const FADE_SPEED = 0.03;

      for (const p of fallingRef.current) {
        if (on) {
          p.opacity = Math.min(p.opacity + FADE_SPEED, p.targetOpacity);
        } else {
          p.opacity = Math.max(p.opacity - FADE_SPEED, 0);
        }
      }

      for (const g of groundRef.current) {
        if (on) {
          g.opacity = Math.min(g.opacity + FADE_SPEED * 0.5, g.targetOpacity);
        } else {
          g.opacity = Math.max(g.opacity - FADE_SPEED, 0);
        }
      }

      if (!on) {
        fallingRef.current = fallingRef.current.filter((p) => p.opacity > 0.01);
        groundRef.current = groundRef.current.filter((g) => g.opacity > 0.01);
      }

      const hasContent = fallingRef.current.length > 0 || groundRef.current.length > 0;

      if (!on && !hasContent) {
        ctx.clearRect(0, 0, vw, vh);
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, vw, vh);

      for (const p of fallingRef.current) {
        p.y += p.speedY;
        p.x += p.drift + Math.sin(t * p.swaySpeed + p.swayOffset) * p.swayAmplitude * 0.006;
        p.rotation += p.rotationSpeed;

        if (p.y > floorY + 10) {
          if (on) {
            Object.assign(p, makeFalling(vw));
          } else {
            p.opacity = 0;
          }
        }
        if (p.x < -40) p.x = vw + 20;
        if (p.x > vw + 40) p.x = -20;

        drawEllipse(p.x, p.y, p.rx, p.ry, p.rotation, p.color, p.opacity);
      }

      if (footerY !== null && footerY < vh) {
        for (const g of groundRef.current) {
          const gx = g.xPct * vw;
          const gy = footerY - g.yOffset;
          drawEllipse(gx, gy, g.rx, g.ry, g.rotation, g.color, g.opacity);
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
