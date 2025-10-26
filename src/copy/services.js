/**
 * Service copy for the landing page.
 * Images are placeholders for now; replace with brand photography when available.
 *
 * @typedef {'arrival'|'departure'|'transfer'} ServiceId
 *
 * @typedef {Object} ServiceCard
 * @property {ServiceId} id
 * @property {string} title
 * @property {string} tagline
 * @property {string} copy
 * @property {string} image
 * @property {'primary'|'outline'|'link'} ctaStyle
 * @property {string} ctaLabel
 * @property {string} [href]
 */

/** @type {ServiceCard[]} */
export const services = [
  {
    id: 'arrival',
    title: 'Arrival Meet & Assist',
    tagline:
      'From gate to curb, our dedicated team ensures a seamless welcome and swift exit—effortless, elegant, unforgettable.',
    copy:
      'Arrive to LAX with calm confidence. Your assistant greets you, expedites each step, coordinates baggage, and guides you directly to your vehicle. Every detail is handled with precision so you can simply be welcomed.',
    image: '/vite.svg',
    ctaStyle: 'outline',
    ctaLabel: 'Book Now',
    href: '#book',
  },
  {
    id: 'departure',
    title: 'Departure Meet & Assist',
    tagline:
      'Travel begins the moment you arrive at LAX. We orchestrate a smooth, stress‑free departure so you can focus on what matters.',
    copy:
      'From curb to gate, we streamline check‑in, security, and timing. Your assistant manages the flow, offers guidance, and keeps you ahead of schedule—discreet, composed, and consistently on‑time.',
    image: '/vite.svg',
    ctaStyle: 'outline',
    ctaLabel: 'Book Now',
    href: '#book',
  },
  {
    id: 'transfer',
    title: 'Transfer Meet & Assist',
    tagline:
      'Between flights, we make transit calm and efficient—guidance, comfort, and peace of mind, every step.',
    copy:
      'Make your connection with ease. We navigate terminals, coordinate timing, and remove friction so you can move effortlessly between flights—unhurried, fully supported, and precisely guided.',
    image: '/vite.svg',
    ctaStyle: 'outline',
    ctaLabel: 'Book Now',
    href: '#book',
  },
];

export default services;
