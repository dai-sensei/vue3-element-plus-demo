<template>
  <div>
    <div>
      Element PlusのUIサンプル集
    </div>
    <el-calendar v-model="value" />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Home",
  setup() {
    const value = ref(new Date());

    return {
      value
    };
  }
});
</script>

<style scoped>

</style>
