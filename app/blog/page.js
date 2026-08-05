import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Blog",
  description: "Notes on brand strategy, performance, design and AI automation from the Adynext team.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-40 pb-20 container-px mx-auto max-w-content">
        <RevealText>
          <p className="eyebrow mb-6">Journal</p>
        </RevealText>
        <RevealText delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight max-w-4xl">
            Notes on brands, growth and craft.
          </h1>
        </RevealText>
      </section>

      <section className="container-px mx-auto max-w-content pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              data-cursor-hover
              className="group block h-full rounded-card bg-surface border border-line p-7 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 ease-premium"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-line text-muted">
                  {post.category}
                </span>
                <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center transition-all duration-500 ease-premium group-hover:bg-ink group-hover:border-ink group-hover:rotate-45">
                  <ArrowUpRight size={15} className="group-hover:text-white" />
                </span>
              </div>
              <h2 className="font-display text-xl mb-3 leading-snug">{post.title}</h2>
              <p className="text-sm text-muted leading-relaxed mb-6">{post.excerpt}</p>
              <p className="text-xs text-muted">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
