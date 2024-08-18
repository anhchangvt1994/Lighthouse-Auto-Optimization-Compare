import ErrorComponent from 'components/ErrorComponent.vue'
import PageLoader from 'components/PageLoader.vue'
import LazyRoute from 'utils/LazyRoute'
import { type RouteRecordRaw } from 'vue-router'
import BeforeEach from './utils/BeforeEachHandler'

const lazyPage = LazyRoute.init({
	suspensible: false,
	loadingComponent: PageLoader,
	errorComponent: ErrorComponent,
	delay: 100,
	onError(error, retry, fail) {
		fail()
	},
})

const routes: Readonly<RouteRecordRaw[]> = [
	{
		name: import.meta.env.ROUTER_HOME_NAME,
		path: import.meta.env.ROUTER_HOME_PATH,
		component: lazyPage(() => import('pages/HomePage/index.vue')),
	},
	{
		name: import.meta.env.ROUTER_NOT_FOUND_NAME,
		path: import.meta.env.ROUTER_NOT_FOUND_PATH,
		component: lazyPage(() => import('pages/NotFoundPage.vue')),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	sensitive: true,
})

BeforeEach.init(router, {})

export default router
