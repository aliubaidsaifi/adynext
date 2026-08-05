import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Services",
  description:
    "Website development, UI/UX design, SEO, digital marketing, AI automation, branding, performance optimization and mobile app development — all under one senior team.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 container-px mx-auto max-w-content">
        <RevealText>
          <p className="eyebrow mb-6">Services</p>
        </RevealText>
        <RevealText delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-4xl">
            Eight disciplines. One accountable team.
          </h1>
        </RevealText>
        <RevealText delay={0.15}>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mt-8">
            We don&apos;t hand you off between departments. The same senior
            team scopes, designs, builds and grows your project — so
            nothing gets lost in translation.
          </p>
        </RevealText>
      </section>

      <section className="container-px mx-auto max-w-content pb-24">
        <div className="flex flex-col divide-y divide-line border-t border-line">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="grid lg:grid-cols-12 gap-8 py-14 scroll-mt-32"
            >
              <div className="lg:col-span-1">
                <span className="font-display text-sm text-muted">{service.number}</span>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-display text-2xl sm:text-3xl mb-4">{service.title}</h2>
                <p className="text-muted leading-relaxed max-w-md">{service.description}</p>
              </div>
              <div className="lg:col-span-4">
                <ul className="space-y-3">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <Check size={15} className="text-ink" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end items-start">
                <MagneticButton href="/contact" variant="ghost">
                  Get started
                  <ArrowUpRight size={15} />
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
