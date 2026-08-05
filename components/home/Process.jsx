"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function Process() {
  return (
    <section id="process" className="section-py bg-surface">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <RevealText>
                <p className="eyebrow mb-6">How we work</p>
              </RevealText>
              <RevealText delay={0.05}>
                <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-tight mb-6">
                  A process built for momentum, not meetings.
                </h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-muted leading-relaxed max-w-sm">
                  Six stages, one accountable team. You&apos;ll always know
                  what&apos;s happening and why.
                </p>
              </RevealText>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid grid-cols-[auto_1fr] gap-6 sm:gap-10 py-10 border-b border-line last:border-none"
                >
                  <span className="font-display text-3xl sm:text-4xl text-ink/15 group-hover:text-ink/40 transition-colors duration-500">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl mb-2">{step.title}</h3>
                    <p className="text-muted leading-relaxed max-w-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
