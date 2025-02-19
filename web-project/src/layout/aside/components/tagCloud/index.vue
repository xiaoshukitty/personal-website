<template>
    <section class="section tag">
        <div class="section-title">
            <SvgIcon class="icon" name="lable" :width="'18px'" :height="'18px'" />
            <span>标签云</span>
        </div>
        <div class="section-contain">
            <div style="width: 220px; height: 220px;">
                <div class="tagcloud-wrap">
                    <div class="tagcloud"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import TagCloud from 'TagCloud'

const texts = [
    'JavaScript', 'CSS', 'HTML', 'Vue', 'React',
    'TypeScript', 'Node.js', 'Python', 'Java',
    'Git', 'Docker', 'MongoDB', 'MySQL'
]

let tagCloud: any = null

onMounted(() => {
    const container = '.tagcloud'
    const options = {
        radius: 110,      // 将半径改小，原来是 230
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: true,
        useContainerInlineStyles: true,
        containerClass: 'tagcloud-container'
    }

    tagCloud = TagCloud(container, texts, options)
})

onBeforeUnmount(() => {
    // 清理实例，避免内存泄漏
    if (tagCloud) {
        tagCloud.destroy()
    }
})
</script>

<style lang="scss" scoped>
.section {
    position: relative;
    width: 250px;
    margin-bottom: 15px;
    border-radius: var(--radius-wrap);
    box-shadow: var(--box-shadow);
    overflow: hidden;

    .section-title {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--classC);
        font-size: 16px;
        font-weight: 500;
        height: 45px;
        line-height: 45px;
        padding: 0 15px;
        color: var(--main);

        .icon {
            width: 18px;
            height: 18px;
            margin-right: 8px;
            fill: var(--main);
        }
    }

    .section-contain {
        position: relative;
        padding: 15px;


        .tagcloud-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 220px;

            .tagcloud {
                width: 220px !important;
                height: 220px !important;
                font-size: 16px;
                // font-weight: bold;
                color: pink;
                cursor: pointer;

                // 标签样式
                span {
                    cursor: pointer;
                    padding: 5px;

                    &:hover {
                        color: pink;
                    }
                }
            }
        }

        // 自定义球体颜色
        :deep(.tagcloud--item) {
            color: pink;

            &:hover {
                color: #ff3300;
            }
        }
    }
}

.tag {
    background: var(--background);
}
</style>
