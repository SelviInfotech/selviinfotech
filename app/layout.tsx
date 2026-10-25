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
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({
    title: "Software, Mobile Apps & Websites in Chennai & Tamil Nadu | Selvi Infotech",
    description:
      "Software, mobile apps, and websites for businesses in Chennai & Tamil Nadu. Custom software, Flutter and React Native apps, web maintenance, and IT training.",
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
  themeColor: "#0F3B24",
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
