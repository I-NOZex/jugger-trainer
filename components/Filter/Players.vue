<template>
    <HLDropdown prefix="yolo" label="Players">
        <template #prefix>
            <Icon name="cil:people" />
        </template>

        <HLDropdownMenu>
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value="5"
                    class="range"
                    step="1"
                />
                <div class="w-full flex justify-between text-xs px-2">
                    <span v-for="i in 10">{{ i }}</span>
                </div>
            </div>
        </HLDropdownMenu>
    </HLDropdown>
</template>

<script setup>
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
