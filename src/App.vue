<script setup></script>

<template>
	<div>
		<router-view v-slot="{ Component }">
			<transition
				enter-active-class="animate__animated animate__fadeIn"
				leave-active-class="animate__animated animate__fadeOut"
			>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<style>
.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut {
	--animate-duration: 200ms;
}
</style>
