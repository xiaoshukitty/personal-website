<template>
    <div class="container">
        <div @click="scrollOneScreen">首页</div>
        <div @click="showDrawer">分类</div>
        <div>留言板</div>
        <div>链接</div>
        <div>关于我</div>
    </div>
</template>

<script setup lang='ts'>

</script>
<style scoped lang="scss">
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
</style>