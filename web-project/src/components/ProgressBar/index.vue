<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const progress = ref(0);

// 计算页面滚动进度
const calculateProgress = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const progressPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    progress.value = progressPercent;
};

// 监听页面滚动事件
onMounted(() => {
    window.addEventListener('scroll', calculateProgress);
});

// 清理事件监听
onBeforeUnmount(() => {
    window.removeEventListener('scroll', calculateProgress);
});


</script>

<template>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
</template>

<style scoped lang="scss">
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 1000;

    .progress {
        height: 100%;
        background-color: #1677ff;
        transition: width 0.1s ease-in-out;
    }
}
</style>