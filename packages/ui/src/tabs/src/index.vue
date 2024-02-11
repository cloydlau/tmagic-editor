<template>
  <div
    box-border
    :style="{
      padding: `${config.pt ?? 0}px ${config.pr ?? 0}px ${config.pb ?? 0}px ${config.pl ?? 0}px`,
    }"
  >
    <van-tabs v-bind="Config" v-model:active="active">
      <van-tab v-for="(item, index) in config.item" :title="item.title" :key="index"> {{}} </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

defineOptions({
  name: 'magic-ui-tabs',
});

const props = defineProps({
  config: {
    type: Object,
    default: () => ({}),
  },
});

const active = ref(0);

const Config = computed(() => ({
  ...props.config,
  type: props.config._type,
}));
</script>
