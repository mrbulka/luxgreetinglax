<script setup>
import { getCTAConfig, trackClick, scrollToId } from '../utils/dom.js'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
]

const cta = getCTAConfig()

function onNav(e, href) {
  if (href?.startsWith('#')) {
    e.preventDefault()
    scrollToId(href.replace('#', ''))
    trackClick('footer_nav_click', { href })
  }
}
</script>

<template>
  <div id="contact" class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="brand__mark">LUX</span>
        <span class="brand__text">Greeting LAX</span>
      </div>

      <ul class="footer__nav" aria-label="Footer Navigation">
        <li v-for="item in nav" :key="item.href">
          <a :href="item.href" class="footer__link" @click="(e)=>onNav(e,item.href)">{{ item.label }}</a>
        </li>
      </ul>

      <div class="footer__cta">
        <button
          class="btn btn--outline"
          :disabled="cta.disabled"
          aria-disabled="true"
          @click="trackClick('cta_click', { placement: 'footer' }); scrollToId('book')"
        >
          {{ cta.label }}
        </button>
      </div>
    </div>

    <div class="container footer__legal">
      <small class="muted">© {{ new Date().getFullYear() }} LUX Greeting LAX. All rights reserved.</small>
    </div>
  </div>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  background: color-mix(in oklab, var(--color-bg) 94%, black);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  align-items: center;
  padding-block: var(--space-10);
}

.footer__brand {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
}
.brand__mark {
  display: inline-block;
  padding: 4px 8px;
  background: var(--color-gold);
  color: #000;
  border: 1px solid var(--color-gold);
  box-shadow: var(--shadow-1);
  font-family: var(--font-serif);
  font-weight: 600;
  letter-spacing: 0.8px;
}
.brand__text {
  font-family: var(--font-serif);
  color: var(--color-text);
  opacity: 0.85;
  letter-spacing: 0.4px;
}

.footer__nav {
  list-style: none;
  display: inline-flex;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
}
.footer__link {
  color: var(--color-text);
  opacity: 0.85;
  text-decoration: none;
}
.footer__link:hover {
  color: var(--color-gold);
}

.footer__cta {
  justify-self: start;
}

.footer__legal {
  padding-block: var(--space-6);
  border-top: 1px solid var(--color-border);
}

/* >= 768px layout */
@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr auto auto;
  }
  .footer__cta {
    justify-self: end;
  }
}
</style>
