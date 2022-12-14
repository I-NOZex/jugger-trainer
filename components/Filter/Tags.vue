<template>
    <RoundedBlock class="py-2 flex flex-grow basis-full lg:basis-auto">
        <Chip class="capitalize mr-1" is-active> All </Chip>

        <div
            v-show="!isReachStart"
            class="inline-flex items-center justify-start w-8 pl-0.5 -mr-8 z-10 bg-gradient-to-r from-dark-secondaryBg via-dark-secondaryBg to-transparent"
        >
            <button
                class="inline-flex items-center justify-center p-1 rounded-full transition-colors duration-150 hover:bg-dark-primaryBg/60"
                @click="prev"
            >
                <Icon name="ic:round-keyboard-arrow-left" />
            </button>
        </div>

        <div class="inline-flex relative flex-grow">
            <div
                ref="hzRef"
                class="inline-flex gap-1 absolute overflow-x-auto w-full whitespace-nowrap scrollbar-hide"
            >
                <TagsInlineList
                    :tags="[
                        'team-work',
                        'coordination',
                        'fitness',
                        'precission',
                        'team-work',
                        'team-work',
                        'coordination',
                        'fitness',
                        'precission',
                        'fitness',
                        'precission',
                        'team-work',
                        'team-work',
                        'coordination',
                        'fitness',
                        'precission',
                        'team-work',
                        'team-work',
                        'coordination',
                        'fitness',
                        'precission',
                        'fitness',
                        'precission',
                        'team-work',
                        'team-work',
                        'coordination',
                        'fitness',
                        'precission',
                        'team-work'
                    ]"
                />
            </div>
        </div>
        <div
            v-show="!isReachEnd"
            class="inline-flex items-center justify-end w-8 pl-0.5 -ml-8 z-10 bg-gradient-to-l from-dark-secondaryBg via-dark-secondaryBg to-transparent"
        >
            <button
                class="inline-flex items-center justify-center p-1 rounded-full transition-colors duration-150 hover:bg-dark-primaryBg/60"
                @click="next"
            >
                <Icon name="ic:round-keyboard-arrow-right" />
            </button>
        </div>
    </RoundedBlock>
</template>

<script setup>
    import { useConveyer } from '@egjs/vue-conveyer';

    const {
        ref: hzRef,
        scrollIntoView,
        isReachStart,
        isReachEnd
    } = useConveyer({
        useSideWheel: true
    });

    const props = defineProps({
        tags: {
            type: Array,
            default: []
        }
    });

    const prev = () => {
        scrollIntoView('start', {
            align: 'end',
            duration: 500,
            excludeStand: true
        });
    };

    const next = () => {
        scrollIntoView('end', {
            align: 'start',
            duration: 500,
            excludeStand: true
        });
    };
</script>
