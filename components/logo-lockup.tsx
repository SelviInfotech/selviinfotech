import { BrandMark } from "@/components/brand-mark";

export function LogoLockup({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const title = tone === "light" ? "text-cream" : "text-green-900";
  const sub = tone === "light" ? "text-[#F0C463]" : "text-gold";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark className="h-11 w-11 shrink-0" />
      <span className="leading-none">
        <span className={`block font-sans text-[0.92rem] font-semibold tracking-[0.16em] ${title}`}>SELVI INFOTECH</span>
        <span className={`mt-1.5 block font-sans text-[0.58rem] font-semibold tracking-[0.24em] ${sub}`}>PRIVATE LIMITED</span>
      </span>
    </span>
  );
}
