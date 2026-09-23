"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const NpmIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.331h-2.669v.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
  </svg>
);

type Project = {
  title: string;
  category: string;
  emoji: string;
  badges: { label: string; color: string }[];
  desc: string;
  stack: string[];
  impact: string[];
  links: { icon: React.ReactNode; label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Fx Nexus",
    category: "WORK PROJECT",
    emoji: "📈",
    badges: [
      { label: "FEATURED", color: "text-[var(--cyan)] border-[rgba(0,212,255,0.35)] bg-[rgba(0,212,255,0.07)]" },
      { label: "PRODUCTION", color: "text-[var(--green)] border-[rgba(0,255,148,0.3)] bg-[rgba(0,255,148,0.06)]" },
    ],
    desc: "Nền tảng giao dịch Forex & Crypto với real-time market dashboards, copy-trading marketplace và seller dashboard. Giảm render time ~25% nhờ TanStack Query caching. Multilingual EN/VI/JP, 10+ reusable components, 30+ bugs fixed trong Agile sprint cycles.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "TanStack Query", "GSAP", "i18next", "Sass"],
    impact: ["~25% render↓", "EN/VI/JP i18n", "30+ bugs fixed", "10+ components"],
    links: [{ icon: <ExternalIcon />, label: "Live", href: "#" }],
  },
  {
    title: "Nexa Exchange",
    category: "WORK PROJECT",
    emoji: "💹",
    badges: [
      { label: "PRODUCTION", color: "text-[var(--green)] border-[rgba(0,255,148,0.3)] bg-[rgba(0,255,148,0.06)]" },
    ],
    desc: "Stock trading platform với market data, portfolio overview và transaction workflows. Form-validation layer xử lý 8+ user flows phức tạp (KYC, withdrawal, order entry). Giảm ~40% duplicate network calls.",
    stack: ["React", "TypeScript", "Ant Design", "Tailwind CSS", "REST API"],
    impact: ["~40% API calls↓", "8+ form flows", "KYC & withdrawal"],
    links: [{ icon: <ExternalIcon />, label: "Live", href: "#" }],
  },
  {
    title: "Navitech Corporate Site",
    category: "WORK PROJECT",
    emoji: "🌐",
    badges: [
      { label: "LIVE", color: "text-[var(--green)] border-[rgba(0,255,148,0.3)] bg-[rgba(0,255,148,0.06)]" },
    ],
    desc: "High-performance multilingual marketing site với Next.js + Turbopack, Lighthouse score > 90. GSAP scroll-triggered animations trên landing page, cải thiện engagement metrics.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "ESLint"],
    impact: ["Lighthouse > 90", "GSAP animations", "Turbopack build"],
    links: [{ icon: <ExternalIcon />, label: "Live", href: "#" }],
  },
  {
    title: "Portfolio Website",
    category: "PERSONAL",
    emoji: "🚀",
    badges: [
      { label: "LIVE", color: "text-[var(--green)] border-[rgba(0,255,148,0.3)] bg-[rgba(0,255,148,0.06)]" },
    ],
    desc: "Portfolio cá nhân với dark-mode, smooth page transitions và scroll animations. Lighthouse score > 95, optimized font loading, zero layout shift.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    impact: ["Lighthouse > 95", "Dark-mode first", "Zero CLS"],
    links: [
      { icon: <GithubIcon />, label: "GitHub", href: "#" },
      { icon: <ExternalIcon />, label: "Live", href: "#" },
    ],
  },
  {
    title: "React Component Library",
    category: "PERSONAL",
    emoji: "🧩",
    badges: [
      { label: "NPM", color: "text-[#CB3837] border-[rgba(203,56,55,0.3)] bg-[rgba(203,56,55,0.06)]" },
    ],
    desc: "Custom UI kit với 15+ components (Button, Modal, Table, Form) published lên npm, fully documented với Storybook. TypeScript-first, bundled bằng Rollup.",
    stack: ["React", "TypeScript", "Storybook", "Rollup"],
    impact: ["15+ components", "npm published", "Storybook docs"],
    links: [
      { icon: <GithubIcon />, label: "GitHub", href: "#" },
      { icon: <NpmIcon />, label: "npm", href: "#" },
    ],
  },
  {
    title: "Stock Dashboard Prototype",
    category: "PERSONAL",
    emoji: "📊",
    badges: [],
    desc: "Lightweight stock screener với real-time price charts và watchlist filtering. Recharts visualize market data, REST API live price feeds.",
    stack: ["React", "Recharts", "REST API"],
    impact: ["Real-time charts", "Watchlist filter", "Live price feed"],
    links: [{ icon: <GithubIcon />, label: "GitHub", href: "#" }],
  },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative group bg-[var(--bg2)] border border-[var(--border2)] rounded-[3px] overflow-hidden hover:border-[var(--border)] transition-all duration-300 cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
    >
      {/* Top shimmer line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{
          background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Glow bg on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[1.3rem] leading-none select-none">{p.emoji}</span>
              <span className="font-[family-name:var(--font-mono)] text-[0.58rem] text-[var(--text3)] tracking-[0.1em]">
                {p.category}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[0.92rem] font-semibold text-[var(--text)]">{p.title}</span>
              {p.badges.map((b) => (
                <span
                  key={b.label}
                  className={`font-[family-name:var(--font-mono)] text-[0.57rem] tracking-[0.08em] px-1.5 py-0.5 rounded-[2px] border ${b.color}`}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
          {/* Links */}
          <div className="flex gap-3 flex-shrink-0 pt-0.5">
            {p.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-1 font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--text3)] hover:text-[var(--cyan)] transition-colors duration-150"
              >
                {l.icon}
                <span className="hidden sm:inline">{l.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Desc */}
        <p className="text-[0.83rem] text-[var(--text2)] leading-[1.72] mb-4">{p.desc}</p>

        {/* Impact */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.impact.map((imp) => (
            <span
              key={imp}
              className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--green)] bg-[rgba(0,255,148,0.05)] border border-[rgba(0,255,148,0.14)] px-2 py-0.5 rounded-[2px]"
            >
              ✓ {imp}
            </span>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span
              key={t}
              className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--text3)] bg-white/[0.03] border border-[var(--border2)] px-1.5 py-0.5 rounded-[2px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState<"ALL" | "WORK PROJECT" | "PERSONAL">("ALL");

  const filtered = filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 border-t border-[var(--border2)]"
    >
      <motion.div
        className="flex flex-wrap items-end justify-between gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-[var(--text)] leading-tight">
          Selected <em className="not-italic text-[var(--cyan)]">work</em>
        </h2>

        {/* Filter tabs */}
        <div className="flex gap-1 p-1 bg-[var(--bg2)] border border-[var(--border2)] rounded-[3px]">
          {(["ALL", "WORK PROJECT", "PERSONAL"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.07em] px-3 py-1.5 rounded-[2px] transition-all duration-200 ${
                filter === f
                  ? "bg-[var(--cyan)] text-[var(--bg)] font-semibold"
                  : "text-[var(--text3)] hover:text-[var(--text2)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3"
        layout
      >
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
