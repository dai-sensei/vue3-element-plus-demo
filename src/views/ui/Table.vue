<template>
  <div id="title">
    Table
  </div>
  <div>
    <el-table
      v-loading="loading"
      :data="dataList"
      border
    >
      <template #empty>
        <span v-if="!loading">
          データがありません
        </span>
        <span v-else>
          データを取得中です
        </span>
      </template>
      <el-table-column
        prop="no"
        label="No"
      />
      <el-table-column
        prop="name"
        label="Name"
      />
      <el-table-column
        prop="message"
        label="Message"
      />
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="offset"
      :page-count="totalPageCount"
      @current-change="changePage"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, onMounted} from 'vue';

interface Data {
  no: number;
  name: string;
  message: string;
}

export default defineComponent({
  name: "Table",
  setup() {
    const dataList = reactive<Array<Data>>([]);
    const loading = ref(false);
    const offset = ref(10);
    const totalPageCount = ref(5);
    const nowPageCount = ref(1);

    async function load() {
      loading.value = true;

      setTimeout(() => {
        const size = nowPageCount.value === 1 ? 0 : (nowPageCount.value - 1) * offset.value;

        // テストデータの投入
        for (let i = size; i < size + offset.value; i++) {
          dataList.push({
            no: i + 1,
            name: `テスト名 ${i + 1}`,
            message: `テストメッセージ ${i + 1}`
          });
        }

        loading.value = false;
      }, 1000);
    }

    /**
     * ページネーションのイベント処理
     * @param pageNumber ページ番号
     */
    async function changePage(pageNumber: number) {
      dataList.splice(0);
      nowPageCount.value = pageNumber;
      await load();
    }

    onMounted(async() => {
      await load();
    });

    return {
      dataList,
      loading,
      totalPageCount,
      offset,
      changePage,
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
</style>
