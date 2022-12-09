<template>
    <component :is="tag" :class="[!transparent && 'bg-white dark:bg-neutral-800', 'rounded-4-xl', 'p-4', 'shadow-md']">
        <slot />
    </component>
</template>

<script setup>
const props = defineProps({
    tag: {
        type: String,
        default: "div"
    },
    transparent: {
        type: Boolean,
        default: false
    }
})
</script>