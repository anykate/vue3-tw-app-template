<script setup>
import axiosClient from '@/axios'
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const counterStore = useCounterStore()
const { getCount } = storeToRefs(counterStore) // This is how you can use storeToRefs to get state, getters w/o losing reactivity
const { increment, decrement } = counterStore // Actions dont need to be retrieved from storeToRefs

const userStore = useUserStore()
const { getToken } = storeToRefs(userStore)

const router = useRouter()

const user = ref({})

const getSingleUser = async (val) => {
	await axiosClient({
		method: 'get',
		url: `https://dummyjson.com/user/${val}`,
	})
		.then((response) => response.data)
		.then((data) => {
			if (data) {
				user.value = data
			}
		})
		.catch((error) => {
			// console.error('Error checking auth:', error.response.data)
		})
}

const invalidateToken = async () => {
	await axiosClient({
		method: 'get',
		url: 'https://dummyjson.com/user/me',
	})
		.then((response) => response.data)
		.then((data) => {
			if (data) {
				user.value = data
			}
		})
		.catch((error) => {
			// console.error('Error checking auth:', error.response.data)
		})
}

watch(
	() => getCount.value,
	(newValue) => {
		if (newValue > 5) {
			// After 5 requests, we will invalidate the token
			invalidateToken()
		} else {
			getSingleUser(newValue)
		}
	}
)

watch(
	() => getToken.value,
	(newValue) => {
		if (!newValue) {
			localStorage.removeItem('user')
			router.push({ name: 'Login' })
		}
	}
)
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
	<br />
	<div class="p-4">
		<Suspense>
			<pre>{{ user }}</pre>
			<template #fallback>
				<p>Loading...</p>
			</template>
		</Suspense>
	</div>
</template>
