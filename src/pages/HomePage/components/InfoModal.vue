<script setup lang="ts">
	import Info from './Info.vue'
	const isShowInfoModal = defineModel<boolean>()

	const onClose = () => {
		isShowInfoModal.value = false
	} // onClose
</script>

<template>
	<div
		class="flex justify-center items-start bg-gray-500 bg-opacity-30 fixed left-0 top-0 w-full h-full px-4"
		@click.self="onClose"
	>
		<Info :isModal="true" @close="onClose" />
	</div>
</template>
