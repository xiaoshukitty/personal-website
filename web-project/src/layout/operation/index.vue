<script setup lang="ts">

const props = defineProps({
    scrollPosition: {
        type: Number,
        default: 0
    }
})

const emits = defineEmits(['scrollOneScreen'])

const scrollOneScreen = (id: string) => {
    emits('scrollOneScreen', id)
}

</script>

<template>
    <div class="shu-action">
        <div :class="['shu-action-item scroll', { 'scroll-active': props.scrollPosition > 280 }]"
            @click="scrollOneScreen('wrapper')">
            <SvgIcon name="top" :width="'16px'" :height="'16px'" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.shu-action {
    position: fixed;
    bottom: 90px;
    right: 30px;
    z-index: 333;

    .shu-action-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: var(--background);
        border-radius: 50%;
        cursor: pointer;
        margin-top: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    .scroll {
        visibility: hidden;
        transform: scale(0);
        transition: visibility 0.35s, transform 0.35s;
    }

    .scroll-active {
        visibility: visible !important;
        transform: scale(1) !important;
    }
}
</style>
