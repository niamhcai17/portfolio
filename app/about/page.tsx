"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import ScrollRevealLines from "../components/ScrollRevealLines";
import { LinkedInIcon, DiscordIcon, ResumeIcon } from "../components/Icons";
import { useTranslation } from "../components/LanguageContext";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero quote */}
      <section className="flex flex-col items-center justify-center h-[680px] lg:h-[772px] px-6 lg:px-8 relative">
        <p className="font-serif text-xl/[30px] lg:text-[32px] lg:leading-[44px] text-center text-text-primary max-w-[860px]">
          {t.about.quote}
        </p>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-scroll-hint">
          <span className="text-[11px]/3.5 tracking-[0.12em] uppercase text-text-secondary font-medium">
            {t.about.scrollHint}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B6560"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Who I Am - Dark section */}
      <section className="bg-dark px-6 lg:px-[160px] py-16 lg:py-[120px] flex flex-col lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <p className="text-[11px] tracking-[0.14em] uppercase text-white/35 font-semibold mb-8 lg:mb-12">
            {t.about.sectionLabel}
          </p>
          <ScrollRevealLines lines={t.about.storyLines} />
        </div>
        <div className="hidden lg:block mt-12 lg:mt-0 shrink-0 w-full lg:w-[380px] lg:sticky lg:top-[120px] lg:self-start">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/about.JPEG"
              alt="Juli Riveros"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between px-6 lg:px-20 py-12 lg:py-0 lg:h-[500px] flex-grow gap-10 lg:gap-0">
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-[44px] leading-[52px] lg:text-5xl lg:leading-[56px] text-text-primary/25">
            {t.about.collaborate}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm lg:text-base text-text-secondary lg:text-text-primary">↳</span>
            <a
              href="mailto:julissariveros26@gmail.com"
              className="text-sm lg:text-base text-text-primary underline underline-offset-[3px] decoration-[1px]"
            >
              julissariveros26@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-auto lg:gap-6">
          {[
            { icon: LinkedInIcon, label: "LinkedIn", href: "http://www.linkedin.com/in/julissariveros" },
            { icon: DiscordIcon, label: "Discord", href: "#", hidden: true },
            { icon: ResumeIcon, label: "Resume", href: "/resume.pdf" },
          ].filter(({ hidden }) => !hidden).map(({ icon: Icon, label, href }, i, arr) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 py-3 lg:py-0 ${i < arr.length - 1 ? "border-b border-black/[0.08] lg:border-0" : ""}`}
            >
              <Icon className="w-5 h-5 text-text-primary" />
              <span className="text-sm tracking-[0.06em] uppercase font-normal lg:font-medium text-text-primary">
                {label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
