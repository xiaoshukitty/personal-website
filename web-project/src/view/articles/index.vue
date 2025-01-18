<script setup lang="ts">
import Particles from '../../components/Particles/index.vue';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import MenuHeader from '../../components/MenuHeader/index.vue';
import MenuLeftDrawer from '../../components/MenuLeftDrawer/index.vue';

// 控制 div 是否吸附到页面的侧边
const isSticky = ref(false);
const scrollPosition = ref(0);
const openDrawer = ref<boolean>(false);
const isShowSideBox = ref(false);


const showDrawer = () => {
    openDrawer.value = true;
};


const closeDrawer = () => {
    openDrawer.value = false;
};


// 处理滚动事件的回调
const handleScroll = () => {
    scrollPosition.value = window.scrollY; // 获取当前的滚动位置
    if (scrollPosition.value >= 390) {
        isShowSideBox.value = true;
    } else {
        isShowSideBox.value = false;
    }
    isSticky.value = scrollY > 200;
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
};

// 组件挂载时添加事件监听
onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
});

// 组件卸载时移除事件监听
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="articles">
        <MenuHeader :isSticky="isSticky" @showDrawer="showDrawer" />
        <div class="articles-top">

        </div>
        <div class="articles-center">
            <div class="articles-center-meta">
                2025-01-08
            </div>
            <h2>你保存用户密码的姿势正确吗？</h2>
            <div class="contact-information">
                <div>
                    <SvgIcon name="qq" :width="'30px'" :height="'30px'" />
                </div>
                <div>
                    <SvgIcon name="wechat" :width="'30px'" :height="'30px'" />
                </div>
                <div>
                    <SvgIcon name="sina" :width="'30px'" :height="'30px'" />
                </div>
                <div>
                    <SvgIcon name="alipay" :width="'30px'" :height="'30px'" />
                </div>
                <div>
                    <SvgIcon name="applets" :width="'30px'" :height="'30px'" />
                </div>
            </div>
        </div>
        <div class="articles-bottom">
            <section class="section">
                <div>
                    123
                </div>
            </section>
        </div>

        <div class="side-box" v-if="isShowSideBox">
            <a-back-top :visibility-height="0" />
        </div>
        <Particles />

        <!-- 侧边栏盒子 -->
        <MenuLeftDrawer :openDrawer="openDrawer" @closeDrawer="closeDrawer" />
    </div>
</template>

<style scoped lang="scss">
.articles {

    .menu {
        position: fixed;
        z-index: 10;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: .1875rem;
        font-size: .75rem;
        text-transform: uppercase;
        color: #fff;
        top: 1.25rem;
        left: 1.25rem;
        display: flex;
        align-items: center;
        padding: .625rem;
        cursor: pointer;
        transition: left .3s ease;

        &:hover {
            opacity: .6;
        }
    }

    .sticky {
        left: -2px !important;
        font-size: 0;
        background-color: #333;
        transition: all 0.3s ease;
    }

    .articles-top {
        width: 100%;
        height: 50vh;
        position: relative;
        z-index: 9;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url('https://pic.rmb.bdstatic.com/bjh/events/c44b798fc964edd5fdd7c2bd51bc71128701.png@h_1280');
    }

    .articles-center {
        position: relative;
        z-index: 9;
        display: flex;
        flex-direction: column;
        align-items: center;

        .articles-center-meta {
            padding-top: 40px;
            text-transform: uppercase;
            color: rgba(115, 138, 148, .8);
        }

        h2 {
            font-size: 28px;
            margin: 10px 0
        }

        .contact-information {
            display: flex;
            gap: 1.25rem;

            div {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
            }

            div:hover {
                transform: scale(1.2);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
        }
    }

    .articles-bottom {
        position: relative;
        z-index: 9;
        max-width: 56.25rem;
        margin: 0 auto;
        padding: 2.5rem 0.625rem;

        .section {
            height: 2000px;
            margin: 0 auto;
            box-shadow: 8px 14px 38px rgba(39, 44, 49, .06), 1px 3px 8px rgba(39, 44, 49, .03);
            background-color: hsla(0, 0%, 100%, .9);
            border-radius: 5px;
            color: #738a94;
        }
    }
}
</style>
