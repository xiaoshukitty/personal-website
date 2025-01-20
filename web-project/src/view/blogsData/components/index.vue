<template>
    <div class="carousel-container" :style="{ width: width + 'px' }" @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay">
        <div class="carousel-wrapper" :style="wrapperStyle">
            <div class="carousel-item" v-for="(item, index) in images" :key="index" :style="getItemStyle(index)">
                <img :src="item" :alt="'Image ' + index" class="carousel-image" />
            </div>
        </div>
        <button class="carousel-button left" @click="prevImage">←</button>
        <button class="carousel-button right" @click="nextImage">→</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
    images: string[] // 图片数组
    width?: number // 轮播图的宽度
    height?: number // 轮播图的高度
    interval?: number // 自动播放的间隔时间，默认3000ms
}>()

const currentIndex = ref(0) // 当前显示的图片索引
const intervalId = ref<number | null>(null) // 存储定时器ID
const width = props.width || 600 // 默认宽度
const height = props.height || 400 // 默认高度
const interval = props.interval || 3000 // 默认3秒自动播放一次
const isTransitioning = ref(true) // 控制是否启用过渡动画

// 包含所有图片的长度
const imageCount = computed(() => props.images.length)

// 轮播图的样式
const wrapperStyle = computed(() => {
    return {
        transform: `translateX(-${(currentIndex.value % imageCount.value) * width}px)`,
        transition: isTransitioning.value ? 'transform 0.5s ease' : 'none' // 根据是否正在过渡来决定是否启用过渡
    }
})

// 获取每一张图片的样式
const getItemStyle = (index: number) => {
    return {
        width: `${width}px`,
        height: `${height}px`
    }
}

// 下一张
const nextImage = () => {
    if (currentIndex.value === imageCount.value - 1) {
        // 禁用过渡，快速跳回第一张
        isTransitioning.value = false
        setTimeout(() => {
            currentIndex.value = 0 // 跳到第一张
            isTransitioning.value = true // 恢复过渡
        }, 500) // 延迟 500ms 等待过渡动画结束
    } else {
        currentIndex.value += 1
    }
}

// 上一张
const prevImage = () => {
    if (currentIndex.value === 0) {
        currentIndex.value = imageCount.value - 1
    } else {
        currentIndex.value -= 1
    }
}

// 自动播放定时器
const startAutoPlay = () => {
    intervalId.value = setInterval(nextImage, interval)
}

// 停止自动播放
const stopAutoPlay = () => {
    if (intervalId.value) {
        clearInterval(intervalId.value)
    }
}

// 在组件挂载时启动自动播放
onMounted(() => {
    startAutoPlay()
})

// 在组件卸载时清除定时器
onUnmounted(() => {
    stopAutoPlay()
})
</script>

<style scoped>
.carousel-container {
    position: relative;
    overflow: hidden;
}

.carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-item {
    flex: 0 0 auto;
    display: inline-block;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
}

.left {
    left: 10px;
}

.right {
    right: 10px;
}
</style>