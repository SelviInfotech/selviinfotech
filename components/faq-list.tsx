"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RichText } from "@/components/rich-text";
import type { Faq } from "@/data/services";

export function FaqList({ items, className = "" }: { items: Faq[]; className?: string }) {
  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-3.5 ${className}`}>
      {items.map((item, index) => (
        <FaqItem key={item.question} item={item} index={index} />
      ))}
    </div>
  );
}

function FaqItem({ item, index }: { item: Faq; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();

  return (
    <div
      className={`faq-item reveal rounded-2xl border bg-card px-5 ${open ? "border-gold-bright/40" : "border-border"}`}
      style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-3.5 text-left text-base font-medium text-green-900"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.question}
        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full text-lg leading-none ${open ? "bg-green-800 text-cream" : "bg-green-100 text-green-800"}`}
          aria-hidden="true"
        >
          {open ? "–" : "+"}
        </span>
      </button>
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-4 leading-relaxed text-muted-foreground">
          <RichText text={item.answer} />
        </p>
      </motion.div>
    </div>
  );
}
