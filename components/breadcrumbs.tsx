import Link from "next/link";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({
  items,
  onDark = false,
}: {
  items: { name: string; path?: string }[];
  onDark?: boolean;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${onDark ? "text-cream/75" : "text-muted-foreground"}`}>
          {items.map((item, index) => (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.path && index < items.length - 1 ? (
                <Link href={item.path} className={onDark ? "hover:text-white" : "hover:text-green-900"}>
                  {item.name}
                </Link>
              ) : (
                <span className={onDark ? "text-cream" : "text-green-900"}>{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
