"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function Team() {
  return (
    <section className="section-py bg-surface">
      <div className="container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">Our team</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                The people behind it
              </h2>
            </RevealText>
          </div>
          <p className="text-muted leading-relaxed max-w-md lg:pb-2">
            A small, senior team — no juniors learning on your budget.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-card overflow-hidden">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white p-6 sm:p-7"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              <p className="font-display text-base mb-1">{member.name}</p>
              <p className="text-xs uppercase tracking-wider text-accent-ink">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}