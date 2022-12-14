<template>
    <div
        class="flex flex-col md:flex-row min-h-screen bg-light-400 dark:bg-neutral-900 text-gray-800 dark:text-dark-secondaryText transition-color duration-350 ease-in "
    >
        <SideBar />
        <div class="main flex flex-col flex-grow md:ml-0">
            <div class="bg-light-400 dark:bg-neutral-900 py-4 sticky top-0">
                <MainHeader />

                <FilterBar />
            </div>

            <main
                role="main"
                class="main-content flex flex-col flex-grow m-4 mb-20 md:mb-4"
            >
                <slot />
            </main>
        </div>
    </div>
</template>
