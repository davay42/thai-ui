<script setup>
import lang from '../db/tones.yaml'
import cons from '../db/consonants.yaml'

import ToneIcon from './tones/ToneIcon.vue';

</script>

<template lang="pug">
main.flex-auto.flex.flex-col.gap-8

  .font-bold.p-4.text-2xl.bg-light-900 Thai tones

  .grid.grid-cols-12.border-1.text-center
    .col-span-6.p-2.text-2xl Consonant class
    .p-2.text-lg Alive?
    .p-2.text-8xl.-mb-20(v-for="tone in lang.Tones") {{tone[0] !=' ◌'? tone[0]: ''}}
    template(
      v-for="(row,r ) in lang.Read"
      )

      .col-span-6.grid.grid-cols-8(:class="{'row-span-2':r!=2, 'row-span-3': r==2}")
        .p-2.text-5xl.items-center.flex.flex-col.text-center(v-for="letter in  Object.values(cons?.Classes)[r]") {{ letter }}

      template(
        v-for="syllable in ['alive','dead','deadLong'].filter(syllable=>row?.[syllable])"
        ) 
        .p-2.items-center.flex.flex-col.text-center
          svg(v-if="syllable == 'alive'" xmlns="http://www.w3.org/2000/svg",viewBox="0 0 32 32")
            path( fill="currentColor", d="M18.719 6.781L17.28 8.22L24.063 15H4v2h20.063l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719z")
          svg(v-if="syllable == 'deadLong'" xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24")
            g(fill="none")
              path(fill="currentColor", d="m14 12l.707-.707l.707.707l-.707.707zM4 13a1 1 0 1 1 0-2zm4.707-7.707l6 6l-1.414 1.414l-6-6zm6 7.414l-6 6l-1.414-1.414l6-6zM14 13H4v-2h10z")
              path(stroke="currentColor", stroke-width="2", d="M20 5v14")
          svg(v-if="syllable == 'dead'" xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24")
            path(fill="none", stroke="currentColor", stroke-width="2", d="m7 6l6 6l-6 6M18 7v10")

        .p-2.text-8xl.items-center.flex.flex-col.text-center(v-for="tone in row?.[syllable]") 
          ToneIcon(:tone="tone")

  img(src="/tones-table.png")

  .grid.grid-cols-5
    .p-4.text-center(v-for="(tone,t) in lang.Tones" :key="tone") 

      .text-xl.mb-6 {{ t }}.  {{ tone?.[2] }}
      .text-8xl {{ tone?.[0] }}
      .text-2xl
        ToneIcon(:tone="t")
    
</template>

<style scoped>
.thai {
  font-family: 'Athiti'
}

.thai:hover {
  font-family: sans-serif;
}
</style>