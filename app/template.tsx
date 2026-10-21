import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <div className="motion-safe:animate-[settle_0.45s_ease]">{children}</div>;
}
