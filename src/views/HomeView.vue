<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
    <h1 class="mb-3 text-4xl">Home</h1>
    <div class="flex items-center text-2xl">
        <i
            @click="store.increment"
            class="ri-add-circle-fill mr-3 cursor-pointer"
        ></i>

        {{ store.count }}

        <i
            @click="store.decrement"
            class="ri-indeterminate-circle-fill ml-3 cursor-pointer"
        ></i>
    </div>
</template>
