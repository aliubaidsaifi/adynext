import { ArrowUpRight, MapPin } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Careers",
  description: "Join Adynext — open roles in design, engineering and growth at a 30-person digital agency.",
};

const roles = [
  { title: "Senior Product Designer", location: "Remote · US/EU", type: "Full-time" },
  { title: "Frontend Engineer (Next.js)", location: "Remote · US/EU", type: "Full-time" },
  { title: "SEO Strategist", location: "Remote", type: "Full-time" },
  { title: "AI Automation Engineer", location: "Remote", type: "Full-time" },
  { title: "Account Director", location: "New York, NY", type: "Full-time" },
];

const perks = [
  "Fully remote, async-friendly",
  "Unlimited PTO, 4 weeks minimum",
  "Annual studio retreat",
  "Health, dental & vision covered",
  "$1,500 learning budget",
  "Equipment of your choice",
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-40 pb-20 container-px mx-auto max-w-content">
        <RevealText>
          <p className="eyebrow mb-6">Careers</p>
        </RevealText>
        <RevealText delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-4xl">
            Work that gets shipped, not shelved.
          </h1>
        </RevealText>
        <RevealText delay={0.15}>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mt-8">
            We&apos;re a small, senior team — every hire changes our culture,
            so we take it seriously. If nothing below fits but you think you
            should be here, reach out anyway.
          </p>
        </RevealText>
      </section>

      <section className="container-px mx-auto max-w-content pb-20">
        <div className="grid sm:grid-cols-3 gap-4 mb-20">
          {perks.map((perk) => (
            <div key={perk} className="rounded-card bg-surface border border-line px-6 py-5 text-sm">
              {perk}
            </div>
          ))}
        </div>

        <p className="eyebrow mb-8">Open roles</p>
        <div className="flex flex-col divide-y divide-line border-t border-line">
          {roles.map((role) => (
            <div key={role.title} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6">
              <div>
                <h3 className="font-display text-lg">{role.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted mt-1">
                  <MapPin size={12} />
                  <span>{role.location}</span>
                  <span>·</span>
                  <span>{role.type}</span>
                </div>
              </div>
              <MagneticButton href="/contact" variant="ghost">
                Apply
                <ArrowUpRight size={15} />
              </MagneticButton>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
