<script setup>
//@ts-expect-error
import lang from '../db/vowels.yaml'

import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

const modern = useStorage('modern', true)

</script>

<template lang="pug">
main.flex-auto.flex.flex-col.gap-2
  .font-bold.p-4.text-2xl.bg-light-900 Vowels
  .grid.gap-2(
    style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));"
    v-for="(v,t) in lang.Vowels" :key="v"
    )
    .p-2.text-3xl.bg-light-900.shadow.grid-col-span-full {{ t }}
    .p-2.flex.flex-col.bg-light-500.shadow(v-for="vowel in v" :key="vowel")
      .flex.flex-wrap
        .text-4xl.thai.p-1( v-for="vow in vowel[1].split(',')"
          :style="{fontFamily: modern ? 'Athiti' : 'sans-serif'}"
          ) {{ vow }}
      .flex.text-xl.gap-2.px-1
        .p-0 {{ vowel[0] }}
        .flex-auto
        .p-0.opacity-20.font-bold {{ vowel[2] }}
</template>

<style scoped>
.thai {
  font-family: 'Athiti'
}

.thai:hover {
  font-family: sans-serif;
}
</style>