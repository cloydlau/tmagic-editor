/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2023 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';

import { defineConfig } from 'vite';
// import { VantResolver } from '@vant/auto-import-resolver';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// @ts-ignore
import externalGlobals from 'rollup-plugin-external-globals';
// import Components from 'unplugin-vue-components/vite';
import { presetAttributify, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';

export default defineConfig(({ mode }) => {
  if (['value', 'config', 'event', 'ds:value', 'ds:config', 'ds:event'].includes(mode)) {
    const capitalToken = mode
      .split(':')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('');

    const fileName = mode.replace(':', '-');

    return {
      publicDir: './.tmagic/public',
      build: {
        cssCodeSplit: false,
        sourcemap: true,
        minify: false,
        target: 'esnext',
        outDir: `../../playground/public/entry/vue3/${fileName}`,

        lib: {
          entry: `.tmagic/${fileName}-entry.ts`,
          name: `magicPreset${capitalToken}s`,
          fileName: 'index',
          formats: ['umd'],
        },
      },
    };
  }

  if (['page', 'playground'].includes(mode)) {
    return {
      plugins: [
        vue(),
        vueJsx(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
        externalGlobals({ vue: 'Vue' }, { exclude: [`./${mode}/index.html`] }),
        /* Components({
          resolvers: [VantResolver()],
        }), */
        UnoCSS({
          presets: [presetAttributify(), presetUno()],
        }),
      ],

      root: `./${mode}/`,

      publicDir: '../public',

      base: process.env.NODE_ENV === 'production' ? './' : `/tmagic-editor/playground/runtime/vue3/${mode}`,

      build: {
        emptyOutDir: true,
        sourcemap: true,
        outDir: path.resolve(process.cwd(), `../../playground/public/runtime/vue3/${mode}`),
      },
    };
  }

  return {};
});
