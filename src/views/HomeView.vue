<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { increment, decrement } = store // Actions dont need to be retrieved from storeToRefs
const { getCount } = storeToRefs(store) // This is how you can use storeToRefs to get state, getters w/o losing reactivity
</script>

<template>
	<h1 class="mt-3 text-3xl font-bold">Home</h1>
	<div class="flex items-center text-2xl">
		<i
			class="ri-add-circle-fill mr-3 cursor-pointer"
			@click="increment"
		></i>

		{{ getCount }}

		<i
			class="ri-indeterminate-circle-fill ml-3 cursor-pointer"
			@click="decrement"
		></i>
	</div>
</template>
