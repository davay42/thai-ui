<script setup>
//@ts-expect-error
import lang from '../consonants.yaml'

import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

const modern = useStorage('modern', true)

</script>

<template lang="pug">
main.flex-auto.flex.flex-col.gap-2

  .font-bold.p-4.text-2xl.bg-light-900 Consonants
  .grid.gap-2(
    style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));"
    v-for="(v,t) in lang.Consonants" :key="v"
    )
    .p-2.text-3xl.bg-light-900.shadow {{ t }}
    .p-2.flex.flex-col.bg-light-500.shadow(v-for="vowel in v" :key="vowel") 
      .text-4xl.thai(

      ) {{ vowel[1] }}
      .flex.text-xl.gap-2.px-1
        .p-0 {{ vowel[0] }}
        .flex-auto
        .p-0.opacity-20.font-bold {{ vowel[2] }}
</template>

<style scoped></style>