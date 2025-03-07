<template>
    <div class="carousel-container" :style="{ width: `${width}px` }" @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay">
        <div class="carousel-wrapper" :style="wrapperStyle">
            <div class="carousel-item" v-for="(item, index) in displayImages" :key="index" :style="getItemStyle(index)">
                <img v-img-loader="item" :src="item" :alt="'Image ' + index" class="carousel-image" />
            </div>
        </div>
        <!-- <button class="carousel-button left" @click="prevImage">←</button>
        <button class="carousel-button right" @click="nextImage">→</button> -->
        
        <!-- 页面指示器 -->
        <div class="carousel-indicators">
            <span
                v-for="(_, index) in images"
                :key="index"
                class="indicator-dot"
                :class="{ active: getRealIndex === index }"
                @click="goToSlide(index)"
            ></span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { throttle } from '../../utils/methods'

const props = defineProps<{
    images: string[]; // 图片数组
    width?: number; // 轮播图的宽度
    height?: number; // 轮播图的高度
    interval?: number; // 自动播放的间隔时间，默认3000ms
}>();

// 在图片数组末尾添加第一张图片，用于无缝循环
const displayImages = computed(() => [...props.images, props.images[0]]);

const currentIndex = ref(0); // 当前显示的图片索引
const intervalId = ref<NodeJS.Timeout | null>(null); // 存储定时器ID
const width = ref(props.width || 600); // 默认宽度
const height = ref(props.height || 400); // 默认高度
const interval = props.interval || 3000; // 默认3秒自动播放一次
const isTransitioning = ref(true); // 控制是否启用过渡动画

// 获取真实的索引（用于指示器显示）
const getRealIndex = computed(() => {
    return currentIndex.value % props.images.length;
});

watch(
    () => props.width,
    (newWidth) => {
        width.value = newWidth || 600;
    }
);

watch(
    () => props.height,
    (newHeight) => {
        height.value = newHeight || 400;
    }
);

// 包含所有图片的长度（包括复制的第一张）
const imageCount = computed(() => displayImages.value.length);

// 轮播图的样式
const wrapperStyle = computed(() => {
    return {
        transform: `translateX(-${currentIndex.value * width.value}px)`,
        transition: isTransitioning.value ? "transform 0.5s ease" : "none",
    };
});

// 获取每一张图片的样式
const getItemStyle = (index: number) => {
    return {
        width: `${width.value}px`,
        height: `${height.value}px`,
    };
};

// 下一张
const nextImage = () => {
    currentIndex.value += 1;
    // 如果到达复制的第一张图片位置
    if (currentIndex.value === imageCount.value - 1) {
        // 等待过渡动画完成后
        setTimeout(() => {
            isTransitioning.value = false; // 禁用过渡动画
            currentIndex.value = 0; // 立即跳回真正的第一张
            // 在下一帧恢复过渡动画
            requestAnimationFrame(() => {
                isTransitioning.value = true;
            });
        }, 500);
    }
};

// 上一张
const prevImage = () => {
    if (currentIndex.value === 0) {
        isTransitioning.value = false; // 禁用过渡
        currentIndex.value = imageCount.value - 2; // 跳到倒数第二张（实际的最后一张）
        requestAnimationFrame(() => {
            isTransitioning.value = true;
            currentIndex.value -= 1;
        });
    } else {
        currentIndex.value -= 1;
    }
};

// 自动播放定时器
const startAutoPlay = () => {
    stopAutoPlay(); // 先清除可能存在的定时器
    if (document.visibilityState === 'visible') {
        intervalId.value = setInterval(nextImage, interval);
    }
};

// 停止自动播放
const stopAutoPlay = () => {
    if (intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
    }
};

// 处理页面可见性变化
const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
};

// 当窗口大小改变时，更新轮播图的宽度和高度
const updateWindowSize = () => {
    startAutoPlay();
};


// 将 updateWindowSize 函数包装为防抖版本，500ms 防抖
const throttledWindowResize = throttle(updateWindowSize, 200);


// 在组件挂载时启动自动播放
onMounted(() => {
    startAutoPlay();
    window.addEventListener('resize', throttledWindowResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
});

// 在组件卸载时清除定时器和事件监听
onUnmounted(() => {
    stopAutoPlay();
    window.removeEventListener('resize', throttledWindowResize);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
});

// 跳转到指定页面
const goToSlide = (index: number) => {
    currentIndex.value = index;
    startAutoPlay(); // 重置自动播放计时器
};
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

.carousel-indicators {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
}

.indicator-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
}

.indicator-dot:hover {
    background-color: rgba(255, 255, 255, 0.8);
}

.indicator-dot.active {
    background-color: #fff;
    transform: scale(1.2);
}
</style>
