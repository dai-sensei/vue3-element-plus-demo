<template>
  <div id="title">
    Collapse
  </div>
  <div id="collapse">
    <el-collapse
      v-model="activeNames"
    >
      <el-collapse-item
        title="日本語"
        name="jp"
      >
        てすと
      </el-collapse-item>
      <el-collapse-item
        title="English"
        name="eng"
      >
        Test
      </el-collapse-item>
      <el-collapse-item
        title="Deutsche"
        name="deu"
      >
        Prüfung
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';

export default defineComponent({
  name: "Collapse",
  setup() {
    const activeNames = reactive(Array<string>());

    return {
      activeNames
    };
  },
});
</script>

<style scoped>
#title {
  font-size: 1.25rem;
  font-weight: bold;
}
#collapse {
  width: 60%;
  margin: 0 auto;
}
</style>
