"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    period: "05/2025 – 08/2026",
    role: "Front-End Developer",
    company: "NAVITECH AI",
    location: "Ho Chi Minh City",
    dot: "var(--cyan)",
    projects: [
      {
        name: "Fx Nexus",
        sub: "Forex & Crypto Trading Platform",
        dates: "02/2026 – 08/2026",
        team: "10 members",
        stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "TanStack Query", "GSAP", "i18next", "Sass"],
        bullets: [
          "Xây dựng real-time market dashboards, copy-trading marketplace, và seller dashboard — giảm render time ~25% nhờ TanStack Query caching & memoization.",
          "Kiến trúc 10+ reusable UI components (metric cards, data tables, responsive grids), rút ngắn thời gian feature delivery qua các sprint.",
          "Triển khai multilingual support đầy đủ (EN/VI/JP) bằng i18next với zero regression trên 3 browser tests/locale.",
          "Xử lý 30+ UI bugs tracked trong Jira trong Agile sprint cycles của team 10 người.",
        ],
      },
      {
        name: "Nexa Exchange",
        sub: "Fintech / Stock Trading",
        dates: "09/2025 – 02/2026",
        team: "10 members",
        stack: ["React", "TypeScript", "Ant Design", "Tailwind CSS", "REST API"],
        bullets: [
          "Phát triển stock trading interfaces bao gồm market data, portfolio overview và transaction workflows — end-to-end từ API integration đến UI.",
          "Xây dựng reusable form-validation layer xử lý 8+ user flows phức tạp (order entry, KYC, withdrawal) với real-time error feedback.",
          "Chuẩn hóa data-fetching patterns, giảm ~40% duplicate network calls trên toàn bộ codebase.",
        ],
      },
      {
        name: "Navitech Corporate Site",
        sub: "IT / Digital Marketing",
        dates: "06/2025 – 09/2025",
        team: "8 members",
        stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "ESLint"],
        bullets: [
          "Phát triển high-performance multilingual marketing site với Next.js + Turbopack — Lighthouse performance score > 90.",
          "Triển khai GSAP scroll-triggered animations, cải thiện user engagement trên landing page.",
        ],
      },
    ],
  },
  {
    period: "12/2024 – 03/2025",
    role: "Intern Front-End Developer",
    company: "FPT SOFTWARE HCM",
    location: "Ho Chi Minh City",
    dot: "#A78BFA",
    projects: [
      {
        name: "Smart Business Rule",
        sub: "Insurance Decision Automation",
        dates: "12/2024 – 03/2025",
        team: "14 members",
        stack: ["React", "TypeScript", "Ant Design", "RESTful APIs"],
        bullets: [
          "Phát triển front-end features cho insurance decision-automation framework đạt 100% validation accuracy trên rule-execution test suites.",
          "Consume RESTful APIs để xây dựng dynamic, data-driven rule-management interfaces bằng React và TypeScript.",
          "Tham gia daily stand-ups, sprint reviews và pair-programming sessions trong Agile team 14 người.",
        ],
      },
    ],
  },
  {
    period: "08/2022 – 04/2025",
    role: "Associate's Degree, Software Development",
    company: "FPT EDUCATION",
    location: "Ho Chi Minh City",
    dot: "var(--green)",
    projects: [
      {
        name: "GPA: 3.15 / 4.0",
        sub: "Software Development",
        dates: "08/2022 – 04/2025",
        team: "",
        stack: [],
        bullets: [
          "Coursework: Cấu trúc dữ liệu, Giải thuật, Kỹ thuật phần mềm, Phát triển web, Cơ sở dữ liệu.",
          "Tốt nghiệp với GPA 3.15/4.0, bằng Associate's Degree chuyên ngành Software Development.",
        ],
      },
    ],
  },
];

function ProjectCard({ proj, index }: { proj: typeof experiences[0]["projects"][0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={cardRef}
      className="border border-[var(--border2)] bg-[var(--bg2)] rounded-[2px] overflow-hidden hover:border-[var(--border)] transition-colors duration-200"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.1 }}
    >
      {/* Card header — clickable */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[var(--bg3)] transition-colors duration-150 group"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[0.88rem] font-semibold text-[var(--text)]">{proj.name}</span>
          <span className="text-[0.78rem] text-[var(--text3)]">{proj.sub}</span>
          {proj.team && (
            <span className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--text3)] bg-white/[0.03] border border-[var(--border2)] px-2 py-0.5 rounded-[2px]">
              👥 {proj.team}
            </span>
          )}
          <span className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--text3)]">{proj.dates}</span>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[var(--text3)] group-hover:text-[var(--cyan)] flex-shrink-0 ml-3 transition-colors duration-150"
        >
          ↓
        </motion.span>
      </button>

      {/* Expandable body */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-5 pb-5 pt-1">
          <ul className="space-y-1.5 mb-4">
            {proj.bullets.map((b, bi) => (
              <motion.li
                key={bi}
                className="text-[0.82rem] text-[var(--text2)] leading-[1.75] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--text3)]"
                initial={{ opacity: 0, x: -8 }}
                animate={expanded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: bi * 0.06 }}
              >
                {b}
              </motion.li>
            ))}
          </ul>

          {proj.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border2)]">
              {proj.stack.map((t, ti) => (
                <motion.span
                  key={t}
                  className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--text3)] bg-[rgba(0,212,255,0.05)] border border-[var(--border)] px-2 py-0.5 rounded-[2px]"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={expanded ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.25, delay: 0.15 + ti * 0.04 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 border-t border-[var(--border2)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-[var(--text)] mb-12 leading-tight">
          Where I&apos;ve <em className="not-italic text-[var(--cyan)]">worked</em>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          className="absolute left-[7px] md:left-[11px] top-3 bottom-3 w-px bg-[var(--border)]"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="flex flex-col gap-10">
          {experiences.map((e, ei) => (
            <motion.div
              key={e.company}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + ei * 0.12 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 border-[var(--bg)] flex-shrink-0"
                style={{ background: e.dot, boxShadow: `0 0 10px ${e.dot}88` }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.3 + ei * 0.12, type: "spring", stiffness: 300 }}
              />

              {/* Company header */}
              <div className="mb-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-0.5">
                  <span className="text-[1rem] font-semibold text-[var(--text)]">{e.role}</span>
                  <span
                    className="font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.06em]"
                    style={{ color: e.dot }}
                  >
                    {e.company}
                  </span>
                </div>
                <div className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--text3)]">
                  {e.period} · {e.location}
                </div>
              </div>

              {/* Project cards */}
              <div className="flex flex-col gap-3">
                {e.projects.map((proj, pi) => (
                  <ProjectCard key={proj.name} proj={proj} index={pi} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
