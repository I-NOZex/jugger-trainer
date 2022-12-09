<template>
    <HLDropdown prefix="yolo" :label="`${noOfPlayers || '#'} Players`">
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
                    v-model="noOfPlayers"
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

    const noOfPlayers = ref(null);

    const items = [
        { icon: 'icon-park-outline:muscle', label: '2' },
        { icon: 'icon-park-outline:muscle', label: '3' },
        {
            icon: 'icon-park-outline:muscle',
            label: 'Nulla velit mollit labore',
            meta: 'Labore nulla ex'
        },
        {
            icon: 'icon-park-outline:muscle',
            label: 'Nulla velit mollit labore'
        },
        { icon: 'icon-park-outline:muscle', label: 'Nulla velit mollit labore' }
    ];
</script>
