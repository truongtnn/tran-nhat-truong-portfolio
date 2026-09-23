"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* Animated counter hook */
function useCounter(target: number, inView: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return value;
}

function StatCard({ value, suffix, desc, delay }: { value: number; suffix: string; desc: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCounter(value, inView);

  return (
    <motion.div
      ref={ref}
      className="bg-[var(--bg2)] p-5 hover:bg-[var(--bg3)] transition-colors duration-200 group cursor-default"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="font-[family-name:var(--font-mono)] text-[1.8rem] font-semibold text-[var(--cyan)] leading-none mb-1 group-hover:text-white transition-colors duration-200">
        {suffix.startsWith("~") ? `~${count}` : count}{suffix.replace("~", "")}
      </div>
      <div className="text-[0.72rem] text-[var(--text3)] tracking-wide leading-relaxed">
        {desc}
      </div>
    </motion.div>
  );
}

const stats = [
  { value: 1, suffix: "+", desc: "năm kinh nghiệm thực tế", delay: 0.1 },
  { value: 95, suffix: "+", desc: "Lighthouse score (Portfolio)", delay: 0.15 },
  { value: 25, suffix: "~%", desc: "giảm render time (Fx Nexus)", delay: 0.2 },
  { value: 40, suffix: "~%", desc: "giảm duplicate API calls", delay: 0.25 },
];

const highlights = [
  { label: "Navitech AI", sub: "05/2025 – 08/2026 · FE Developer", active: true },
  { label: "FPT Software", sub: "12/2024 – 03/2025 · Intern FE", active: false },
  { label: "FPT Education", sub: "GPA 3.15 / 4.0 · Software Dev", active: false },
];

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 border-t border-[var(--border2)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-[var(--text)] mb-12 leading-tight">
          About <em className="not-italic text-[var(--cyan)]">me</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left: text + company list */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="text-[0.95rem] text-[var(--text2)] leading-[1.8] space-y-4">
            <p>
              Frontend Developer với hơn{" "}
              <strong className="text-[var(--text)] font-medium">1 năm kinh nghiệm thực tế</strong>{" "}
              xây dựng giao diện responsive bằng React, TypeScript và Next.js. Đã đóng góp vào production
              projects tại{" "}
              <strong className="text-[var(--text)] font-medium">Navitech AI</strong>{" "}
              (Forex/Crypto) và{" "}
              <strong className="text-[var(--text)] font-medium">FPT Software</strong>{" "}
              (Insurance Fintech).
            </p>
            <p>
              Tôi tập trung vào trading và financial UI — giao diện cần{" "}
              <strong className="text-[var(--text)] font-medium">nhanh, chính xác và đáng tin cậy</strong>.
              Quen làm việc Agile, tích hợp REST API, xây dựng reusable components và tối ưu performance.
            </p>
          </div>

          {/* Company timeline */}
          <div className="mt-8 relative">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[var(--border)]" />
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="flex items-start gap-4 py-3 group cursor-default"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all duration-300 ${h.active
                  ? "bg-[var(--cyan)] border-[var(--cyan)] shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                  : "bg-[var(--bg)] border-[var(--border)] group-hover:border-[var(--cyan)]"
                }`} />
                <div>
                  <span className="text-[0.85rem] font-medium text-[var(--text)] group-hover:text-[var(--cyan)] transition-colors duration-200">
                    {h.label}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[0.63rem] text-[var(--text3)] block mt-0.5">
                    {h.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: stat cards + info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="grid grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[2px] overflow-hidden mb-6">
            {stats.map((s) => (
              <StatCard key={s.desc} {...s} />
            ))}
          </div>

          {/* Location & Language card */}
          <motion.div
            className="p-5 bg-[var(--bg2)] border border-[var(--border)] rounded-[2px]"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.35 }}
          >
            <div className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--cyan)] tracking-[0.1em] mb-3 pb-2 border-b border-[var(--border)]">
              LOCATION & LANGUAGE
            </div>
            <div className="space-y-2.5 text-[0.82rem] text-[var(--text2)]">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">📍 Go Vap, Ho Chi Minh City</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">🇻🇳 Vietnamese</span>
                <span className="font-[family-name:var(--font-mono)] text-[0.63rem] text-[var(--green)]">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">🇬🇧 English</span>
                <span className="font-[family-name:var(--font-mono)] text-[0.63rem] text-[var(--text3)]">TOEIC 550 → 700</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
