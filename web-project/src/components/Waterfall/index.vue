<template>
    <div class="waterfall-container" ref="containerRef">
        <div class="column" v-for="(column, index) in columns" :key="index">
            <div v-for="(item, index) in column" :key="item.id" class="waterfall-item">
                <img v-img-loader="item.src" :alt="'Image ' + item.id" :style="{ height: item.height + 'px' }"
                    @load="onImageLoad(item, $event)" @click="previewImage(index)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, onMounted } from "vue";
import { useImagePreview } from "../../hooks/imagePreviewProvider";
export default defineComponent({
    name: "Waterfall",
    props: {
        images: {
            type: Array as () => Array<{
                id: number;
                src: string;
                width: number;
                height: number;
            }>,
            required: true,
        },
    },
    setup(props) {
        const containerRef = ref<HTMLDivElement | null>(null);
        const { openPreview } = useImagePreview();
        // 两列的数据
        const columns = reactive<
            Array<Array<{ id: number; src: string; height: number }>>
        >([[], []]);

        // 动态分配图片
        const distributeImages = () => {
            columns[0] = [];
            columns[1] = [];
            props.images.forEach((image) => {
                const [col1Height, col2Height] = columns.map((col) =>
                    col.reduce((sum, img) => sum + img.height, 0)
                );

                // 分配到当前高度较低的列
                if (col1Height <= col2Height) {
                    columns[0].push(image);
                } else {
                    columns[1].push(image);
                }
            });
        };

        // 图片加载完成后，动态调整高度
        const onImageLoad = (
            item: { id: number; src: string; width: number; height: number },
            event: Event
        ) => {
            const img = event.target as HTMLImageElement;
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            item.height = Math.floor(
                containerRef.value!.offsetWidth / 2 / aspectRatio
            );
            distributeImages(); // 重新分配
        };

        //使用全局图片预览组件
        const previewImage = (i: number) => {
            console.log("i", i);

            openPreview(props.images, 0); // 触发全局图片预览
        };

        watch(
            () => props.images,
            () => {
                distributeImages();
            },
            { deep: true, immediate: true }
        );

        onMounted(() => {
            distributeImages();
        });

        return {
            columns,
            onImageLoad,
            containerRef,
            previewImage,
        };
    },
});
</script>

<style scoped>
.waterfall-container {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

.column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.waterfall-item img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    display: block;
}
</style>
