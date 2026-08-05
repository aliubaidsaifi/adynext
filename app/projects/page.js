import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Projects",
  description:
    "Selected work from Adynext — fintech, e-commerce, healthtech and B2B SaaS projects with measurable results.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-20 container-px mx-auto max-w-content">
        <RevealText>
          <p className="eyebrow mb-6">Our work</p>
        </RevealText>
        <RevealText delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-4xl">
            Projects we&apos;re proud to put our name on.
          </h1>
        </RevealText>
      </section>

      <section className="container-px mx-auto max-w-content pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/contact"
              data-cursor-hover
              className="group block rounded-card overflow-hidden"
            >
              <div
                className="relative aspect-[4/3] rounded-card flex items-end p-7 mb-5 overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <span className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/70 backdrop-blur flex items-center justify-center transition-transform duration-500 ease-premium group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
                <p className="font-display text-[clamp(2rem,4vw,2.6rem)] leading-none text-ink/10 transition-transform duration-700 ease-premium group-hover:scale-105">
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
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.results.map((r) => (
                  <li key={r} className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-line text-muted">
                    {r}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
