"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PetalProvider } from "./components/PetalContext";
import HeroVideo from "./components/HeroVideo";
import HeroTitle from "./components/HeroTitle";
import HeroBio from "./components/HeroBio";
import Petals from "./components/Petals";
import Pill from "./components/Pill";
import FallingPetals from "./components/FallingPetals";
import ProjectCard from "./components/ProjectCard";
import { LinkedInIcon, ResumeIcon, MailIcon } from "./components/Icons";
import { useTranslation } from "./components/LanguageContext";

const projectImages = [
  [
    { src: "/images/englishgarden-1.png", alt: "EnglishGarden dashboard with reading progress and stats" },
    { src: "/images/englishgarden-2.png", alt: "EnglishGarden reading session with phonetic transcription" },
    { src: "/images/englishgarden-3.png", alt: "EnglishGarden pronunciation drill with phoneme breakdown" },
  ],
  [
    { src: "/images/valentines-1.png", alt: "Tap to Open My Love pixel heart landing screen" },
    { src: "/images/valentines-2.png", alt: "Connect the dots canvas with numbered words" },
    { src: "/images/valentines-3.png", alt: "Will you be my valentine proposal with confetti" },
  ],
  [
    { src: "/images/restribo-1.png", alt: "Restribo hero section with building background" },
    { src: "/images/restribo-2.png", alt: "Restribo services section" },
    { src: "/images/restribo-3.png", alt: "Restribo contact section" },
  ],
];

const projectLinks = [
  "https://englishgarden.vercel.app/",
  "https://keep-as-a-secret.vercel.app/",
  "https://julriverosq.github.io/restribo-landing/",
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <PetalProvider>
    <FallingPetals />
    <div className="flex flex-col min-h-screen relative z-[2]">
      {/* Hero — single 836px viewport block matching Paper design */}
      <section className="relative flex flex-col lg:h-[836px] bg-bg overflow-hidden">
        <Navbar />

        <HeroVideo />
        <Petals />

        <HeroTitle />

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between px-5 lg:px-[120px] pb-10 lg:pb-[50px] grow basis-0 relative">
          <HeroBio />
          <div className="flex flex-col items-center pt-6 lg:pt-0 pb-[14px] relative">
            <Pill />
          </div>
        </div>
      </section>

      {/* Projects */}
      <div className="flex flex-col pb-16">
        {t.projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            category={project.category}
            title={project.title}
            tags={project.tags}
            description={project.description}
            link={projectLinks[i]}
            images={projectImages[i]}
          />
        ))}
      </div>

      {/* Contact CTA */}
      <section className="flex flex-col items-center text-center px-5 lg:px-8 pt-16 lg:pt-[128px] pb-12">
        <div className="flex flex-col items-center gap-4 lg:gap-6 max-w-[1200px] pb-12">
          <h2 id="contact-title" className="font-serif text-[40px] leading-[46px] lg:text-[96px] lg:leading-[104px] tracking-[-0.02em] text-text-primary">
            {t.contact.greeting}
          </h2>
          <p className="font-serif text-[32px] leading-[40px] lg:text-5xl lg:leading-[58px] tracking-[-0.02em] text-text-primary">
            {t.contact.cta}{" "}
            <a href="mailto:julissariveros26@gmail.com" className="border-b-2 border-text-primary pb-[2px]">{t.contact.ctaUnderline}</a>
          </p>
          <p className="text-sm leading-5 lg:text-base text-[#666666] max-w-[320px] lg:max-w-[600px]">
            {t.contact.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 lg:gap-16 pb-12 lg:pb-20">
          <a href="http://www.linkedin.com/in/julissariveros" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="w-7 h-7 text-text-primary hover:text-text-secondary transition-colors" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <ResumeIcon className="w-7 h-7 text-text-primary hover:text-text-secondary transition-colors" />
          </a>
          <a href="mailto:julissariveros26@gmail.com" aria-label="Email">
            <MailIcon className="w-7 h-7 text-text-primary hover:text-text-secondary transition-colors" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
    </PetalProvider>
  );
}
