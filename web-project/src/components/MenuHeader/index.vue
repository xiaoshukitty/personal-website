<script setup lang="ts">
import { MenuOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    isSticky: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['showDrawer'])


const showDrawer = () => {
    emits('showDrawer')
}

</script>

<template>
    <div class="menu" :class="{ 'sticky': props.isSticky }" @click="showDrawer">
        <MenuOutlined style="font-size: 14px;" />
        <span v-if="!isSticky" style="margin-left: 5px;">Menu</span>
    </div>
</template>

<style scoped lang="scss">
.menu {
    position: fixed;
    z-index: 10;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: .1875rem;
    font-size: .75rem;
    text-transform: uppercase;
    color: #fff;
    top: 1.25rem;
    left: 1.25rem;
    display: flex;
    align-items: center;
    padding: .625rem;
    cursor: pointer;
    transition: left .3s ease;

    &:hover {
        opacity: .6;
    }
}

.sticky {
    left: -2px !important;
    font-size: 0;
    background-color: #333;
    transition: all 0.3s ease;
}
</style>
