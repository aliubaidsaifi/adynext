import ContactForm from "@/components/ContactForm";
import RevealText from "@/components/ui/RevealText";
import { site, socials } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Talk to AdyNext about growing your business. Book a free consultation and we'll reply within one business day.",
};

export default function ContactPage() {
  const telIN = `tel:${site.phoneIN.replace(/\s/g, "")}`;
  const telUS = `tel:${site.phoneUS.replace(/\s/g, "")}`;

  return (
    <section className="pt-40 pb-24 container-px mx-auto max-w-content">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <RevealText>
            <p className="eyebrow mb-6">Contact</p>
          </RevealText>
          <RevealText delay={0.05}>
            <h1 className="font-display font-medium text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] tracking-tight mb-6">
              Let&apos;s grow your business.
            </h1>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-muted leading-relaxed mb-10 max-w-sm">
              Fill out the form and we&apos;ll reply within one business day with a free
              audit of how your business currently shows up online — no automated sales
              sequence, just a real person from the team.
            </p>
          </RevealText>

          <div className="space-y-5 mb-10">
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 group" data-cursor-hover>
              <span className="w-11 h-11 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
                <Mail size={16} />
              </span>
              <span className="text-sm group-hover:opacity-70 transition-opacity">{site.email}</span>
            </a>
            <a href={telIN} className="flex items-center gap-4 group" data-cursor-hover>
              <span className="w-11 h-11 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
                <Phone size={16} />
              </span>
              <span className="text-sm group-hover:opacity-70 transition-opacity">{site.phoneIN}</span>
            </a>
            <a href={telUS} className="flex items-center gap-4 group" data-cursor-hover>
              <span className="w-11 h-11 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
                <Phone size={16} />
              </span>
              <span className="text-sm group-hover:opacity-70 transition-opacity">{site.phoneUS}</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </span>
              <span className="text-sm">{site.address}</span>
            </div>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor-hover className="text-xs px-4 py-2 rounded-full border border-line hover:bg-ink hover:text-white hover:border-ink transition-all">
                {s.label}
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-card overflow-hidden border border-line bg-surface p-8">
            <p className="eyebrow mb-4">Working hours</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted">Monday &ndash; Saturday</span>
                <span>10:00 AM &ndash; 7:00 PM IST</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed mt-6 pt-6 border-t border-line">
              Based in {site.address} &mdash; working with local businesses across India and
              a handful of clients internationally.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}