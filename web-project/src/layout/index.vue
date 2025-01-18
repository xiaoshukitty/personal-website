<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPosition = ref(0);
const isShowSideBox = ref(false);

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
    <div class="Shu">
        <header :class="['header', { 'header-active': (scrollPosition >= 80 && !isShowSideBox) }]">
            <div class="header-above">
                <div class="shu-container">
                    <a href="" class="header-above-logo">
                        <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                    </a>
                    <div class="header-above-nav">
                        <a href="" class="item active">首页</a>
                        <a href="" class="item">首页</a>
                        <a href="" class="item">首页</a>
                    </div>
                    <form action="" class="header-above-search">
                        <input type="text" placeholder="请输入关键词" class="header-above-search-input">
                        <button type="submit" class="header-above-search-btn">Search</button>
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
        <div class="shu-container">
            <div class="shu-mian">
                <div class="shu-content">
                    <div class="shu-content-banner">
                        <div class="swiper-container"></div>
                        <div class="shu-content-banner-recommend">
                            <figure class="item">
                                <a href="" class="thumbnail">
                                    <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                                        alt="">
                                </a>
                                <figcaption class="information">
                                    <span class="type">推荐</span>
                                    <div class="高性价比机场（梯子 VPN）">高性价比机场（梯子 VPN）</div>
                                </figcaption>
                            </figure>
                            <figure class="item">
                                <a href="" class="thumbnail">
                                    <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                                        alt="">
                                </a>
                                <figcaption class="information">
                                    <span class="type">推荐</span>
                                    <div class="高性价比机场（梯子 VPN）">高性价比机场（梯子 VPN）</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="shu-content-hot">
                        <ul class="shu-content-hot-list">
                            <li class="item">
                                <a href="" class="link">
                                    <figure class="inner">
                                        <span class="views">44,800 ℃</span>
                                        <img class="image"
                                            src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                                            alt="">
                                        <figcaption class="title">
                                            经典H动态图：雨后小故事、凌辱小故事、自行车小故事、家教小故事
                                        </figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li class="item">
                                <a href="" class="link">
                                    <figure class="inner">
                                        <span class="views">44,800 ℃</span>
                                        <img class="image"
                                            src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                                            alt="">
                                        <figcaption class="title">
                                            经典H动态图：雨后小故事、凌辱小故事、自行车小故事、家教小故事
                                        </figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li class="item">
                                <a href="" class="link">
                                    <figure class="inner">
                                        <span class="views">44,800 ℃</span>
                                        <img class="image"
                                            src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                                            alt="">
                                        <figcaption class="title">
                                            经典H动态图：雨后小故事、凌辱小故事、自行车小故事、家教小故事
                                        </figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li class="item">
                                <a href="" class="link">
                                    <figure class="inner">
                                        <span class="views">44,800 ℃</span>
                                        <img class="image"
                                            src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                                            alt="">
                                        <figcaption class="title">
                                            经典H动态图：雨后小故事、凌辱小故事、自行车小故事、家教小故事
                                        </figcaption>
                                    </figure>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="shu-content-title">
                        <ul>
                            <li class="item active">最新文章</li>
                            <li class="item">热门文章</li>
                            <li class="item">评论最多</li>
                            <li class="item">点赞最多</li>
                            <li class="line" style="left: 0px; width: 56.0059px;"></li>
                        </ul>
                    </div>
                    <div class="shu-content-list">
                        <ul class="content-list">
                            <li class="content-list-item default" v-for="i in 10" :key="i">
                                <div class="line"></div>
                                <a href="" class="thumbnail">
                                    <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                                        alt="">
                                    <time>2024-05-11</time>

                                </a>
                                <div class="information">
                                    <a href="" class="title">
                                        <span class="badge">
                                            置顶
                                        </span>
                                        高性价比机场（梯子 VPN）
                                    </a>
                                    <a href="" class="abstract">{gird column="2"
                                        gap="15"}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}{gird-item}{/gird-item}</a>
                                    <div class="meta">
                                        <ul class="meta-ul">
                                            <li class="meta-ul-li">2024年05月11日</li>
                                            <li class="meta-ul-li">4,626 阅读</li>
                                            <li>4 点赞</li>
                                        </ul>
                                        <div class="meta-last">
                                            <SvgIcon class="icon" name="picture" :width="'15px'" :height="'15px'" />
                                            <a href="" class="link">图册</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <aside class="shu-aside">
                <section class="shu-aside-section author">
                    <img class="author-img" src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                        alt="">
                    <div class="user">
                        <img class="user-image"
                            src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                        <a href="" class="link">xiaoshu</a>
                        <p class="motto joe_motto">有钱终成眷属，没钱亲眼目睹</p>
                    </div>
                    <div class="count">
                        <div class="item">
                            <span class="num">6,603</span>
                            <span>文章数</span>
                        </div>
                        <div class="item">
                            <span class="num">6</span>
                            <span>评论量</span>
                        </div>
                    </div>
                    <ul class="list">
                        <li class="item" v-for="i in 10" :key="i">
                            <a href="" class="link">LadyMary-伊藤舞雪-103P-11-19</a>
                            <SvgIcon class="icon" name="link" :width="'16px'" :height="'16px'" />
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
        <footer></footer>
    </div>
