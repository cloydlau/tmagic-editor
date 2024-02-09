<template>
  <div
    box-border
    :style="{
      padding: `${config.pt ?? 0}px ${config.pr ?? 0}px ${config.pb ?? 0}px ${config.pl ?? 0}px`,
    }"
  >
    <van-tabs v-bind="config">
      <van-tab v-for="(item, index) in config.item" :title="item.title" :key="index"> {{ index }} </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
defineOptions({
  name: 'magic-ui-tab',
});

defineProps({
  config: {
    type: Object,
    default: () => ({}),
  },
});
</script>
