<script setup lang="ts">
import Aside from './aside/index.vue';
import Footer from './footer/index.vue';
import Header from './header/index.vue';
import Main from './main/index.vue';
import Operation from './operation/index.vue';
import Music from '../components/Music/index.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router'
const scrollPosition = ref(0);
const isShowSideBox = ref(false);
let $router = useRoute();
let isAside = ref(false);

// 处理滚动事件的回调
const handleScroll = () => {
    const copy = sessionStorage.getItem('scrollPosition');
    scrollPosition.value = window.scrollY; // 获取当前的滚动位置
    sessionStorage.setItem('scrollPosition', scrollPosition.value.toString());
    if (Number(copy) > scrollPosition.value) {
        isShowSideBox.value = true;
    } else {
        isShowSideBox.value = false;
    }
};


const scrollOneScreen = (val: string) => {
    const element = document.getElementById(val);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // 平滑滚动
            block: 'start',     // 滚动到目标元素的顶部
        });
    }
}

watch(() => $router.path, (newVal, oldVal) => {
    handleIsAside(newVal)
})

// 不需要 Aside 的页面路由
const handleIsAside = (e: string) => {
    // 定义不需要 Aside 的页面路由白名单
    const whiteListRouter = ['/blogsData'];
    if (whiteListRouter.includes(e)) {
        isAside.value = true;
    } else {
        isAside.value = false;
    }
}

// 组件挂载时添加事件监听
onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
    handleIsAside($router.path)
});

// 组件卸载时移除事件监听
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <div class="Shu" id="wrapper">
        <Header :scrollPosition="scrollPosition" :isShowSideBox="isShowSideBox" />
        <div class="shu-container">
            <div class="shu-mian">
                <Main />
            </div>
            <Aside v-if="!isAside" />
        </div>
        <Footer />
        <Operation :scrollPosition="scrollPosition" @scrollOneScreen="scrollOneScreen" />
        <Music/>
    </div>
</template>

<style scoped lang="scss">
.Shu {
    .header-active {
        top: -60px;
    }

    .shu-container {
        display: flex;
        width: 100%;
        margin: 0 auto;
        padding: 0 15px;

        .shu-mian {
            min-width: 0;
            flex: 1;
            padding: 15px 0;

        }
    }
}
</style>
