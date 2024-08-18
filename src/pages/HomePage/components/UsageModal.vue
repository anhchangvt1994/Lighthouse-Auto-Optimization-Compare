<script setup lang="ts">
	import Usage from './Usage.vue'
	const isShowUsageModal = defineModel<boolean>()

	const onClose = () => {
		isShowUsageModal.value = false
	} // onClose
</script>

<template>
	<div
		class="flex justify-center items-start bg-gray-500 bg-opacity-30 fixed left-0 top-0 w-full h-full px-4"
		@click.self="onClose"
	>
		<Usage :isModal="true" @close="onClose" />
	</div>
</template>
