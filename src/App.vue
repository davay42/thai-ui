<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useStorage } from '@vueuse/core'

const modern = useStorage('modern', true)
</script>

<template lang="pug">
main(:style="{fontFamily: modern ? 'Athiti' : 'sans-serif'}")
  header
    nav.text-xl.bg-light-900.p-4
      router-link(to="/") Thai-UI
      router-link(to="/vowels/") Vowels
      router-link(to="/consonants/") Consonants
      router-link(to="/tones/") Tones

  button.fixed.top-4.left-8.p-2.cursor-hover.rounded-xl.shadow-lg.bg-light-900.z-10.ml-auto(
    @click="modern=!modern"
    :style="{opacity: modern ? 1: 0.5}"
    ) {{ modern ? 'Modern' : 'Traditional' }} font
  router-view
</template>

<style lang="postcss">
#app {
  @apply p-8 flex flex-col gap-2;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin: 2rem 0rem 2rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
