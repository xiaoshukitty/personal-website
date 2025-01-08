<script setup lang="ts">

import { ref } from 'vue';
import type { DrawerProps } from 'ant-design-vue';


const placement = ref<DrawerProps['placement']>('left');

const props = defineProps({
    openDrawer: {
        type: Boolean,
        default: false
    }
})


const emits = defineEmits(['closeDrawer'])

const closeDrawer = () => {
    emits('closeDrawer')
}

</script>

<template>
    <a-drawer :width="320" title="Menu菜单" :placement="placement" :open="props.openDrawer" @close="closeDrawer">
        <div>
            123
        </div>
    </a-drawer>
</template>

<style scoped lang="scss"></style>
