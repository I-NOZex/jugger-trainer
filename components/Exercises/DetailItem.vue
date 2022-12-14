<template>
    <div class="py-1 sm:grid-cols-2 sm:gap-4" :class="!$slots.default ? 'sm:grid' : ''">
        <dt class="text-sm font-bold col-span-1">{{ label }}</dt>
        <dd class="mt-1 text-sm md:col-span-1 sm:mt-0">
            <slot>{{ value }}</slot>
        </dd>
    </div>
</template>

<script setup>
    defineProps({
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: ''
        }
    });
</script>
