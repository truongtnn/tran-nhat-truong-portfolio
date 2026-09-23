"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--cyan)] z-[60] origin-left"
        style={{ scaleX, boxShadow: "0 0 8px rgba(0,212,255,0.6)" }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[60px] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,15,30,0.92)] backdrop-blur-md border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          className="font-[family-name:var(--font-mono)] text-sm text-[var(--cyan)] tracking-wide hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="text-[var(--text3)]">~/</span>tnt.dev
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1">
          {links.map((l, i) => {
            const isActive = active === l.href;
            return (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <a
                  href={l.href}
                  className={`relative font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.08em] px-3 py-2 rounded-[2px] transition-all duration-200 block ${
                    isActive
                      ? "text-[var(--cyan)]"
                      : "text-[var(--text3)] hover:text-[var(--text2)]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-3 right-3 h-[1px] bg-[var(--cyan)] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:tnt040519@gmail.com"
          className="hidden md:inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.06em] px-3 py-1.5 rounded-[2px] text-[var(--cyan)] border border-[var(--border)] hover:bg-[rgba(0,212,255,0.08)] hover:border-[var(--cyan)] transition-all duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--text2)] hover:text-[var(--text)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="font-[family-name:var(--font-mono)] text-sm block w-6 text-center"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? "×" : "≡"}
          </motion.span>
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[60px] left-0 right-0 bg-[rgba(10,15,30,0.97)] backdrop-blur-md border-b border-[var(--border2)] md:hidden overflow-hidden"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3.5 text-sm border-b border-[var(--border2)] last:border-0 transition-colors duration-150 ${
                    active === l.href ? "text-[var(--cyan)]" : "text-[var(--text2)] hover:text-[var(--text)]"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {active === l.href && <span className="w-1 h-1 rounded-full bg-[var(--cyan)]" />}
                  {l.label}
                </motion.a>
              ))}
              <div className="px-6 py-4">
                <a
                  href="mailto:tnt040519@gmail.com"
                  className="font-[family-name:var(--font-mono)] text-[0.72rem] tracking-wide text-[var(--cyan)] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                  tnt040519@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
