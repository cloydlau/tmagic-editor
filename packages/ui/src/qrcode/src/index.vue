<template>
  <img class="magic-ui-qrcode" :src="imgUrl" style="max-width: 100%" />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import QRCode from 'qrcode';

import type { MComponent } from '@tmagic/schema';

import useApp from '../../useApp';

const props = withDefaults(
  defineProps<{
    config: MComponent;
    model?: any;
  }>(),
  {
    model: () => ({}),
  },
);

const imgUrl = ref();

watch(
  () => props.config.url,
  (url = '') => {
    QRCode.toDataURL(url, (e: any, url: string) => {
      if (e) console.error(e);
      imgUrl.value = url;
    });
  },
  {
    immediate: true,
  },
);

useApp({
  config: props.config,
  methods: {},
});
</script>
