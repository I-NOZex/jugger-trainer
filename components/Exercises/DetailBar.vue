<template>
    <MediaCarousel :items="items" />

    <div class="">
        <dl class="">
            <ExercisesDetailItem label="Physical difficulty:" value="Medium" />
            <ExercisesDetailItem label="Cognitive difficulty:" value="Hard" />
            <ExercisesDetailItem label="Number of players:" value="5" />
            <ExercisesDetailItem
                label="Rating:"
                value="4.3 · (Add your rating) "
            />
            <ExercisesDetailItem label="Items:">
                <div class="mt-1">
                    <TagsList
                        :tags="[
                            'team-work',
                            'coordination',
                            'fitness',
                            'precission',
                            'coordination',
                            'fitness',
                            'precission',
                        ]"
                    />
                </div>
            </ExercisesDetailItem>
            <ExercisesDetailItem label="Tags:">
                <div class="mt-1 ">
                    <TagsList
                        :tags="[
                            'team-work',
                            'coordination',
                            'fitness',
                            'precission',
                            'team-work',
                            'coordination',
                            'fitness',
                            'precission',
                        ]"
                    />
                </div>
            </ExercisesDetailItem>

            <ExercisesDetailItem label="Country:" value="Australia" />
            <ExercisesDetailItem label="Last update:" value="2 months ago" />
        </dl>
    </div>
</template>

<script setup>
    import { MEDIA_TYPES } from '../MediaCarousel.vue';

    const items = [
        {
            thumbnail: 'https://picsum.photos/seed/1/50/50?random=1',
            src: 'https://picsum.photos/seed/1/600/400?random=1',
            name: 'bla bla',
            type: MEDIA_TYPES.image
        },
        {
            thumbnail: 'https://picsum.photos/seed/2/50/50?random=2',
            src: 'https://picsum.photos/seed/2/600/400?random=2',
            name: 'bla bla',
            type: MEDIA_TYPES.image
        },
        {
            thumbnail: 'https://picsum.photos/seed/3/50/50?random=3',
            src: 'https://picsum.photos/seed/3/600/400?random=3',
            name: 'bla bla',
            type: MEDIA_TYPES.image
        },
        {
            thumbnail: 'https://picsum.photos/seed/4/50/50?random=4',
            src: 'https://picsum.photos/seed/4/600/400?random=4',
            name: 'bla bla',
            type: MEDIA_TYPES.image
        }
    ];
</script>
