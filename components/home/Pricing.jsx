"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { pricing } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Pricing() {
  return (
    <section id="pricing" className="section-py bg-surface">
      <div className="container-px mx-auto max-w-content">
        <div className="max-w-2xl mb-16">
          <RevealText>
            <p className="eyebrow mb-6">Pricing</p>
          </RevealText>
          <RevealText delay={0.05}>
            <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
              Straightforward pricing, senior-level work.
            </h2>
          </RevealText>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-card p-8 sm:p-9 flex flex-col ${
                plan.highlighted
                  ? "bg-ink text-white lg:-translate-y-4 shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                  : "bg-white border border-line"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block w-fit text-[11px] px-3 py-1 rounded-full bg-white/15 text-white mb-6">
                  Most popular
                </span>
              )}
              <p className="font-display text-2xl mb-2">{plan.name}</p>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/60" : "text-muted"}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                {plan.price ? (
                  <p className="font-display text-4xl">
                    ${plan.price.toLocaleString()}
                    <span className={`text-sm font-normal ml-1 ${plan.highlighted ? "text-white/50" : "text-muted"}`}>
                      /{plan.period}
                    </span>
                  </p>
                ) : (
                  <p className="font-display text-4xl">Custom</p>
                )}
              </div>

              <ul className="space-y-3.5 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-white" : "text-ink"}`} />
                    <span className={plan.highlighted ? "text-white/80" : "text-ink/80"}>{f}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="/contact"
                variant={plan.highlighted ? "light" : "dark"}
                className="w-full justify-center"
              >
                {plan.price ? "Start a project" : "Talk to us"}
                <ArrowUpRight size={16} />
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
