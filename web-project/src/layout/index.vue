<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, onUnmounted } from 'vue';
import { getCurrentDate } from '../utils/timeAll';
import { MenuOutlined } from '@ant-design/icons-vue';

const scrollPosition = ref(0);
const isShowSideBox = ref(false);
const currentTime = ref<string>('');

import type { DrawerProps } from 'ant-design-vue';
const placement = ref<DrawerProps['placement']>('left');
const open = ref<boolean>(false);

const showDrawer = () => {
    open.value = true;
};

const onClose = () => {
    open.value = false;
};


// 控制 div 是否吸附到页面的侧边
const isSticky = ref(false);


// 处理滚动事件的回调
const handleScroll = () => {
    scrollPosition.value = window.scrollY; // 获取当前的滚动位置
    if (scrollPosition.value >= 390) {
        isShowSideBox.value = true;
    } else {
        isShowSideBox.value = false;
    }
    isSticky.value = scrollY > 200;
};




// 更新当前时间的函数
const updateCurrentTime = () => {
    currentTime.value = getCurrentDate('yyyy-MM-dd HH:mm:ss', false) ?? ''
};

// 在组件挂载时启动定时器
let timer: number;

// 组件挂载时添加事件监听
onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
    updateCurrentTime(); // 初始获取当前时间
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
                            <div class="ml20">
                                <SvgIcon name="wechat" :width="'50px'" :height="'50px'" />
                            </div>
                            <div class="ml20">
                                <SvgIcon name="sina" :width="'50px'" :height="'50px'" />
                            </div>
                            <div class="ml20">
                                <SvgIcon name="alipay" :width="'50px'" :height="'50px'" />
                            </div>
                            <div class="ml20">
                                <SvgIcon name="applets" :width="'50px'" :height="'50px'" />
                            </div>
                        </div>
                        <h1>🍃本是椿花楸月、奈何北冥有鱼 🍂</h1>
                        <h1>励志文案</h1>
                        <div class="container">
                            <div>首页</div>
                            <div>分类</div>
                            <div>留言板</div>
                            <div>链接</div>
                            <div>关于我</div>
                        </div>
                        <h1 class="today-time">{{ currentTime }}</h1>
                    </div>
                </div>

            </header>
            <div class="menu" :class="{ 'sticky': isSticky }" @click="showDrawer">
                <MenuOutlined style="font-size: 14px;" />
                <span v-if="!isSticky" style="margin-left: 5px;">Menu</span>
            </div>
            <!-- <div class="side-box" :class="{ 'sticky': isSticky }" :style="{ top: isSticky ? '10px' : 'auto' }">
                吸附到右侧
            </div> -->
            <div>
                <div class="scroll-2000">
                    222
                    <SvgIcon name="wechat" />
                </div>
            </div>
            <div class="side-box" v-if="isShowSideBox">
                <a-back-top :visibility-height="0" /> <a-back-top :visibility-height="0" />
            </div>
        </div>
        <!-- 侧边栏盒子 -->
        <a-drawer :width="320" title="Menu菜单" :placement="placement" :open="open" @close="onClose">
            <div>
                123
            </div>
        </a-drawer>
    </section>
</template>

<style scoped lang="scss">
.main {
    .content {
        .header {
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

                        div {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                            cursor: pointer;
                        }

                        .ml20 {
                            margin-left: 20px;
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

                    .container {
                        display: flex;

                        div {
                            width: 100px;
                            height: 50px;
                            background-color: pink;
                            border-radius: 8px;
                            margin-top: 20px;
                            margin-right: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 20px;
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
            z-index: 2;
            border: 1px solid rgba(255, 255, 255, 0.6);
            border-radius: 3px;
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            top: 20px;
            left: 20px;
            display: flex;
            align-items: center;
            padding: 10px;
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

        .scroll-2000 {
            height: 125rem;
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
