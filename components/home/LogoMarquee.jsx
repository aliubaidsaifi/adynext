import { marqueeWords } from "@/lib/data";

export default function LogoMarquee() {
  const loop = [...marqueeWords, ...marqueeWords];

  return (
    <section className="py-10 border-y border-line overflow-hidden bg-white">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max animate-marquee items-center gap-8">
          {loop.map((word, i) => (
            <span key={`${word}-${i}`} className="flex items-center gap-8 whitespace-nowrap select-none">
              <span
                className={`font-display text-lg sm:text-2xl uppercase tracking-[0.12em] ${
                  i % 3 === 1 ? "text-text-accent-ink" : "text-ink/35"
                }`}
              >
                {word}
              </span>
              <span className="text-accent-ink/40 text-xs">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}