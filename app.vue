<template>
    <div
        class="flex flex-col md:flex-row min-h-screen bg-light-400 dark:bg-neutral-900 text-gray-800 dark:text-light-800 transition-color duration-350 ease-in"
    >
        <SideBar @click="toggleDarkMode" />
        <div class="main flex flex-col flex-grow md:ml-0">
            <div class="bg-light-400 dark:bg-neutral-900 py-4 sticky top-0">
                <MainHeader />

                    <FilterBar />
            </div>

            <main
                role="main"
                class="main-content flex flex-col flex-grow m-4 mb-20 md:mb-4"
            >
                <NuxtPage />
            </main>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const colorTheme = ref('dark');

    onMounted(() => {
        useHead({
            meta: [
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, maximum-scale=1'
                }
            ],
            bodyAttrs: {
                class: colorTheme.value
            }
        });
    });

    const toggleDarkMode = () => {
        colorTheme.value = colorTheme.value === 'dark' ? 'light' : 'dark';
        useHead({
            bodyAttrs: {
                class: colorTheme.value
            }
        });
    };
</script>
