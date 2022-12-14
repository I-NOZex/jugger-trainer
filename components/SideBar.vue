<template>
    <aside
        class="sidebar fixed md:relative bottom-0 md:bottom-auto md:h-screen md:sticky md:top-0 md:p-4"
    >
        <RoundedBlock
            class="border-t-2 grid transition-all relative border-gray-500/30 w-screen md:border-0 rounded-none md:rounded-4-xl p-0 md:py-4 shadow-sm md:h-full overflow-hidden"
            :class="isCollapsed ? 'md:w-22' : 'md:w-60'"
        >
            <!-- navigation -->

            <Navigation :collapse="isCollapsed" />
            <div
                class="<md:hidden md:py-4 overflow-hidden place-self-end justify-self-start"
            >
                <button
                    @click="isCollapsed = !isCollapsed"
                    class="text-left inline-flex text-dark-secondaryText px-8 py-2 uppercase"
                >
                    <span class="transition-colors rounded-full hover:bg-dark-primaryBg/60 p-1 -m-1">
                        <Icon
                            width="24"
                            height="24"
                            aria-hidden="true"
                            name="ic:outline-keyboard-arrow-left"
                            class="transform transition-transform scale-150 caret-transparent"
                            :class="isCollapsed ? ' rotate-180' : ' rotate-0'"
                        />
                    </span>
                    <span
                        class="transform transition-all inline-flex overflow-clip origin-top-left ml-2"
                        :class="isCollapsed ? 'scale-x-0' : 'scale-x-100'"
                    >
                        Collapse
                    </span>
                </button>
            </div>
        </RoundedBlock>
    </aside>
</template>

<script setup>
    const isCollapsed = ref(true);
</script>

<style scoped></style>
