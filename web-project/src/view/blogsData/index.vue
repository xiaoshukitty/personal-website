<!-- <template>
    <Carousel :images="imageList" :width="600" :height="400" :interval="3000" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Carousel from './components/index.vue'

export default defineComponent({
    components: {
        Carousel
    },
    data() {
        return {
            imageList: [
                'https://picsum.photos/800/300?random=1',
                'https://picsum.photos/800/300?random=2',
                'https://picsum.photos/800/300?random=3'
            ]
        }
    }
})
</script> -->

<!-- 图片瀑布流 -->
<template>
    <div>
        <Waterfall :images="images" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Waterfall from "../../components/Waterfall/index.vue";

export default defineComponent({
    name: "App",
    components: {
        Waterfall,
    },
    setup() {
        const images = ref([
            { id: 1, src: "https://img2.baidu.com/it/u=2616208871,393006875&fm=253&fmt=auto&app=138&f=JPEG?w=608&h=973", width: 300, height: 400 },
            { id: 2, src: "https://img2.baidu.com/it/u=1532087881,2389186498&fm=253&fmt=auto?w=500&h=500", width: 300, height: 500 },
            { id: 3, src: "https://t12.baidu.com/it/u=156193264,203812701&fm=30&app=106&f=JPEG?w=640&h=800&s=B83B6091CE035F4F32B86CD3030010BA", width: 300, height: 350 },
            { id: 4, src: "https://wx1.sinaimg.cn/mw690/5ee578f6gy1hswehsh17gj20u014047y.jpg", width: 300, height: 600 },
            { id: 5, src: "https://t10.baidu.com/it/u=1576508285,204896177&fm=30&app=106&f=JPEG?w=640&h=800&s=652A6EFBDE24C0CE8C34A05A0300C0D4", width: 300, height: 450 },
            { id: 6, src: "https://wx1.sinaimg.cn/orj480/6eb0ac52gy1hejp6d1wptj20u01hcjwi.jpg", width: 300, height: 300 },
        ]);

        return {
            images,
        };
    },
});
</script>