<script setup lang="ts">
</script>

<template>
  <div>
    <ProgressBar />
    <router-view />
  </div>
</template>

<style scoped lang="scss">
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  
}

/** 去掉页面滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
