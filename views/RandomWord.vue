<script setup>
//@ts-expect-error
import dict from '../db/dict.yaml'

import { computed, ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { useClamp } from '@vueuse/math';

const seed = ref(Math.random())

const total = dict.length

const randomWord = computed(() => dict[Math.floor(total * seed.value)])


</script>

<template lang="pug">
main.flex-auto.flex.flex-col.gap-2

  .p-4.bg-light-900.flex.gap-2.items-baseline
    .font-bold.text-2xl Random Word 
    .text-sm ({{Math.floor(total * seed)}}/{{total}})
    .flex-1
    button.bg-dark-400.p-2.text-light-400.rounded-xl(@click="seed = Math.random()") Next

  .p-4.bg-light-500.flex.flex-col.gap-4.shadow.flex-1
    
    template(v-for="(value,key) in randomWord" :key="key")
      .text-6xl.mt-6 {{value}}
      .text-4xl {{key}}




</template>

<style scoped></style>