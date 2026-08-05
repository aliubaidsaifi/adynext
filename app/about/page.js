import Image from "next/image";
import { about, values } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import Team from "@/components/home/Team";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "About Us",
  description:
    "AdyNext is an in-house marketing team for local businesses across India — strategy, advertising, local SEO and web development under one roof.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 container-px mx-auto max-w-content">
        <RevealText>
          <p className="eyebrow mb-6">{about.eyebrow}</p>
        </RevealText>
        <RevealText delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-4xl">
            {about.headline}
          </h1>
        </RevealText>
        <RevealText delay={0.15}>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mt-8">
            {about.intro}
          </p>
        </RevealText>
      </section>

      <section className="container-px mx-auto max-w-content mb-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-14">
          <div className="lg:col-span-6">
            <RevealText>
              <p className="eyebrow mb-6">{about.storyEyebrow}</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[1.1] tracking-tight">
                {about.storyTitle}
              </h2>
            </RevealText>
          </div>
          <div className="lg:col-span-6">
            <RevealText delay={0.1}>
              <p className="text-muted leading-relaxed">{about.storyBody}</p>
            </RevealText>
          </div>
        </div>

       <div className="relative rounded-card overflow-hidden aspect-[16/7] border border-line">
          <Image
            src="/images/team/office.webp"
            alt="The AdyNext team working from the Meerut studio"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">Our principles</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                What we stand for
              </h2>
            </RevealText>
          </div>
          <p className="text-muted leading-relaxed max-w-md lg:pb-2">
            Four principles that shape every account, regardless of size or budget.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {values.map((v) => (
            <div key={v.number} className="grid md:grid-cols-12 gap-4 md:gap-8 py-8">
              <p className="md:col-span-1 font-display text-sm text-accent-ink">{v.number}</p>
              <h3 className="md:col-span-4 font-display text-lg sm:text-xl">{v.title}</h3>
              <p className="md:col-span-7 text-muted leading-relaxed text-sm sm:text-base">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Team />

      <Stats />

      <CTA />
    </>
  );
}