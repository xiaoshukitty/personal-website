<script setup lang="ts">

import { onMounted, ref, watch, defineExpose } from 'vue';
import { useRouter } from 'vue-router'
let item = ref(10);

let $router = useRouter();
let loadingList = ref(false);
let articlesList = ref([
    {
        id: 1,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://b0.bdstatic.com/fd8b1444613835e22392afbf801c24b0e5.jpg@h_1280',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: true,
    }, {
        id: 2,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }, {
        id: 3,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }, {
        id: 4,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }, {
        id: 5,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }, {
        id: 6,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }, {
        id: 7,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }, {
        id: 8,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }, {
        id: 9,
        title: '将进酒·君不见',
        time: '2024-05-11',
        time2: '2024年05月11日',
        read: 4662,
        like: 4,
        img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        labels: '图册',
        isTop: false,
    }
]);
let isFlag = ref(false);



const props = defineProps({
    activeIndex: {
        type: Number,
        default: 0
    },
})

// 加载更多的方法
const readMore = () => {
    isFlag.value = true;
    setTimeout(() => {
        articlesList.value.push(
            {
                id: 1,
                title: '将进酒·君不见',
                time: '2024-05-11',
                time2: '2024年05月11日',
                read: 4662,
                like: 4,
                img: 'https://img1.baidu.com/it/u=981765317,573942126&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
                articles: '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
                labels: '图册',
                isTop: true,
            }
        )
        isFlag.value = false;
    }, 1000)
}

//跳转
const goToArchives = (id: number) => {
    console.log(id);
    $router.push({
        path: '/about',
        query: {
            id,
            type: 'pictures',
        }
    })
}

//让父组件调用
defineExpose({
    readMore
})

watch(() => props.activeIndex, (val) => {
    loadingList.value = false;
    item.value = val + 2;
    setTimeout(() => {
        loadingList.value = true;
        articlesList.value = articlesList.value.slice(0, -2) // 测试数据
    }, 1000)
})

onMounted(() => {
    setTimeout(() => {
        loadingList.value = true;
    }, 1000)
})

</script>

<template>
    <div class="shu-content-list">
        <ul class="content-list" v-if="loadingList">
            <li class="content-list-item default" v-for="(item, index) in articlesList" :key="index"
                @click.prevent="goToArchives(item.id)">
                <div class="line"></div>
                <a href="#" class="thumbnail">
                    <img v-img-loader="item.img" alt="image" />
                    <time>{{ item.time }}</time>
                    <svg class="thumbnail-icon">
                        <use xlink:href="#icon-pictureIcon"></use>
                    </svg>
                </a>
                <div class="information">
                    <a href="#" class="title">
                        <span class="badge " v-if="item.isTop"> 置顶 </span>
                        {{ item.title }}
                    </a>
                    <a href="#" class="abstract">
                        {{ item.articles }}
                    </a>
                    <div class="meta">
                        <ul class="meta-ul">
                            <li class="meta-ul-li">{{ item.time2 }}</li>
                            <li class="meta-ul-li">{{ item.read }}阅读</li>
                            <li>{{ item.like }} 点赞</li>
                        </ul>
                        <div class="meta-last">
                            <SvgIcon class="icon" name="picture" :width="'15px'" :height="'15px'" />
                            <a href="#" class="link">{{ item.labels }}</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <!-- loading -->
        <ul class="content-list-loading" v-if="!loadingList || isFlag">
            <li class="item">
                <div class="thumbnail"></div>
                <div class="information">
                    <div class="title"></div>
                    <div class="abstract">
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
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

                .thumbnail-icon {
                    position: absolute;
                    z-index: 1;
                    top: 5px;
                    left: 5px;
                    width: 20px;
                    height: 20px;
                    fill: #fff;
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
                        display: inline-block;
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

    .content-list-loading {
        .item {
            display: flex;
            position: relative;
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px solid var(--classC);

            .thumbnail {
                flex-shrink: 0;
                position: relative;
                width: 210px;
                height: 140px;
                margin-right: 15px;
                background: var(--classD);
                animation: list_thumbnail_loading 0.5s infinite alternate;
                border-radius: var(--radius-inner);
            }

            .information {
                flex: 1;
                min-width: 0;

                .title {
                    height: 24px;
                    border-radius: var(--radius-inner);
                    background: var(--classD);
                    animation: list_title_loading 0.75s infinite alternate;
                    margin-bottom: 15px;
                }

                .abstract {
                    p {
                        height: 18px;
                        border-radius: var(--radius-inner);
                        background: var(--classD);
                        margin-bottom: 5px;
                        animation: list_abstract_loading 0.8s infinite alternate;
                    }
                }
            }
        }
    }
}

@keyframes list_thumbnail_loading {
    0% {
        transform: scale(0.85);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes list_title_loading {
    0% {
        width: 80%;
    }

    100% {
        width: 95%;
    }
}

@keyframes list_abstract_loading {
    0% {
        width: 60%;
    }

    100% {
        width: 80%;
    }
}
</style>
