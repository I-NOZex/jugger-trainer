<template>
    <HeadlessListboxOption
        as="div"
        class="px-1 py-1"
        v-slot="{ active, selected }"
    >
        <li
            :class="[
                active
                    ? 'bg-neutral-900/50 text-dark-primaryText'
                    : ' text-dark-secondaryText',
                'group flex w-full items-center rounded-lg relative py-4 pl-10 pr-4 text-sm'
            ]"
        >
            <span
                :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate'
                ]"
            >
                <slot />
            </span>

            <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
            >
                <Icon
                    class="h-5 w-5"
                    name="material-symbols:check-small"
                    aria-hidden="true"
                />
            </span>
        </li>
    </HeadlessListboxOption>
</template>