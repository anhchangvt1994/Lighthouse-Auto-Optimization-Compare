import { a as e } from './56db8704.hA6-2NM5.js'
import {
	k as a,
	l as t,
	f as s,
	m as r,
	F as o,
	u as p,
	G as l,
	H as i,
	A as n,
	z as x,
	I as _,
	S as d,
	J as c,
} from './243eee37.Djs3w04v.js'
import { f as b, F as g } from './739f7aef.CtJK21u4.js'
import './4926cbbd.OBblNUmn.js'
import './3d7b9f36.DOV-U9Tm.js'
import './970a3896.BtY7TgxR.js'
import './227115db.dSAOzloW.js'
const m = { class: 'border-t border-gray-300 p-4 text-center' }
const f = e({}, [
		[
			'render',
			function (e, s) {
				return (
					a(), t('footer', m, ' Copyright © 2024 Truong Nguyen (JupiterSamin) ')
				)
			},
		],
	]),
	u = {
		class:
			'flex justify-between sticky z-10 bg-white top-0 py-2 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]',
	},
	h = l(
		'<a class="flex items-center" href="https://github.com/anhchangvt1994" target="_blank"><div class="rounded-full overflow-hidden mr-2"><img src="/images/avatar.jpeg" alt="auto optimize lighthouse" class="w-[40px]"></div><div><p class="font-bold">JupiterSamin</p><p class="text-xs text-gray-500">Frontend Developer</p></div></a>',
		1
	),
	w = {
		class: 'relative flex items-center',
		href: 'https://github.com/anhchangvt1994/vite-project-template-react__seo-web-scraping',
		target: '_blank',
	},
	v = r(
		'span',
		{
			class:
				'relative inline-block w-[42px] h-[42px] rounded-full overflow-hidden border-2 border-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]',
		},
		[
			r('img', {
				src: '/images/logo.png',
				alt: 'auto optimize lighthouse',
				class:
					'absolute w-[52px] max-w-none left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]',
			}),
		],
		-1
	),
	j = s({
		__name: 'Header',
		setup: (e) => (e, s) => (
			a(),
			t('header', u, [
				h,
				r('a', w, [
					o(
						p(g),
						{
							icon: p(b),
							class:
								'absolute -left-2 bottom-0 bg-white z-10 rounded-full overflow-hidden border-2 border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]',
							size: 'lg',
						},
						null,
						8,
						['icon']
					),
					v,
				]),
			])
		),
	}),
	y = { class: 'flex flex-col min-h-[100vh]' },
	k = { class: 'main-container grow w-full' },
	z = s({
		__name: 'App',
		setup: (e) => (e, s) => {
			const p = i('RouterView')
			return (
				a(),
				t('div', y, [
					o(j, { class: 'mb-8' }),
					r('div', k, [
						o(p, null, {
							default: n(({ Component: e }) => [
								e
									? (a(),
									  x(
											d,
											{ key: 0 },
											{ default: n(() => [(a(), x(_(e)))]), _: 2 },
											1024
									  ))
									: c('', !0),
							]),
							_: 1,
						}),
					]),
					o(f),
				])
			)
		},
	})
export { z as default }