</template>

<style scoped lang="scss">
.Shu {
    --theme: #409eff;
    --background: #fff;
    --main: #303133;
    --routine: #606266;
    --minor: #909399;
    --seat: #c0c4cc;
    --classA: #dcdfe6;
    --classB: #e4e7ed;
    --classC: #ebeef5;
    --classD: #f2f6fc;
    --radius-wrap: 8px;
    --radius-inner: 4px;
    --text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    --box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);

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
    }

    .header-active {
        top: -60px;
    }

    .shu-mian {
        min-width: 0;
        flex: 1;
        padding: 15px 0;

        .shu-content {
            border-radius: var(--radius-wrap);
            padding: 0 15px;
            background: var(--background);
            box-shadow: var(--box-shadow);

            .shu-content-banner {
                padding-top: 15px;
                display: flex;

                .swiper-container {
                    min-width: 0;
                    flex: 1;
                    height: 335px;
                    --swiper-theme-color: #fff;
                    border-radius: var(--radius-inner);
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                    overflow: hidden;
                    list-style: none;
                    padding: 0;
                    z-index: 1;
                    background: pink;
                }

                .shu-content-banner-recommend {
                    width: 270px;
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;

                    .item {
                        position: relative;
                        width: 100%;
                        height: 160px;
                        margin-bottom: 15px;
                        border-radius: var(--radius-inner);
                        overflow: hidden;

                        .thumbnail {
                            display: block;
                            width: 100%;
                            height: 100%;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }

                        .information {
                            display: flex;
                            align-items: center;
                            position: absolute;
                            z-index: 1;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            padding: 8px;
                            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
                            color: #fff;
                            line-height: 20px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            .type {
                                background-image: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3);
                                background-color: #8695e6;
                                text-align: center;
                                padding: 0 8px;
                                border-radius: 2px;
                                height: 20px;
                                font-size: 12px;
                                color: #fff;
                                z-index: 2;
                                user-select: none;
                                margin-right: 5px;
                            }

                            .text {
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }

                }
            }

            .shu-content-hot {
                margin-top: 15px;

                .shu-content-hot-list {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    -webkit-column-gap: 15px;
                    column-gap: 15px;

                    .item {
                        overflow: hidden;

                        .link {
                            display: block;

                            .inner {
                                position: relative;

                                .views {
                                    display: flex;
                                    align-items: center;
                                    position: absolute;
                                    z-index: 1;
                                    top: 5px;
                                    right: 5px;
                                    background-image: linear-gradient(to right, #fc712a, #f84c39);
                                    background-color: #f84c39;
                                    color: #fff;
                                    font-size: 12px;
                                    height: 18px;
                                    padding: 0 8px;
                                    border-radius: 2px;
                                    white-space: nowrap;
                                }

                                .image {
                                    width: 100%;
                                    height: 120px;
                                    object-fit: cover;
                                    transition: opacity 0.35s;
                                    border-radius: var(--radius-inner) var(--radius-inner) 0 0;
                                }

                                .title {
                                    font-size: 13px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    text-align: center;
                                    padding: 0 8px;
                                    line-height: 32px;
                                    color: var(--minor);
                                    background: var(--classD);
                                    transition: background 0.35s;
                                    border-radius: 0 0 var(--radius-inner) var(--radius-inner);
                                }

                            }
                        }
                    }
                }
            }

            .shu-content-title {
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--classC);

                ul {
                    position: relative;
                    display: flex;
                    align-items: center;
                    color: var(--routine);
                    font-weight: 500;
                    height: 40px;
                    line-height: 40px;

                    .item {
                        cursor: pointer;
                        margin-right: 20px;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        transition: color 0.35s;
                    }

                    .line {
                        position: absolute;
                        bottom: -1px;
                        left: 0;
                        height: 2px;
                        border-radius: 1px;
                        background: var(--theme);
                        transition: left 0.35s, width 0.35s;
                    }

                    .active {
                        color: var(--theme);
                    }
                }
            }

            .shu-content-list {
                .content-list {
                    .content-list-item {
                        position: relative;
                        width: 100%;
                        border-bottom: 1px solid var(--classC);
                        padding: 15px 0;

                        .line {
                            position: absolute;
                            z-index: 1;
                            top: 15px;
                            left: -15px;
                            width: 4px;
                            height: 25px;
                            border-radius: 2px;
                            background: var(--theme);
                            transform: scaleY(0);
                            transition: transform 0.35s;
                        }

                        &:hover .line {
                            transform: scaleY(1);
                        }
                    }

                    .default {
                        display: flex;
                        position: relative;

                        .thumbnail {
                            flex-shrink: 0;
                            position: relative;
                            width: 210px;
                            height: 140px;
                            margin-right: 15px;
                            overflow: hidden;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: var(--radius-inner);
                                transition: opacity 0.35s;
                            }

                            time {
                                position: absolute;
                                z-index: 1;
                                top: 5px;
                                right: 5px;
                                background: var(--theme);
                                height: 20px;
                                line-height: 20px;
                                padding: 0 8px;
                                color: #fff;
                                font-size: 12px;
                                border-radius: 10px;
                                transition: transform 0.35s;
                                transform: translate3d(120%, 0, 0);
                            }
                        }

                        .information {
                            display: flex;
                            flex-direction: column;
                            flex: 1;
                            min-width: 0;

                            .title {
                                margin-bottom: 10px;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                word-break: break-word;
                                color: var(--main);
                                font-size: 18px;
                                line-height: 24px;
                                max-height: 48px;
                                transition: color 0.35s;

                                .badge {
                                    height: 20px;
                                    line-height: 20px;
                                    background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);
                                    color: #fff;
                                    font-size: 12px;
                                    margin-right: 5px;
                                    border-radius: 2px;
                                    padding: 0 8px;
                                    white-space: nowrap;
                                    vertical-align: 2px;
                                }
                            }

                            .abstract {
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                color: var(--minor);
                                word-break: break-word;
                                line-height: 22px;
                                max-height: 44px;
                                opacity: 0.85;
                            }

                            .meta {
                                display: flex;
                                align-items: center;
                                margin-top: auto;
                                color: var(--minor);
                                font-size: 13px;

                                .meta-ul {
                                    display: flex;
                                    align-items: center;

                                    .meta-ul-li {
                                        &::after {
                                            content: '/';
                                        }
                                    }

                                    li {
                                        color: var(--seat);
                                        padding: 0 5px;
                                    }
                                }

                                .meta-last {
                                    margin-left: auto;
                                    display: flex;
                                    align-items: center;

                                    .icon {
                                        margin-right: 3px;
                                    }

                                    .link {
                                        color: var(--minor);
                                    }
                                }
                            }

                        }

                        &:hover .thumbnail time {
                            transform: translate3d(0, 0, 0);
                        }

                        &:hover .thumbnail img {
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }

    .shu-aside {
        padding: 15px 0;
        margin-left: 15px;

        .shu-aside-section {
            position: relative;
            width: 250px;
            margin-bottom: 15px;
            border-radius: var(--radius-wrap);
            box-shadow: var(--box-shadow);
            overflow: hidden;
        }

        .author {
            background: var(--background);
            padding: 45px 15px 15px;

            .author-img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 120px;
                -o-object-fit: cover;
                object-fit: cover;
                z-index: 1;
            }

            .user {
                position: relative;
                z-index: 4;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-bottom: 15px;

                .user-image {
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-bottom: 10px;
                    -o-object-fit: cover;
                    object-fit: cover;
                    transition: transform 0.75s;
                    background: var(--background);
                    padding: 5px;
                }

                .link {
                    color: var(--theme);
                    margin-bottom: 10px;
                    font-size: 16px;
                    font-weight: 500;
                }

                .motto {
                    color: var(--main);
                    text-align: center;
                    word-break: break-word;
                }

            }

            .count {
                width: 100%;
                padding-bottom: 15px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--classC);

                .item {
                    min-width: 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: var(--routine);
                    font-size: 12px;

                    &:first-child {
                        border-right: 1px solid var(--classC);
                    }

                    .num {
                        max-width: 70px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: 500;
                        font-size: 22px;
                        color: var(--main);
                        margin-bottom: 3px;
                        text-shadow: var(--text_shadow);
                    }
                }

            }

            .list {
                padding-top: 15px;

                .item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    line-height: 30px;

                    .link {
                        position: relative;
                        color: var(--routine);
                        max-width: 85%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;

                        &::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 0;
                            height: 1px;
                            background: var(--theme);
                            transition: all 0.35s;
                        }

                        &:hover {
                            color: var(--theme);
                        }

                        &:hover::after {
                            width: 100%;
                        }
                    }

                    .icon {
                        fill: var(--routine);
                    }
                }
            }

            &::after {
                display: none;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 273px;
                background: url('../assets//images/snowing.gif') no-repeat;
                background-size: cover;
                z-index: 3;
                pointer-events: none;
            }

            &:hover::after {
                display: block;
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

img {
    border: 0;
    vertical-align: middle;
}

input[type='text'] {
    -webkit-appearance: none;
    border-radius: 0;
    font-size: 13px;
    font-weight: 500;
}

button {
    cursor: pointer;
    -webkit-appearance: none;
    font-size: 13px;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td,
img {
    padding: 0;
    margin: 0;
}

li {
    list-style: none;
}


@media (max-width: 992px) {
    html .header-above-search {
        display: none !important;
    }
}


@media (max-width: 992px) {
    html .header-above-search-icon {
        display: block !important;
    }
}


@media (max-width: 992px) {
    html .shu-aside {
        display: none !important;
    }
}


@media (max-width: 1200px) {
    html .shu-content-banner {
        display: block !important;
    }
}


@media (max-width: 1200px) {
    html .swiper-container {
        height: 280px !important;
    }
}

@media (max-width: 1200px) {
    html .shu-content-banner-recommend {
        padding-top: 15px !important;
        width: 100% !important;
        margin-left: 0 !important;
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 15px !important;
    }
}

@media (max-width: 1200px) {
    html .shu-content-banner-recommend .item {
        height: 145px !important;
        margin: 0 !important;
    }
}

@media (max-width: 992px) {
    html .shu-content-hot-list .item .link .inner .image {
        height: 95px !important;
    }
}

@media (max-width: 1200px) {
    html .shu-content-hot-list .item .link .inner .image {
        height: 90px !important;
    }
}


@media (max-width: 1200px) {
    html .shu-content-hot-list {
        column-gap: 10px !important;
    }
}

@media (max-width: 768px) {
    html .shu-content-hot-list {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 10px !important;
    }
}

@media (max-width: 1200px) {
    html .content-list-item.default .thumbnail {
        width: 185px !important;
        height: 125px !important;
    }
}

@media (min-width: 576px) {
    .shu-container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .shu-container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .shu-container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .shu-container {
        max-width: 1140px
    }
}

@media (min-width: 1400px) {
    .shu-container {
        max-width: 1320px
    }
}
</style>
