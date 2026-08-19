"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { hero, platforms } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 lg:py-32 noise">
      {/* ---------- ambient background ---------- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] rounded-full bg-accent-soft blur-3xl opacity-80 animate-blob" />
        <div className="absolute bottom-[-15%] right-[5%] w-[520px] h-[520px] rounded-full bg-accent-soft blur-3xl opacity-60 animate-blob [animation-delay:3s]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(#16161A0D 1px, transparent 1px), linear-gradient(90deg, #16161A0D 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-px mx-auto max-w-content w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* ================= LEFT — content ================= */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-pill glass px-4 py-2 mb-8"
            >
              <Sparkles size={14} className="text-accent-ink" />
              <span className="text-xs font-medium tracking-wide uppercase">
                {hero.eyebrow}
              </span>
            </motion.div>

            <h1 className="font-display font-medium leading-[0.94] tracking-tight text-[clamp(2.5rem,6vw,4.75rem)]">
              {hero.headline.map((word, i) => (
                <span
                  key={word}
                  className="inline-block overflow-hidden align-top mr-[0.22em]"
                >
                  <motion.span
                    className={`inline-block ${
                      i === hero.headline.length - 1 ? "text-accent-ink" : ""
                    }`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.15 + i * 0.08,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted leading-relaxed max-w-xl mt-7 text-base sm:text-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mt-9"
            >
              <MagneticButton href={hero.primaryCta.href} variant="dark">
                {hero.primaryCta.label}
                <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton href={hero.secondaryCta.href} variant="ghost">
                {hero.secondaryCta.label}
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-2.5 mt-10"
            >
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-3.5 py-2 rounded-full border border-line bg-white/70 backdrop-blur"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT — visual ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <div className="relative rounded-card overflow-hidden border border-line bg-surface aspect-[16/10] lg:aspect-[4/3] group">
              <Image
                src="/images/work/hero-dashboard.webp"
                alt="Campaign performance dashboard showing lead growth for an AdyNext client"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />

              {/* 200% ROI promise — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="absolute bottom-4 left-4 lg:bottom-5 lg:left-5 glass rounded-2xl px-4 py-3 max-w-[70%] hidden sm:block"
              >
                <p className="text-[11px] text-muted mb-0.5">Our promise</p>
                <p className="font-display text-[13px] leading-snug font-medium">
                  200% ROI guarantee — or we work free
                </p>
              </motion.div>

              {/* campaigns badge — top right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.15 }}
                className="absolute top-4 right-4 lg:top-5 lg:right-5 glass rounded-2xl px-3.5 py-2.5 hidden sm:flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-accent-ink animate-pulse shrink-0" />
                <p className="text-[11px] font-medium whitespace-nowrap">
                  600+ campaigns launched
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}