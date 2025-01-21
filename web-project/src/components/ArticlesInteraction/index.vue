<script setup lang="ts">
</script>

<template>
    <div class="articles-interaction">
        <ul class="about-pagination">
            <li class="about-pagination-item">
                <a href="#">上一篇</a>
            </li>
            <li class="about-pagination-item">
                <a href="#">下一篇</a>
            </li>
        </ul>
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
.articles-interaction {
    .about-pagination {
        display: flex;
        justify-content: space-between;

        .about-pagination-item {
            margin-bottom: 15px;

            a {
                display: block;
                height: 32px;
                line-height: 32px;
                padding: 0 15px;
                color: #fff;
                border-radius: 3px;
                background: var(--theme);
                font-size: 12px;
                box-shadow: var(--box-shadow);

                &:hover {
                    animation: pulse 1s;
                    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
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
}


@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 var(--theme);
    }
}
</style>
