/**
 * Illustrative photos, not pictures of Selvi Infotech's office or clients.
 * Unsplash License: https://unsplash.com/license
 * software    photo-1522071820081-009f0129c71c
 * mobile      photo-1512941937669-90a1b58e7e9c
 * web         photo-1498050108023-c5249f4df085
 * maintenance photo-1516321318423-f06f85e504b3
 * training    photo-1524178232363-1fb2b075b655
 * consulting  photo-1552664730-d307ca884978
 */
export const workImages = {
  "software-development": {
    src: "/images/work/software.webp",
    alt: "Colleagues gathered around laptops in a bright workspace",
  },
  "mobile-app-development": {
    src: "/images/work/mobile.webp",
    alt: "A person holding a smartphone showing a mobile app",
  },
  "web-development": {
    src: "/images/work/web.webp",
    alt: "A laptop on a desk with code on the screen",
  },
  "web-maintenance": {
    src: "/images/work/maintenance.webp",
    alt: "A person studying a laptop during hands-on computer work",
  },
  training: {
    src: "/images/work/training.webp",
    alt: "A classroom session with people seated and listening",
  },
  "it-consulting": {
    src: "/images/work/consulting.webp",
    alt: "People in a meeting reviewing notes around a table",
  },
} as const;

export type WorkImageKey = keyof typeof workImages;

export function workImage(slug: string) {
  if (slug in workImages) return workImages[slug as WorkImageKey];
  return workImages["software-development"];
}
