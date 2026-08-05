"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { stats, roiGuarantee, platforms } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import RevealText from "@/components/ui/RevealText";

export default function Stats() {
  return (
    <section id="why-us" className="section-py bg-white">
      <div className="container-px mx-auto max-w-content">
        <div className="mb-16 max-w-2xl">
          <RevealText>
            <p className="eyebrow mb-6">We focus on results</p>
          </RevealText>
          <RevealText delay={0.05}>
            <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
              Numbers that speak for themselves.
            </h2>
          </RevealText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-card overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 sm:p-10"
            >
              <p className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none mb-3 text-accent-ink">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-card bg-surface border border-line p-8 sm:p-10"
          >
            <p className="eyebrow mb-6">{roiGuarantee.eyebrow}</p>
            <p className="font-display text-[clamp(3rem,7vw,4.5rem)] leading-none text-accent-ink mb-4">
              {roiGuarantee.headline}
            </p>
            <p className="text-sm text-muted leading-relaxed mb-8">
              {roiGuarantee.description}
            </p>
            <div className="space-y-3">
              {roiGuarantee.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-accent-ink" />
                  </span>
                  <p className="text-sm">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-card bg-surface border border-line p-8 sm:p-10"
          >
            <p className="eyebrow mb-6">Campaigns across every major platform</p>
            <div className="flex flex-wrap gap-2.5">
               {platforms.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-2 text-xs px-3.5 py-2 rounded-full bg-white border border-line text-ink/80"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}