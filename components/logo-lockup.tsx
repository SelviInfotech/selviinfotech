import { BrandMark } from "@/components/brand-mark";

export function LogoLockup({
  tone = "dark",
  size = "md",
  className = "",
}: {
  tone?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
}) {
  const title = tone === "light" ? "text-cream" : "text-green-900";
  const sub = tone === "light" ? "text-[#F0C463]" : "text-gold";
  const mark = size === "lg" ? "h-14 w-14 sm:h-16 sm:w-16" : "h-11 w-11";
  const word = size === "lg" ? "text-[0.78rem] tracking-[0.14em] sm:text-[0.98rem] sm:tracking-[0.16em]" : "text-[0.92rem] tracking-[0.16em]";
  const legal = size === "lg" ? "text-[0.5rem] tracking-[0.2em] sm:text-[0.62rem] sm:tracking-[0.22em]" : "text-[0.58rem] tracking-[0.24em]";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark className={`${mark} shrink-0`} />
      <span className="leading-none">
        <span className={`block font-sans font-semibold ${word} ${title}`}>SELVI INFOTECH</span>
        <span className={`mt-1.5 block font-sans font-semibold ${legal} ${sub}`}>PRIVATE LIMITED</span>
      </span>
    </span>
  );
}
