<template>
  <div id="title">
    Infinity Load
  </div>
  <div
    id="list"
    class="infinite-list-wrapper"
  >
    <el-space
      id="items"
      v-infinite-scroll="load"
      size="large"
      wrap
    >
      <el-card
        v-for="(item, index) in dataList"
        :key="index"
        class="item-card"
      >
        <template #header>
          {{ item.name }}
        </template>
        <div>
          {{ item.message }}
        </div>
      </el-card>
    </el-space>
    <p v-if="loading">
      Loading...
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';

interface Data {
  no: number;
  name: string;
  message: string;
}

export default defineComponent({
  name: "InfinityLoad",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const dataList = reactive<Array<Data>>([]);
    const loading = ref(false);
    const offset = 10;

    async function load() {
      loading.value = true;

      setTimeout(() => {
        const size = dataList.length;

        // テストデータの投入
        for (let i = size; i < size + offset; i++) {
          dataList.push({
            no: i,
            name: `テスト名 ${i}`,
            message: `テストメッセージ ${i}`
          });
        }

        if (route.name === 'InfinityLoad') {
          // クエリパラメータに最終取得サイズを設定
          router.push({ query: { count: dataList.length} });
        }

        loading.value = false;
      }, 2000);
    }

    onMounted(async() => {
      if (route.query.count) {
        const lastCount = Math.ceil(Number(route.query.count) / offset);

        for (let i = 0; i < lastCount; i++) {
          // countパラメータがある場合、再読み込み時に最後に読み込んだコンテンツまで取得する
          await load();
        }
      } else {
        await load();
      }
    });

    return {
      dataList,
      loading,
      load
    };
  },
});
</script>

<style scoped>
#title {
  font-size: 1.25rem;
  font-weight: bold;
}
#list {
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#list::-webkit-scrollbar {
  display:none;
}
#items {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
}
.item-card {
  min-width: 300px;
}
</style>
