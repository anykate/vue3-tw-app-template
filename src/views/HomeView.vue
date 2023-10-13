<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
    <h1 class="text-4xl mb-3">Home</h1>
    <div class="flex items-center text-2xl">
        <i
            @click="store.increment"
            class="ri-add-circle-fill cursor-pointer mr-3"
        ></i>

        {{ store.count }}

        <i
            @click="store.decrement"
            class="ri-indeterminate-circle-fill cursor-pointer ml-3"
        ></i>
    </div>
</template>
