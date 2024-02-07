<script setup>
const props = defineProps({
  tone: { default: 0, type: [Number, String] }
})
</script>

<template lang='pug'>

svg(v-if="tone==4" xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
  path(fill="currentColor", d="M4.219 10.781L2.78 12.22l12.5 12.5l.719.687l.719-.687l12.5-12.5l-1.438-1.438L16 22.562z")
svg(v-if="tone==2", xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
  path(fill="currentColor", d="m16 6.594l-.719.687l-12.5 12.5L4.22 21.22L16 9.437L27.781 21.22l1.438-1.438l-12.5-12.5z")
svg(v-if="tone==3" xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
  path(fill="currentColor", d="m26.281 4.281l-22 22L5.72 27.72l22-22z")
svg(v-if="tone==1" style="transform:scaleX(-100%)" xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
  path(fill="currentColor", d="m26.281 4.281l-22 22L5.72 27.72l22-22z")
svg(v-if="tone==0" xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 16 16")
  path(fill="currentColor", d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8")
svg(v-if="tone=='x'" xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 16 16")
  path(fill="currentColor", d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3")
</template>