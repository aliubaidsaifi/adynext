"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ease-premium ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`container-px mx-auto max-w-content flex items-center justify-between rounded-pill transition-all duration-500 ease-premium ${
            scrolled ? "glass px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : "px-2 py-2"
          }`}
        >
          <Link href="/" className="font-display text-xl font-semibold tracking-tight">
            Adynext
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-ink/80 hover:text-ink transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton href="/contact" variant="dark">
              Start a project
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full hover:bg-ink/5 transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[400] bg-white lg:hidden"
          >
            <div className="flex flex-col justify-between h-full container-px pt-28 pb-12">
              <nav className="flex flex-col gap-2">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="font-display text-4xl py-3 block border-b border-line"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <MagneticButton href="/contact" variant="dark" className="w-full justify-center">
                Start a project
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
