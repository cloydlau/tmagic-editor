<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onLoad" v-bind="config">
      <van-list v-model:loading="loading" :finished="finished" v-bind="config" @load="onLoad">
        <div
          gap-12px
          columns-2
          style="column-count: 2"
          box-border
          :style="{
            padding: `${config.pt ?? 0}px ${config.pr ?? 0}px ${config.pb ?? 0}px ${config.pl ?? 0}px`,
          }"
        >
          <div
            v-for="(item, index) in list"
            :key="index"
            w-full
            flex
            flex-col
            gap-4px
            bg="white"
            rounded-4px
            shadow-md
            shadow="[rgba(30,34,42,0.08)]"
            box-border
            p-8px
            mb-12px
            break-inside-avoid-column
          >
            <img :src="item.picture" w-full object-cover align-bottom style="width: 100%" />
            <div
              truncate
              break-words
              style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; white-space: initial"
            >
              {{ item.title }}
            </div>
            <div truncate break-words>
              <van-tag v-for="(item2, index2) of item.itemDetail?.tagList" :key="index2" mr-4px>
                {{ item2 }}
              </van-tag>
            </div>
            <div truncate break-words>
              <div font-size-14px color="#fe3161" font-bold inline-block>{{ formatMoney(item.price) }}</div>
              <div font-size-12px color="[rgb(153,153,153)]" line-through ml-4px inline-block>
                {{ formatMoney(item.origin) }}
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// import { POST } from '../../http';

defineOptions({
  name: 'magic-ui-commodity',
});

defineProps({
  config: {
    type: Object,
    default: () => ({}),
  },
});

const nonEmpty = (value) => value || value === 0;

const formatMoney = (value) => (nonEmpty(value) ? `¥${value}` : '');

const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
  finished.value = false;
  loading.value = true;

  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }
    list.value = [
      {
        price: '1000000000',
        origin: '2000000000',
        title: 'title1231231231231231231231231231231231312312312312312312312312312',
        picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      },
      {
        price: '1000000000',
        origin: '2000000000',
        itemDetail: {
          tagList: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
        },
        title: 'title1231231231231231231231231231231231312312312312312312312312312',
        picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      },
      {
        price: '1000000000',
        origin: '2000000000',
        itemDetail: {
          tagList: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
        },
        title: 'title1231231231231231231231231231231231312312312312312312312312312',
        picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      },
      {
        price: '1000000000',
        origin: '2000000000',
        itemDetail: {
          tagList: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
        },
        title: 'title1231231231231231231231231231231231312312312312312312312312312',
        picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      },
      {
        price: '1000000000',
        origin: '2000000000',
        itemDetail: {
          tagList: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
        },
        title: 'title1231231231231231231231231231231231312312312312312312312312312',
        picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      },
    ];
    loading.value = false;
    finished.value = true;
  }, 500);

  /* POST('', {
    itemIdList: [],
  })
    .then((value) => {
      if (refreshing.value) {
        list.value = [];
        refreshing.value = false;
      }
      list.value = value;
    })
    .finally(() => {
      loading.value = false;
      finished.value = true;
    }); */
};
</script>
