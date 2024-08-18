const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'App.pBZ2NOL0.js',
			'56db8704.hA6-2NM5.js',
			'243eee37.Djs3w04v.js',
			'4926cbbd.OBblNUmn.js',
			'3d7b9f36.DOV-U9Tm.js',
			'970a3896.BtY7TgxR.js',
			'227115db.dSAOzloW.js',
			'56db8704-C1vf8Xma.css',
			'739f7aef.CtJK21u4.js',
			'App-CdpURB_r.css',
		])
) => i.map((i) => d[i])
import { _ as e, r as t } from './56db8704.hA6-2NM5.js'
import {
	f as r,
	k as s,
	z as o,
	A as i,
	m as n,
	B as a,
	C as c,
	D as l,
	u,
	E as f,
} from './243eee37.Djs3w04v.js'
import { R as d } from './227115db.dSAOzloW.js'
import { V as m } from './1ea9c6c8.CWduvZUe.js'
import './4926cbbd.OBblNUmn.js'
import './3d7b9f36.DOV-U9Tm.js'
import './970a3896.BtY7TgxR.js'
!(function () {
	const e = document.createElement('link').relList
	if (!(e && e.supports && e.supports('modulepreload'))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
		new MutationObserver((e) => {
			for (const r of e)
				if ('childList' === r.type)
					for (const e of r.addedNodes)
						'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
		}).observe(document, { childList: !0, subtree: !0 })
	}
	function t(e) {
		if (e.ep) return
		e.ep = !0
		const t = (function (e) {
			const t = {}
			return (
				e.integrity && (t.integrity = e.integrity),
				e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
				'use-credentials' === e.crossOrigin
					? (t.credentials = 'include')
					: 'anonymous' === e.crossOrigin
					? (t.credentials = 'omit')
					: (t.credentials = 'same-origin'),
				t
			)
		})(e)
		fetch(e.href, t)
	}
})()
const p = ['href', 'onClick'],
	y = r({
		__name: 'RouterLink',
		props: {
			to: {},
			class: {},
			custom: { type: Boolean },
			activeClass: {},
			exactActiveClass: {},
			ariaCurrentValue: {},
			replace: { type: Boolean },
		},
		setup(e) {
			const t = e
			return (e, r) => (
				s(),
				o(
					u(d),
					l(t, { custom: '' }),
					{
						default: i(({ isActive: r, href: s, navigate: o }) => [
							n(
								'a',
								{
									href: s,
									class: c(
										`${t.class ? t.class : ''}${r ? ' --is-active ' : ''}`
									),
									onClick: o,
								},
								[a(e.$slots, 'default')],
								10,
								p
							),
						]),
						_: 3,
					},
					16
				)
			)
		},
	})
;(() => ({
	init() {
		e(
			() => import('./App.pBZ2NOL0.js'),
			__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
		).then(function (e) {
			e &&
				e.default &&
				f(e.default).component('router-link', y).use(m).use(t).mount('#root')
		})
	},
}))().init()
