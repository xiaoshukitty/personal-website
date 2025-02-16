<script setup lang="ts">
import { watch, ref } from 'vue';
import ArticlesList from '../../components/ArticlesList/index.vue';
import Pagination from '../../components/Pagination/index.vue'
import { useRoute } from 'vue-router';

const isFlag = ref<boolean>(true);
let activeIndex = ref<number>(0);
let $route = useRoute();
let currentPage = ref<number>(1);

watch(() => $route.query.index, (newVal, oldVal) => {
    isFlag.value = false;
    if (newVal !== oldVal) {
        activeIndex.value = Number($route.query.index);
        isFlag.value = true
    }
})

const handlePageChange = (page: number) => {
    console.log(page);
    currentPage.value = page;
}


</script>

<template>
    <div class="category-box">
        <div class="category-articles" v-if="isFlag">
            <ArticlesList :activeIndex="activeIndex" />

        </div>
        <Pagination :current-page="currentPage" :total-pages="100" @page-change="handlePageChange" />
    </div>

</template>

<style scoped lang="scss">
.category-box {
    .category-articles {
        border-radius: var(--radius-wrap);
        padding: 0 15px;
        background: var(--background);
        box-shadow: var(--box-shadow);
    }
}
</style>
