<template>
        <div v-for="color in allColors" class="grid grid-cols-10 p-4">
            <div v-if="typeof colors[color] === 'object'" v-for="(hex, shade, idx) in colors[color]" :style="{backgroundColor: hex}" :class="`p-4 ${idx <= 3 ? 'text-dark-900' : 'text-light'} text-center`">
                <p>{{ `${color} - ${shade}` }}</p>
                <p>{{ `${hex}` }}</p>
            </div>
        </div>
</template>


<script setup>

import { ref } from 'vue'
import colors from 'windicss/colors'

const allColors = ref(Object.keys(colors).filter(c => typeof colors[c] === 'object'))

definePageMeta({ middleware: 'auth' });
</script>