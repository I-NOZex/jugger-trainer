<template>
    <div class="m-4 mb-0 flex flex-wrap lg:flex-nowrap">
        <FilterTags class="mr-0 lg:mr-2 mb-4 lg:mb-0"/>
        <div v-if="!isSmallScreen" class="flex flex-auto lg:flex-none">
            <FilterDifficulty class="mr-2" />
            <FilterPlayers class="mr-2" />
            <FilterLanguages />
        </div>
        <div v-else class="flex flex-auto flex-col">
            <FilterDifficulty class="mb-2" />
            <FilterPlayers class="mb-2" />
            <FilterLanguages />
        </div>
    </div>
</template>

<script setup>
const isSmallScreen = useMediaQuery('(max-width: 480px)')
</script>