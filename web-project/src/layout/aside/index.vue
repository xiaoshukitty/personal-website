<script setup lang="ts">
import TagCloud from './components/tagCloud/index.vue';

const tags = [
    { name: '01. 人员招聘难', color: '#006666' },
    { name: '02. 人才复制难', color: '#009999' },
    { name: '03. 门店管理难', color: '#333333' },
    { name: '04. 客户引流难', color: '#660099' },
    { name: '05. 客户不稳定', color: '#990066' },
    { name: '06. 技术门槛高', color: '#CC0099' },
    { name: '07. 营销策划能力弱', color: '#CC3300' },
    { name: '08. 行业内卷利润低', color: '#FF9900' },
    { name: '09. 产品严重同质化', color: '#006633' },
]
</script>

<template>
    <aside class="shu-aside">
        <section class="shu-aside-section author">
            <img class="author-img" src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="">
            <div class="user">
                <img class="user-image" src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"
                    alt="">
                <a href="" class="link">xiaoshu</a>
                <p class="motto joe_motto">本是椿花楸月、奈何北冥有鱼 🍂🍃</p>
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
                    <a href="" class="link">君不见，黄河之水天上来，奔流到海不复回。</a>
                    <SvgIcon class="icon" name="link" :width="'16px'" :height="'16px'" />
                </li>
            </ul>
        </section>
        <tag-cloud :tags="tags" width="200" height="200" radius="100"></tag-cloud>
    </aside>
</template>

<style scoped lang="scss">
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
            background: url('../../assets/images/snowing.gif') no-repeat;
            background-size: cover;
            z-index: 3;
            pointer-events: none;
        }

        &:hover::after {
            display: block;
        }
    }
}
</style>
