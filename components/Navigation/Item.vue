<template>
    <NuxtLink
        :to="to"
        exactActiveClass="text-primary !border-primary !bg-pos-100"
        class="text-left inline-flex <md:flex-1 <md:justify-center text-dark-secondaryText hover:text-dark-primaryText px-8 py-2 uppercase md:border-r-2 border-transparent hover:border-primary transition-all ease-in-out duration-500 bg-gradient-to-r from-dark-secondaryBg to-green-600/50 via-green-900 bg-no-repeat bg-repeat-y bg-size-200 bg-pos-n100 hover:bg-pos-100 <md:bg-gradient-to-t <md:border-t-2 <md:transition-none <md:-mt-2px <md:text-center"
    >
        <span class="mr-2" v-if="$slots.prefix"><slot name="prefix" /></span>
        <span class="<sm:hidden">
            <slot />
        </span>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        to: {
            type: String,
            default: '/'
        }
    });
</script>
