<template>
    <RoundedBlock class="relative flex mb-2 -mt-4 justify-center items-center">
        <h1 class="text-4xl font-bold text-dark-primaryText">Exercise name</h1>
        <button
            @mouseover="iconName = 'ph:heart-duotone'"
            @mouseleave="iconName = 'ph:heart'"
            class="mr-4 absolute right-0 py-0 bg-dark-primaryBg text-red-600 flex place-content-center place-items-center text-2xl rounded-full w-10 h-10"
        >
            <Icon :name="iconName" />
        </button>
    </RoundedBlock>

    <div class="grid grid-cols-3 grid-rows-2 gap-4">
        <RoundedBlock class="row-span-2">
            <ExercisesDetailBar />
        </RoundedBlock>

        <RoundedBlock class="col-span-2">
            <h3 class="text-lg font-bold text-dark-primaryText mb-1">Game setup</h3>
            <p class="mb-7">
                Brisket prosciutto picanha sausage chicken venison biltong
                chislic alcatra short loin ground round. Pork chop beef jowl ham
                chicken prosciutto short ribs t-bone jerky porchetta beef ribs
                doner hamburger salami capicola. Shoulder tongue short ribs,
                flank buffalo filet mignon sirloin spare ribs pork belly ball
                tip. Picanha hamburger landjaeger biltong turkey cow kielbasa
                ribeye drumstick pork belly flank sirloin salami rump beef. Ball
                tip pastrami brisket, shankle pork chop hamburger short ribs
                burgdoggen kielbasa sirloin.
            </p>
            <h3 class="text-lg font-bold text-dark-primaryText my-1">How to practice</h3>

            <p>
                Brisket prosciutto picanha sausage chicken venison biltong
                chislic alcatra short loin ground round. Pork chop beef jowl ham
                chicken prosciutto short ribs t-bone jerky porchetta beef ribs
                doner hamburger salami capicola. Shoulder tongue short ribs,
                flank buffalo filet mignon sirloin spare ribs pork belly ball
                tip. Picanha hamburger landjaeger biltong turkey cow kielbasa
                ribeye drumstick pork belly flank sirloin salami rump beef. Ball
                tip pastrami brisket, shankle pork chop hamburger short ribs
                burgdoggen kielbasa sirloin.
            </p>
        </RoundedBlock>
        <RoundedBlock class="col-span-2">
            <h3 class="text-lg font-bold text-dark-primaryText mb-1">Discussion</h3>

        </RoundedBlock>
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'single-view' });

    const iconName = ref('ph:heart');
</script>
