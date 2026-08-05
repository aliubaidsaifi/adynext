"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";

export default function Projects() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(null);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="work" className="section-py bg-white overflow-hidden">
      <div className="container-px mx-auto max-w-content">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">Featured work</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                Selected projects, chosen results.
              </h2>
            </RevealText>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              data-cursor-hover
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              data-cursor-hover
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-6 px-[clamp(20px,5vw,96px)] snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            onClick={() => setActive(project)}
            data-cursor-hover
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group snap-start shrink-0 w-[85vw] sm:w-[440px] text-left"
          >
            <div
              className="relative rounded-card aspect-[4/5] overflow-hidden mb-5 flex items-end p-7"
              style={{ backgroundColor: project.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/70 backdrop-blur flex items-center justify-center transition-transform duration-500 ease-premium group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
              <p className="relative font-display text-[clamp(2rem,4vw,2.6rem)] leading-none text-ink/10 transition-transform duration-700 ease-premium group-hover:scale-105 group-hover:text-ink/15">
                {project.title}
              </p>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl mb-1">{project.title}</h3>
                <p className="text-sm text-muted">{project.category}</p>
              </div>
              <span className="text-sm text-muted shrink-0">{project.year}</span>
            </div>
          </motion.button>
        ))}
        <div className="shrink-0 w-1" />
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-8"
          >
            <div
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10"
            >
              <button
                onClick={() => setActive(null)}
                data-cursor-hover
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div
                className="w-full aspect-[16/9] rounded-2xl mb-8"
                style={{ backgroundColor: active.color }}
              />
              <p className="eyebrow mb-3">{active.category} · {active.year}</p>
              <h3 className="font-display text-3xl mb-4">{active.title}</h3>
              <p className="text-muted leading-relaxed mb-8">{active.description}</p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line">
                {active.results.map((r) => (
                  <div key={r}>
                    <p className="font-display text-sm leading-snug">{r}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
