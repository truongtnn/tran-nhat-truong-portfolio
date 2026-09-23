"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    sub: "tnt040519@gmail.com",
    href: "mailto:tnt040519@gmail.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    color: "var(--cyan)",
  },
  {
    label: "Phone",
    sub: "0784 318 938",
    href: "tel:+84784318938",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: "var(--green)",
  },
  {
    label: "GitHub",
    sub: "github.com/tnt040519",
    href: "https://github.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    color: "#A78BFA",
  },
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/trannhattruong",
    href: "https://linkedin.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "#0A66C2",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("tnt040519@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 border-t border-[var(--border2)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-[var(--text)] mb-12 leading-tight">
          Let&apos;s <em className="not-italic text-[var(--cyan)]">talk</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="text-[0.95rem] text-[var(--text2)] leading-[1.8] space-y-4 mb-8">
            <p>
              Tôi đang tích cực tìm kiếm{" "}
              <strong className="text-[var(--text)] font-medium">Frontend Developer roles</strong> —
              full-time, contract hoặc remote. Đặc biệt quan tâm đến sản phẩm
              fintech, trading hoặc data-heavy.
            </p>
            <p>
              Cách tốt nhất là qua email — thường phản hồi trong vòng{" "}
              <strong className="text-[var(--text)] font-medium">24 giờ</strong>.
            </p>
          </div>

          {/* Availability */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] text-[var(--green)] bg-[rgba(0,255,148,0.07)] border border-[rgba(0,255,148,0.2)] rounded-[2px] px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] shadow-[0_0_6px_var(--green)] animate-pulse" />
              Available from September 2026
            </span>
          </div>

          {/* Quick info */}
          <div className="space-y-2.5 font-[family-name:var(--font-mono)] text-[0.72rem] text-[var(--text3)] border border-[var(--border2)] rounded-[3px] p-4 bg-[var(--bg2)]">
            <div className="text-[0.65rem] text-[var(--cyan)] tracking-[0.1em] pb-2 border-b border-[var(--border2)] mb-3">INFO</div>
            {[
              { icon: "📍", t: "Go Vap, Ho Chi Minh City" },
              { icon: "🎂", t: "19 / 05 / 2004" },
              { icon: "🎓", t: "FPT Education · GPA 3.15 / 4.0" },
              { icon: "🇬🇧", t: "TOEIC 550 → targeting 700" },
            ].map((r) => (
              <div key={r.t} className="flex items-center gap-2">
                <span>{r.icon}</span>
                <span>{r.t}</span>
              </div>
            ))}
          </div>

          {/* Copy email CTA */}
          <motion.button
            onClick={copyEmail}
            className="mt-6 w-full flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.06em] py-3 rounded-[3px] border border-[var(--cyan)] text-[var(--cyan)] hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200 relative overflow-hidden"
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              key={copied ? "copied" : "copy"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {copied ? "✓ Đã copy email!" : "📋 Copy email address"}
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Right: contact links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-col gap-2"
        >
          {contactLinks.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between px-5 py-4 bg-[var(--bg2)] border border-[var(--border2)] rounded-[3px] hover:border-[var(--border)] hover:bg-[var(--bg3)] transition-all duration-200 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              whileHover={{ x: 3 }}
            >
              {/* Left color flash */}
              <span
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l"
                style={{ background: l.color }}
              />
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-[3px] border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    borderColor: `${l.color}30`,
                    background: `${l.color}10`,
                    color: l.color,
                  }}
                >
                  {l.icon}
                </div>
                <div>
                  <div className="text-[0.85rem] font-medium text-[var(--text)]">{l.label}</div>
                  <div className="font-[family-name:var(--font-mono)] text-[0.63rem] text-[var(--text3)]">{l.sub}</div>
                </div>
              </div>
              <motion.span
                className="text-[var(--text3)] group-hover:text-[var(--cyan)] text-sm flex-shrink-0"
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ↗
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
