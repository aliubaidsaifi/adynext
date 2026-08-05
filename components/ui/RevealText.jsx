"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
  y = 40,
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <Tag>{children}</Tag>
      </motion.div>
    </div>
  );
}
