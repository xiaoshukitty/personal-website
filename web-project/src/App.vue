<script setup lang="ts">
import ImagePreview from './components/ImagePreview/index.vue';
import { provideImagePreview } from './hooks/imagePreviewProvider';

//调用 provideImagePreview 方法，来让全局使用图片预览组件 （provide 、 inject）
provideImagePreview();

</script>

<template>
  <div>
    <ProgressBar />
    <!-- 全局配置图片预览组件 -->
    <ImagePreview />
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
