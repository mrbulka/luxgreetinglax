<script setup>
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../copy/services.js'
</script>

<template>
  <div class="container services">
    <header class="services__header">
      <h2>Our Services</h2>
      <p class="muted">Arrival, Departure, and Transfer meet & assist tailored to your journey.</p>
      <hr class="rule" />
    </header>

    <div class="services__grid">
      <ServiceCard v-for="item in services" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.services__header {
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.services__grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
}

@media (min-width: 720px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1080px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
