"use client";

import { useTranslation } from "./LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useTranslation();
  const isEs = lang === "es";

  return (
    <button
      onClick={toggleLang}
      className="relative flex items-center rounded-full cursor-pointer select-none shrink-0"
      style={{
        width: 48,
        height: 24,
        backgroundColor: isEs ? "#D4A59E55" : "#C8B4AF33",
        transition: "background-color 0.3s",
      }}
      role="switch"
      aria-checked={isEs}
      aria-label="Toggle language"
    >
      <div
        className="absolute rounded-full bg-white flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.15)]"
        style={{
          width: 20,
          height: 20,
          top: 2,
          left: isEs ? 26 : 2,
          transition: "left 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <span className="text-[8px] font-semibold tracking-wide text-[#4A4A4A] uppercase leading-none">
          {lang}
        </span>
      </div>
    </button>
  );
}
