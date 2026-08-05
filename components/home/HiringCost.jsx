"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { hiringCosts } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HiringCost() {
  return (
    <section className="section-py bg-surface">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">{hiringCosts.eyebrow}</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                {hiringCosts.title}
              </h2>
            </RevealText>
          </div>
          <p className="text-muted leading-relaxed max-w-md lg:pb-2">
            {hiringCosts.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-line rounded-card overflow-hidden mb-6">
          {hiringCosts.roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-7 sm:p-8 flex items-center justify-between gap-4 flex-wrap"
            >
              <p className="font-display text-base sm:text-lg">{r.role}</p>
              <span className="text-xs sm:text-sm px-4 py-2 rounded-full border border-coral/30 bg-coral-soft/50 text-coral whitespace-nowrap">
                {r.salary}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-card border border-accent-ink/25 bg-accent-soft/60 p-8 sm:p-12 text-center"
        >
          <h3 className="font-display font-medium text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.15] tracking-tight max-w-3xl mx-auto mb-5">
            {hiringCosts.callout.title}
          </h3>
          <p className="text-muted leading-relaxed max-w-xl mx-auto mb-9">
            {hiringCosts.callout.subtitle}
          </p>
          <MagneticButton href={hiringCosts.callout.cta.href} variant="dark">
            {hiringCosts.callout.cta.label}
            <ArrowUpRight size={16} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}