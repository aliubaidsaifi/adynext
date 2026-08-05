import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, footerLinks, socials, finalCta } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const telIN = `tel:${site.phoneIN.replace(/\s/g, "")}`;
  const telUS = `tel:${site.phoneUS.replace(/\s/g, "")}`;

  return (
    <footer className="bg-ink text-white noise relative overflow-hidden">
      <div className="container-px mx-auto max-w-content section-py relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-white/10">
          <div>
            <p className="eyebrow text-white/50 mb-4">Let&apos;s talk growth</p>
            <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-2xl">
              {finalCta.headline[0]} <span className="text-accent">{finalCta.headline[1]}</span>
            </h2>
          </div>
          <MagneticButton href={finalCta.cta.href} variant="light" className="shrink-0">
            {finalCta.cta.label}
            <ArrowUpRight size={16} />
          </MagneticButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl mb-4">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-[240px]">
              A results-driven digital marketing &amp; web studio helping ambitious brands grow
              online — strategy, creative and technology under one roof.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Sitemap</p>
            <ul className="space-y-3">
              {footerLinks.sitemap.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Get in touch</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
              </li>
              <li>
                <a href={telIN} className="hover:text-white transition-colors">{site.phoneIN}</a>
              </li>
              <li>
                <a href={telUS} className="hover:text-white transition-colors">{site.phoneUS}</a>
              </li>
              <li className="text-white/50">{site.address}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Follow</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {site.name} Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
    </footer>
  );
}