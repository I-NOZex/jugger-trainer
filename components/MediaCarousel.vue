<template>
    <HeadlessTabGroup as="div">
        <HeadlessTabPanels class="mt-2">
            <HeadlessTabPanel
                v-for="item in items"
                :class="[
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                ]"
            >
                <img
                    v-if="item.type === MEDIA_TYPES.image"
                    :src="item.src"
                    :alt="item.name"
                />

                <iframe
                    v-else-if="item.type === MEDIA_TYPES.video"
                    title="video"
                    :src="item.src"
                />
            </HeadlessTabPanel>
        </HeadlessTabPanels>

        <HeadlessTabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <HeadlessTab
                v-for="item in items"
                as="template"
                v-slot="{ selected }"
            >
                <button
                    :class="[
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                            ? 'bg-white shadow'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    ]"
                >
                    <img :src="item.thumbnail" :alt="item.name" />
                </button>
            </HeadlessTab>
        </HeadlessTabList>
    </HeadlessTabGroup>
</template>

<script>
    export const MEDIA_TYPES = { image: 0, video: 1 };

    export default {
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        setup() {
            return {
                MEDIA_TYPES
            };
        }
    };
</script>
