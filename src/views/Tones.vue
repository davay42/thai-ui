<script setup>
//@ts-expect-error
import lang from '../tones.yaml'


</script>

<template lang="pug">
main.flex-auto.flex.flex-col

  .font-bold.p-4.text-2xl.bg-light-900 Thai tones

  .pre {{ lang }}
  .grid.grid-cols-5.gap-4
    .p-4.text-center(v-for="(tone,t) in lang.Tones" :key="tone") 

      .text-xl.mb-6 {{ t }}.  {{ tone[2] }}
      .text-8xl {{ tone[0] }}
      .text-8xl.-mb-12 {{ tone[1] }}

  .grid.grid-cols-9.bg-light-800.p-2(
    v-for="(clas, className) in lang.Classes" :key="clas"
    )
    .text-2xl.row-span-3.items-center.flex {{ className }}
    .text-4xl(v-for="letter in clas" :key="letter") {{ letter }}

  .grid.grid-cols-7
    
</template>

<style scoped>
.thai {
  font-family: 'Athiti'
}

.thai:hover {
  font-family: sans-serif;
}
</style>