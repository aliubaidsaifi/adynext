import RevealText from "@/components/ui/RevealText";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Pricing",
  description: "Transparent, fixed-fee pricing for websites, branding and AI automation projects from Adynext.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-40 pb-16 container-px mx-auto max-w-content text-center">
        <RevealText>
          <p className="eyebrow mb-6">Pricing</p>
        </RevealText>
        <RevealText delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-3xl mx-auto">
            No hourly surprises. Just clear scopes.
          </h1>
        </RevealText>
      </section>
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
