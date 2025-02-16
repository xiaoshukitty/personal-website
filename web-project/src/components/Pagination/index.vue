<script setup>
import { computed } from 'vue';

const props = defineProps({
    currentPage: Number,  // 当前页码
    totalPages: Number    // 总页数
})

const emit = defineEmits(['page-change'])

// 生成可见页码数组
const visiblePages = computed(() => {
    return generatePageNumbers(props.currentPage, props.totalPages)
})

// 智能分页算法
const generatePageNumbers = (current, total) => {
    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1)
    }

    const pages = [1]

    // 处理前段页码
    if (current <= 3) {
        for (let i = 2; i <= Math.min(4, total); i++) {
            pages.push(i)
        }
        pages.push('...')
    }
    // 处理后段页码
    else if (current >= total - 2) {
        pages.push('...')
        for (let i = total - 3; i <= total; i++) {
            if (i > 1) pages.push(i)
        }
    }
    // 处理中间页码
    else {
        pages.push('...')
        for (let i = current - 1; i <= current + 1; i++) {
            pages.push(i)
        }
        pages.push('...')
    }

    // 确保添加末页
    if (!pages.includes(total)) {
        pages.push(total)
    }

    return pages
}

// 页码切换处理
const handlePageChange = (page) => {
    if (
        page < 1 ||
        page > props.totalPages ||
        page === props.currentPage
    ) return

    emit('page-change', page)
}
</script>

<template>
    <ul class="pagination">
        <!-- 上一页按钮 -->
        <li @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 1">
            <SvgIcon name="skip-left-line" :width="'20px'" :height="'20px'" />
        </li>
        <!-- 动态页码生成 -->
        <template v-for="(page, index) in visiblePages" :key="index">
            <!-- 省略号处理 -->
            <li v-if="page === '...'" class="ellipsis">...</li>
            <!-- 页码按钮 -->
            <li v-else @click="handlePageChange(page)" :class="{ active: page === currentPage }">
                {{ page }}
            </li>
        </template>

        <!-- 下一页按钮 -->
        <li @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages">
            <SvgIcon name="skip-right-line" :width="'20px'" :height="'20px'" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
.pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 15px;
    cursor: pointer;

    li {
        display: flex;
        align-items: center;
        height: 32px;
        color: var(--main);
        padding: 0 15px;
        background: var(--background);
        border-radius: 2px;
        transition: background 0.35s, color 0.35s;
        user-select: none;
        margin-left: 5px;
        box-sizing: border-box;

        &:hover {
            background: var(--theme);
            color: #fff;
        }

    }

    .active {
        background: var(--theme);
        font-weight: 500;
        color: #fff;
    }

    .disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
}
</style>