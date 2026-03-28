"use client";
import { useEffect, useRef } from "react";

const clients = [
  { name: "FeatherDev" },
  { name: "Spherule" },
  { name: "GlobalBank" },
  { name: "Nietzsche" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-[#f5f5f0] flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex justify-end items-center px-6 lg:px-12 pt-20 pb-4">
        <div className="font-mono text-xs tracking-widest uppercase text-[#555550] flex items-center gap-2">
          EN <span className="text-[#0a0a0a]">▾</span>
        </div>
      </div>

      {/* Main hero content */}
      <div ref={heroRef} className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col justify-center pt-4 pb-12">
        
        {/* Sparkle + name row */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {/* Sparkle */}
            <div className="mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 0L15.5 12.5L28 14L15.5 15.5L14 28L12.5 15.5L0 14L12.5 12.5L14 0Z" fill="#0a0a0a"/>
              </svg>
            </div>

            {/* Big name */}
            <h1 className="font-display text-[clamp(72px,14vw,180px)] leading-none tracking-wider text-[#0a0a0a] select-none">
              YOURNAME
            </h1>
            <h2 className="font-display text-[clamp(28px,5vw,72px)] leading-none tracking-widest text-[#0a0a0a] mt-1">
              SENIOR DEVELOPER
            </h2>

            {/* Social proof row */}
            <div className="flex items-start gap-6 mt-8">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#f5f5f0] bg-[#0a0a0a] flex items-center justify-center text-[#f5f5f0] font-mono text-xs"
                    style={{ zIndex: 5 - i }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#0a0a0a">
                        <path d="M6 0l1.5 4H12l-3.5 2.5 1.5 4.5L6 8.5 2 11l1.5-4.5L0 4h4.5L6 0z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-[#0a0a0a] ml-1">200+</span>
                </div>
                <p className="font-mono text-[10px] text-[#555550] leading-tight max-w-[140px]">
                  Satisfied Clients
                </p>
                <p className="font-sans text-xs text-[#555550] mt-1 max-w-[200px]">
                  Many clients are satisfied and happy with the results I provide.
                </p>
              </div>
            </div>

            {/* Nav links vertical - left side */}
            <div className="mt-10 flex flex-col gap-2">
              {["ABOUT ME", "SKILLS", "PORTFOLIO", "TESTIMONIAL", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="font-mono text-xs tracking-widest text-[#555550] hover:text-[#0a0a0a] transition-colors w-fit"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - photo placeholder + schedule call */}
          <div className="hidden lg:flex flex-col items-center gap-6 relative">
            {/* Arrow doodle */}
            <div className="absolute -left-16 top-24">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M10 10 Q30 0 40 30 Q45 45 35 55" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M30 50 L35 55 L40 50" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Photo */}
            <div className="relative w-[280px] h-[360px] bg-[#0a0a0a] overflow-hidden">
              {/* Placeholder silhouette */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-48 h-64 bg-[#333] rounded-t-full"/>
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-0 flex items-center justify-center">
                <span className="font-mono text-xs text-[#666] tracking-widest">YOUR PHOTO</span>
              </div>
              {/* Grayscale filter overlay */}
              <div className="absolute inset-0 mix-blend-color bg-[#f5f5f0] opacity-0"/>
            </div>

            {/* Schedule call button */}
            <div className="absolute bottom-12 right-[-20px]">
              <button className="w-24 h-24 rounded-full bg-[#0a0a0a] text-[#f5f5f0] flex items-center justify-center text-center hover:bg-[#d4f000] hover:text-[#0a0a0a] transition-all duration-200 group">
                <span className="font-mono text-[10px] tracking-widest uppercase leading-tight">
                  SCHEDULE<br/>CALL
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side bio text */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:right-12 lg:bottom-40 max-w-xs">
          <p className="font-sans text-sm text-[#555550] leading-relaxed">
            I have a passion for coding and technology, and I'm eager to learn and grow in the field of software development. I enjoy working on various projects, experimenting with new technologies, and collaborating with others to create innovative solutions.
          </p>
        </div>
      </div>

      {/* Client marquee strip */}
      <div className="marquee-strip py-3 bg-[#0a0a0a]">
        <div className="animate-marquee inline-flex">
          {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-8 font-mono text-xs tracking-widest text-[#f5f5f0] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4f000] inline-block"/>
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}