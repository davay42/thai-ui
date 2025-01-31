import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import ViteYaml from '@modyfi/vite-plugin-yaml';
import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'
import Unfonts from 'unplugin-fonts/vite'
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/thai-ui/',
  plugins: [
    vue(),
    ViteYaml(),
    // viteSingleFile(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Athiti',
            styles: 'ital,wght@0,400;1,600',
          }
        ]
      },
    }),
    Unocss({
      transformers: [
        transformerDirectives(),
      ],
      presets: [
        presetIcons({
          scale: 1.2,
          extraProperties: {
            'vertical-align': 'middle'
          }
        }),
        presetUno(),
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
