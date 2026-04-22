"use client";

import { useAutumnMode } from "./PetalContext";
import { useTranslation } from "./LanguageContext";

export default function HeroBio() {
  const { autumnMode } = useAutumnMode();
  const { t } = useTranslation();

  return (
    <div
      className="rounded-2xl px-6 py-6 lg:px-9 lg:py-8 w-full max-w-[480px] shrink-0 transition-all duration-500"
      style={{
        backgroundColor: autumnMode ? "rgba(26,26,26,0.55)" : "rgba(26,26,26,0.03)",
        backdropFilter: autumnMode ? "blur(8px)" : "none",
      }}
    >
      <p
        className="text-[15px] leading-[26px] lg:text-base lg:leading-7 transition-all duration-500"
        style={{
          color: autumnMode ? "#FFFFFF" : "#4A4A4A",
          fontWeight: autumnMode ? 500 : 300,
        }}
      >
        {t.hero.bio}
      </p>
    </div>
  );
}
