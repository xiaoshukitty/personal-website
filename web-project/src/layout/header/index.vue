<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getRandomRgbColor } from '@/utils/methods'

let $router = useRouter();
let activeIndex = ref(0);
let navSearch = ref(false);
let searchOutShow = ref(false);
let menuShow = ref(false);
let menuColumn = ref(false);

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

//点击 搜索 icon
const searchOutput = (val: string) => {
    if (val == 'search') {
        searchOutShow.value = !searchOutShow.value;
    } else {
        if (searchOutShow.value) {
            searchOutShow.value = false;
        }
        menuShow.value = !menuShow.value;
    }
}

//关闭 mask
const maskShow = () => {
    searchOutShow.value = false;
    menuShow.value = false;
}

const goToBack = (item: Tab, index: number) => {
    activeIndex.value = index
    $router.push({ path: item.path })
}

//打开 menu 菜单
const openMenu = () => {
    menuColumn.value = !menuColumn.value
}

watch(() => searchOutShow.value, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
})

watch(() => menuShow.value, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
})

</script>

<template>
    <header :class="['header', { 'header-active': (porps.scrollPosition >= 80 && !porps.isShowSideBox) }]">
        <div class="header-above">
            <div class="shu-container">
                <SvgIcon class="header-above-logo-icon-listview" name="listview" :width="'20px'" :height="'20px'"
                    @click="searchOutput" />
                <a href="" class="header-above-logo">
                    <img v-img-loader="'https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280'" alt="">
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
                <SvgIcon @click="searchOutput('search')" class="header-above-search-icon" name="search" :width="'25px'"
                    :height="'25px'" :color="'#606266'" />
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
        <div :class="['header-searchout', { 'header-searchout-active': searchOutShow }]">
            <div class="shu-container">
                <div class="header-searchout-inner">
                    <form class="search">
                        <input maxlength="16" autocomplete="off" placeholder="请输入关键字..." type="text" class="input">
                        <button type="submit" class="submit">search</button>
                    </form>
                    <div class="title">
                        <SvgIcon class="icon" name="search" :width="'25px'" :height="'25px'" :color="'#606266'" />
                        标签搜索
                    </div>
                    <ul class="ul-cloud">
                        <li class="li-cloud" v-for="i in 20" :key="i">
                            <a href="#" :style="'background:' + getRandomRgbColor()">{{ '年年' }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="['header-slideout', { ' header-slideout-active': menuShow }]">
            <img class="header-sildout-img" src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                alt="">
            <div class="header-sildout-author">
                <img class="header-sildout-author-img"
                    src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">

                <div class="info">
                    <a href="#" class="link">xiaoshu</a>
                    <p class="motto">有钱终成眷属，没钱亲眼目睹</p>
                </div>
            </div>
            <ul class="header-sildout-count">
                <li class="count-li">
                    <SvgIcon class="icon" name="search" :width="'15px'" :height="'15px'" />
                    <span>
                        累计撰写 <strong>6,603</strong> 篇文章
                    </span>
                </li>
                <li class="count-li">
                    <SvgIcon class="icon" name="search" :width="'15px'" :height="'15px'" />
                    <span>
                        累计收到 <strong>1,023</strong> 条评论
                    </span>
                </li>
            </ul>
            <ul class="header-sildout-menu">
                <li>
                    <a href="#" class="link">
                        <span>首页</span>
                    </a>
                </li>
                <li @click="openMenu">
                    <a href="#" class="link">
                        <span>栏目</span>
                        <SvgIcon class="icon" :name="menuColumn ? 'arrowdown' : 'arrowright'" :width="'20px'"
                            :height="'20px'" />
                    </a>
                    <ul class="ul-slides" :style="menuColumn ? 'display:block' : 'display:none'">
                        <li>
                            <a href="#" class="link">默认分类</a>
                        </li>
                        <li>
                            <a href="#" class="link">推荐</a>
                        </li>
                        <li>
                            <a href="#" class="link">图册</a>
                        </li>
                        <li>
                            <a href="#" class="link">人物传</a>
                        </li>
                        <li>
                            <a href="#" class="link">吃瓜</a>
                        </li>
                    </ul>
                </li>
                <!-- <li @click="openMenu">
                    <a href="#" class="link">
                        <span>页面</span>
                        <SvgIcon class="icon" :name="menuColumn ? 'arrowdown' : 'arrowright'" :width="'20px'"
                            :height="'20px'" />
                    </a>
                    <ul class="ul-slides" :style="menuColumn ? 'display:block' : 'display:none'">
                        <li>
                            <a href="#" class="link">归档</a>
                        </li>
                        <li>
                            <a href="#" class="link">关于</a>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </div>
        <div :class="['header-mask', { ' header-mask-active': (searchOutShow || menuShow) }, { 'header-mask-slideout': menuShow }]"
            @click="maskShow"></div>
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

    .header-searchout {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        z-index: 890;
        background: var(--background);
        border-top: 1px solid var(--classC);
        transform: translate3d(0, -100%, 0);
        transition: transform 0.35s, visibility 0.35s;
        visibility: hidden;

        .header-searchout-inner {
            padding: 15px 0;
            width: 100%;

            .search {
                width: 100%;
                display: flex;
                align-items: center;

                .input {
                    flex: 1;
                    height: 36px;
                    padding: 0 10px;
                    border: 1px solid var(--classB);
                    border-right: none;
                    border-radius: 2px 0 0 2px;
                    color: var(--routine);
                    background: var(--classD);

                    &:focus {
                        outline: none;
                        background: var(--background);
                        border-color: var(--theme);
                        padding-right: 28px;
                    }
                }

                .submit {
                    padding: 0 10px;
                    height: 36px;
                    border: none;
                    background: var(--theme);
                    color: #fff;
                    border-radius: 0 2px 2px 0;
                }
            }

            .title {
                color: var(--routine);
                padding: 15px 0 10px;
                font-size: 16px;
                display: flex;
                align-items: center;

                .icon {
                    width: 22px;
                    height: 22px;
                    fill: var(--routine);
                    margin-right: 5px;
                }
            }

            .ul-cloud {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -5px -5px;

                .li-cloud {
                    padding: 5px;

                    a {
                        display: block;
                        padding: 0 10px;
                        height: 24px;
                        line-height: 24px;
                        border-radius: 2px;
                        font-size: 12px;
                        color: #fff;
                        background: #EA5455;
                    }
                }
            }
        }
    }

    .header-searchout-active {
        visibility: visible;
        transform: translate3d(0, 0, 0);
    }

    .header-slideout {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 80%;
        z-index: 1020;
        background: var(--classD);
        transform: translate3d(-100%, 0, 0);
        visibility: hidden;
        transition: transform 0.35s, visibility 0.35s;
        overflow-y: auto;
        padding: 135px 15px 15px;

        .header-sildout-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 150px;
            -o-object-fit: cover;
            object-fit: cover;
            z-index: -1;

        }


        .header-sildout-author {
            display: flex;
            margin-bottom: 15px;
            background: var(--background);
            border-radius: var(--radius-wrap);
            padding: 15px;
            box-shadow: var(--box-shadow);

            .header-sildout-author-img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
                border-radius: var(--radius-inner);
            }

            .info {
                overflow: hidden;
                line-height: 25px;

                .link {
                    display: block;
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--main);
                }

                .motto {
                    font-size: 12px;
                    color: var(--routine);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }

        .header-sildout-count {
            background: var(--background);
            border-radius: var(--radius-wrap);
            padding: 10px 15px;
            box-shadow: var(--box-shadow);
            margin-bottom: 15px !important;

            .count-li {
                display: flex;
                align-items: center;
                color: var(--routine);
                padding: 5px 0;

                .icon {
                    width: 15px;
                    height: 15px;
                    fill: var(--routine);
                    margin-right: 5px;
                }

                strong {
                    font-weight: 500;
                    color: var(--theme);
                }
            }
        }

        .header-sildout-menu {
            background: var(--background);
            padding: 10px 15px;
            border-radius: var(--radius-wrap);
            overflow: hidden;
            box-shadow: var(--box-shadow);

            li {
                .link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 0;
                    color: var(--main);
                    transition: color 0.15s;
                }

                .ul-slides {
                    border-left: 1px solid var(--classC);
                    padding-left: 15px;

                    .link {
                        color: var(--routine);
                    }
                }

                .icon {
                    fill: var(--minor);
                    transition: transform 0.15s, fill 0.15s;
                }
            }

        }
    }

    .header-slideout-active {
        visibility: visible;
        transform: translate3d(0, 0, 0);
    }


    .header-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(5px);
        opacity: 0;
        visibility: hidden;
        transition: visibility 0.35s, opacity 0.35s;
        z-index: 880;
    }

    .header-mask-active {
        visibility: visible;
        opacity: 1;
    }

    .header-mask-slideout {
        z-index: 1001;
    }

}




.shu-container {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}
</style>
