<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="menuSelect"
  >
    <el-menu-item index="Home">
      HOME
    </el-menu-item>
    <el-submenu index="UI">
      <template #title>
        UI Sample
      </template>
      <el-menu-item index="Collapse">
        Collapse
      </el-menu-item>
      <el-menu-item index="Form">
        Form
      </el-menu-item>
      <el-menu-item index="InfinityLoad">
        Infinity Load
      </el-menu-item>
      <el-menu-item index="Table">
        Table
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter();
    const activeIndex = ref<string>('Home');

    function menuSelect(key: string) {
      router.push({ name: key });
    }

    router.beforeEach((to, from, next) => {
      if (to.name && typeof to.name === 'string') {
        activeIndex.value = to.name;
      }
      next();
    });

    return {
      activeIndex,
      menuSelect
    };
  }
});
</script>

<style scoped>

</style>
