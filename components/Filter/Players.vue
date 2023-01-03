<template>
    <HLDropdown prefix="yolo" :label="`${filters.playersMin || '#'} Players`">
        <template #prefix>
            <Icon name="cil:people" />
        </template>

        <HLDropdownMenu>
            <div>
                <input
                    type="range"
                    min="2"
                    max="10"
                    class="range"
                    step="1"
                    v-model="filters.playersMin"
                />
                <div class="w-full flex justify-between text-xs px-2">
                    <span v-for="i in 9">{{ i + 1 }}</span>
                </div>
            </div>
        </HLDropdownMenu>
    </HLDropdown>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const exerciseStore = useExerciseStore();
    const {
        filters,
    } = storeToRefs(exerciseStore);

  /*   exerciseStore.$subscribe((mutation, state) => {
        console.log(mutation.payload)
    }) */
</script>
