<script setup lang="ts">
import { ref, watch } from 'vue';

const pageSize = ref(20);
const current1 = ref(3);


watch(pageSize, () => {
    console.log('pageSize', pageSize.value);
});
watch(current1, () => {
    console.log('current', current1.value);
});

const onShowSizeChange = (current: number, pageSize: number) => {
    console.log(current, pageSize);
};

</script>

<template>
    <div class="wrapper" id="wrapper">
        <div class="articles">
            <div class="item" v-for="n in 10" :key="n">
                <h2>
                    <a href="">Java 提取和删除照片图片 Exif GPS 等隐私信息</a>
                </h2>
                <a class=" item-abstract" href="">照片图片 Exif 通过手机相机或者数码相机拍摄的照片都带有 Exif 元数据信息，比如下面这张照片： 它的 Exif
                    信息为： 1Root: 2 ImageWi</a>
                <div class="item-meta">
                    2020-06-21 &nbsp; · &nbsp;
                    <a href="" class="item-hover">88250</a>
                    &nbsp; · &nbsp;
                    <a href="" class="item-tag">Exif&nbsp;</a>
                    <a href="" class="item-tag">Java&nbsp;</a>
                    <a href="" class="item-tag">图片处理&nbsp;&nbsp;&nbsp;</a>
                    <a href="" class="item-tag">
                        <span>0</span>
                        评论
                    </a>&nbsp;&nbsp;
                    <a href="" class="item-tag">
                        <span>2</span>
                        浏览
                    </a>
                </div>
            </div>
            <div class="pagination">
                <a-pagination :show-size-changer="false" v-model:current="current1" v-model:pageSize="pageSize"
                    :total="500" @showSizeChange="onShowSizeChange" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    position: relative;
    z-index: 9;
    max-width: 56.25rem;
    margin: 0 auto;
    padding: 2.5rem .625rem;

    .articles {
        margin: 0 auto;
        box-shadow: 8px 14px 38px rgba(39, 44, 49, .06), 1px 3px 8px rgba(39, 44, 49, .03);
        background-color: rgba(255, 255, 255, .9);
        border-radius: 5px;

        .item {
            border-bottom: 1px solid #f0f2f7;
            padding: 20px;

            h2 {
                a {
                    color: #15171a;
                    font-size: 24px;
                    line-height: 24px;
                }
            }

            .item-abstract {
                display: block;
                line-height: 24px;
                color: #15171a;
                font-size: 16px;
                margin: 10px 0;
            }

            .item-meta {
                .item-tag {
                    display: inline-block;
                    color: #738a94;
                    line-height: 14px;
                    font-weight: 500;
                    letter-spacing: .5px;
                    text-transform: uppercase;
                }

                .item-hover:hover {
                    text-decoration: underline;
                }
            }
        }

        .pagination {
            text-align: center;
            padding: 40px 0;
        }
    }
}
</style>
