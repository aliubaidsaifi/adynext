"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { foundation } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function Foundation() {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">{foundation.eyebrow}</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                {foundation.title}
              </h2>
            </RevealText>
          </div>
          <p className="text-muted leading-relaxed max-w-md lg:pb-2">
            {foundation.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-card overflow-hidden mb-6">
          {foundation.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 sm:p-10"
            >
              <p className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-none mb-3 text-accent-ink">
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-card border border-line bg-surface p-8 sm:p-10"
        >
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {foundation.checklist.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={13} className="text-ink" />
                </span>
                <p className="text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}