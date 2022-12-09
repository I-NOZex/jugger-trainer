<template>
        <HeadlessMenuItem as="div" class="px-1 py-1" v-slot="{ active }">
            <button
                :class="[
                    active ? 'bg-neutral-900/50 text-dark-primaryText' : ' text-dark-secondaryText',
                    'group flex w-full items-center rounded-lg p-3 text-sm'
                ]"
            >
                <span class="flex-shrink-0 mr-4" v-if="$slots.default">
                    <slot>{{ prefix }}</slot>
                </span>
                <div class="w-full text-left">
                    <p class="text-base font-medium text-center">
                        {{ label }}
                    </p>
                    <p v-if="meta" class="mt-1 text-sm text-gray-400">
                        {{ meta }}
                    </p>
                </div>
            </button>
        </HeadlessMenuItem>
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
        }
    });
</script>
