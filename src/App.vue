<script setup lang="ts">
	import Footer from 'components/Footer.vue'
	import Header from 'components/Header.vue'
</script>

<template>
	<div class="flex flex-col min-h-[100vh]">
		<Header class="tablet:mb-4" />
		<div class="main-container grow w-full">
			<RouterView v-slot="{ Component }">
				<template v-if="Component">
					<Suspense>
						<component :is="Component"></component>
					</Suspense>
				</template>
			</RouterView>
		</div>
		<!-- .main-container -->
		<Footer />
	</div>
	<!-- .layout -->
</template>

<style lang="scss">
	.main-container {
		max-width: 1280px;
		min-width: 0;
		overflow: hidden;
		padding: 16px;
		margin: 0 auto;
	}
</style>
