<template>
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
</script>