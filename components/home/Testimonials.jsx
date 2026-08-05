"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Play, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import Image from "next/image";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="section-py bg-white">
      <div className="container-px mx-auto max-w-content">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">Client stories</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                Don&apos;t take our word for it.
              </h2>
            </RevealText>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              data-cursor-hover
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              data-cursor-hover
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-[clamp(20px,5vw,96px)]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="shrink-0 w-[85vw] sm:w-[440px] rounded-card bg-surface border border-line p-8 sm:p-9 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-ink text-white flex items-center justify-center mb-8">
                  <Quote size={16} />
                </div>
                <p className="font-display text-lg sm:text-xl leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-11 h-11 rounded-full bg-ink/10 flex items-center justify-center font-display text-sm">
                  {t.image ? (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image src={t.image} alt={t.name} fill sizes="44px" className="object-cover" />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center font-display text-sm text-ink shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
                <button
                  data-cursor-hover
                  aria-label="Play video testimonial"
                  className="ml-auto w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all"
                >
                  <Play size={13} fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
