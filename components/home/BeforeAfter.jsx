"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { leadComparison } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function BeforeAfter() {
  return (
    <section className="section-py bg-surface">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">{leadComparison.eyebrow}</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                {leadComparison.title}
              </h2>
            </RevealText>
          </div>
          <p className="text-muted leading-relaxed max-w-md lg:pb-2">
            {leadComparison.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-card border border-coral/25 bg-coral-soft/50 p-8 sm:p-10"
          >
            <p className="text-xs uppercase tracking-widest text-coral font-semibold mb-8">
              {leadComparison.bad.label}
            </p>
            <ul className="space-y-5">
              {leadComparison.bad.points.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={13} className="text-coral" />
                  </span>
                  <p className="text-sm sm:text-base text-ink/75">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-card border border-accent-ink/25 bg-accent-soft/60 p-8 sm:p-10"
          >
            <p className="text-xs uppercase tracking-widest text-accent-ink font-semibold mb-8">
              {leadComparison.good.label}
            </p>
            <ul className="space-y-5">
              {leadComparison.good.points.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-ink" />
                  </span>
                  <p className="text-sm sm:text-base font-medium">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}