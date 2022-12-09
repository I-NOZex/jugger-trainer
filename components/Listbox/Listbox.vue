<template>
    <HeadlessListbox as="div" class="relative flex-1" v-slot="{ open }">
        <HeadlessListboxButton
            class="bg-white dark:bg-neutral-800 rounded-4-xl p-4 shadow-sm text-dark-primaryText py-2 inline-flex w-full items-center h-full text-sm"
        >
            <span class="mr-2" v-if="$slots.prefix"
                ><slot name="prefix">{{ prefix }}</slot></span
            >
            <span class="basis-full text-left <sm:truncate">{{ label  }}</span>
            <svg
                class="h-6 w-6 transform transition-transform duration-200 ease-in-out"
                :class="open ? 'rotate-180' : 'rotate-0'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                />
            </svg>
        </HeadlessListboxButton>
        <transition
            enter-active-class="transform transition  duration-500 ease-custom"
            enter-from-class="-translate-y-4 scale-y-0 opacity-0"
            enter-to-class="translate-y-0 scale-y-100 opacity-100"
            leave-active-class="transform transition duration-300 ease-custom"
            leave-from-class="translate-y-0 scale-y-100 opacity-100"
            leave-to-class="-translate-y-4 scale-y-0 opacity-0"
        >
            <slot />
        </transition>
    </HeadlessListbox>
</template>

<script setup>
    const props = defineProps({
        label: {
            type: String,
            required: true
        }     
    });
</script>

<style>
    .ease-custom {
        transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
    }
</style>
