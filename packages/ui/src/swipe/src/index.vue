<template>
  <div>
    <van-swipe
      v-bind="config"
      :style="{
        height: `${config.height ?? 0}px`,
      }"
    >
      <van-swipe-item
        v-for="(item, index) in config.item"
        :key="index"
        box-border
        :style="{
          padding: `${config.pt ?? 0}px ${config.pr ?? 0}px ${config.pb ?? 0}px ${config.pl ?? 0}px`,
        }"
      >
        <video
          w-full
          style="width: 100%"
          v-if="item.isVideo"
          :src="item.src"
          crossorigin
          controls
          :autoplay="item.autoplay"
          muted
          ref="videoRef"
        />
        <img v-else :src="item.src" style="width: 100%" w-full block object-cover align-bottom />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue';

defineOptions({
  name: 'magic-ui-swipe',
});

const props = defineProps({
  config: {
    type: Object,
    default: () => ({}),
  },
});

const videoRef = ref();
const observers = ref([]);

watch(
  () => props.config.item,
  () => {
    setTimeout(() => {
      videoRef.value?.forEach((videoElement, index) => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              if (videoRef.value[index].autoplay) {
                videoRef.value[index]?.play();
              }
            } else {
              videoRef.value[index]?.pause();
            }
          },
          { threshold: 0.5 },
        );

        observer.observe(videoElement);
        observers.value.push(observer);
      });
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

onBeforeUnmount(() => {
  observers.value.forEach((observer) => observer.disconnect());
});
</script>
