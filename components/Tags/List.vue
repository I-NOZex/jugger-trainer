<template>
    <div class="inline-flex gap-1 flex-wrap">
        <Chip v-for="tag in tags">
            {{ tag }}
        </Chip>
    </div>
</template>

<script setup>
    const props = defineProps({
        tags: {
            type: Array,
            default: []
        }
    });
</script>
