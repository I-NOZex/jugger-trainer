<template>
    <Chip v-for="tag in tags">
        {{ tag }}
    </Chip>
</template>

<script setup>
    const props = defineProps({
        tags: {
            type: Array,
            default: []
        }
    });
</script>
