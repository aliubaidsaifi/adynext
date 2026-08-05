import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Case Studies",
  description: "In-depth breakdowns of how Adynext drove measurable growth for clients across fintech, e-commerce and healthtech.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-40 pb-20 container-px mx-auto max-w-content">
        <RevealText>
          <p className="eyebrow mb-6">Case studies</p>
        </RevealText>
        <RevealText delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-4xl">
            The story behind the numbers.
          </h1>
        </RevealText>
      </section>

      <section className="container-px mx-auto max-w-content pb-24">
        <div className="flex flex-col divide-y divide-line border-t border-line">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              href="/contact"
              data-cursor-hover
              className="group grid lg:grid-cols-12 gap-6 py-10 items-center"
            >
              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-line text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display text-2xl mb-2 group-hover:opacity-70 transition-opacity">{cs.title}</h2>
                <p className="text-muted text-sm max-w-xl">{cs.excerpt}</p>
              </div>
              <div className="lg:col-span-3 text-sm text-muted">{cs.readTime}</div>
              <div className="lg:col-span-1 flex lg:justify-end">
                <span className="w-11 h-11 rounded-full border border-line flex items-center justify-center transition-all duration-500 ease-premium group-hover:bg-ink group-hover:border-ink group-hover:rotate-45">
                  <ArrowUpRight size={16} className="group-hover:text-white" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
