<template>
    <button :class="`text-xs inline-flex flex-shrink-0 flex- items-center font-bold leading-sm lowercase px-2 py-1 rounded border border-dark-secondaryText/10 ${ isActive ? 'bg-green-500' :'bg-white dark:bg-dark-primaryBg/10' }`">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    },
})
</script>
