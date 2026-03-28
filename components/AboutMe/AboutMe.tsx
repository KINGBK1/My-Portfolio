"use client";

export default function AboutMe() {
  return (
    <section id="about-me" className="py-28 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-label mb-12">About Me</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - large number + statement */}
          <div>
            <div className="font-display text-[clamp(100px,18vw,220px)] leading-none text-[#e8e8e0] select-none">
              01
            </div>
            <div className="-mt-8 relative">
              <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-tight text-[#0a0a0a]">
                WHO AM I?
              </h2>
              <p className="font-sans text-base text-[#555550] leading-relaxed mt-6 max-w-md">
                I'm a Senior Full Stack Developer with over 5 years of experience crafting
                digital experiences. I specialize in React, Next.js, Node.js, and cloud
                infrastructure. My approach combines technical precision with creative
                problem-solving.
              </p>
              <p className="font-sans text-base text-[#555550] leading-relaxed mt-4 max-w-md">
                When I'm not shipping code, I write about software architecture, contribute
                to open source, and mentor junior developers.
              </p>
            </div>
          </div>

          {/* Right - stats */}
          <div className="grid grid-cols-2 gap-px bg-[#e0e0d8]">
            {[
              { num: "5+", label: "Years Experience" },
              { num: "200+", label: "Clients Served" },
              { num: "50+", label: "Projects Shipped" },
              { num: "99%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f5f5f0] p-8 flex flex-col gap-2">
                <div className="font-display text-5xl text-[#0a0a0a]">{stat.num}</div>
                <div className="font-mono text-xs tracking-widest uppercase text-[#555550]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}