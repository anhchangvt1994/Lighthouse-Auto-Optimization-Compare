<script setup lang="ts">
	import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	const { isModal } = defineProps<{
		isModal?: boolean
	}>()
</script>

<template>
	<div
		:class="`p-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 max-w-[640px]
    ${
			isModal
				? ' ' +
				  'relative translate-y-[-50%] top-[35%] mobile:flex mobile:max-h-[calc(100vh_-_120px)] mobile:top-[50%] mobile:flex-col'
				: ''
		}`"
		role="alert"
	>
		<div
			:class="`flex items-center ${isModal ? 'mobile:justify-self-start' : ''}`"
		>
			<FontAwesomeIcon
				class="text-blue-800 mr-4"
				:icon="faCircleInfo"
				size="lg"
			/>
			<h3 class="text-lg font-medium">Introduction</h3>
		</div>
		<div
			:class="`mt-2 mb-4 last:mb-0 text-sm ${
				isModal ? 'mobile:flex-grow mobile:overflow-y-auto' : ''
			}`"
		>
			<p class="mt-2 mb-2 text-sm">
				<span class="font-semibold">Lighthouse Auto Optimization Compare</span>
				is a tool that helps compare any website with its optimized version,
				providing the clearest insight into the potential of the website when
				optimized. It also introduces users to an automatic optimization tool
				that helps achieve the best evaluations for the website from various
				search engines.
			</p>
			<p class="mt-2 mb-2 text-sm">
				The optimal information that this tool provides is supplied by the
				<a
					class="underline"
					href="https://github.com/anhchangvt1994/vite-project-template-react__seo-web-scraping"
					target="_blank"
					>Web-scraping SEO boilerplate</a
				>
				project.
			</p>
			<p class="mt-2 mb-4 text-sm">
				<a
					class="underline"
					href="https://github.com/anhchangvt1994/vite-project-template-react__seo-web-scraping"
					target="_blank"
					>Web-scraping SEO boilerplate</a
				>
				is built on the idea of developing a website that uses completely
				client-side rendering, while still being SEO-friendly and compatible
				with search engines.
			</p>
			<p class="mt-2 text-sm">
				<span class="font-bold">Note:</span>The evaluation results are provided
				by the public API from Google PageSpeed Insights, which is used to
				assess important criteria for optimizing search rankings on search
				engines.
			</p>
		</div>
		<div
			v-if="isModal"
			:class="`flex ${isModal ? 'mobile:justify-self-end' : ''}`"
		>
			<button
				type="button"
				class="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800"
				aria-label="Close"
				@click="() => $emit('close')"
			>
				Dismiss
			</button>
		</div>
	</div>
</template>
