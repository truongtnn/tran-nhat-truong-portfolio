"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const skills = ["React", "TypeScript", "Next.js", "REST API"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex items-center
        px-6 md:px-12
        pt-24
        pb-16
        max-w-[1100px]
        mx-auto
        overflow-hidden
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          w-[600px]
          h-[600px]
          rounded-full
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 65%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-60
          -left-60
          w-[500px]
          h-[500px]
          rounded-full
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative
          z-10
          w-full
          grid
          grid-cols-1
          lg:grid-cols-[1fr_360px]
          gap-14
          lg:gap-20
          items-center
        "
      >
        {/* ================= LEFT ================= */}
        <div>
          {/* Greeting */}
          <motion.p
            variants={item}
            className="
              text-sm
              md:text-base
              text-text2
              mb-5
            "
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="
              text-text
              font-semibold
              tracking-[-0.04em]
              leading-[0.95]
              text-[clamp(3.2rem,8vw,6rem)]
              mb-6
            "
          >
            Tran Nhat
            <br />
            <span className="text-cyan">Truong</span>
            <span className="text-cyan">.</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={item}
            className="
              text-[clamp(1.25rem,2.5vw,1.7rem)]
              font-medium
              text-text
              mb-5
            "
          >
            Fresher Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="
              max-w-[600px]
              text-base
              md:text-lg
              leading-[1.8]
              text-text2
              mb-7
            "
          >
            I build responsive and user-friendly web applications with a focus
            on clean interfaces, maintainable code, and smooth user experiences.
          </motion.p>

          {/* Skills */}
          <motion.div
            variants={item}
            className="
              flex
              flex-wrap
              gap-2
              mb-9
            "
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-3
                  py-1.5
                  rounded-full
                  text-xs
                  md:text-sm
                  text-text2
                  border
                  border-border2
                  bg-bg2
                  transition-colors
                  duration-200
                  hover:border-border
                  hover:text-text
                "
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div
            variants={item}
            className="
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-lg
                bg-cyan
                text-bg
                text-sm
                font-semibold
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_8px_30px_rgba(0,212,255,0.2)]
              "
            >
              View Projects
            </a>

            <a
              href="/cv/Tran-Nhat-Truong-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-lg
                border
                border-border2
                text-text
                text-sm
                font-medium
                transition-all
                duration-200
                hover:border-border
                hover:bg-bg2
              "
            >
              Download CV
            </a>

            <a
              href="mailto:tnt040519@gmail.com"
              className="
                text-sm
                text-text2
                transition-colors
                duration-200
                hover:text-cyan
              "
            >
              Get in touch →
            </a>
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}
        <motion.div
          variants={item}
          className="
            hidden
            lg:flex
            justify-center
          "
        >
          <div className="relative">
            {/* Main photo container */}
            <div
              className="
                relative
                w-[300px]
                h-[380px]
                rounded-2xl
                overflow-hidden
                bg-bg2
                border
                border-border2
              "
            >
              {/* Replace with your real image */}
              <Image
                src="/avatar.jpg"
                alt="Tran Nhat Truong"
                fill
                priority
                className="object-cover"
                sizes="300px"
              />

              {/* Bottom gradient */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  bg-gradient-to-t
                  from-bg
                  to-transparent
                "
              />

              {/* Name inside image */}
              <div className="absolute bottom-5 left-5">
                <p className="text-sm font-medium text-text">
                  Tran Nhat Truong
                </p>

                <p className="text-xs text-text2 mt-1">Frontend Developer</p>
              </div>
            </div>

            {/* Small info card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="
                absolute
                -bottom-7
                -left-8
                bg-bg2
                border
                border-border2
                rounded-xl
                px-5
                py-4
                shadow-[0_15px_50px_rgba(0,0,0,0.25)]
              "
            >
              <p className="text-xs text-text3 mb-1">Focus</p>

              <p className="text-sm text-text font-medium">
                React · TypeScript
              </p>
            </motion.div>

            {/* Small decorative dot */}
            <div
              className="
                absolute
                -top-3
                -right-3
                w-6
                h-6
                rounded-full
                bg-cyan
                shadow-[0_0_25px_rgba(0,212,255,0.35)]
              "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
        "
      >
        <span className="text-[10px] text-text3 uppercase tracking-[0.2em]">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-text3"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
