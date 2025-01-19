<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let $router = useRouter();
let activeIndex = ref(0);
let navSearch = ref(false);

interface Tab {
    name: string,
    path: string
}

const tabs = [
    {
        name: '首页',
        path: '/'
    },
    {
        name: '归档',
        path: '/blogsData',
    },
    {
        name: '关于',
        path: '/about'
    }
]


const porps = defineProps({
    scrollPosition: {
        type: Number,
        default: 0
    },
    isShowSideBox: {
        type: Boolean,
        default: false
    }
})

// 获取焦点
const onFocus = (event: FocusEvent) => {
    navSearch.value = true;
}

//失去焦点
const onBlur = (event: FocusEvent) => {
    navSearch.value = false;
}

const goToBack = (item: Tab, index: number) => {
    activeIndex.value = index
    $router.push({ path: item.path })
}

</script>

<template>
    <header :class="['header', { 'header-active': (porps.scrollPosition >= 80 && !porps.isShowSideBox) }]">
        <div class="header-above">
            <div class="shu-container">
                <SvgIcon class="header-above-logo-icon-listview" name="listview" :width="'20px'" :height="'20px'" />
                <a href="" class="header-above-logo">
                    <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                </a>
                <div class="header-above-nav">
                    <div v-for="(item, index) in tabs" :key="index"
                        :class="['item', { 'active': activeIndex === index }]" @click="goToBack(item, index)">{{
                            item.name }}</div>
                </div>
                <form action="" class="header-above-search">
                    <input type="text" placeholder="请输入关键词" class="header-above-search-input" @focus="onFocus"
                        @blur="onBlur">
                    <button type="submit" class="header-above-search-btn">Search</button>
                    <nav class="result active" v-if="navSearch">
                        <a href="#" class="item" v-for="(i, index) in 5" :key="i">
                            <span class="sort">{{ index + 1 }}</span>
                            <span class="text">经典H动态图：雨后小故事、凌辱小故事、自行车小故事、家教小故事</span>
                            <span class="views">44,860 阅读</span>
                        </a>
                    </nav>
                </form>

                <SvgIcon class="header-above-search-icon" name="search" :width="'25px'" :height="'25px'"
                    :color="'#606266'" />
            </div>
        </div>
        <div class="header-below">
            <div class="shu-container">
                <div class="header-below-nav">
                    <a href="" class="item">默认分类</a>
                    <a href="" class="item">推荐</a>
                    <a href="" class="item">图册</a>
                    <a href="" class="item">人物传</a>
                    <a href="" class="item">吃瓜</a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--background);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    transition: top 0.35s;

    .header-above {
        position: relative;
        z-index: 999;
        background: var(--background);

        .shu-container {
            align-items: center;

            .header-above-logo-icon-listview {
                display: none;
                width: 20px;
                height: 20px;
                fill: var(--routine);
                cursor: pointer;
            }

            .header-above-logo {
                position: relative;
                display: flex;
                align-items: center;
                height: 60px;
                padding-right: 15px;
                margin-right: 15px;

                img {
                    max-width: 150px;
                    max-height: 50px;
                    object-fit: cover;
                }
            }

            .header-above-nav {
                display: flex;
                align-items: center;

                .item {
                    position: relative;
                    height: 60px;
                    line-height: 60px;
                    font-size: 15px;
                    padding: 0 8px;
                    margin-right: 15px;
                    transition: color 0.35s;
                    white-space: nowrap;
                    color: var(--main);
                    cursor: pointer;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 3px;
                        transition: opacity 0.5s, -webkit-transform 0.5s;
                        transition: opacity 0.5s, transform 0.5s;
                        transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
                        border-radius: 6px 6px 0 0;
                        opacity: 0;
                        -webkit-transform: scaleX(0.25);
                        transform: scaleX(0.25);
                        background: var(--theme);
                    }

                    &:hover {
                        color: var(--theme);
                    }

                    &:hover::after {
                        opacity: 1;
                        -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                    }
                }

                .active {
                    color: var(--theme);

                    &::after {
                        opacity: 1;
                        -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                    }
                }
            }

            .header-above-search {
                position: relative;
                margin-left: auto;
                display: flex;
                align-items: center;

                .header-above-search-input {
                    background: var(--classC);
                    width: 170px;
                    height: 34px;
                    border: 1px solid transparent;
                    padding: 0 18px;
                    color: var(--routine);
                    transition: background 0.35s, border-color 0.35s, padding-right 0.35s;
                    border-radius: 17px 0 0 17px;

                    &:focus {
                        outline: none;
                        background: var(--background);
                        border-color: var(--theme);
                        padding-right: 28px;
                    }
                }

                .header-above-search-btn {
                    position: relative;
                    z-index: 1;
                    height: 34px;
                    border: none;
                    background: var(--theme);
                    color: #fff;
                    border-radius: 0 17px 17px 0;
                    padding: 0 10px;
                }

                .result {
                    position: absolute;
                    z-index: 2;
                    top: 60px;
                    left: 0;
                    right: 0;
                    background: var(--background);
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                    border-radius: var(--radius-inner);
                    visibility: hidden;
                    opacity: 0;
                    transition: visibility 0.35s, opacity 0.35s, transform 0.35s;
                    transform: translate3d(0, 15px, 0);

                    .item {
                        height: 40px;
                        line-height: 40px;
                        border-bottom: 1px solid var(--classD);
                        display: flex;
                        align-items: center;
                        overflow: hidden;
                        padding: 0 10px;
                        transition: background 0.35s;

                        .sort {
                            color: #fff;
                            background: #7f7f8c;
                            width: 18px;
                            height: 18px;
                            line-height: 18px;
                            border-radius: 2px;
                            text-align: center;
                            margin-right: 8px;
                            font-weight: 500;
                        }

                        .text {
                            flex: 1;
                            min-width: 0;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            color: var(--routine);
                            font-size: 12px;
                        }

                        .views {
                            color: var(--seat);
                            font-size: 12px;
                            margin-left: 5px;
                        }

                        &:nth-child(1) .sort {
                            background: #fe2d46;
                        }

                        &:nth-child(2) .sort {
                            background: #f60;
                        }

                        &:nth-child(3) .sort {
                            background: #faa90e;
                        }

                        &:hover {
                            background: var(--classD);
                        }
                    }
                }

                .active {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                    visibility: visible;
                }
            }

            .header-above-search-icon {
                display: none;
                width: 20px;
                height: 20px;
                fill: #606266;
                cursor: pointer;
                margin-left: auto;
            }
        }
    }

    .header-below {
        position: relative;
        border-top: 1px solid var(--classC);
        height: 45px;

        .shu-container {
            .header-below-nav {
                display: flex;

                .item {
                    margin-right: 15px;
                    color: var(--minor);
                    height: 45px;
                    line-height: 45px;
                    transition: color 0.35s;
                    white-space: nowrap;
                }
            }
        }

    }

    .shu-container {
        display: flex;
        width: 100%;
        margin: 0 auto;
        padding: 0 15px;
    }
}
</style>
