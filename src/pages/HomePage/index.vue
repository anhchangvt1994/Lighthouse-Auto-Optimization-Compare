<script setup lang="ts">
	import {
		faCircleExclamation,
		faCircleInfo,
		faCircleQuestion,
		faGaugeHigh,
	} from '@fortawesome/free-solid-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	import { useQueryGetPageSpeedInfo } from 'app/apis/pagespeed'
	import { IPageSpeedItemInfoCustom } from 'app/apis/pagespeed/types'
	import PageSpeedAnimation from 'assets/json/pagespeed.json'
	import { useToastList } from 'components/ToastList/composable/useToastList'
	import ToastList from 'components/ToastList/index.vue'
	import { LottieAnimation } from 'lottie-web-vue'
	import { useForm } from 'vee-validate'
	import { INIT_PAGE_SPEED_INFO, URL_VALIDATION_REGEX } from './constants'
	import Info from './components/Info.vue'
	import InfoModal from './components/InfoModal.vue'
	import Usage from './components/Usage.vue'
	import UsageModal from './components/UsageModal.vue'

	const schema = yup.object({
		url: yup
			.string()
			.required('URL is required')
			.matches(URL_VALIDATION_REGEX, 'URL is invalid'),
	})
	const router = useRouter()
	const route = useRoute()
	const isShowInfoModal = ref(false)
	const isShowUsageModal = ref(false)

	const queryParams = computed(() => ({
		url: route.query.url,
		device: route.query.device || 'mobile',
	}))

	const { data, isFetching, isError, isSuccess, error, refetch } =
		useQueryGetPageSpeedInfo(queryParams)

	const originalInfoList = computed<IPageSpeedItemInfoCustom>(() => {
		if (!data.value || !data.value.original) return INIT_PAGE_SPEED_INFO
		return {
			pageSpeedUrl: data.value.original.pageSpeedUrl,
			info: data.value.original.info.length
				? data.value.original.info.map((item, index) => {
						return {
							...item,
							score: Math.floor(item.score),
							scoreSpacePercent: Math.floor(item.score / 4),
						}
				  })
				: INIT_PAGE_SPEED_INFO.info,
		}
	})

	const optimalInfoList = computed<IPageSpeedItemInfoCustom>(() => {
		if (!data.value || !data.value.optimal) return INIT_PAGE_SPEED_INFO
		return {
			pageSpeedUrl: data.value.optimal.pageSpeedUrl,
			info: data.value.optimal.info.length
				? data.value.optimal.info.map((item) => {
						return {
							...item,
							score: Math.floor(item.score),
							scoreSpacePercent: Math.floor(item.score / 4),
						}
				  })
				: INIT_PAGE_SPEED_INFO.info,
		}
	})

	const getCorrectColor = (score: number) => {
		switch (true) {
			case score >= 90:
				return '0, 204, 102'
			case score >= 50:
				return '255, 170, 51'
			default:
				return '255, 51, 51'
		}
	} // getCorrectColor

	const { addToast } = useToastList()

	const { handleSubmit, defineField, values, setFieldValue, errors } = useForm<{
		url: string
	}>({
		validationSchema: schema,
		initialValues: {
			url: (route.query.url as string) || '',
		},
	})

	const [url, urlAttrs] = defineField('url', {
		validateOnBlur: false,
		validateOnModelUpdate: false,
	})

	const onSubmit = handleSubmit((requestParams) => {
		if (!requestParams.url.startsWith('http')) {
			setFieldValue('url', `https://${requestParams.url}`)
		}

		router.push({
			query: { url: values.url },
		})

		if (!data.value?.original.info.length || !data.value?.optimal.info.length) {
			refetch()
		}
	})

	watch(errors, () => {
		if (errors.value['url']) {
			addToast({
				type: 'error',
				message: errors.value['url'],
			})
		}
	})

	watch(
		error,
		() => {
			if (error.value && error.value.message) {
				addToast({
					type: 'error',
					message: error.value.message,
				})
			}
		},
		{
			immediate: false,
		}
	)

	watch(
		() => route.query,
		(newVal, oldVal) => {
			if (!oldVal || newVal !== oldVal) {
				refetch()
			}
		},
		{
			immediate: true,
		}
	)
</script>

