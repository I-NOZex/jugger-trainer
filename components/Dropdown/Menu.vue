<template>
    <div class="relative grid gap-6 sm:gap-8 p-4">
        <slot>
            <button
                class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                v-for="item in items"
            >
                <span class="flex-shrink-0 text-template-secondary mr-2">
                    {{ item.prefix }}
                </span>

                <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                        {{ item.label }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                        {{ item.meta }}
                    </p>
                </div>
            </button>
        </slot>
    </div>
</template>

<script setup>
    const props = defineProps({
        items: {
            type: Array,
            default: [{}]
        }
    });
</script>
