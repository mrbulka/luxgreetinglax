/**
 * Lightweight DOM utilities and shared CTA config
 * Palette/typography tokens live in CSS. Keep JS minimal and dependency-free.
 */

/**
 * Smoothly scroll to an element id on the page.
 * Respects prefers-reduced-motion via CSS (we set scroll-behavior there).
 * @param {string} id
 */
export function scrollToId(id) {
  try {
    const el = document.getElementById(id?.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('[scrollToId] No element found for id:', id);
    }
  } catch (e) {
    console.error('[scrollToId] Failed:', e);
  }
}

/**
 * Placeholder focus trap (for future modal/menu work).
 * Currently a no-op to avoid complexity in this phase.
 * @param {HTMLElement} _el
 */
export function trapFocus(_el) {
  // Intentionally left blank for now. Wire up when needed.
}

/**
 * No-op analytics/event tracker for future wiring.
 * Logs to console in dev to prove callsites without external deps.
 * @param {string} eventName
 * @param {Record<string, any>} [payload]
 */
export function trackClick(eventName, payload = {}) {
  if (import.meta?.env?.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[trackClick]', eventName, payload);
  }
}

/**
 * @typedef {Object} CTAConfig
 * @property {string} label
 * @property {'primary'|'outline'} variant
 * @property {boolean} disabled
 */

/**
 * Shared CTA configuration: label, variant, disabled (skeleton).
 * @returns {CTAConfig}
 */
export function getCTAConfig() {
  return {
    label: 'Book Now',
    variant: 'primary',
    disabled: true,
  };
}
