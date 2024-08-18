const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'index.lEG5_nGP.js',
			'243eee37.Djs3w04v.js',
			'739f7aef.CtJK21u4.js',
			'ef2d2ce2.B0VQkzgt.js',
			'1ea9c6c8.CWduvZUe.js',
			'34f9195e.VIsiLcMD.js',
			'd85fef8b.D_ijrrYv.js',
			'ab868204.BAE-Zvf3.js',
			'1fc367af.CbLTCIAi.js',
			'02063856.D451odUJ.js',
			'27eb2303.CbcIhwGY.js',
			'335a9f88.Dc9B77x0.js',
			'227115db.dSAOzloW.js',
			'index-CzZ4PPTr.css',
			'NotFoundPage.CkQ_kbSJ.js',
			'4926cbbd.OBblNUmn.js',
			'3d7b9f36.DOV-U9Tm.js',
			'970a3896.BtY7TgxR.js',
		])
) => i.map((i) => d[i])
import { k as e, l as t, m as n } from './243eee37.Djs3w04v.js'
import { L as o } from './4926cbbd.OBblNUmn.js'
import { B as r } from './3d7b9f36.DOV-U9Tm.js'
import { c as s, a } from './227115db.dSAOzloW.js'
const i = {},
	c = function (e, t, n) {
		let o = Promise.resolve()
		if (t && t.length > 0) {
			document.getElementsByTagName('link')
			const e = document.querySelector('meta[property=csp-nonce]'),
				n =
					(null == e ? void 0 : e.nonce) ||
					(null == e ? void 0 : e.getAttribute('nonce'))
			o = Promise.all(
				t.map((e) => {
					if (
						(e = (function (e) {
							return '/lighthouse-auto-optimization-compare/' + e
						})(e)) in i
					)
						return
					i[e] = !0
					const t = e.endsWith('.css'),
						o = t ? '[rel="stylesheet"]' : ''
					if (document.querySelector(`link[href="${e}"]${o}`)) return
					const r = document.createElement('link')
					return (
						(r.rel = t ? 'stylesheet' : 'modulepreload'),
						t || ((r.as = 'script'), (r.crossOrigin = '')),
						(r.href = e),
						n && r.setAttribute('nonce', n),
						document.head.appendChild(r),
						t
							? new Promise((t, n) => {
									r.addEventListener('load', t),
										r.addEventListener('error', () =>
											n(new Error(`Unable to preload CSS for ${e}`))
										)
							  })
							: void 0
					)
				})
			)
		}
		return o
			.then(() => e())
			.catch((e) => {
				const t = new Event('vite:preloadError', { cancelable: !0 })
				if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
					throw e
			})
	},
	l = (e, t) => {
		const n = e.__vccOpts || e
		for (const [o, r] of t) n[o] = r
		return n
	}
const d = l({}, [
		[
			'render',
			function (n, o) {
				return e(), t('div', null, 'Some error!')
			},
		],
	]),
	m = {},
	p = { class: 'page-loader__wrapper' },
	u = [n('span', { class: 'page-loader' }, null, -1)]
const f = l(m, [
		[
			'render',
			function (n, o) {
				return e(), t('div', p, u)
			},
		],
	]),
	h = o.init({
		suspensible: !1,
		loadingComponent: f,
		errorComponent: d,
		delay: 100,
		onError(e, t, n) {
			n()
		},
	}),
	_ = [
		{
			name: 'HomePage',
			path: '/',
			component: h(() =>
				c(
					() => import('./index.lEG5_nGP.js'),
					__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
				)
			),
		},
		{
			name: 'NotFoundPage',
			path: '/:pathMatch(.*)*',
			component: h(() =>
				c(
					() => import('./NotFoundPage.CkQ_kbSJ.js'),
					__vite__mapDeps([14, 1, 15, 16, 17, 12])
				)
			),
		},
	],
	v = s({ history: a(), routes: _, sensitive: !0 })
r.init(v, {})
export { c as _, l as a, v as r }
