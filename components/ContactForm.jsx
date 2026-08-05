"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+"];
const serviceOptions = [
  "Website Development",
  "UI/UX Design",
  "SEO",
  "Digital Marketing",
  "AI Automation",
  "Branding",
  "Performance Optimization",
  "Mobile Apps",
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const onSubmit = async (data) => {
    setStatus("loading");
    // Simulated submission — wire this up to your endpoint of choice.
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-card bg-surface border border-line p-10 sm:p-14 text-center flex flex-col items-center justify-center min-h-[480px]"
      >
        <CheckCircle2 size={40} className="text-ink mb-6" />
        <h3 className="font-display text-2xl mb-3">Message sent.</h3>
        <p className="text-muted max-w-sm">
          Thanks for reaching out — a member of our team will reply within
          one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          data-cursor-hover
          className="mt-8 text-sm underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-card bg-surface border border-line p-8 sm:p-10">
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-xs text-muted mb-2 block" htmlFor="name">Full name</label>
          <input
            id="name"
            {...register("name", { required: "Please enter your name" })}
            placeholder="Jane Cooper"
            className="w-full bg-white border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-xs text-muted mb-2 block" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
            placeholder="jane@company.com"
            className="w-full bg-white border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-xs text-muted mb-2 block" htmlFor="company">Company</label>
          <input
            id="company"
            {...register("company")}
            placeholder="Company name"
            className="w-full bg-white border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
          />
        </div>
        <div>
          <label className="text-xs text-muted mb-2 block" htmlFor="budget">Budget</label>
          <select
            id="budget"
            {...register("budget", { required: "Please select a budget" })}
            defaultValue=""
            className="w-full bg-white border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
          >
            <option value="" disabled>Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.budget && <p className="text-xs text-red-500 mt-1.5">{errors.budget.message}</p>}
        </div>
      </div>

      <div className="mb-6">
        <label className="text-xs text-muted mb-3 block">Services you&apos;re interested in</label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => (
            <label
              key={s}
              className="text-xs px-3.5 py-2 rounded-full bg-white border border-line cursor-pointer has-[:checked]:bg-ink has-[:checked]:text-white has-[:checked]:border-ink transition-colors"
            >
              <input type="checkbox" value={s} {...register("services")} className="hidden" />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="text-xs text-muted mb-2 block" htmlFor="message">Project details</label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "Tell us a bit about your project" })}
          placeholder="What are you looking to build?"
          className="w-full bg-white border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors resize-none"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        data-cursor-hover
        className="btn-pill inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-accent text-ink hover:bg-hover transition-colors duration-500 ease-premium disabled:opacity-60"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "loading" ? (
            <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </motion.span>
          ) : (
            <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Send message
              <ArrowUpRight size={16} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
