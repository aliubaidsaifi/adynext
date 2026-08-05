"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { hero, platforms } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 noise">
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-pill glass px-4 py-2 mb-8"
        >
          <Sparkles size={14} className="text-accent-ink" />
          <span className="text-xs font-medium tracking-wide uppercase">{hero.eyebrow}</span>
        </motion.div>

        <h1 className="font-display font-medium leading-[0.94] tracking-tight text-[clamp(2.75rem,8vw,7rem)] max-w-5xl">
          {hero.headline.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden align-top mr-[0.22em]">
              <motion.span
                className={`inline-block ${i === hero.headline.length - 1 ? "text-accent-ink" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.08 }}
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
          className="text-muted leading-relaxed max-w-xl mt-8 text-base sm:text-lg"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 mt-10"
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
          className="flex flex-wrap items-center gap-2.5 mt-12"
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="container-px mx-auto max-w-content w-full mt-20"
      >
        <div className="relative rounded-card overflow-hidden border border-line bg-surface aspect-[16/8] group">
          <Image
            src="/images/work/hero-dashboard.webp"
            alt="Campaign performance dashboard showing lead growth for an AdyNext client"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4 hidden sm:block"
          >
            <p className="text-xs text-muted mb-1">Our promise</p>
            <p className="font-display text-sm font-medium">200% ROI guarantee — or we work free</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute top-6 right-6 glass rounded-2xl px-5 py-3 hidden sm:flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent-ink animate-pulse" />
            <p className="text-xs font-medium">600+ campaigns launched</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}