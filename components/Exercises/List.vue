<template>
    <section
        v-if="loading"
        class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 -mt-4"
    >
        <RoundedBlock v-for="item in 9" tag="article" role="status" class="z-0 space-y-2.5 animate-pulse max-w-lg">
            <div>
                <span>
                    <div
                        class="flex justify-center items-center w-full h-48 bg-gray-300 rounded dark:bg-neutral-700"
                    >
                        <svg
                            class="w-12 h-12 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 640 512"
                        >
                            <path
                                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                            />
                        </svg>
                    </div>
                    <div
                        class="my-2 h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-48 mb-4"
                    ></div>
                </span>
            </div>

            <div>
                <div class="mb-2">
                    <div class="flex items-center space-x-2 w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-32"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-500 w-24"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-500 w-24"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-500 w-24"></div>
                    </div>
                </div>
                <div class="flex items-center space-x-2 w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-12"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-neutral-500 w-12"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-neutral-700 w-12"></div>
                </div>
            </div>
        </RoundedBlock>
    </section>

    <section v-else class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 -mt-4">
        <RoundedBlock v-for="exercise in exercises" tag="article">
            <header>
                <NuxtLink to="/exercise/123">
                    <img
                        src="https://picsum.photos/300/200"
                        alt="exercise"
                        class="w-full rounded-lg"
                    />
                    <h2 class="my-2 text-lg font-bold">{{ exercise?.name }}</h2>
                </NuxtLink>
            </header>

            <footer>
                <div class="mb-2">
                    <TagsList
                        :tags="mapTagNames(exercise.tagIDs)"
                    />
                </div>
                <div>🔥2 . 👨‍👩‍👧‍👦5</div>
            </footer>
        </RoundedBlock>
    </section>

    <RoundedBlock v-if="!loading" class="w-max place-self-center mt-4">
        <button
            :disabled="!hasPreviousPage"
            class="inline-flex items-center p-2 mr-1 bg-dark-primaryBg hover:bg-dark-primaryBg/60 rounded-lg disabled:cursor-not-allowed"
            @click="previousPage()"
        >
            <Icon name="ic:baseline-keyboard-arrow-left" />
        </button>
        <button
            class="inline-flex items-center p-2 bg-dark-primaryBg hover:bg-dark-primaryBg/60 rounded-lg"
            @click="nextPage()"
        >
            <Icon name="ic:baseline-keyboard-arrow-right" />
        </button>
    </RoundedBlock>
</template>

<script setup>
    const exerciseStore = useExerciseStore();

    exerciseStore.fetch();

    const {
        getExercises: exercises,
        getHasPreviousPage: hasPreviousPage,
        loading,
    } = storeToRefs(exerciseStore);

    const { mapTagNames, fetchNextPage, fetchPreviousPage } = exerciseStore;

    const nextPage = () => {
        fetchNextPage();
        window.scrollTo(0, 0);
    };
    const previousPage = () => {
        fetchPreviousPage();
        window.scrollTo(0, 0);
    };
</script>

<style scoped></style>
