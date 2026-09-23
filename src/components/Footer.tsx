"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="border-t border-[var(--border2)] bg-[var(--bg)]"
    >
      {/* Back to top strip */}
      <motion.a
        href="#hero"
        className="flex items-center justify-center gap-2 py-3 font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--text3)] hover:text-[var(--cyan)] border-b border-[var(--border2)] transition-colors duration-200 group"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          className="inline-block"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          ↑
        </motion.span>
        <span className="tracking-[0.08em]">BACK TO TOP</span>
      </motion.a>

      {/* Main footer content */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-6 flex flex-wrap justify-between items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-[var(--cyan)] tracking-wide">
            <span className="text-[var(--text3)]">~/</span>tnt.dev
          </span>
          <div className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--text3)] mt-0.5">
            Tran Nhat Truong · Frontend Developer · Ho Chi Minh City
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: 12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {[
            { label: "GitHub", href: "https://github.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Email", href: "mailto:tnt040519@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-[family-name:var(--font-mono)] text-[0.62rem] text-[var(--text3)] hover:text-[var(--cyan)] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          className="w-full md:w-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="font-[family-name:var(--font-mono)] text-[0.58rem] text-[var(--text3)] tracking-wide">
            © 2026 · Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
