import Image from "next/image";

/**
 * Decorative leaves. Gold line-art and green foliage are small SVG files.
 * Parents should be `relative` and `overflow-hidden`.
 */

function Sprig({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={180}
      height={320}
      sizes="180px"
      className={`pointer-events-none ${className}`}
    />
  );
}

function Foliage({ className }: { className: string }) {
  return (
    <Image
      src="/decor/botanical.svg"
      alt=""
      width={420}
      height={520}
      sizes="320px"
      className={`pointer-events-none ${className}`}
    />
  );
}

const gold = "/decor/gold-sprig.svg";
const pale = "/decor/gold-sprig-pale.svg";

export function PottedPlant({ className }: { className?: string }) {
  return (
    <Image
      src="/decor/plant.svg"
      alt=""
      width={220}
      height={300}
      sizes="200px"
      className={`pointer-events-none ${className ?? ""}`}
    />
  );
}

export function LeafDecor({ spot }: { spot: "hero" | "training" | "cta" | "footer" | "corners" | "page" }) {
  if (spot === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Foliage className="leaf-sway leaf-sway-slow absolute -left-24 top-6 hidden h-[420px] w-[320px] opacity-80 md:block" />
        <Sprig src={gold} className="leaf-sway absolute -left-6 bottom-0 hidden h-64 w-36 opacity-80 md:block" />
        <Foliage className="leaf-sway absolute -right-28 top-10 hidden h-[380px] w-[300px] opacity-70 md:block" />
        <Sprig src={gold} className="leaf-sway leaf-sway-slow absolute right-6 top-4 hidden h-40 w-24 opacity-70 md:block" />
      </div>
    );
  }

  if (spot === "training") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <PottedPlant className="leaf-sway absolute -bottom-8 -left-6 hidden h-72 w-52 md:block" />
        <Foliage className="leaf-sway leaf-sway-slow absolute -top-10 -left-16 hidden h-64 w-52 opacity-70 md:block" />
        <Sprig src={pale} className="leaf-sway absolute -top-6 -right-4 hidden h-56 w-32 opacity-80 md:block" />
        <Sprig src={pale} className="leaf-sway leaf-sway-slow absolute right-10 -bottom-16 hidden h-48 w-28 opacity-60 md:block" />
      </div>
    );
  }

  if (spot === "cta") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Foliage className="leaf-sway absolute -top-8 -right-24 hidden h-[340px] w-[280px] opacity-90 md:block" />
        <Sprig src={gold} className="leaf-sway leaf-sway-slow absolute right-8 bottom-0 hidden h-52 w-32 opacity-80 md:block" />
        <Sprig src={gold} className="leaf-sway absolute -bottom-10 -left-8 hidden h-40 w-24 opacity-50 md:block" />
      </div>
    );
  }

  if (spot === "footer") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sprig src={pale} className="leaf-sway absolute right-0 bottom-0 hidden h-72 w-44 opacity-90 md:block" />
        <Sprig src={gold} className="leaf-sway leaf-sway-slow absolute -top-16 right-24 hidden h-40 w-24 opacity-50 md:block" />
      </div>
    );
  }

  if (spot === "page") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sprig src={gold} className="leaf-sway absolute -top-8 -right-6 hidden h-48 w-28 opacity-60 md:block" />
        <Foliage className="leaf-sway leaf-sway-slow absolute bottom-0 -left-28 hidden h-56 w-44 opacity-60 md:block" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Sprig src={gold} className="leaf-sway absolute -top-8 -right-4 hidden h-36 w-20 opacity-55 md:block" />
      <Sprig src={gold} className="leaf-sway leaf-sway-slow absolute -bottom-10 -left-6 hidden h-32 w-20 -scale-x-100 opacity-40 md:block" />
    </div>
  );
}
