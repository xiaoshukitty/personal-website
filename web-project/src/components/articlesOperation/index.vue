<script setup lang="ts">
import { ref } from 'vue';


let isIcon = ref(false)

</script>

<template>
    <div class="articles-operation">
        <div class="about-detail-agree">
            <div class="agree">
                <div class="icon active">

                </div>
            </div>
        </div>
        <!-- 标题操作 -->
        <div class="about-detail-operate">
            <div class="about-detail-operate-tags">
                <a href="#">kinngyo</a>
            </div>
            <div :class="['about-detail-operate-share', { 'active': isIcon }]">
                <SvgIcon class="icon" name="share" :width="'26px'" :height="'26px'" @mouseover="isIcon = true" />
                <div class="reach" @mouseleave="isIcon = false">
                    <a href="#">
                        <SvgIcon class="icon" name="qq" :width="'30px'" :height="'30px'" />
                    </a>
                    <a href="#">
                        <SvgIcon class="icon" name="wechat" :width="'30px'" :height="'30px'" />
                    </a>
                    <a href="#">
                        <SvgIcon class="icon" name="sina" :width="'30px'" :height="'30px'" />
                    </a>
                </div>
            </div>
        </div>
        <!-- 文章信息 -->
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
        <!-- 相关推荐 -->
        <div class="about-detail-related">
            <div class="about-detail-related-title">相关推荐</div>
            <div class="about-detail-related-content">
                <a class="item" href="#" v-for="i in 4" :key="i">
                    <img src="https://q3.itc.cn/q_70/images03/20241013/d3a77cba5a074744905d0c49aa480487.jpeg" alt="">
                    <h6>金鱼kinngyo---迷路的黑猫-76P-03-18</h6>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.articles-operation {
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

    .about-detail-operate {
        margin-bottom: 15px;
        color: var(--routine);
        display: flex;
        align-items: center;

        .about-detail-operate-tags {
            flex-shrink: 0;
            flex: 1;
            display: flex;
            align-items: center;
            overflow-x: auto;

            a {
                flex-shrink: 0;
                position: relative;
                margin-right: 10px;
                font-size: 12px;
                background-color: var(--classD);
                color: var(--minor);
                border: 1px solid var(--classD);
                padding-right: 8px;
                padding-left: 29px;
                height: 26px;
                line-height: 26px;
                border-radius: 13px;
                max-width: 125px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: border 0.25s, color 0.25s;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 24px;
                    height: 24px;
                    background: var(--background);
                    border-radius: 50%;
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 12px;
                    transform: translate(-50%, -50%);
                    width: 12px;
                    height: 12px;
                    background: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiPjxwYXRoIGQ9Ik02ODIuNjY3IDM1Ni44NDhIMzI1LjgxOGEzOC43ODggMzguNzg4IDAgMCAxLTM4Ljc4OC0zOC43ODcgMzguNzg4IDM4Ljc4OCAwIDAgMSAzOC43ODgtMzguNzg4aDM1Ni44NDlhMzguNzg4IDM4Ljc4OCAwIDAgMSAzOC43ODggMzguNzg4IDM4Ljc4OCAzOC43ODggMCAwIDEtMzguNzg4IDM4Ljc4N3oiIGZpbGw9IiM1NGI1ZGIiLz48cGF0aCBkPSJNOTA3LjYzNiAxMDI0aC0xNS41MTVMNTEyIDgwNi43ODhsLTM4MC4xMjEgMjA5LjQ1NEg5My4wOWE2Mi4wNiA2Mi4wNiAwIDAgMS0xNS41MTUtMzEuMDNWMTE2LjM2NEExMTYuMzY0IDExNi4zNjQgMCAwIDEgMTkzLjkzOSAwaDYzNi4xMjJhMTE2LjM2NCAxMTYuMzY0IDAgMCAxIDExNi4zNjMgMTE2LjM2NHY4NjguODQ4YTYyLjA2IDYyLjA2IDAgMCAxLTE1LjUxNSAzMS4wM3pNNTEyIDcyMS40NTVoMjMuMjczbDMzMy41NzUgMTg2LjE4MVYxMTYuMzY0YTM4Ljc4OCAzOC43ODggMCAwIDAtMzguNzg3LTM4Ljc4OEgxOTMuOTM5YTM4Ljc4OCAzOC43ODggMCAwIDAtMzguNzg3IDM4Ljc4OHY3OTkuMDNsMzQxLjMzMy0xODYuMTgyeiIgZmlsbD0iIzU0YjVkYiIvPjwvc3ZnPg==) no-repeat;
                    background-size: 100% 100%;
                }
            }
        }

        .about-detail-operate-share {
            position: relative;
            margin-left: 15px;

            .icon {
                cursor: pointer;
                transition: transform 0.35s;

                &:hover {
                    transform: rotate(360deg) scale(1.25);
                }
            }

            .reach {
                position: absolute;
                z-index: 10;
                top: 34px;
                left: -1px;
                display: flex;
                flex-direction: column;
                visibility: hidden;
                opacity: 0;
                transform: translateY(25px);
                transition: visibility 0.25s, transform 0.25s, opacity 0.25s;

                a {
                    margin-bottom: 5px;
                }
            }
        }

        .active {
            .reach {
                opacity: 1;
                transform: translateY(0);
                visibility: visible;
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

    .about-detail-related {
        padding-top: 15px;

        .about-detail-related-title {
            position: relative;
            font-size: 18px;
            font-weight: 500;
            color: var(--main);
            padding-left: 15px;
            margin-bottom: 15px;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                width: 4px;
                border-radius: 2px;
                background: var(--theme);
            }
        }

        .about-detail-related-content {
            display: grid;
            gap: 15px;
            grid-template-columns: repeat(4, 1fr);

            a {
                overflow: hidden;
                border-radius: var(--radius-inner);
                transition: transform 0.25s, box-shadow 0.25s;

                img {
                    width: 100%;
                    height: 120px;
                    object-fit: cover;
                }

                h6 {
                    height: 32px;
                    line-height: 32px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    background: var(--classD);
                    text-align: center;
                    font-size: 13px;
                    color: var(--minor);
                    padding: 0 12px;
                }
            }
        }
    }
}
</style>
