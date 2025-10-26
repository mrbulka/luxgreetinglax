<script setup>
const points = [
  {
    title: 'Navigate LAX without stress',
    copy:
      'We choreograph each step, minimizing wait and confusion.',
  },
  {
    title: 'Discretion & privacy',
    copy:
      'Professional, understated assistance from curb to gate.',
  },
  {
    title: 'Multilingual service',
    copy:
      'Clarity across languages and logistics.',
  },
  {
    title: 'Time well managed',
    copy:
      'Efficient routing and preparation that respects your schedule.',
  },
]
</script>

<template>
  <div class="container why">
    <header class="why__header">
      <h2>Why Choose Us</h2>
      <p class="muted">Pain points resolved with precision and discretion.</p>
      <hr class="rule" />
    </header>

    <ul class="why__list" role="list">
      <li v-for="p in points" :key="p.title" class="why__item card">
        <div class="why__bullet" aria-hidden="true" />
        <div class="why__content">
          <h3 class="why__title">{{ p.title }}</h3>
          <p class="why__copy muted">{{ p.copy }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.why__header {
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.why__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  padding: 0;
  margin: 0;
  list-style: none;
}

.why__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-6);
  align-items: start;
  padding: var(--space-6);
  border: 1px solid var(--color-border);
}

.why__bullet {
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-gold);
  background: transparent;
  box-shadow: var(--shadow-1);
}

.why__title {
  margin: 0 0 var(--space-2) 0;
}

@media (min-width: 900px) {
  .why__list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
