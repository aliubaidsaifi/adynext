"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function Services() {
  return (
    <section id="services" className="section-py bg-surface">
      <div className="container-px mx-auto max-w-content">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">What we do</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight max-w-2xl">
                Everything a growing brand needs, under one roof.
              </h2>
            </RevealText>
          </div>
          <RevealText delay={0.1}>
            <p className="text-muted max-w-sm">
              Eight disciplines, one senior team — so nothing gets lost in
              translation between design, dev and growth.
            </p>
          </RevealText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              id={service.id}
            >
              <Link
                href={`/services#${service.id}`}
                data-cursor-hover
                className="group block h-full rounded-card bg-white border border-line p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-display text-sm text-muted">{service.number}</span>
                  <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center transition-all duration-500 ease-premium group-hover:bg-ink group-hover:border-ink group-hover:rotate-45">
                    <ArrowUpRight size={15} className="text-ink transition-colors group-hover:text-white" />
                  </span>
                </div>
                <h3 className="font-display text-xl mb-3">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.points.slice(0, 2).map((p) => (
                    <span
                      key={p}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-surface text-muted border border-line"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
