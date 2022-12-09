<template>
    <nav class="md:py-4 flex <md:flex-row flex-col overflow-hidden">
        <NavigationItem to="/">
            <template #prefix>
                <Icon
                    width="24"
                    height="24"
                    aria-hidden="true"
                    name="cil:home"
                />
            </template>
            <span
                class="transform transition-all inline-flex overflow-clip origin-top-left"
                :class="collapse ? 'scale-x-0' : 'scale-x-100'"
            >
                Home</span
            >
        </NavigationItem>
        <NavigationItem to="/favorites">
            <template #prefix>
                <Icon
                    width="24"
                    height="24"
                    aria-hidden="true"
                    name="ic:round-favorite-border"
                />
            </template>
            <span
                class="transform transition-all inline-flex overflow-clip origin-top-left"
                :class="collapse ? 'scale-x-0' : 'scale-x-100'"
            >
                Favorites</span
            >
        </NavigationItem>
        <NavigationItem to="/new">
            <template #prefix>
                <Icon
                    width="24"
                    height="24"
                    aria-hidden="true"
                    name="cil:plus"
                />
            </template>
            <span
                class="transform transition-all inline-flex overflow-clip origin-top-left"
                :class="collapse ? 'scale-x-0' : 'scale-x-100'"
            >
                Create</span
            >
        </NavigationItem>
    </nav>
</template>

<script setup>
    const props = defineProps({
        collapse: {
            type: Boolean,
            default: false
        }
    });
</script>
