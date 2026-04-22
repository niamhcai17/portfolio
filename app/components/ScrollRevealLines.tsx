"use client";

import { useEffect, useRef } from "react";

interface Line {
  text: string;
  partial?: string;
}

export default function ScrollRevealLines({ lines }: { lines: Line[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll<HTMLSpanElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.color = "white";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 }
    );

    spans.forEach((span) => observer.observe(span));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col max-w-[1120px]">
      {lines.map((line, i) => (
        <div key={i} className="flex flex-wrap">
          <span
            data-reveal
            className="font-serif text-4xl lg:text-[66px] lg:leading-[88px] text-white/15 transition-colors duration-700 ease-out"
          >
            {line.text}
          </span>
          {line.partial && (
            <span
              data-reveal
              className="font-serif text-4xl lg:text-[66px] lg:leading-[88px] text-white/15 transition-colors duration-700 ease-out"
            >
              {line.partial}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
