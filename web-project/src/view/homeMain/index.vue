<script setup lang="ts">
</script>

<template>
    <div class="shu-mian">
        <div class="shu-content">
            <div class="shu-content-banner">
                <div class="swiper-container"></div>
                <div class="shu-content-banner-recommend">
                    <figure class="item">
                        <a href="" class="thumbnail">
                            <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                        </a>
                        <figcaption class="information">
                            <span class="type">推荐</span>
                            <div class="text">孤帆远影碧空尽，唯见长江天际流。</div>
                        </figcaption>
                    </figure>
                    <figure class="item">
                        <a href="" class="thumbnail">
                            <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
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
                    <li class="item">
                        <a href="" class="link">
                            <figure class="inner">
                                <span class="views">44,800 ℃</span>
                                <img class="image"
                                    src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                                <figcaption class="title">
                                    日照香炉生紫烟，遥看瀑布挂前川。
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="item">
                        <a href="" class="link">
                            <figure class="inner">
                                <span class="views">44,800 ℃</span>
                                <img class="image"
                                    src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                                <figcaption class="title">
                                    日照香炉生紫烟，遥看瀑布挂前川。
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="item">
                        <a href="" class="link">
                            <figure class="inner">
                                <span class="views">44,800 ℃</span>
                                <img class="image"
                                    src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                                <figcaption class="title">
                                    日照香炉生紫烟，遥看瀑布挂前川。
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="item">
                        <a href="" class="link">
                            <figure class="inner">
                                <span class="views">44,800 ℃</span>
                                <img class="image"
                                    src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
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
                            <img src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
                            <time>2024-05-11</time>

                        </a>
                        <div class="information">
                            <a href="" class="title">
                                <span class="badge">
                                    置顶
                                </span>
                                将进酒·君不见
                            </a>
                            <a href="" class="abstract">君不见，黄河之水天上来，奔流到海不复回。
                                君不见，高堂明镜悲白发，朝如青丝暮成雪。
                            </a>
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
        <div>
            <div class="shu-pagination">查看更多</div>
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
