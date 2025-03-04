<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useThemeStore } from '../../stores/modules/themeStore';
import { useRouter } from 'vue-router';

const theme = ref('light');
const themeStore = useThemeStore();
const { getTheme, toggleTheme } = themeStore;
const $router = useRouter();


const props = defineProps({
    scrollPosition: {
        type: Number,
        default: 0
    }
})

const emits = defineEmits(['scrollOneScreen'])

const scrollOneScreen = (id: string) => {
    emits('scrollOneScreen', id)
}

//主题切换
const themeChange = () => {
    toggleTheme();
}

//切换到AI
const goToAi = () => {
    $router.push({
        path: '/aiFeatures'
    })
}

onMounted(() => {
    getTheme();
})

</script>

<template>
    <div class="shu-action">
        <div :class="['shu-action-item scroll', { 'scroll-active': props.scrollPosition > 280 }]"
            @click="scrollOneScreen('wrapper')">
            <svg class="scroll-active-icon">
                <use xlink:href="#icon-rocket"></use>
            </svg>
        </div>
        <div class="shu-action-item" @click="goToAi">
            <svg class="scroll-active-icon">
                <use xlink:href="#icon-ai"></use>
            </svg>
        </div>
        <div class="shu-action-item" @click="themeChange">
            <svg :class="['item-icon', { 'item-icon-active': theme === 'light' }]">
                <use xlink:href="#icon-Sun"></use>
            </svg>
            <svg :class="['item-icon', { 'item-icon-active': theme === 'dark' }]">
                <use xlink:href="#icon-Star-Night"></use>
            </svg>
        </div>
    </div>
</template>

<style scoped lang="scss">
.shu-action {
    position: fixed;
    bottom: 90px;
    right: 30px;
    z-index: 333;

    .shu-action-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: var(--background);
        border-radius: 50%;
        cursor: pointer;
        margin-top: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 5px 20px rgba(0, 0, 0, 0.2);

        .scroll-active-icon {
            width: 28px;
            height: 28px;
            fill: var(--theme);
        }

        .item-icon {
            position: absolute;
            width: 25px;
            height: 25px;
            fill: var(--theme);
            transform: scale(0);
            opacity: 0;
            transition: transform 0.85s, opacity 0.85s;
        }

        .item-icon-active {
            transform: scale(1) !important;
            opacity: 1 !important;
        }
    }

    .scroll {
        visibility: hidden;
        transform: scale(0);
        transition: visibility 0.35s, transform 0.35s;
    }

    .scroll-active {
        visibility: visible !important;
        transform: scale(1) !important;
    }
}
</style>
