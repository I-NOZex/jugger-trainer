<template>
    <HLDropdown prefix="yolo" label="Difficulty">
        <template #prefix>
            <Icon aria-hidden="true" name="icon-park-outline:muscle" />
        </template>

        <HLDropdownMenu>
            <HLDropdownItem v-for="item in items" :label="item.label" :meta="item.meta">
                <Icon :name="item.icon" />
            </HLDropdownItem>
        </HLDropdownMenu>
    </HLDropdown>
</template>


<script setup>
    const items = [
        {icon: 'icon-park-outline:muscle', label: "Nulla velit mollit labore"},
        {icon: 'icon-park-outline:muscle', label: "Nulla velit mollit labore"},
        {icon: 'icon-park-outline:muscle', label: "Nulla velit mollit labore", meta: "Labore nulla ex"},
        {icon: 'icon-park-outline:muscle', label: "Nulla velit mollit labore"},
        {icon: 'icon-park-outline:muscle', label: "Nulla velit mollit labore"},
    ]
</script>