import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteEffects } from "@/components/site-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CallFab, WhatsAppFab } from "@/components/whatsapp-fab";
import { JsonLd } from "@/lib/json-ld";
import { organizationGraph } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-playfair",
  display: "optional",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({
    title: "Software Development for Businesses Worldwide | Selvi Infotech",
    description:
      "Selvi Infotech Private Limited builds custom software, cloud architecture, mobile apps, and websites, and runs IT training for businesses worldwide.",
    path: "/",
  }),
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.url }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ScrollProgress />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={organizationGraph()} />
        <SiteHeader />
        <SiteEffects />
        <main id="main">{children}</main>
        <SiteFooter />
        <CallFab />
        <WhatsAppFab />
      </body>
    </html>
  );
}
