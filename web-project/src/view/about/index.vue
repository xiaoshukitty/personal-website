<script setup lang="ts">
</script>

<template>
    <div>
        <div class="about-detail">
            <h1 class="about-title">关于</h1>
            <div class="about-detail-count">
                <div class="about-detail-count-information">
                    <img class="avatar" src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                        alt="">
                    <div class="meta">
                        <div class="author">
                            <a href="" class="link">xiaoshu</a>
                        </div>
                        <div class="meta-item">
                            <span class="text">2000-12-20</span>
                            <span class="line">/</span>
                            <span class="text">0 评论</span>
                            <span class="line">/</span>
                            <span class="text">1220 阅读</span>
                        </div>
                    </div>
                </div>
                <time class="about-detail-count-time">12/20</time>
            </div>
            <article class="about-detail-article">
                <h2>简介</h2>
                <p>名称：xiaoxshu博客</p>
                <p>文案：云想衣裳花想容，春风拂槛露华浓</p>
                <p>定位：她华艳的衣裳如飘逸的云朵，她艳丽的容貌如盛开的花朵，春风拂过栏杆，露珠润泽花色更浓</p>
                <h2>资源来源</h2>
                <p>主要来自于一些 网络 频道，。</p>
                <ul>
                    <li v-for="i in 3 " :key="i">
                        <a href="">@12202000</a>
                    </li>
                </ul>
                <h2>加入频道</h2>
                <p>五歌网也有自己的 Telegram 频道</p>
                <ul>
                    <li v-for="i in 1 " :key="i">
                        <a href="">@12202000</a>
                    </li>
                </ul>
            </article>
            <div class="about-detail-agree">
                <div class="agree">
                    <div class="icon active">

                    </div>
                </div>
            </div>
            <div class="about-detail-copyright">
                <div class="content">
                    <div class="item">
                        <SvgIcon class="icon" name="qq" :width="'18px'" :height="'18px'" />
                        <span> 版权属于：</span>
                        <span class="text">xiaoshu</span>
                    </div>
                    <div class="item">
                        <SvgIcon class="icon" name="wechat" :width="'18px'" :height="'18px'" />
                        <span> 本文链接：</span>
                        <span class="text">http:www.baidu.com</span>
                    </div>
                    <div class="item">
                        <SvgIcon class="icon" name="qq" :width="'18px'" :height="'18px'" />
                        <span> 作品采用：</span>
                        <span class="text">窝耶布吉岛</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-comment">
            <h3 class="about-comment-title">评论 </h3>
            <div class="about-comment-close">
                <SvgIcon class="icon" name="sina" :width="'18px'" :height="'18px'" />
                <span>博主关闭了所有页面的评论</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.about-detail {
    background: var(--background);
    border-radius: var(--radius-wrap);
    padding: 15px;
    box-shadow: var(--box-shadow);
    margin-bottom: 15px;

    .about-title {
        font-size: 24px;
        color: var(--main);
        text-shadow: var(--text-shadow);
        text-align: center;
        margin-bottom: 15px;
        word-break: break-word;
    }

    .about-detail-count {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--classC);

        .about-detail-count-information {
            display: flex;
            align-items: center;

            .meta {
                display: flex;
                flex-direction: column;
                height: 35px;
                justify-content: space-between;
                font-size: 12px;

                .author {
                    .link {
                        font-weight: 500;
                        color: var(--theme);
                    }
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    color: var(--minor);
                    line-height: 16px;

                    .line {
                        color: var(--seat);
                        margin: 0 7px;
                        vertical-align: middle;
                    }
                }
            }

            img {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                margin-right: 10px;
                border: 1px solid var(--classA);
                padding: 3px;
                object-fit: cover;
            }

        }

        time {
            font-size: 32px;
            line-height: 42px;
            color: var(--routine);
            user-select: none;
            text-shadow: var(--text-shadow);
            font-family: consolas;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -1.5px;
            left: 0;
            width: 80px;
            height: 3px;
            border-radius: 1.5px;
            background: var(--theme);
        }
    }

    .about-detail-article {
        padding-top: 15px;
        font-size: 15px;
        word-break: break-word;
        color: var(--routine);

        h2 {
            padding: 0 15px;
            color: var(--main);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 18px;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                top: 10%;
                bottom: 10%;
                left: 0;
                width: 4px;
                border-radius: 2px;
                background: var(--theme);
            }
        }

        p {
            line-height: 26px;
            margin-bottom: 18px;
        }

        ul {
            margin-bottom: 18px !important;
            padding-left: 36px;

            li {
                list-style: disc;
                line-height: 26px;

                a {
                    display: inline-block;
                    line-height: 26px;
                    color: var(--theme);
                    position: relative;
                }
            }
        }
    }

    .about-detail-agree {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;

        .agree {
            text-align: center;
            font-size: 12px;
            color: var(--minor);
            user-select: none;

            .icon {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 42px;
                height: 42px;
                border-radius: 50%;
                background: #f56c6c;
                cursor: pointer;
                margin-bottom: 8px;
            }

            .active {
                animation: box_shadow 1s;
                box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
            }
        }
    }

    .about-detail-copyright {
        padding-top: 15px;
        border-top: 1px solid var(--classC);

        .content {
            background: var(--classD);
            padding: 15px;
            border-radius: var(--radius-inner);

            .item {
                color: var(--minor);
                margin-bottom: 5px;
                word-break: break-word;
                line-height: 22px;

                .icon {
                    margin-right: 3px;
                    vertical-align: -4px;
                }

            }
        }
    }
}

.about-comment {
    background: var(--background);
    border-radius: var(--radius-wrap);
    box-shadow: var(--box-shadow);
    padding: 15px;

    .about-comment-title {
        font-weight: 500;
        text-align: center;
        font-size: 24px;
        color: var(--main);
        text-shadow: var(--text-shadow);
        border-bottom: 1px solid var(--classC);
        margin-bottom: 15px;
        padding-bottom: 15px
    }

    .about-comment-close {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--routine);

        .icon {
            fill: var(--routine);
            margin-right: 5px;
        }
    }
}
</style>
