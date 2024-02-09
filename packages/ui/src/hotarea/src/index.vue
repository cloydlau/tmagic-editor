<template>
  <div
    box-border
    :style="{
      padding: `${config.pt ?? 0}px ${config.pr ?? 0}px ${config.pb ?? 0}px ${config.pl ?? 0}px`,
    }"
  >
    <img v-bind="config" w-full />
  </div>
</template>

<script setup>
defineOptions({
  name: 'magic-ui-hotarea',
});

defineProps({
  config: {
    type: Object,
    default: () => ({}),
  },
});
</script>
