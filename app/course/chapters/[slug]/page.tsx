"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { CopyIcon } from "../../../components/Icons";
import { useState } from "react";
import { useTranslation } from "../../../components/LanguageContext";

function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      <p className="text-[15px] text-accent-pink font-semibold pt-2">{label}</p>
      <div className="flex items-start justify-between gap-4 w-full rounded-xl bg-dark px-6 py-5">
        <pre className="text-sm leading-6 text-[#E8E4DF] font-mono whitespace-pre-wrap flex-1">
          {code}
        </pre>
        <button
          onClick={handleCopy}
          className="shrink-0 w-8 h-8 flex items-center justify-center text-[#E8E4DF]/60 hover:text-[#E8E4DF] transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <span className="text-xs">✓</span>
          ) : (
            <CopyIcon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}

export default function ChapterPage() {
  const { t } = useTranslation();
  const ch = t.chapter01;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <article className="w-full max-w-[800px] mx-auto px-5 lg:px-8 pt-8 lg:pt-12 pb-16">
        {/* Back link */}
        <Link
          href="/course"
          className="text-sm tracking-[0.01em] text-accent-pink font-medium hover:underline"
        >
          {ch.backLink}
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] tracking-[0.12em] uppercase text-text-secondary font-semibold">
              {ch.label}
            </p>
            <h1 className="font-serif text-4xl lg:text-[52px] lg:leading-[60px] tracking-[-0.03em] text-text-primary">
              {ch.title}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-text-secondary">{ch.date}</span>
            <span className="text-sm text-text-secondary">{ch.readTime}</span>
            <span className="px-3 py-1 rounded-full bg-tag text-tag-text text-[11px] font-medium">
              {ch.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col gap-4">
            <p className="text-base leading-7 text-text-body">
              {ch.intro1}
            </p>
            <p className="text-base leading-7 text-text-body">
              {ch.intro2}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              {ch.section1Title}
            </h2>
            <p className="text-base leading-7 text-text-body">
              {ch.section1Text}
            </p>
            <CodeBlock
              label={ch.section1CodeLabel}
              code={ch.section1Code}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              {ch.section2Title}
            </h2>
            <p className="text-base leading-7 text-text-body">
              {ch.section2Text}
            </p>
            <CodeBlock
              label={ch.section2CodeLabel}
              code={ch.section2Code}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              {ch.section3Title}
            </h2>
            <p className="text-base leading-7 text-text-body">
              {ch.section3Text1}
            </p>
            <p className="text-base leading-7 text-text-body">
              {ch.section3Text2}
            </p>
            <CodeBlock
              label={ch.section3CodeLabel}
              code={ch.section3Code}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              {ch.section4Title}
            </h2>
            <p className="text-base leading-7 text-text-body">
              {ch.section4Text1}
            </p>
            <p className="text-base leading-7 text-text-body">
              {ch.section4Text2}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16">
          <div className="w-full h-px bg-dark/[0.08]" />
          <div className="flex items-start justify-between pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.02em] text-text-secondary font-medium">
                {ch.navPrevious}
              </span>
              <span className="text-sm text-text-secondary">{ch.noPrevious}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
