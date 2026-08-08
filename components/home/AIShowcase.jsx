"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Zap, ArrowUpRight } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const nodes = [
  { icon: Bot, label: "Support Agent", detail: "Resolves 68% of tickets instantly" },
  { icon: Workflow, label: "Lead Routing", detail: "Qualifies & assigns in real time" },
  { icon: Zap, label: "Ops Automation", detail: "Syncs billing, CRM & inventory" },
];

export default function AIShowcase() {
  return (
    <section id="ai-automation" className="section-py bg-ink text-white relative overflow-hidden noise">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="container-px mx-auto max-w-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealText>
              <p className="eyebrow text-white/50 mb-6">AI Automation</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.08] tracking-tight mb-6">
                We build the AI systems your team wishes it had time to build.
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-white/60 leading-relaxed mb-10 max-w-lg">
                From customer-facing agents to internal workflow automation,
                we design AI systems that plug into your existing tools —
                and hand your team back the hours they were spending on
                repetitive work.
              </p>
            </RevealText>
            <RevealText delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="/marketing#marketing-automation" variant="light">
                  Explore AI automation
                  <ArrowUpRight size={16} />
                </MagneticButton>
                <MagneticButton href="/contact" variant="ghost"
                  className="!border-white/30 !text-white hover:!bg-white hover:!text-ink">
                  Schedule free consultation
                </MagneticButton>
              </div>
            </RevealText>
          </div>

          <div className="space-y-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="glass-dark rounded-2xl p-6 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <node.icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-lg">{node.label}</p>
                  <p className="text-sm text-white/50">{node.detail}</p>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
