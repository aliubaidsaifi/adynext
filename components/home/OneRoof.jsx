"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { oneRoof } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function OneRoof() {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">{oneRoof.eyebrow}</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                {oneRoof.title}
              </h2>
            </RevealText>
          </div>
          <p className="text-muted leading-relaxed max-w-md lg:pb-2">
            {oneRoof.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-card overflow-hidden">
          {oneRoof.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white p-7 sm:p-8 hover:bg-accent-soft/40 transition-colors duration-500"
            >
              <span className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-6">
                <Check size={15} className="text-ink" />
              </span>
              <p className="font-display text-base leading-snug">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}