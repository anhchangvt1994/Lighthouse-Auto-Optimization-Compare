import { u as t } from './970a3896.BtY7TgxR.js'
const e = (function () {
	let e, r, a, n
	const o = t()
	return {
		init(t, s) {
			try {
				if (!t)
					throw Object.assign(new Error('Missing router parameter!'), {
						code: 402,
					})
				;(n = s),
					((t) => {
						t.beforeEach(async (s, c) => {
							if (
								((a = {
									...o,
									navigateInfo: {
										to: s,
										from: a
											? a.navigateInfo.to.fullPath === s.fullPath
												? a.navigateInfo.from
												: a.navigateInfo.to
											: c,
									},
									successPath: e,
								}),
								'function' == typeof s.meta.protect)
							) {
								const o = s.meta.protect,
									c = { status: 200 },
									i = (i = !1) => {
										const f = o(a)
										if (
											(f
												? 'string' == typeof f &&
												  (n[s.name] && ((e = s.fullPath), (r = s.name)),
												  (c.status = 301),
												  (c.redirect = f))
												: ((c.status = 301), (c.redirect = -1)),
											200 !== c.status)
										) {
											const e = c.redirect || -1
											return (
												-1 === e
													? t.go(e)
													: t.push({ path: c.redirect, replace: i }),
												!1
											)
										}
										return !0
									}
								if (((s.meta.reProtect = () => i(!0)), !i())) return !1
							}
							return r && !n[r].includes(s.name) && ((r = ''), (e = '')), !0
						})
					})(t)
			} catch (c) {}
		},
	}
})()
export { e as B }
