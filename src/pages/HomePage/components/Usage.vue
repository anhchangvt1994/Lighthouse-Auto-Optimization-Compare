<script setup lang="ts">
	import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	const { isModal } = defineProps<{
		isModal?: boolean
	}>()
</script>

<template>
	<div
		id="alert-additional-content-3"
		:class="`p-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 ${
			isModal ? ' ' + 'relative translate-y-[-50%] top-[35%]' : ''
		}`"
		role="alert"
	>
		<div class="flex items-center">
			<FontAwesomeIcon
				class="text-green-800 mr-4"
				:icon="faCircleQuestion"
				size="lg"
			/>
			<h3 class="text-lg font-medium">Usage</h3>
		</div>
		<div class="mt-2 mb-4 last:mb-0 text-sm">
			<ul>
				<li class="flex">
					<span class="inline-block mr-1 font-bold">1.</span
					><span>Enter the URL of the website you want to compare.</span>
				</li>
				<li class="flex">
					<span class="inline-block mr-1 font-bold">2.</span
					><span>Click the "Compare" button.</span>
				</li>
				<li class="flex">
					<span class="inline-block mr-1 font-bold">3.</span
					><span
						>The comparison results will be displayed after a certain period of
						time.</span
					>
				</li>
				<li class="flex">
					<span class="inline-block mr-1 font-bold">4.</span
					><span
						>The left column is the original website, while the right column is
						the optimized version.</span
					>
				</li>
				<li class="flex">
					<span class="inline-block mr-1 font-bold">5.</span
					><span
						>Click the Google PageSpeed insights button
						<img
							class="inline-block mx-1"
							src="https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png"
							width="24"
							height="24"
							alt="PageSpeed Insights logo"
						/>
						to view the detail of evaluation results.</span
					>
				</li>
			</ul>
		</div>
		<div v-if="isModal" class="flex">
			<button
				type="button"
				class="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
				data-dismiss-target="#alert-additional-content-3"
				aria-label="Close"
				@click="() => $emit('close')"
			>
				Dismiss
			</button>
		</div>
	</div>
</template>
