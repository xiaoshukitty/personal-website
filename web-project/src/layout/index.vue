<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { getCurrentDate } from '../utils/timeAll';
import Particles from '../components/Particles/index.vue';
import Main from './main/index.vue';
import Footer from './footer/index.vue';
import MenuHeader from '../components/MenuHeader/index.vue';
import MenuLeftDrawer from '../components/MenuLeftDrawer/index.vue';

const scrollPosition = ref(0);
const isShowSideBox = ref(false);
const currentTime = ref<string>('');
const isSticky = ref(false);// 控制 div 是否吸附到页面的侧边
const openDrawer = ref<boolean>(false);

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

const restoreScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(scrollPosition));
        }, 0); // 使用 setTimeout 延迟恢复滚动位置
    }

}
const scrollOneScreen = (val: string) => {
    const element = document.getElementById(val);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // 平滑滚动
            block: 'start',     // 滚动到目标元素的顶部
        });
    }
}

// 更新当前时间的函数
const updateCurrentTime = (): void => {
    currentTime.value = getCurrentDate('yyyy-MM-dd HH:mm:ss', false) ?? ''
};

// 在组件挂载时启动定时器
let timer: ReturnType<typeof setInterval>;

// 组件挂载时添加事件监听
onMounted(async () => {
    // 在页面加载时恢复滚动位置
    restoreScrollPosition();
    window.addEventListener('scroll', handleScroll);
    updateCurrentTime(); // 初始获取当前时间restoreScrollPosition
    timer = setInterval(updateCurrentTime, 1000); // 每秒更新一次时间
});

// 组件卸载时移除事件监听
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    clearInterval(timer);
});


</script>

<template>
    <section class="main">
        <div class="content">
            <header class="header">
                <div class="header-bg">
                    <div class="user-info">
                        <div class="user-avatar">
                            <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                        </div>
                        <h1 style="margin-bottom: 40px; font-size: 40px;">xiaoshu</h1>
                        <div class="contact-information">
                            <div>
                                <SvgIcon name="qq" :width="'50px'" :height="'50px'" />
                            </div>
                            <div>
                                <SvgIcon name="wechat" :width="'50px'" :height="'50px'" />
                            </div>
                            <div>
                                <SvgIcon name="sina" :width="'50px'" :height="'50px'" />
                            </div>
                            <div>
                                <SvgIcon name="alipay" :width="'50px'" :height="'50px'" />
                            </div>
                            <div>
                                <SvgIcon name="applets" :width="'50px'" :height="'50px'" />
                            </div>
                        </div>
                        <h1 class="text-labels">🍃本是椿花楸月、奈何北冥有鱼 🍂</h1>
                        <h1>励志文案</h1>
                        <div class="container">
                            <div @click="scrollOneScreen('wrapper')">首页</div>
                            <div @click="showDrawer">分类</div>
                            <div>留言 </div>
                            <div>链接</div>
                            <div>关于</div>
                        </div>
                        <h1 class="today-time">{{ currentTime }}</h1>
                    </div>
                </div>

            </header>
            <!-- 菜单 -->
            <MenuHeader :isSticky="isSticky" @showDrawer="showDrawer" />
            <!-- 内容 -->
            <Main />
            <div class="side-box" v-if="isShowSideBox">
                <a-back-top :visibility-height="0" />
            </div>
            <!-- 动画粒子 -->
            <Particles />
        </div>
        <!-- 侧边栏盒子 -->
        <MenuLeftDrawer :openDrawer="openDrawer" @closeDrawer="closeDrawer" />
        <!-- 底部 -->
        <Footer />
    </section>

</template>

<style scoped lang="scss">
.main {
    .content {
        .header {
            position: relative;
            z-index: 9;

            .header-bg {
                background-image: url('https://pic.rmb.bdstatic.com/bjh/events/c44b798fc964edd5fdd7c2bd51bc71128701.png@h_1280');
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                height: 100vh;
                margin: 0;
                padding: 0;

                .user-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;

                    .user-avatar {
                        width: 180px;
                        height: 180px;

                        img {
                            border-radius: 50%;
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .contact-information {
                        display: flex;
                        gap: 1.25rem;

                        div {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                            cursor: pointer;
                        }

                        div:hover {
                            transform: scale(1.2);
                            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                        }
                    }

                    h1 {
                        margin-top: 40px;
                    }

                    .mt40 {
                        margin-top: 40px;
                    }

                    .text-labels {
                        font-size: 1.875rem;
                    }

                    .container {
                        display: flex;
                        box-sizing: border-box;
                        margin-top: 1.25rem;
                        gap: 20px;

                        div {
                            width: 80%;
                            max-width: 6.25rem;
                            height: 3.125rem;
                            background-color: pink;
                            border-radius: .5rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: .5rem 1.25rem;
                            font-size: 1.25rem;
                            font-weight: bold;
                            color: #fff;
                            cursor: pointer;
                            transition: all 0.3s ease-in-out;

                            &:hover {
                                background-color: #fff;
                                color: #000;
                            }
                        }
                    }


                    /* 设置视口，确保移动端页面宽度适应设备 */
                    @media (max-width: 768px) {
                        html {
                            font-size: .875rem;
                        }
                    }


                    @media (max-width: 480px) {
                        .container div {
                            font-size: .875rem;
                            width: 90%;
                        }

                        .text-labels {
                            font-size: 20px;
                        }
                    }
                }


                .img {
                    height: 390px;
                    min-height: 320px;
                    position: relative;
                    background-color: pink;
                }
            }
        }

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

    }
}


@media (max-width: 768px) {
    .header-bg {
        background-image: url('@/assets/your-mobile-background-image.jpg');
        /* 移动端背景图 */
    }
}
</style>
