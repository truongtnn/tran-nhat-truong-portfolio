"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    name: "LANGUAGES",
    color: "var(--cyan)",
    tags: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    name: "FRONTEND & LIBS",
    color: "var(--cyan)",
    tags: ["React", "Next.js", "Tailwind CSS", "Ant Design", "GSAP", "Sass", "Framer Motion"],
  },
  {
    name: "STATE & DATA",
    color: "var(--green)",
    tags: ["TanStack Query", "REST API", "i18next", "Axios"],
  },
  {
    name: "DATABASES",
    color: "var(--green)",
    tags: ["MySQL", "SQL Server"],
  },
  {
    name: "TOOLS & WORKFLOW",
    color: "#A78BFA",
    tags: ["Git", "GitHub", "Postman", "Figma", "Jira", "ESLint"],
  },
  {
    name: "IDE & OS",
    color: "#A78BFA",
    tags: ["VS Code", "IntelliJ", "Eclipse", "Windows"],
  },
];

const proficiencyItems = [
  { label: "React", level: 90, color: "#61DAFB" },
  { label: "TypeScript", level: 85, color: "#3178C6" },
  { label: "Next.js", level: 82, color: "var(--text)" },
  { label: "Tailwind CSS", level: 88, color: "#38BDF8" },
  { label: "TanStack Query", level: 80, color: "#FF4154" },
  { label: "REST API", level: 85, color: "var(--green)" },
  { label: "GSAP", level: 72, color: "#88CE02" },
  { label: "i18next", level: 78, color: "#26A69A" },
];

function SkillBar({ label, level, color, index }: { label: string; level: number; color: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-[0.8rem] text-[var(--text2)]">{label}</span>
        <span className="font-[family-name:var(--font-mono)] text-[0.63rem] text-[var(--text3)]">{level}%</span>
      </div>
      <div className="h-[2px] bg-[var(--border)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.1 + index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            background: color,
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 border-t border-[var(--border2)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-[var(--text)] mb-12 leading-tight">
          Tech <em className="not-italic text-[var(--cyan)]">stack</em>
        </h2>
      </motion.div>

      {/* Tag groups with stagger */}
      <div
        className="grid gap-px bg-[var(--border)] border border-[var(--border)] rounded-[2px] overflow-hidden mb-10"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {groups.map((g, gi) => (
          <motion.div
            key={g.name}
            className="bg-[var(--bg2)] p-6 h-full hover:bg-[var(--bg3)] transition-colors duration-200"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 + gi * 0.07 }}
          >
            <div
              className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.1em] mb-4 pb-3 border-b border-[var(--border)]"
              style={{ color: g.color }}
            >
              {g.name}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.tags.map((t, ti) => (
                <motion.span
                  key={t}
                  className="font-[family-name:var(--font-mono)] text-[0.68rem] text-[var(--text2)] bg-white/[0.03] border border-[var(--border2)] px-2 py-1 rounded-[2px] hover:text-[var(--cyan)] hover:border-[var(--border)] hover:bg-[rgba(0,212,255,0.04)] transition-all duration-150 cursor-default"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + gi * 0.07 + ti * 0.04 }}
                  whileHover={{ y: -2 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proficiency bars */}
      <motion.div
        className="border border-[var(--border)] rounded-[2px] bg-[var(--bg2)] p-7"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--cyan)] tracking-[0.1em] mb-6 pb-3 border-b border-[var(--border)]">
          PROFICIENCY
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {proficiencyItems.map((item, i) => (
            <SkillBar key={item.label} {...item} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
