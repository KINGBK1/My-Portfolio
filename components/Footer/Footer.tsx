"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f0] border-t border-[#e0e0d8]">
      {/* Top strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          {/* Name + tagline */}
          <div>
            <div className="font-display text-[clamp(48px,8vw,100px)] leading-none text-[#0a0a0a]">
              YOURNAME
            </div>
            <p className="font-mono text-xs text-[#555550] tracking-widest mt-3 uppercase">
              Senior Developer — Available for hire
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {["About", "Skills", "Portfolio", "Experience", "Blog", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-widest uppercase text-[#555550] hover:text-[#0a0a0a] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e0e0d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#888]">
            © {year} YourName. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Twitter", "GitHub", "LinkedIn", "Dribbble"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-mono text-xs text-[#888] hover:text-[#0a0a0a] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <div className="font-mono text-xs text-[#888]">
            Built with Next.js & ❤
          </div>
        </div>
      </div>
    </footer>
  );
}