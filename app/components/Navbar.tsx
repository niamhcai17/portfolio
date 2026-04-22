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
    { href: "/", label: t.nav.projects },
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
                  pathname === link.href
                    ? "text-text-primary underline underline-offset-4"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {!pathname.startsWith("/course") && <LanguageToggle />}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-transform ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-transform ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-bg/95 backdrop-blur-sm shadow-[0_1px_0_#0000000F] md:hidden">
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-[0.01em] font-medium ${
                    pathname === link.href
                      ? "text-text-primary underline underline-offset-4"
                      : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
