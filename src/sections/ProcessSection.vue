<script setup>
const steps = [
  { n: '01', title: 'Book', copy: 'Share your itinerary and preferences.' },
  { n: '02', title: 'Greet', copy: 'Meet your assistant at the agreed point.' },
  { n: '03', title: 'Escort', copy: 'Glide through each step with expert guidance.' },
  { n: '04', title: 'Complete', copy: 'Arrive relaxed, depart confident.' },
]
</script>

<template>
  <div class="container process">
    <header class="process__header">
      <h2>Our Process</h2>
      <p class="muted">Four discreet steps, executed with precision.</p>
      <hr class="rule" />
    </header>

    <ol class="process__grid">
      <li v-for="s in steps" :key="s.n" class="process__item card">
        <div class="process__badge" aria-hidden="true">{{ s.n }}</div>
        <div class="process__content">
          <h3 class="process__title">{{ s.title }}</h3>
          <p class="muted process__copy">{{ s.copy }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.process__header {
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.process__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
  counter-reset: step;
}

.process__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-6);
  align-items: start;
  padding: var(--space-6);
  border: 1px solid var(--color-border);
}

.process__badge {
  min-width: 48px;
  min-height: 48px;
  display: grid;
  place-items: center;
  font-family: var(--font-serif);
  color: #000;
  background: var(--color-gold);
  border: 1px solid var(--color-gold);
  box-shadow: var(--shadow-1);
  letter-spacing: 0.5px;
}

.process__title {
  margin: 0 0 var(--space-2) 0;
}

@media (min-width: 900px) {
  .process__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
