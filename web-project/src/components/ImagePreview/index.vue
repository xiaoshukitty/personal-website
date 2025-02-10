<template>
    <Teleport to="body">
        <div class="image-preview-container" v-if="visible">
            <div class="image-preview-overlay-box">
                <div class="image-preview-overlay" @click="closePreview">
                    <div class="image-preview-modal" @click.stop>
                        <img v-img-loader="currentImage.src" :src="currentImage.src" alt="Preview"
                            class="image-preview-image" />
                    </div>
                    <!-- 图片切换按钮 -->
                    <div class="btn-operation">
                        <button class="prev-btn" @click.stop="prevImage">←</button>
                        <button class="next-btn" @click.stop="nextImage">→</button>
                    </div>
                    <div class="btn-toolbox">
                        <button class="close-btn" @click="closePreview">
                            <SvgIcon name="search-#ccc" :width="'20px'" :height="'20px'" />
                        </button>
                        <button class="close-btn" @click.stop="playPhoto">
                            <SvgIcon v-if="!isPlay" name="play" :width="'16px'" :height="'16px'" />
                            <SvgIcon v-else name="Pause" :width="'16px'" :height="'16px'" />
                        </button>
                        <button class="close-btn" @click.stop="openPhotoBox">
                            <SvgIcon name="grid" :width="'20px'" :height="'20px'" />
                        </button>
                        <button class="close-btn" @click.stop="closePreview">
                            <SvgIcon name="shut" :width="'20px'" :height="'20px'" />
                        </button>
                    </div>
                    <div class="btn-pic-num">{{ currentImage.id + 1 }} / {{ Object.keys(imgSrcList).length }}</div>
                </div>
            </div>
            <!-- 右侧图片库 -->
            <div class="photo-gallery photo-gallery-phone"
                :style="'display:' + (isPhotoGalleryOpen ? 'block' : 'none')">
                <div class="photo-gallery-list">
                    <div v-for="(item, index) in imgSrcList" :key="index"
                        :class="[currentImageIndex === index ? 'active-photo' : '']" @click="picChange(index)">
                        <img v-img-loader="item?.src" :src="item?.src" alt="">
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useImagePreview } from "../../hooks/imagePreviewProvider"; // 引入图片预览功能
import { message } from "ant-design-vue";
const [messageApi, contextHolder] = message.useMessage();
export default defineComponent({
    name: "ImagePreview",
    setup() {
        // 获取图片预览的状态和方法
        const { visible, imgSrcList, currentImage, currentImageIndex, isPlay, closePreview, nextImage, prevImage, toggleImage, photoPlay } = useImagePreview();

        let activeIndex = ref(0);
        let isPhotoGalleryOpen = ref(false); // 图片库是否打开

        // 打开图片库
        const picChange = (index: number) => {
            currentImageIndex.value = index;
            toggleImage(index);
        }

        // 打开图片库
        const openPhotoBox = () => {
            isPhotoGalleryOpen.value = !isPhotoGalleryOpen.value;
        }

        const playPhoto = () => {
            isPlay.value = !isPlay.value;
            photoPlay(isPlay.value)
        }

        return {
            visible,
            currentImage,
            imgSrcList,
            activeIndex,
            currentImageIndex,
            isPhotoGalleryOpen,
            isPlay,
            openPhotoBox,
            picChange,
            closePreview,
            nextImage,
            prevImage,
            playPhoto,
        };
    },
});
</script>

<style scoped lang="scss">
.image-preview-container {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    display: flex;

    .image-preview-overlay-box {
        position: relative;
        flex: 1;
        height: 100%;

        .image-preview-overlay {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            .image-preview-modal {
                width: 728px;
                // height: 504px;
                position: relative;
                max-width: 90%;
                max-height: 90%;
                background: white;
                padding: 10px;
                border-radius: 8px;

                .image-preview-image {
                    width: 100%;
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

            }


            .btn-operation {
                cursor: pointer;
                color: #ccc;

                .prev-btn {
                    position: absolute;
                    top: calc(50% - 20px);
                    left: 10px;
                    width: 40px;
                    height: 40px;
                    background: rgba(30, 30, 30, .6);
                    border: none;
                    cursor: pointer;
                }

                .next-btn {
                    position: absolute;
                    top: calc(50% - 20px);
                    right: 10px;
                    width: 40px;
                    height: 40px;
                    background: rgba(30, 30, 30, .6);
                    border: none;
                    cursor: pointer;
                }
            }

            .btn-toolbox {
                position: absolute;
                z-index: 99997;
                top: 0;
                right: 0;

                .close-btn {
                    background: rgba(30, 30, 30, .6);
                    border: 0;
                    border-radius: 0;
                    box-shadow: none;
                    cursor: pointer;
                    display: inline-block;
                    height: 44px;
                    margin: 0;
                    padding: 10px;
                    position: relative;
                    transition: color .2s;
                    vertical-align: top;
                    visibility: inherit;
                    width: 44px;
                    color: #ccc;
                }
            }

            .btn-pic-num {
                position: absolute;
                z-index: 99997;
                top: 10px;
                left: 10px;
                color: #ccc;
            }
        }
    }


    .photo-gallery {
        position: relative;
        background: #ddd;
        bottom: 0;
        display: none;
        margin: 0;
        padding: 2px 2px 4px;
        // position: absolute;
        right: 0;
        top: 0;
        width: 212px;
        z-index: 99995;

        .photo-gallery-list {
            font-size: 0;
            height: 100%;
            list-style: none;
            margin: 0;
            overflow-x: hidden;
            overflow-y: auto;
            padding: 0;
            position: absolute;
            position: relative;
            white-space: nowrap;
            width: 100%;

            div {
                backface-visibility: hidden;
                background-color: rgba(0, 0, 0, .1);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                cursor: pointer;
                float: left;
                height: 75px;
                margin: 2px;
                max-height: calc(100% - 8px);
                max-width: calc(50% - 4px);
                outline: none;
                overflow: hidden;
                padding: 0;
                position: relative;
                width: 100px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                &::before {
                    border: 6px solid #ff5268;
                    bottom: 0;
                    content: "";
                    left: 0;
                    opacity: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    transition: all .2s cubic-bezier(.25, .46, .45, .94);
                    z-index: 99991;
                }
            }

            .active-photo::before {
                opacity: 1 !important;
            }
        }
    }
}
</style>