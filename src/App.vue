<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import ServicesSection from './sections/ServicesSection.vue'
import WhyUsSection from './sections/WhyUsSection.vue'
import ProcessSection from './sections/ProcessSection.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div>
    <header class="is-sticky">
      <NavBar />
    </header>

    <main>
      <Hero />

      <section id="services" class="section">
        <ServicesSection />
      </section>

      <section id="why-us" class="section section--tight">
        <WhyUsSection />
      </section>

      <section id="process" class="section section--tight">
        <ProcessSection />
      </section>

      <!-- Anchor target for unified "Book Now" CTA skeleton -->
      <section id="book" class="section section--tight">
        <div class="container">
          <h2 class="visually-hidden">Book Now</h2>
          <p class="muted">Booking is coming soon. All “Book Now” buttons are visual placeholders.</p>
          <hr class="rule" />
        </div>
      </section>
    </main>

    <footer>
      <FooterBar />
    </footer>
  </div>
</template>

<style scoped>
/* Page-specific spacing polish may be added later during Visual QA */
</style>
