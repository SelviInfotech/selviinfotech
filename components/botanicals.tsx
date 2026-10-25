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
        <Foliage className="absolute -left-24 top-10 hidden h-56 w-44 opacity-45 lg:block" />
        <Sprig src={gold} className="absolute -right-2 bottom-0 hidden h-44 w-28 opacity-40 lg:block" />
      </div>
    );
  }

  if (spot === "training") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sprig src={pale} className="absolute -top-6 -right-4 h-40 w-24 opacity-80 sm:h-56 sm:w-32" />
        <Sprig src={pale} className="absolute right-6 -bottom-14 hidden h-44 w-28 opacity-60 sm:block" />
      </div>
    );
  }

  if (spot === "cta") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Foliage className="absolute -bottom-16 -left-8 h-56 w-44 opacity-90 sm:h-80 sm:w-60 lg:-left-4 lg:h-[440px] lg:w-[340px]" />
        <Sprig src={gold} className="absolute bottom-0 -left-2 h-48 w-28 opacity-95 sm:h-64 sm:w-36 lg:left-2 lg:h-80 lg:w-44" />
        <Sprig src={gold} className="absolute top-0 left-16 hidden h-36 w-24 -scale-x-100 opacity-70 lg:block" />
        <Foliage className="absolute -right-8 -bottom-10 h-56 w-44 -scale-x-100 opacity-90 sm:h-80 sm:w-60 lg:-right-4 lg:h-[440px] lg:w-[340px]" />
        <Sprig src={gold} className="absolute right-0 bottom-0 h-48 w-28 opacity-95 sm:h-64 sm:w-36 lg:right-2 lg:h-80 lg:w-44" />
        <Sprig src={gold} className="absolute top-0 right-16 hidden h-36 w-24 opacity-70 lg:block" />
      </div>
    );
  }

  if (spot === "footer") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sprig src={gold} className="absolute -right-2 bottom-0 h-52 w-32 opacity-90 sm:h-72 sm:w-44 lg:h-[22rem] lg:w-52" />
        <Sprig src={gold} className="absolute right-16 bottom-4 h-32 w-20 opacity-70 sm:right-24 sm:h-48 sm:w-28" />
        <Sprig src={pale} className="absolute -left-4 bottom-0 hidden h-40 w-24 -scale-x-100 opacity-40 lg:block" />
      </div>
    );
  }

  if (spot === "page") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sprig src={gold} className="absolute -top-8 -right-6 hidden h-48 w-28 opacity-60 md:block" />
        <Foliage className="absolute bottom-0 -left-28 hidden h-56 w-44 opacity-60 md:block" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Sprig src={gold} className="absolute -top-8 -right-4 hidden h-36 w-20 opacity-55 md:block" />
      <Sprig src={gold} className="absolute -bottom-10 -left-6 hidden h-32 w-20 -scale-x-100 opacity-40 md:block" />
    </div>
  );
}
