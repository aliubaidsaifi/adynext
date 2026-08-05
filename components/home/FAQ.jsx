"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-py bg-white">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <RevealText>
                <p className="eyebrow mb-6">FAQ</p>
              </RevealText>
              <RevealText delay={0.05}>
                <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-tight mb-6">
                  Questions we hear before every kickoff.
                </h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-muted">
                  Can&apos;t find what you need? {" "}
                  <a href="/contact" className="text-ink underline underline-offset-4">
                    Send us a message
                  </a>
                  .
                </p>
              </RevealText>
            </div>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    data-cursor-hover
                    className="w-full flex items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-lg sm:text-xl">{faq.question}</span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border border-line flex items-center justify-center transition-transform duration-500 ease-premium ${
                        isOpen ? "rotate-45 bg-ink text-white border-ink" : ""
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted leading-relaxed pb-7 max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
