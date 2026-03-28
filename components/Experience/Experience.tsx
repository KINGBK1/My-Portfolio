"use client";

const experiences = [
  {
    period: "Jan 2022 — Present",
    role: "Senior Full Stack Developer",
    company: "Acme Corp — Remote",
    desc: "Leading development of core product features, architecting scalable backend systems, and mentoring a team of 4 junior developers. Reduced API latency by 60% through query optimization.",
    tags: ["Next.js", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    period: "Jan 2021 — Dec 2021",
    role: "React Developer",
    company: "Startup XYZ — San Francisco",
    desc: "Built the entire frontend from scratch for a fintech SaaS product. Implemented real-time data dashboards using WebSockets and React Query. Shipped 3 major feature releases.",
    tags: ["React", "TypeScript", "GraphQL"],
  },
  {
    period: "Jun 2020 — Dec 2020",
    role: "Junior Developer",
    company: "Agency ABC — Remote",
    desc: "Developed client websites and web apps, collaborated with designers to implement pixel-perfect UIs. Worked across 8+ client projects simultaneously.",
    tags: ["React", "WordPress", "PHP"],
  },
];

const achievements = [
  { icon: "🏆", title: "Best Developer Award", org: "Acme Corp, 2023" },
  { icon: "🎤", title: "Speaker at React Conf", org: "React Conference, 2023" },
  { icon: "📝", title: "1K+ Newsletter Subscribers", org: "Dev Newsletter, 2022" },
  { icon: "⭐", title: "Top Contributor", org: "Open Source, 2022" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-label mb-12">Experience & Achievements</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2 flex flex-col gap-0">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-8 group">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#0a0a0a] mt-1.5 shrink-0 group-hover:bg-[#d4f000] transition-colors"/>
                  {idx < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-[#e0e0d8] mt-2"/>
                  )}
                </div>

                {/* Content */}
                <div className="pb-14">
                  <div className="font-mono text-xs text-[#555550] tracking-widest mb-2">
                    {exp.period}
                  </div>
                  <h3 className="font-display text-3xl text-[#0a0a0a] leading-tight">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs text-[#555550] tracking-widest uppercase mt-1 mb-3">
                    {exp.company}
                  </div>
                  <p className="font-sans text-sm text-[#555550] leading-relaxed max-w-lg">
                    {exp.desc}
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-[#555550] mb-6">
              Achievements
            </div>
            <div className="flex flex-col gap-4">
              {achievements.map((a, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 border border-[#e0e0d8] hover:border-[#0a0a0a] transition-colors group"
                >
                  <span className="text-2xl">{a.icon}</span>
                  <div>
                    <div className="font-sans text-sm font-medium text-[#0a0a0a] group-hover:underline">
                      {a.title}
                    </div>
                    <div className="font-mono text-xs text-[#888] mt-0.5">
                      {a.org}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}