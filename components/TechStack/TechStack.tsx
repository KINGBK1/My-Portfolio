"use client";
import { useState } from "react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"] },
  { category: "DevOps", items: ["Docker", "AWS", "Vercel", "CI/CD", "Linux"] },
];

const projects = [
  {
    id: "01",
    title: "E-Commerce Platform",
    category: "Web Development",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    desc: "Full-stack e-commerce with real-time inventory, payment gateway, and admin dashboard.",
    year: "2024",
  },
  {
    id: "02",
    title: "SaaS Dashboard",
    category: "Web Application",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "Analytics dashboard for a SaaS product with real-time data visualization and user management.",
    year: "2024",
  },
  {
    id: "03",
    title: "Mobile Banking App",
    category: "React Native",
    tech: ["React Native", "TypeScript", "AWS"],
    desc: "Secure mobile banking application with biometric auth and transaction management.",
    year: "2023",
  },
  {
    id: "04",
    title: "AI Content Tool",
    category: "AI Integration",
    tech: ["Next.js", "OpenAI", "Prisma"],
    desc: "AI-powered content generation platform with custom prompt management and team collaboration.",
    year: "2023",
  },
];

export default function TechStack() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="skills" className="py-28 bg-[#0a0a0a] text-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Skills */}
        <div className="section-label mb-12 text-[#666660]">
          Tech Stack & Skills
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skills.map((group) => (
            <div key={group.category}>
              <div className="font-mono text-xs tracking-widest uppercase text-[#d4f000] mb-5">
                {group.category}
              </div>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-[#aaa] hover:text-[#f5f5f0] transition-colors">
                    <span className="w-1 h-1 bg-[#d4f000] rounded-full"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="section-label mb-12 text-[#666660]">
          Portfolio & Projects
        </div>

        <div className="flex flex-col gap-px bg-[#1a1a1a]">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 lg:p-8 bg-[#0a0a0a] cursor-pointer transition-all duration-200 ${
                hoveredProject === project.id ? "bg-[#d4f000]" : ""
              }`}
            >
              <div className="flex items-start lg:items-center gap-6 flex-1">
                <span className={`font-mono text-xs ${hoveredProject === project.id ? "text-[#0a0a0a]" : "text-[#444]"}`}>
                  {project.id}
                </span>
                <div>
                  <h3 className={`font-display text-2xl lg:text-3xl ${hoveredProject === project.id ? "text-[#0a0a0a]" : "text-[#f5f5f0]"}`}>
                    {project.title}
                  </h3>
                  <p className={`font-sans text-sm mt-1 max-w-md ${hoveredProject === project.id ? "text-[#333]" : "text-[#666]"}`}>
                    {project.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className={`font-mono text-xs ${hoveredProject === project.id ? "text-[#333]" : "text-[#555550]"}`}>
                  {project.category}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-xs px-2 py-1 border ${
                        hoveredProject === project.id
                          ? "border-[#0a0a0a] text-[#0a0a0a]"
                          : "border-[#333] text-[#666]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className={`font-mono text-xs ml-4 ${hoveredProject === project.id ? "text-[#333]" : "text-[#444]"}`}>
                  {project.year}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    hoveredProject === project.id ? "stroke-[#0a0a0a]" : "stroke-[#555]"
                  }`}
                >
                  <path d="M2 14L14 2M14 2H6M14 2V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-end">
          <button className="font-mono text-xs tracking-widest uppercase text-[#d4f000] border border-[#d4f000] px-6 py-3 hover:bg-[#d4f000] hover:text-[#0a0a0a] transition-all">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}