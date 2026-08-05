"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { inHouseTeam, builtForLocal } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function About() {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <RevealText>
              <p className="eyebrow mb-6">{inHouseTeam.eyebrow}</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.08] tracking-tight">
                {inHouseTeam.title}
              </h2>
            </RevealText>
          </div>
          <div className="lg:col-span-5">
            <RevealText delay={0.1}>
              <p className="text-muted leading-relaxed mb-8">{inHouseTeam.description}</p>
            </RevealText>
            <RevealText delay={0.15}>
              <ul className="space-y-4">
                {inHouseTeam.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-ink" />
                    </span>
                    <p className="text-sm">{point}</p>
                  </li>
                ))}
              </ul>
            </RevealText>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 rounded-card overflow-hidden aspect-[16/7] border border-line"
        >
           <Image
            src="/images/team/hero.webp"
            alt="The AdyNext team working from the Meerut studio"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mt-24">
          <div className="lg:col-span-6">
            <RevealText>
              <p className="eyebrow mb-6">{builtForLocal.eyebrow}</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[1.1] tracking-tight mb-6">
                {builtForLocal.title}
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-muted leading-relaxed">{builtForLocal.description}</p>
            </RevealText>
          </div>
          <div className="lg:col-span-6 rounded-card border border-line bg-surface divide-y divide-line overflow-hidden">
            {builtForLocal.capabilities.map((c) => (
              <div key={c} className="flex items-center gap-4 px-7 py-5">
                <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Check size={13} className="text-ink" />
                </span>
                <p className="text-sm font-medium">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}