<template>
	<div class="home-page w-full">
		<div class="body">
			<div class="flex flex-col">
				<div class="relative justify-self-start self-center">
					<img
						class="w-[150px]"
						src="/images/logo.png"
						alt="auto optimize lighthouse"
					/>
					<div
						v-if="route.query.url"
						class="absolute flex flex-col gap-2 -right-4 bottom-4"
					>
						<FontAwesomeIcon
							class="text-blue-800 cursor-pointer"
							@click="() => (isShowInfoModal = true)"
							:icon="faCircleInfo"
							size="lg"
						/>
						<FontAwesomeIcon
							class="text-green-800 cursor-pointer"
							@click="() => (isShowUsageModal = true)"
							:icon="faCircleQuestion"
							size="lg"
						/>
					</div>
				</div>

				<div class="text-center text-md pb-4">
					<div
						class="mobile:text-xs relative z-0 inline-block text-gray-500 text-[12px]"
					>
						No waste time, No waste effort, No waste money.
						<span class="mobile:block"
							>But still get the best Lighthouse score
						</span>
					</div>
				</div>
			</div>
			<form
				@submit="onSubmit"
				:class="`max-w-3xl m-auto bg-white ${isFetching ? 'opacity-50' : ''}`"
			>
				<label
					class="rounded-badge flex overflow-hidden bg-blue-500 p-[2px] relative"
				>
					<div
						class="relative rounded-badge overflow-hidden inline-flex grow pl-[16px] pr-[100px] h-[48px] bg-white"
					>
						<input
							type="text"
							class="outline-none w-full"
							placeholder="https://example.com"
							autofocus
							v-model="url"
							v-bind="urlAttrs"
							:disabled="isFetching"
						/>
					</div>
					<div class="absolute top-0 right-0 h-full py-[2px]">
						<button
							class="inline-flex items-center w-[80px] h-full justify-center bg-blue-300 text-white -skew-x-[24deg] origin-[0_30px]"
							type="submit"
							:disabled="isFetching"
						>
							<div
								class="absolute right-0 top-0 w-full h-full bg-blue-500 -skew-x-[12deg] origin-[0_55px]"
							/>
							<span class="skew-x-[24deg]">
								<div
									v-if="isFetching"
									class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white mt-1"
									role="status"
								>
									<span
										class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
										>Loading...</span
									>
								</div>
								<font-awesome-icon v-else :icon="faGaugeHigh" size="xl" />
							</span>
						</button>
					</div>
				</label>
			</form>
			<LottieAnimation
				v-if="isFetching"
				class="max-w-[600px] max-h-[450px] m-auto overflow-hidden flex items-center"
				:animation-data="PageSpeedAnimation"
				:loop="true"
				:auto-play="true"
			/>
			<div class="max-w-3xl mx-auto mt-8" v-else-if="route.query.url">
				<div class="grid grid-cols-5">
					<div
						class="flex items-center justify-end gap-x-4 col-span-2 py-2 font-bold pr-4"
					>
						Original
						<component
							:is="originalInfoList.pageSpeedUrl ? 'a' : 'div'"
							v-bind="
								originalInfoList.pageSpeedUrl
									? { href: originalInfoList.pageSpeedUrl, target: '_blank' }
									: {}
							"
						>
							<img
								:class="`${!originalInfoList.pageSpeedUrl && 'grayscale'}`"
								src="https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png"
								alt="PageSpeed Insights logo"
								width="24"
								height="24"
							/>
						</component>
					</div>
					<div />
					<div
						class="flex items-center justify-start gap-x-4 col-span-2 py-2 font-bold pl-4"
					>
						<component
							:is="optimalInfoList.pageSpeedUrl ? 'a' : 'div'"
							v-bind="
								optimalInfoList.pageSpeedUrl
									? { href: optimalInfoList.pageSpeedUrl, target: '_blank' }
									: {}
							"
						>
							<img
								:class="`${!optimalInfoList.pageSpeedUrl && 'grayscale'}`"
								src="https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png"
								alt="PageSpeed Insights logo"
								width="24"
								height="24"
							/>
						</component>
						Optimal
					</div>
				</div>
				<div class="grid gap-y-4">
					<div
						v-for="(item, index) in 4"
						:key="index"
						class="grid grid-cols-7 tablet:grid-cols-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-9"
					>
						<div
							class="flex justify-end col-span-3 tablet:col-span-2 h-[calc(100%+2px)] -mt-[1px] overflow-hidden"
						>
							<div
								class="flex items-center justify-end w-0 h-full width-percent-animation"
								:style="`
                  --widthPercent1:${
										originalInfoList.info[index].scoreSpacePercent
									}%;
                  --backgroundColor1:${getCorrectColor(
										originalInfoList.info[index].scoreSpacePercent
									)};
                  --widthPercent2:${
										originalInfoList.info[index].scoreSpacePercent * 2
									}%;
                  --backgroundColo2:${getCorrectColor(
										originalInfoList.info[index].scoreSpacePercent * 2
									)};
                  --widthPercent3:${
										originalInfoList.info[index].scoreSpacePercent * 3
									}%;
                  --backgroundColor3:${getCorrectColor(
										originalInfoList.info[index].scoreSpacePercent * 3
									)};
                  --widthPercent4:${
										originalInfoList.info[index].scoreSpacePercent * 4
									}%;
                  --backgroundColor4:${getCorrectColor(
										originalInfoList.info[index].scoreSpacePercent * 4
									)};
                  `"
							>
								<div class="flex pr-4 items-center">
									<span
										v-if="originalInfoList.info[index].score"
										class="text-white font-bold"
										>{{ originalInfoList.info[index].score }}</span
									>
									<FontAwesomeIcon
										v-else
										class="mobile:text-lg text-2xl"
										:icon="faCircleExclamation"
										:color="'#ff3333'"
									/>
								</div>
							</div>
						</div>
						<div class="flex items-center justify-center bg-gray-50">
							<span
								v-if="INIT_PAGE_SPEED_INFO.info[index].icon"
								class="hidden mobile:block"
							>
								<FontAwesomeIcon
									:icon="INIT_PAGE_SPEED_INFO.info[index].icon"
									size="lg"
								/>
							</span>
							<span
								class="font-semibold mobile:font-bold"
								v-bind="{
									class: `${
										INIT_PAGE_SPEED_INFO.info[index].icon
											? 'hidden tablet:block'
											: ''
									}`,
								}"
								>{{ optimalInfoList.info[index].title }}</span
							>
						</div>
						<div
							class="flex col-span-3 tablet:col-span-2 h-[calc(100%+2px)] -mt-[1px] overflow-hidden"
						>
							<div
								class="flex items-center w-0 h-full width-percent-animation"
								:style="`
                  --widthPercent1:${
										optimalInfoList.info[index].scoreSpacePercent
									}%;
                  --backgroundColor1:${getCorrectColor(
										optimalInfoList.info[index].scoreSpacePercent
									)};
                  --widthPercent2:${
										optimalInfoList.info[index].scoreSpacePercent * 2
									}%;
                  --backgroundColo2:${getCorrectColor(
										optimalInfoList.info[index].scoreSpacePercent * 2
									)};
                  --widthPercent3:${
										optimalInfoList.info[index].scoreSpacePercent * 3
									}%;
                  --backgroundColor3:${getCorrectColor(
										optimalInfoList.info[index].scoreSpacePercent * 3
									)};
                  --widthPercent4:${
										optimalInfoList.info[index].scoreSpacePercent * 4
									}%;
                  --backgroundColor4:${getCorrectColor(
										optimalInfoList.info[index].scoreSpacePercent * 4
									)};
                  `"
							>
								<div class="flex pl-4 items-center">
									<span
										v-if="optimalInfoList.info[index].score"
										class="text-white font-bold"
										>{{ optimalInfoList.info[index].score }}
									</span>
									<FontAwesomeIcon
										v-else
										class="mobile:text-lg text-2xl"
										:icon="faCircleExclamation"
										:color="'#ff3333'"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<template v-else>
				<Info class="mx-auto mt-4 !max-w-3xl" />
				<Usage class="mx-auto mt-4 !max-w-3xl" />
			</template>
		</div>
		<footer></footer>
	</div>
	<ToastList />
	<Teleport to="#info-modal">
		<InfoModal v-model="isShowInfoModal" v-if="isShowInfoModal" />
		<UsageModal v-model="isShowUsageModal" v-if="isShowUsageModal" />
	</Teleport>
</template>

<style>
	.width-percent-animation {
		animation: expand 2s linear forwards;
		box-shadow: -10px -10px 30px 4px rgba(0, 0, 0, 0.1),
			10px 10px 30px 4px rgba(255, 51, 51, 0.3);
	}

	@keyframes expand {
		0% {
			width: 0;
			box-shadow: -10px -10px 30px 4px rgba(0, 0, 0, 0.1),
				10px 10px 30px 4px rgba(255, 51, 51, 0.3);
			background-color: #ff3333;
		}
		25% {
			width: var(--widthPercent1);
			box-shadow: 0 0 50px 15px rgba(var(--backgroundColor1, 255, 51, 51), 0.3);
			background-color: rgb(var(--backgroundColor1, 255, 51, 51));
		}
		50% {
			width: var(--widthPercent2);
			box-shadow: 0 0 50px 15px rgba(var(--backgroundColor2, 255, 51, 51), 0.3);
			background-color: rgb(var(--backgroundColor2, 255, 51, 51));
		}
		75% {
			width: var(--widthPercent3);
			box-shadow: 0 0 50px 15px rgba(var(--backgroundColor3, 255, 51, 51), 0.3);
			background-color: rgb(var(--backgroundColor3, 255, 51, 51));
		}
		100% {
			width: var(--widthPercent4);
			box-shadow: 0 0 50px 15px rgba(var(--backgroundColor4, 255, 51, 51), 0.3);
			background-color: rgb(var(--backgroundColor4, 255, 51, 51));
		}
	}
</style>
