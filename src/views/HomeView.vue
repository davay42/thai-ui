<script setup lang="ts">
//@ts-expect-error
import lang from '../thai.yaml'

import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

const modern = useStorage('modern', true)

</script>

<template lang="pug">
main.flex-auto.flex.flex-col.gap-2
  button.p-2.cursor-hover.rounded-xl.shadow-lg.bg-light-900.sticky.top-4.z-10.ml-auto(
    @click="modern=!modern"
    :style="{opacity: modern ? 1: 0.5}"
  ) Modern font
  .flex-auto.flex.flex-col.gap-2(
    v-for="(part,p) in lang" :key="part"
    )
    .font-bold.p-4.text-2xl.bg-light-900 {{ p }}
    .grid.gap-2(
      style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));"
      v-for="(v,t) in part" :key="v"
      )
      .p-2.text-3xl.bg-light-900.shadow {{ t }}
      .p-2.flex.flex-col.bg-light-500.shadow(v-for="vowel in v" :key="vowel") 
        .text-4xl.thai(
          :style="{fontFamily: modern ? 'Athiti' : 'sans-serif'}"
        ) {{ vowel[1] }}
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