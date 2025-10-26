<script setup>
import { computed } from 'vue'
import { getCTAConfig, trackClick, scrollToId } from '../utils/dom.js'

const props = defineProps({
  item: {
    type: Object,
    required: true,
    // Expected shape: { id, title, tagline, copy, image, ctaStyle, ctaLabel, href }
  },
})

const cta = getCTAConfig()

const btnClass = computed(() => {
  return ['btn', props.item?.ctaStyle === 'primary' ? 'btn--primary' : 'btn--outline']
})

function onCTA() {
  trackClick('cta_click', { placement: 'service_card', id: props.item?.id })
  if (props.item?.href) {
    const id = props.item.href.replace('#', '')
    scrollToId(id)
  }
}
</script>

<template>
  <article class="service card">
    <div class="service__media" aria-hidden="true">
      <img :src="item.image" alt="" class="img-cover service__img" />
    </div>

    <div class="service__body">
      <header class="service__header">
        <h3 class="service__title">{{ item.title }}</h3>
        <p class="muted service__tagline">{{ item.tagline }}</p>
      </header>

      <p class="service__copy">
        {{ item.copy }}
      </p>

      <div class="service__actions">
        <button
          :class="btnClass"
          :disabled="cta.disabled"
          aria-disabled="true"
          @click="onCTA"
        >
          {{ item.ctaLabel || cta.label }}
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.service {
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--radius-0);
  overflow: hidden;
  transition: border-color 160ms ease, transform 160ms ease;
  border: 1px solid var(--color-border);
}
.service:hover {
  border-color: var(--color-gold);
}

.service__media {
  height: 160px;
  background: color-mix(in oklab, var(--color-bg) 92%, black);
  border-bottom: 1px solid var(--color-border);
}
.service__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service__body {
  padding: var(--space-6);
  display: grid;
  gap: var(--space-4);
}

.service__header {
  display: grid;
  gap: var(--space-2);
}

.service__title {
  margin: 0;
}

.service__tagline {
  font-size: var(--font-size-2);
}

.service__copy {
  color: var(--color-text);
}

.service__actions {
  margin-top: var(--space-4);
}
</style>
