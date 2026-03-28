"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a] text-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-label mb-4 text-[#666660]">Contact</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-[clamp(48px,8vw,100px)] leading-none text-[#f5f5f0] mt-6">
              LET'S<br/>WORK<br/>TOGETHER
            </h2>
            <p className="font-sans text-sm text-[#555550] leading-relaxed mt-8 max-w-sm">
              Have a project in mind? I'm currently available for freelance work and full-time opportunities. Let's build something great.
            </p>
            <div className="mt-10 flex flex-col gap-5">
              {[
                { label: "Email", value: "hello@yourname.dev", href: "mailto:hello@yourname.dev" },
                { label: "LinkedIn", value: "linkedin.com/in/yourname", href: "#" },
                { label: "GitHub", value: "github.com/yourname", href: "#" },
                { label: "Twitter", value: "@yourname", href: "#" },
              ].map((link) => (
                <div key={link.label} className="flex items-center gap-6 border-b border-[#1a1a1a] pb-4">
                  <span className="font-mono text-xs tracking-widest uppercase text-[#444] w-20 shrink-0">
                    {link.label}
                  </span>
                  <a href={link.href} className="font-sans text-sm text-[#888] hover:text-[#d4f000] transition-colors">
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-80 border border-[#d4f000] p-12 text-center">
                <div className="font-display text-5xl text-[#d4f000] mb-4">✓</div>
                <h3 className="font-display text-3xl text-[#f5f5f0]">Message Sent!</h3>
                <p className="font-sans text-sm text-[#555550] mt-3">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="font-mono text-xs tracking-widest uppercase text-[#555550] mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      required
                      className="w-full bg-transparent border border-[#1e1e1e] px-5 py-4 font-sans text-sm text-[#f5f5f0] placeholder:text-[#333] focus:outline-none focus:border-[#d4f000] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-xs tracking-widest uppercase text-[#555550] mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-transparent border border-[#1e1e1e] px-5 py-4 font-sans text-sm text-[#f5f5f0] placeholder:text-[#333] focus:outline-none focus:border-[#d4f000] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="font-mono text-xs tracking-widest uppercase bg-[#d4f000] text-[#0a0a0a] px-8 py-4 hover:bg-[#f5f5f0] transition-colors w-fit"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}