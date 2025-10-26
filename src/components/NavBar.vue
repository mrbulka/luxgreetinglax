<script setup>
import { scrollToId, getCTAConfig, trackClick } from '../utils/dom.js'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const cta = getCTAConfig()

function onNav(e, href) {
  if (href?.startsWith('#')) {
    e.preventDefault()
    const id = href.replace('#', '')
    scrollToId(id)
    trackClick('nav_click', { href })
  }
}
</script>

<template>
  <nav class="nav">
    <div class="container nav__inner">
      <a class="brand" href="#" @click.prevent="scrollToId('app')">
        <span class="brand__mark">LUX</span>
        <span class="brand__text">Greeting LAX</span>
      </a>

      <ul class="nav__list" role="menubar" aria-label="Primary Navigation">
        <li v-for="item in nav" :key="item.href" role="none">
          <a
            :href="item.href"
            role="menuitem"
            class="nav__link"
            @click="(e) => onNav(e, item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <button
        class="btn btn--primary nav__cta"
        :disabled="cta.disabled"
        aria-disabled="true"
        @click="trackClick('cta_click', { placement: 'nav' })"
      >
        {{ cta.label }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  background: color-mix(in oklab, var(--color-bg) 92%, black);
  border-bottom: 1px solid var(--color-border);
}
.nav__inner {
  height: 72px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: var(--space-4);
}
.brand {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  text-decoration: none;
}
.brand__mark {
  display: inline-block;
  padding: 6px 10px;
  background: var(--color-gold);
  color: #000;
  border: 1px solid var(--color-gold);
  box-shadow: var(--shadow-1);
  font-family: var(--font-serif);
  font-weight: 600;
  letter-spacing: 1px;
}
.brand__text {
  font-family: var(--font-serif);
  color: var(--color-text);
  opacity: 0.9;
  letter-spacing: 0.5px;
}
.nav__list {
  display: none;
  list-style: none;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
}
.nav__link {
  color: var(--color-text);
  opacity: 0.9;
  text-decoration: none;
}
.nav__link:hover {
  color: var(--color-gold);
}
.nav__cta {
  justify-self: end;
}

/* >= 768px show nav list */
@media (min-width: 768px) {
  .nav__list { display: inline-flex; }
}
</style>
