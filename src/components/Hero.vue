<script setup>
import { getCTAConfig, trackClick, scrollToId } from '../utils/dom.js'

const cta = getCTAConfig()

function onPrimaryClick() {
  trackClick('cta_click', { placement: 'hero' })
  scrollToId('book')
}
</script>

<template>
  <section class="hero section">
    <div class="container hero__inner">
      <div class="hero__copy">
        <h1>Where Elegance Meets Every Journey</h1>
        <p class="muted hero__sub">
          Discreet, personalized meet & assist at LAX—from arrival to departure, we handle the details with precision.
        </p>

        <div class="cluster hero__actions">
          <button
            class="btn btn--primary"
            :disabled="cta.disabled"
            aria-disabled="true"
            @click="onPrimaryClick"
          >
            {{ cta.label }}
          </button>

          <a href="#services" class="nav-link" @click.prevent="scrollToId('services')">Explore Services</a>
        </div>
      </div>

      <div class="hero__visual card border-gold" aria-hidden="true">
        <div class="hero__panel">
          <!-- Placeholder visual – replace with brand photography later -->
          <div class="hero__panel-stripes" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: var(--space-16);
  background:
    radial-gradient(1200px 600px at right -200px top -200px, rgba(212, 175, 55, 0.08), transparent 60%),
    linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%);
  border-bottom: 1px solid var(--color-border);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

.hero__copy {
  max-width: 780px;
}

.hero__sub {
  margin-top: var(--space-4);
  font-size: var(--font-size-3);
}

.hero__actions {
  margin-top: var(--space-8);
}

.nav-link {
  color: var(--color-gold);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
}
.nav-link:hover {
  border-color: var(--color-gold);
}

.hero__visual {
  min-height: 260px;
  background: var(--color-surface);
  display: grid;
  place-items: center;
}

.hero__panel {
  width: min(100%, 520px);
  aspect-ratio: 16/10;
  background:
    linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.02));
  position: relative;
  border: 1px solid var(--color-gold);
  box-shadow: var(--shadow-2);
}

.hero__panel-stripes {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      45deg,
      rgba(212,175,55,0.08) 0px,
      rgba(212,175,55,0.08) 2px,
      transparent 2px,
      transparent 10px
    );
}

@media (min-width: 900px) {
  .hero__inner {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
}
</style>
