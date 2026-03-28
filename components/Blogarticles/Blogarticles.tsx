"use client";

const posts = [
  {
    id: "01",
    category: "Architecture",
    title: "Building Scalable Next.js Apps with Domain-Driven Design",
    excerpt: "How I restructured a monolithic Next.js app into a domain-driven architecture that cut onboarding time in half.",
    date: "Mar 2025",
    readTime: "8 min read",
  },
  {
    id: "02",
    category: "Performance",
    title: "The Hidden Cost of React Re-renders and How to Eliminate Them",
    excerpt: "A deep dive into React's reconciliation algorithm and practical patterns to prevent unnecessary re-renders.",
    date: "Feb 2025",
    readTime: "12 min read",
  },
  {
    id: "03",
    category: "DevOps",
    title: "Zero-Downtime Deployments with GitHub Actions and AWS",
    excerpt: "A step-by-step guide to setting up blue-green deployments that keep your users happy and your team sane.",
    date: "Jan 2025",
    readTime: "10 min read",
  },
];

export default function BlogArticles() {
  return (
    <section id="blog" className="py-28 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div className="section-label">Blog & Articles</div>
          <a href="#" className="font-mono text-xs tracking-widest uppercase text-[#555550] hover:text-[#0a0a0a] transition-colors">
            All Posts →
          </a>
        </div>

        {/* Featured post */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-[#e0e0d8] mb-px">
          <div className="lg:col-span-3 bg-[#f5f5f0] p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs tracking-widest uppercase text-[#d4f000] bg-[#0a0a0a] px-3 py-1">
                  {posts[0].category}
                </span>
                <span className="font-mono text-xs text-[#555550]">{posts[0].date}</span>
                <span className="font-mono text-xs text-[#888]">{posts[0].readTime}</span>
              </div>
              <h3 className="font-display text-[clamp(24px,3vw,42px)] text-[#0a0a0a] leading-tight mb-4">
                {posts[0].title}
              </h3>
              <p className="font-sans text-sm text-[#555550] leading-relaxed max-w-md">
                {posts[0].excerpt}
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#0a0a0a] border border-[#0a0a0a] px-5 py-3 mt-6 w-fit hover:bg-[#0a0a0a] hover:text-[#f5f5f0] transition-all">
              Read Article
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>

          {/* Right - recent posts */}
          <div className="lg:col-span-2 flex flex-col gap-px bg-[#e0e0d8]">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-[#f5f5f0] p-8 flex-1 flex flex-col justify-between hover:bg-[#0a0a0a] group transition-all duration-200">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs tracking-widest uppercase text-[#555550] group-hover:text-[#d4f000]">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-[#888] group-hover:text-[#555550]">{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl text-[#0a0a0a] leading-tight group-hover:text-[#f5f5f0]">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-mono text-xs text-[#888] group-hover:text-[#555550]">{post.readTime}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:stroke-[#d4f000] stroke-[#888] transition-colors">
                    <path d="M1 13L13 1M13 1H5M13 1V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}