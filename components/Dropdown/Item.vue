<template>
    <button type="button" class="-m-3 flex items-start rounded-lg p-3 hover:bg-neutral-900/50 text-current" >
        <span class="flex-shrink-0 mr-4" v-if="$slots.default">
            <slot>{{ prefix }}</slot>
        </span>

        <div class="w-full">
            <p class="text-base font-medium text-center">
                {{ label }}
            </p>
            <p v-if="meta" class="mt-1 text-sm text-gray-400 text-left">
                {{ meta }}
            </p>
        </div>
    </button>
</template>

<script setup>
defineProps({
    prefix: {
        type: [Object, String],
        default: ''
    },
    label: {
        type: String,
        required: true
    },
    meta: {
        type: [String],
        default: ''
    },  
})
</script>