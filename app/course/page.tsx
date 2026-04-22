import Link from "next/link";
import Navbar from "../components/Navbar";
import { LinkedInIcon, ResumeIcon, MailIcon } from "../components/Icons";

const chapters = [
  {
    slug: "understanding-visual-hierarchy",
    number: "01",
    category: "Design Fundamentals",
    title: "Understanding Visual Hierarchy",
    description:
      "How I learned to guide the eye through a layout — size, contrast, spacing, and the invisible structure behind every good design.",
    date: "Apr 2026",
  },
];

export default function Course() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="flex flex-col items-center px-8 lg:px-[120px] pt-8 pb-6 gap-3">
        <p className="text-[11px] tracking-[0.12em] uppercase text-text-muted font-semibold">
          My Design Journey
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl lg:leading-[58px] text-[#2C2C2C]">
          Learning to Design
        </h1>
        <p className="text-sm leading-[22px] text-text-muted font-normal text-center max-w-[480px]">
          Documenting my step-by-step journey improving my design criteria — from fundamentals to real decisions in real projects.
        </p>
      </section>

      {/* Chapter cards */}
      <section className="flex flex-wrap gap-6 px-8 lg:px-[120px] py-8 flex-grow">
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/course/chapters/${chapter.slug}`}
            className="flex flex-col justify-between w-full sm:w-[386px] h-auto sm:h-[386px] rounded-xl bg-card p-7 group hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.1em] uppercase text-text-muted font-semibold">
                  Chapter {chapter.number}
                </span>
                <span className="px-[10px] py-1 rounded-full bg-[#3A3A3A] text-tag-text text-[11px] font-medium">
                  {chapter.category}
                </span>
              </div>
              <h2 className="font-serif text-[26px] leading-8 text-[#2C2C2C]">
                {chapter.title}
              </h2>
            </div>

            <div className="flex flex-col gap-3 mt-8 sm:mt-0">
              <p className="text-[13px] leading-5 text-[#5C5955] font-normal">
                {chapter.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-text-muted">{chapter.date}</span>
                <span className="font-serif text-lg text-text-primary group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-4 py-5 px-6 border-t border-[#D5D0C8] lg:flex-row lg:justify-between lg:h-16 lg:py-0 lg:px-[120px]">
        <p className="text-[11px] leading-[14px] text-[#8A8580] lg:text-xs lg:leading-4">
          © 2026 Juli Riveros. Designed & coded with care.
        </p>
        <div className="flex items-center gap-5 lg:gap-6">
          <a href="http://www.linkedin.com/in/julissariveros" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="w-5 h-5 text-[#8A8580] hover:text-text-primary transition-colors" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <ResumeIcon className="w-5 h-5 text-[#8A8580] hover:text-text-primary transition-colors" />
          </a>
          <a href="mailto:julissariveros26@gmail.com" aria-label="Email">
            <MailIcon className="w-5 h-5 text-[#8A8580] hover:text-text-primary transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
}
