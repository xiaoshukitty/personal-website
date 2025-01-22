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

</style>
