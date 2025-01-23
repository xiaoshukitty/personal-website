<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, } from 'vue';
import ArticlesList from '../../components/ArticlesList/index.vue';
import Carousel from '../../components/Carousel/index.vue'

const tabList = ref([
    {
        name: '最新文章',
        key: 'recommend'
    },
    {
        name: '热门文章',
        key: 'hot'
    },
    {
        name: '评论最多',
        key: 'new'
    },
    {
        name: '评论最多',
        key: 'front'
    },
    {
        name: '点赞最多',
        key: 'back'
    },
])

const imageList = ref([
    'https://pic3.zhimg.com/v2-438ae100f06ccf947031b406d84a4f0a_r.jpg',
    'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/7a67dece8aff3b212fa180d8c1f7eac5.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080',
    'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/ea1338f685ec2c7b4348ba5e17f08dd0.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080',
    'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/86f3f30c32342a017f699fab73c0481f.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080',
    'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/fb1da048d1b5ebdbcdac2db6a9e69ad8.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080',
    'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/ea73c0013ecd439cccc3aced51ef60d7.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080',

])
let activeIndex = ref(0);
let tabWidth = ref<HTMLElement | null>(null);
// 获取 div 元素的引用
const swiperContainer = ref<HTMLDivElement | null>(null);
let activeTabLeft = ref(0);
let activeTabWidth = ref(56.0059);
const sonArticlesList = ref(null)


const changeTab = (index: number) => {
    activeIndex.value = index;
    activeTabLeft.value = ((tabWidth.value[index].offsetWidth) + 20) * index;
}

const swiperWidth = ref(0);
const swiperHeight = ref(0);


// 创建 ResizeObserver 实例来监听尺寸变化
const resizeObserver = new ResizeObserver(() => {
    if (swiperContainer.value) {
        swiperHeight.value = swiperContainer.value.clientHeight;
        swiperWidth.value = swiperContainer.value.clientWidth;
        console.log('swiperHeight--',swiperHeight.value);
        console.log('swiperWidth--',swiperWidth.value);
    }
});


//加载更多
const readMore = () => {
    if (sonArticlesList.value) {
        sonArticlesList.value.readMore();
    }
}

// 在组件挂载后，开始监听
onMounted(() => {
    if (swiperContainer.value) {
        resizeObserver.observe(swiperContainer.value);
    }
})

// 在组件卸载前停止监听
onBeforeUnmount(() => {
    if (swiperContainer.value) {
        resizeObserver.unobserve(swiperContainer.value);
    }
});

</script>

<template>
    <div class="shu-mian">
        <div class="shu-content">
            <div class="shu-content-banner">
                <div class="swiper-container" ref="swiperContainer">
                    <Carousel :images="imageList" :width="swiperWidth" :height="swiperHeight" :interval="3000" />
                </div>
                <div class="shu-content-banner-recommend">
                    <figure class="item">
                        <a href="" class="thumbnail">
                            <img v-img-loader="'https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280'"
                                alt="">
                        </a>
                        <figcaption class="information">
                            <span class="type">推荐</span>
                            <div class="text">孤帆远影碧空尽，唯见长江天际流。</div>
                        </figcaption>
                    </figure>
                    <figure class="item">
                        <a href="" class="thumbnail">
                            <img v-img-loader="'https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280'"
                                alt="">
                        </a>
                        <figcaption class="information">
                            <span class="type">推荐</span>
                            <div class="text">桃花潭水深千尺，不及汪伦送我情。</div>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="shu-content-hot">
                <ul class="shu-content-hot-list">
                    <li class="item" v-for="i in 4" :key="i">
                        <a href="" class="link">
                            <figure class="inner">
                                <span class="views">44,800 ℃</span>
                                <img class="image"
                                    v-img-loader="'https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280'"
                                    alt="">
                                <figcaption class="title">
                                    日照香炉生紫烟，遥看瀑布挂前川。
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="shu-content-title">
                <ul>
                    <li v-for="(item, index) in tabList" :key="index"
                        :class="['item', index === activeIndex ? 'active' : '']" @click="changeTab(index)"
                        ref="tabWidth">
                        {{ item.name }}
                    </li>
                    <li class="line" :style="{ 'left': activeTabLeft + 'px', 'width': activeTabWidth + 'px' }"></li>
                </ul>
            </div>
            <ArticlesList ref="sonArticlesList" :activeIndex="activeIndex"></ArticlesList>
        </div>
        <div>
            <div class="shu-pagination" @click="readMore">查看更多</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.shu-mian {

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
                // background: pink;
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
    }

    .shu-pagination {
        margin: 15px auto 0;
        width: 120px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 16px;
        cursor: pointer;
        user-select: none;
        background: var(--background);
        color: var(--routine);
        transition: transform 0.25s;
        box-shadow: var(--box-shadow);
    }
}

.shu-container {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}
</style>
