<template>
  <div id="footer-content">
    Footer
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
name: 'Header'
});
</script>

<style scoped>
#footer-content {
  border-top: solid 1px #efefef;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
