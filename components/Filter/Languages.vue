<template>
    <HLDropdown prefix="yolo" label="Language">
        <template #prefix>
            <Icon name="mdi:language" />
        </template>

        <HLDropdownMenu>
            <HLDropdownItem v-for="item in items" :label="item.label" :meta="item.meta"/>
        </HLDropdownMenu>
    </HLDropdown>
</template>


<script setup>
    const items = [
        {label: "English"},
        {label: "German"},
        {label: "Spanish"},
        {label: "French"},
    ]
</script>