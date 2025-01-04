<script setup lang="ts">
</script>

<template>
  <div>
    <ProgressBar />
    <router-view />
  </div>
</template>

<style scoped lang="scss">
/** 去掉页面滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
