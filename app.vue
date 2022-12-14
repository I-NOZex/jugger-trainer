<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
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
