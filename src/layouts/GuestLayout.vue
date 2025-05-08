<script setup>
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'
</script>

<template>
	<div class="mx-auto flex min-h-screen max-w-[calc(100svw-16rem)] flex-col">
		<header class="flex items-center justify-end gap-2 bg-red-400">
			<router-link :to="{ name: 'Home' }">Home</router-link>
			<router-link :to="{ name: 'About' }">About</router-link>
		</header>
		<main class="flex flex-1 flex-col md:flex-row">
			<LeftSideBar />
			<div class="flex flex-1 flex-col max-md:order-2 md:flex-row">
				<div class="flex-1 bg-slate-400">
					<h1>Page Content</h1>
					<router-view />
				</div>
			</div>
			<RightSideBar />
		</main>
		<footer class="bg-green-400">Social links</footer>
	</div>
</template>

<style scoped></style>
