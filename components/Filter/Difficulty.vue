<template>
    <Listbox v-model="selected" :label="selected?.name || 'Dificulty'">
        <template #prefix>
            <Icon aria-hidden="true" name="icon-park-outline:muscle" />
        </template>

        <ListboxOptions>
            <ListboxOption v-for="item in items" :key="item.id" :value="item">
                {{item.name}}
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>

<script setup>
    const items = [
        { id: 1, name: 'Novice' },
        { id: 2, name: 'Advanced' },
        { id: 3, name: 'Expert' }
    ];

    const selected = ref(null);
</script>
