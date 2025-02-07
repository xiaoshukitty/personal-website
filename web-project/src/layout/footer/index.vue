<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const currentTime = ref<string>('');

const openAmapApp = () =>{
    window.open('https://www.amap.com/?q=30.544009,114.303217');
}

const updateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份从0开始，所以加1
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 格式化时间
    currentTime.value = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

let timer: NodeJS.Timeout;

onMounted(() => {
    updateTime();
    timer = setInterval(updateTime, 1000); // 每秒更新一次
})

onUnmounted(() => {
    clearInterval(timer);
})
</script>

<template>
    <footer class="shu-footer">
        <div class="shu-container">
            <div class="footer-item">
                Copyright © 2024 Xiao Shu All Rights Reserved
            </div>
            <div class="footer-item scaling">
                <span>
                    时间
                    <strong class="mouse">{{ currentTime }}</strong>
                </span>
            </div>
            <div class="footer-item">
                <span>
                    位置
                    <strong class="mouse" @click="openAmapApp">中国·武汉</strong>
                </span>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.shu-footer {
    border-top: 1px solid var(--classB);
    color: var(--minor);

    .shu-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 65px;
        width: 100%;
        margin: 0 auto;
        padding: 0 15px;

        .scaling {
            margin: 0 auto 0 10px;
        }

        .mouse {
            cursor: pointer;
            font-weight: 500;
            color: var(--theme);
        }
    }
}
</style>
