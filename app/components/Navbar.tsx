"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "./LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 64) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      const delta = y - lastY.current;
      if (delta > 8) setHidden(true);
      else if (delta < -4) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { t } = useTranslation();

  const links = [
    { href: "/#projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/course", label: t.nav.course },
  ];

  return (
    <>
      <div className="h-16" />
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-16 px-8 bg-bg/95 shadow-[0_1px_0_#0000000F] backdrop-blur-sm transition-transform duration-300"
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
        <div className="flex items-center justify-between w-full max-w-[1200px]">
          <Link href="/" className="font-serif text-2xl tracking-[-0.02em] text-text-primary">
            Juli.
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.01em] font-medium transition-colors ${
                  (link.href === "/#projects" ? pathname === "/" : pathname === link.href)
                    ? "text-text-primary underline underline-offset-4"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className={pathname.startsWith("/course") ? "invisible" : ""}>
              <LanguageToggle />
            </div>
            <button
              className="md:hidden flex items-center justify-center w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round">
                <line x1="0" y1="1" x2="18" y2="1" />
                <line x1="0" y1="8" x2="18" y2="8" />
                <line x1="0" y1="15" x2="18" y2="15" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-bg flex flex-col md:hidden">
          <div className="flex items-center justify-between w-full h-16 px-8">
            <Link href="/" onClick={() => setMenuOpen(false)} className="font-serif text-2xl tracking-[-0.02em] text-text-primary">
              Juli.
            </Link>
            <button
              className="flex items-center justify-center w-8 h-8"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round">
                <line x1="1" y1="1" x2="17" y2="17" />
                <line x1="17" y1="1" x2="1" y2="17" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2 px-8 pt-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-[40px] leading-[52px] tracking-[-0.02em] ${
                  (link.href === "/#projects" ? pathname === "/" : pathname === link.href)
                    ? "text-text-primary"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
