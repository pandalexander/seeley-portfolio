<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <div class="pl-5 pr-5">
    <Header />
    <main class="max-w-2xl mx-auto p-4">
      <Hero />
      <About />
      <Projects />
    </main>
  </div>
</template>

<style scoped></style>
