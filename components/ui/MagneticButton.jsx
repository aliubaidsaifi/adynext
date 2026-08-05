"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "dark",
  className = "",
  type = "button",
  strength = 0.35,
}) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const base =
    "btn-pill inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-500 ease-premium";
  const styles = {
    dark: "bg-accent text-ink hover:bg-hover",
    light: "bg-white text-ink hover:bg-surface border border-line",
    ghost: "bg-transparent text-ink border border-ink/15 hover:border-ink",
  };

  const content = (
    <motion.span
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(base, styles[variant], className)}
      style={{ transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), background-color 0.5s" }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" data-cursor-hover>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block" data-cursor-hover>
      {content}
    </button>
  );
}
