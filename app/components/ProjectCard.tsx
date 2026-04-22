"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "./LanguageContext";

interface ProjectCardProps {
  category: string;
  title: string;
  tags: string[];
  description: string;
  link: string;
  images: { src: string; alt: string }[];
}

export default function ProjectCard({ category, title, tags, description, link, images }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [order, setOrder] = useState([0, 1, 2]);
  const { t } = useTranslation();

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reset order when card leaves viewport
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const resetObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOrder([0, 1, 2]);
        }
      },
      { threshold: 0 }
    );

    resetObserver.observe(el);
    return () => resetObserver.disconnect();
  }, []);

  const handleClick = (clickedIndex: number) => {
    if (order.indexOf(clickedIndex) === 0) return;
    const newOrder = [...order];
    const currentPos = newOrder.indexOf(clickedIndex);
    newOrder.splice(currentPos, 1);
    newOrder.unshift(clickedIndex);
    setOrder(newOrder);
  };

  const positions = [
    { top: "0%", left: "0%", rotate: "-2deg", zIndex: 3 },
    { top: "12%", left: "16%", rotate: "1deg", zIndex: 2 },
    { top: "24%", left: "28%", rotate: "3deg", zIndex: 1 },
  ];

  return (
    <section ref={cardRef} className="w-full px-5 lg:px-[120px] py-4 pb-8 lg:pb-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-[1200px] mx-auto bg-[#ECEAE5] rounded-xl px-6 py-8 lg:p-16">
        {/* Info */}
        <div className="flex flex-col gap-4 lg:w-1/2 shrink-0">
          <p
            className={`text-[11px] lg:text-xs tracking-[0.08em] uppercase font-semibold text-text-secondary transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {category}
          </p>
          <h2
            className={`font-serif text-[36px] leading-[42px] lg:text-[3.25rem] lg:leading-[1.1] tracking-[-0.02em] text-text-primary transition-all duration-700 delay-[80ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>
          <div
            className={`flex flex-wrap gap-1.5 lg:gap-2 mt-1 transition-all duration-700 delay-[160ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-[5px] rounded-full bg-tag text-tag-text text-[11px] lg:text-xs tracking-[0.01em] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <p
            className={`text-sm leading-6 lg:text-base lg:leading-[1.7] text-text-secondary font-normal max-w-[440px] mt-1 transition-all duration-700 delay-[240ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {description}
          </p>
          <div
            className={`mt-1 transition-all duration-700 delay-[320ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 lg:px-7 lg:py-3 rounded-full bg-dark text-tag-text text-[13px] lg:text-sm tracking-[0.01em] font-semibold hover:bg-[#333] hover:-translate-y-px transition-all"
            >
              {t.projectCard.viewSite}
            </a>
          </div>
        </div>

        {/* Screenshot cascade */}
        <div
          className={`relative w-full lg:w-1/2 aspect-[4/3] max-w-[480px] mx-auto group transition-all duration-700 delay-[400ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {images.map((img, imgIndex) => {
            const posIndex = order.indexOf(imgIndex);
            const pos = positions[posIndex];

            return (
              <div
                key={img.src}
                onClick={() => handleClick(imgIndex)}
                className="absolute w-[72%] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.14),0_4px_12px_rgba(0,0,0,0.08)]"
                style={{
                  top: pos.top,
                  left: pos.left,
                  rotate: pos.rotate,
                  zIndex: pos.zIndex,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="eager"
                  sizes="(max-width: 480px) 65vw, (max-width: 768px) 68vw, (max-width: 1024px) 35vw, 35vw"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
