<script setup lang="ts">
import { watch, ref } from 'vue';
import ArticlesList from '../../components/ArticlesList/index.vue';
import { useRoute } from 'vue-router';

const isFlag = ref<boolean>(true);
let activeIndex = ref<number>(0);
let $route = useRoute();


watch(() => $route.query.index, (newVal, oldVal) => {
    isFlag.value = false;
    if (newVal !== oldVal) {
        activeIndex.value = Number($route.query.index);
        isFlag.value = true
    }
})


</script>

<template>
    <div class="category-articles" v-if="isFlag">
        <ArticlesList :activeIndex="activeIndex" />
    </div>
</template>

<style scoped lang="scss">
.category-articles {
    border-radius: var(--radius-wrap);
    padding: 0 15px;
    background: var(--background);
    box-shadow: var(--box-shadow);
}
</style>
