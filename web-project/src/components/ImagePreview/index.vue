<template>
    <Teleport to="body">
        <div v-if="visible" class="image-preview-overlay" @click="closePreview">
            <div class="image-preview-modal" @click.stop>
                <img v-img-loader="currentImage.src" alt="Preview" class="image-preview-image" />

                <!-- 图片切换按钮 -->
                <button class="prev-btn" @click="prevImage">←</button>
                <button class="next-btn" @click="nextImage">→</button>

                <button class="close-btn" @click="closePreview">X</button>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useImagePreview } from "../../hooks/imagePreviewProvider"; // 引入图片预览功能

export default defineComponent({
    name: "ImagePreview",
    setup() {
        // 获取图片预览的状态和方法
        const { visible, currentImage, closePreview, nextImage, prevImage } = useImagePreview();

        return {
            visible,
            currentImage,
            closePreview,
            nextImage,
            prevImage,
        };
    },
});
</script>

<style scoped>
.image-preview-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.image-preview-modal {
    width: 728px;
    height: 504px;
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background: white;
    padding: 10px;
    border-radius: 8px;
}

.image-preview-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.close-btn,
.prev-btn,
.next-btn {
    position: absolute;
    top: 10px;
    background: rgba(255, 255, 255, 0.6);
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
}

.close-btn {
    right: -10px;
}

.prev-btn {
    left: 10px;
}

.next-btn {
    right: 10px;
}
</style>