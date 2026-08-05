"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <section className="pt-24 pb-8 bg-white">
      <div className="container-px mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-card bg-surface border border-line overflow-hidden px-8 py-16 sm:px-16 sm:py-24 text-center noise"
        >
          <div className="absolute top-[-20%] left-[10%] w-72 h-72 rounded-full bg-white blur-3xl animate-blob" />
          <div className="absolute bottom-[-20%] right-[10%] w-72 h-72 rounded-full bg-white blur-3xl animate-blob [animation-delay:4s]" />

          <div className="relative z-10">
            <p className="eyebrow mb-6">Let&apos;s talk</p>
            <h2 className="font-display font-medium text-[clamp(2rem,6vw,4.5rem)] leading-[0.98] tracking-tight max-w-3xl mx-auto mb-10">
              Have a project in mind? Let&apos;s build something worth talking about.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href="/contact" variant="dark">
                Start a project
                <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton href="/projects" variant="light">
                See our work
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
