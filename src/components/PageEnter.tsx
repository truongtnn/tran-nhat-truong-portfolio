"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "initializing portfolio...",
  "loading components...",
  "ready.",
];

export default function PageEnter() {
  const [done, setDone] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    // Check sessionStorage so animation only plays once per session
    if (sessionStorage.getItem("entered")) {
      setDone(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setLineIndex(i), i * 350));
    });
    timers.push(
      setTimeout(() => {
        setDone(true);
        sessionStorage.setItem("entered", "1");
      }, lines.length * 350 + 400)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col items-center justify-center gap-2 pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Logo */}
          <motion.div
            className="font-[family-name:var(--font-mono)] text-[1.4rem] text-[var(--cyan)] mb-6 tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ~/tnt.dev
          </motion.div>

          {/* Lines */}
          <div className="flex flex-col gap-1">
            {lines.map((line, i) => (
              <motion.div
                key={line}
                className="font-[family-name:var(--font-mono)] text-[0.7rem] tracking-wide"
                initial={{ opacity: 0, x: -8 }}
                animate={i <= lineIndex ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.25 }}
                style={{ color: i === lines.length - 1 ? "var(--green)" : "var(--text3)" }}
              >
                <span className="text-[var(--cyan)] mr-2">$</span>
                {line}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div className="mt-8 w-40 h-[1px] bg-[var(--border2)] rounded overflow-hidden">
            <motion.div
              className="h-full bg-[var(--cyan)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: lines.length * 0.35, ease: "easeOut" }}
              style={{ boxShadow: "0 0 8px var(--cyan)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
