"use client";

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "University of Technology",
    period: "2016 — 2020",
    gpa: "3.9 / 4.0",
    highlights: ["Dean's List — 4 semesters", "Final Project: AI-based recommendation engine", "CS Club President"],
  },
  {
    degree: "Full Stack Bootcamp",
    school: "Codecademy Pro",
    period: "2020",
    gpa: "Top 5%",
    highlights: ["Completed 600+ hours of coursework", "Built 12 full-stack projects", "Graduated with Distinction"],
  },
];

const certifications = [
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
  { name: "Google Cloud Associate", issuer: "Google", year: "2022" },
  { name: "MongoDB Developer", issuer: "MongoDB University", year: "2022" },
];

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[#0a0a0a] text-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-label mb-12 text-[#666660]">Education</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education cards */}
          <div className="flex flex-col gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="border border-[#1e1e1e] p-8 hover:border-[#d4f000] transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-[#555550] tracking-widest">{edu.period}</span>
                  <span className="font-mono text-xs text-[#d4f000]">{edu.gpa}</span>
                </div>
                <h3 className="font-display text-3xl text-[#f5f5f0] leading-tight">{edu.degree}</h3>
                <div className="font-mono text-xs text-[#555550] tracking-widest uppercase mt-1 mb-5">
                  {edu.school}
                </div>
                <ul className="flex flex-col gap-2">
                  {edu.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 font-sans text-sm text-[#888]">
                      <span className="w-1 h-1 bg-[#d4f000] rounded-full shrink-0"/>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-[#555550] mb-6">
              Certifications
            </div>
            <div className="flex flex-col gap-px bg-[#1a1a1a]">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-[#0a0a0a] hover:bg-[#111] transition-colors group">
                  <div>
                    <div className="font-sans text-sm text-[#f5f5f0] font-medium">{cert.name}</div>
                    <div className="font-mono text-xs text-[#555550] mt-0.5">{cert.issuer}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#555550]">{cert.year}</span>
                    <div className="w-5 h-5 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#d4f000] transition-colors">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 7L7 1M7 1H3M7 1V5" stroke="#d4f000" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Big quote */}
            <div className="mt-12">
              <div className="font-display text-6xl text-[#1a1a1a] leading-none">"</div>
              <p className="font-sans text-lg text-[#555550] leading-relaxed -mt-2">
                Learning never exhausts the mind. Every line of code is a lesson, every bug a teacher.
              </p>
              <div className="font-mono text-xs text-[#333] mt-4">— Personal Mantra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}