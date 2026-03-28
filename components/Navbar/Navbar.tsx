"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Portfolio", "Experience", "Blog", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f5f5f0]/95 backdrop-blur-sm border-b border-[#e0e0d8]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-widest text-[#0a0a0a]">
          YOURNAME
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs tracking-widest uppercase text-[#555550] hover:text-[#0a0a0a] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-[#0a0a0a] text-[#f5f5f0] px-5 py-2.5 font-mono text-xs tracking-widest uppercase hover:bg-[#d4f000] hover:text-[#0a0a0a] transition-all duration-200"
        >
          Contact Me
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-all ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f5f0] border-t border-[#e0e0d8] px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm tracking-widest uppercase text-[#0a0a0a]"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}