<template>
    <section class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 -mt-4">
        <RoundedBlock v-for="item in 12" tag="article">
            <header>
                <NuxtLink to="/exercise/123">
                    <img
                        src="https://picsum.photos/300/200"
                        alt="exercise"
                        class="w-full rounded-lg"
                    />
                    <h2 class="my-2 text-lg font-bold">exercise name</h2>
                </NuxtLink>
            </header>

            <footer>
                <div class="mb-2">
                    <TagsList
                        :tags="[
                            'team-work',
                            'coordination',
                            'fitness',
                            'precission'
                        ]"
                    />
                </div>
                <div>🔥2 . 👨‍👩‍👧‍👦5</div>
            </footer>
        </RoundedBlock>
    </section>
</template>

<script>
    export default {};
</script>

<style scoped></style>
