<script setup lang="ts">
	import { faGithub } from '@fortawesome/free-brands-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
	<header
		class="flex justify-between sticky z-10 bg-white top-0 py-2 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
	>
		<a
			class="flex items-center"
			href="https://github.com/anhchangvt1994"
			target="_blank"
		>
			<div class="rounded-full overflow-hidden mr-2">
				<img
					src="/images/avatar.jpeg"
					alt="auto optimize lighthouse"
					class="w-[40px]"
				/>
			</div>
			<div>
				<p class="font-bold">JupiterSamin</p>
				<p class="text-xs text-gray-500">Frontend Developer</p>
			</div>
		</a>
		<a
			class="relative flex items-center"
			href="https://github.com/anhchangvt1994/vite-project-template-react__seo-web-scraping"
			target="_blank"
		>
			<FontAwesomeIcon
				:icon="faGithub"
				class="absolute -left-2 bottom-0 bg-white z-10 rounded-full overflow-hidden border-2 border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
				size="lg"
			/>
			<span
				class="relative inline-block w-[42px] h-[42px] rounded-full overflow-hidden border-2 border-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
			>
				<img
					src="/images/logo.png"
					alt="auto optimize lighthouse"
					class="absolute w-[52px] max-w-none left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]"
				/>
			</span>
		</a>
	</header>
</template>
