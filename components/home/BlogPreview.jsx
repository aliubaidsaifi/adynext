"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function BlogPreview() {
  return (
    <section id="blog" className="section-py bg-surface">
      <div className="container-px mx-auto max-w-content">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <RevealText>
              <p className="eyebrow mb-6">From the journal</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
                Notes on brands, growth and craft.
              </h2>
            </RevealText>
          </div>
          <MagneticButton href="/blog" variant="ghost">
            View all posts
            <ArrowUpRight size={16} />
          </MagneticButton>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/blog"
                data-cursor-hover
                className="group block h-full rounded-card bg-white border border-line p-7 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 ease-premium"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-line text-muted">
                    {post.category}
                  </span>
                  <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center transition-all duration-500 ease-premium group-hover:bg-ink group-hover:border-ink group-hover:rotate-45">
                    <ArrowUpRight size={15} className="group-hover:text-white" />
                  </span>
                </div>
                <h3 className="font-display text-xl mb-3 leading-snug">{post.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{post.excerpt}</p>
                <p className="text-xs text-muted">{post.date}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
