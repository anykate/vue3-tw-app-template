<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
	<h1 class="mb-3 text-4xl">Home</h1>
	<div class="flex items-center text-2xl">
		<i
			class="ri-add-circle-fill mr-3 cursor-pointer"
			@click="store.increment"
		></i>

		{{ store.count }}

		<i
			class="ri-indeterminate-circle-fill ml-3 cursor-pointer"
			@click="store.decrement"
		></i>
	</div>
</template>
