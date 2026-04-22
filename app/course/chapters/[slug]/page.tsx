"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { CopyIcon } from "../../../components/Icons";
import { useState } from "react";

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
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <article className="w-full max-w-[800px] mx-auto px-8 pt-12 pb-16">
        {/* Back link */}
        <Link
          href="/course"
          className="text-sm tracking-[0.01em] text-accent-pink font-medium hover:underline"
        >
          ← Back to Course
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] tracking-[0.12em] uppercase text-text-secondary font-semibold">
              Chapter 01
            </p>
            <h1 className="font-serif text-4xl lg:text-[52px] lg:leading-[60px] tracking-[-0.03em] text-text-primary">
              Understanding Visual Hierarchy
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-text-secondary">April 12, 2026</span>
            <span className="text-sm text-text-secondary">8 min read</span>
            <span className="px-3 py-1 rounded-full bg-tag text-tag-text text-[11px] font-medium">
              Design Fundamentals
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col gap-4">
            <p className="text-base leading-7 text-text-body">
              When I started designing, everything felt flat. I&apos;d place elements on a page and nothing stood out — or everything did. The turning point was understanding that design is about directing attention. Visual hierarchy is how you tell someone where to look first, second, and third.
            </p>
            <p className="text-base leading-7 text-text-body">
              In this chapter, I&apos;ll walk through the core principles I learned and the prompts and tools I used along the way to build my intuition.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              Start with the big question
            </h2>
            <p className="text-base leading-7 text-text-body">
              Before touching any tool, I asked Claude to help me understand the fundamentals. This single prompt changed how I approach every layout.
            </p>
            <CodeBlock
              label="Prompt I used"
              code="Explain visual hierarchy in web design. What are the 3 most important principles a beginner should learn first? Give me real examples I can practice."
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              Applying contrast to my own layout
            </h2>
            <p className="text-base leading-7 text-text-body">
              Once I understood the theory, I needed to test it. I opened my portfolio and used this prompt to get a critique of my own hero section.
            </p>
            <CodeBlock
              label="Prompt I used"
              code="Review this hero section for visual hierarchy. Is the heading dominant enough? Does the subtitle feel secondary? What would you change to improve the contrast between elements?"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              The spacing trick that changed everything
            </h2>
            <p className="text-base leading-7 text-text-body">
              One thing I kept getting wrong was spacing. Everything was either crammed together or floating in empty space. The breakthrough was learning that spacing creates grouping — elements that are close together feel related, and generous space between groups creates natural separation.
            </p>
            <p className="text-base leading-7 text-text-body">
              I started using a simple CSS command to audit my own spacing decisions in the browser:
            </p>
            <CodeBlock
              label="Command to inspect spacing"
              code="* { outline: 1px solid rgba(255, 0, 0, 0.15); }"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-[28px] leading-[34px] tracking-[-0.02em] text-text-primary">
              What I took away
            </h2>
            <p className="text-base leading-7 text-text-body">
              Visual hierarchy isn&apos;t about making things bigger or bolder — it&apos;s about making intentional decisions about what matters most. Every element on a page competes for attention. Your job as a designer is to make sure the right things win.
            </p>
            <p className="text-base leading-7 text-text-body">
              The three principles I keep coming back to: size creates importance, contrast creates focus, and spacing creates relationships. Once you see it, you can&apos;t unsee it.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16">
          <div className="w-full h-px bg-dark/[0.08]" />
          <div className="flex items-start justify-between pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.02em] text-text-secondary font-medium">
                PREVIOUS
              </span>
              <span className="text-sm text-text-secondary">No previous chapter</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs tracking-[0.02em] text-text-secondary font-medium">
                NEXT
              </span>
              <span className="font-serif text-lg tracking-[-0.01em] text-text-primary">
                Choosing & Pairing Typefaces →
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
