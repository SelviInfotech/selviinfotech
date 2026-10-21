/**
 * Testimonials stay unpublished until a client agrees to a named quote.
 * TESTIMONIALS_READY false means the section is not rendered. Do not add sample quotes.
 */
export const TESTIMONIALS_READY = false;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [];

export function isTestimonialsPublic() {
  return TESTIMONIALS_READY && testimonials.length > 0 && testimonials.every((item) => !JSON.stringify(item).includes("PLACEHOLDER"));
}
