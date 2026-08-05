"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center container-px noise relative overflow-hidden">
      <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-surface blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-[10%] right-[15%] w-72 h-72 rounded-full bg-surface blur-3xl animate-blob [animation-delay:3s] -z-10" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(6rem,20vw,14rem)] leading-none tracking-tight text-ink/10"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-2xl sm:text-3xl -mt-6 mb-4"
      >
        This page grew somewhere else.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-muted max-w-sm mb-10"
      >
        The page you&apos;re looking for doesn&apos;t exist, or has moved. Let&apos;s get you back on track.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <MagneticButton href="/" variant="dark">
          Back to home
          <ArrowUpRight size={16} />
        </MagneticButton>
      </motion.div>
    </section>
  );
}
