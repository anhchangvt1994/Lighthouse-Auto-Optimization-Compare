import {
	r as e,
	b as t,
	c as r,
	u as n,
	n as a,
	q as l,
	i,
	w as o,
	p as u,
	v as s,
	d as c,
	x as d,
	s as v,
} from './243eee37.Djs3w04v.js'
function f(e) {
	return 'function' == typeof e
}
function p(e) {
	return null == e
}
const h = (e) => null !== e && !!e && 'object' == typeof e && !Array.isArray(e)
function g(e) {
	return Number(e) >= 0
}
function y(e) {
	if (
		!(function (e) {
			return 'object' == typeof e && null !== e
		})(e) ||
		'[object Object]' !==
			(function (e) {
				return null == e
					? void 0 === e
						? '[object Undefined]'
						: '[object Null]'
					: Object.prototype.toString.call(e)
			})(e)
	)
		return !1
	if (null === Object.getPrototypeOf(e)) return !0
	let t = e
	for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t)
	return Object.getPrototypeOf(e) === t
}
function b(e, t) {
	return (
		Object.keys(t).forEach((r) => {
			if (y(t[r]) && y(e[r])) return e[r] || (e[r] = {}), void b(e[r], t[r])
			e[r] = t[r]
		}),
		e
	)
}
function m(e) {
	const t = e.split('.')
	if (!t.length) return ''
	let r = String(t[0])
	for (let n = 1; n < t.length; n++)
		g(t[n]) ? (r += `[${t[n]}]`) : (r += `.${t[n]}`)
	return r
}
const O = {}
function j(e, t, r) {
	'object' == typeof r.value && (r.value = A(r.value)),
		r.enumerable &&
		!r.get &&
		!r.set &&
		r.configurable &&
		r.writable &&
		'__proto__' !== t
			? (e[t] = r.value)
			: Object.defineProperty(e, t, r)
}
function A(e) {
	if ('object' != typeof e) return e
	var t,
		r,
		n,
		a = 0,
		l = Object.prototype.toString.call(e)
	if (
		('[object Object]' === l
			? (n = Object.create(e.__proto__ || null))
			: '[object Array]' === l
			? (n = Array(e.length))
			: '[object Set]' === l
			? ((n = new Set()),
			  e.forEach(function (e) {
					n.add(A(e))
			  }))
			: '[object Map]' === l
			? ((n = new Map()),
			  e.forEach(function (e, t) {
					n.set(A(t), A(e))
			  }))
			: '[object Date]' === l
			? (n = new Date(+e))
			: '[object RegExp]' === l
			? (n = new RegExp(e.source, e.flags))
			: '[object DataView]' === l
			? (n = new e.constructor(A(e.buffer)))
			: '[object ArrayBuffer]' === l
			? (n = e.slice(0))
			: 'Array]' === l.slice(-6) && (n = new e.constructor(e)),
		n)
	) {
		for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
			j(n, r[a], Object.getOwnPropertyDescriptor(e, r[a]))
		for (a = 0, r = Object.getOwnPropertyNames(e); a < r.length; a++)
			(Object.hasOwnProperty.call(n, (t = r[a])) && n[t] === e[t]) ||
				j(n, t, Object.getOwnPropertyDescriptor(e, t))
	}
	return n || e
}
const w = Symbol('vee-validate-form'),
	E = 'undefined' != typeof window
function V(e) {
	return !!e && f(e.parse) && 'VVTypedSchema' === e.__type
}
function _(e) {
	return !!e && f(e.validate)
}
function S(e) {
	return /^\[.+\]$/i.test(e)
}
function P(e) {
	return 'SELECT' === e.tagName
}
function F(e) {
	return (
		!!e &&
		(!!('undefined' != typeof Event && f(Event) && e instanceof Event) ||
			!(!e || !e.srcElement))
	)
}
function k(e, t) {
	if (e === t) return !0
	if (e && t && 'object' == typeof e && 'object' == typeof t) {
		if (e.constructor !== t.constructor) return !1
		var r, n, a
		if (Array.isArray(e)) {
			if ((r = e.length) != t.length) return !1
			for (n = r; 0 != n--; ) if (!k(e[n], t[n])) return !1
			return !0
		}
		if (e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1
			for (n of e.entries()) if (!t.has(n[0])) return !1
			for (n of e.entries()) if (!k(n[1], t.get(n[0]))) return !1
			return !0
		}
		if (C(e) && C(t))
			return (
				e.size === t.size &&
				e.name === t.name &&
				e.lastModified === t.lastModified &&
				e.type === t.type
			)
		if (e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1
			for (n of e.entries()) if (!t.has(n[0])) return !1
			return !0
		}
		if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
			if ((r = e.length) != t.length) return !1
			for (n = r; 0 != n--; ) if (e[n] !== t[n]) return !1
			return !0
		}
		if (e.constructor === RegExp)
			return e.source === t.source && e.flags === t.flags
		if (e.valueOf !== Object.prototype.valueOf)
			return e.valueOf() === t.valueOf()
		if (e.toString !== Object.prototype.toString)
			return e.toString() === t.toString()
		for (n = r = (a = Object.keys(e)).length; 0 != n--; ) {
			var l = a[n]
			if (!k(e[l], t[l])) return !1
		}
		return !0
	}
	return e != e && t != t
}
function C(e) {
	return !!E && e instanceof File
}
function I(e) {
	return S(e) ? e.replace(/\[|\]/gi, '') : e
}
function B(e, t, r) {
	if (!e) return r
	if (S(t)) return e[I(t)]
	return (t || '')
		.split(/\.|\[(\d+)\]/)
		.filter(Boolean)
		.reduce((e, t) => {
			return (h((n = e)) || Array.isArray(n)) && t in e ? e[t] : r
			var n
		}, e)
}
function M(e, t, r) {
	if (S(t)) return void (e[I(t)] = r)
	const n = t.split(/\.|\[(\d+)\]/).filter(Boolean)
	let a = e
	for (let l = 0; l < n.length; l++) {
		if (l === n.length - 1) return void (a[n[l]] = r)
		;(n[l] in a && !p(a[n[l]])) || (a[n[l]] = g(n[l + 1]) ? [] : {}),
			(a = a[n[l]])
	}
}
function D(e, t) {
	Array.isArray(e) && g(t) ? e.splice(Number(t), 1) : h(e) && delete e[t]
}
function x(e, t) {
	if (S(t)) return void delete e[I(t)]
	const r = t.split(/\.|\[(\d+)\]/).filter(Boolean)
	let n = e
	for (let i = 0; i < r.length; i++) {
		if (i === r.length - 1) {
			D(n, r[i])
			break
		}
		if (!(r[i] in n) || p(n[r[i]])) break
		n = n[r[i]]
	}
	const a = r.map((t, n) => B(e, r.slice(0, n).join('.')))
	for (let i = a.length - 1; i >= 0; i--)
		(l = a[i]),
			(Array.isArray(l)
				? 0 === l.length
				: h(l) && 0 === Object.keys(l).length) &&
				(0 !== i ? D(a[i - 1], r[i - 1]) : D(e, r[0]))
	var l
}
function N(e) {
	return Object.keys(e)
}
function R(e, t = 0) {
	let r = null,
		n = []
	return function (...a) {
		return (
			r && clearTimeout(r),
			(r = setTimeout(() => {
				const t = e(...a)
				n.forEach((e) => e(t)), (n = [])
			}, t)),
			new Promise((e) => n.push(e))
		)
	}
}
function T(e) {
	return Array.isArray(e) ? e : e ? [e] : []
}
function $(e, t) {
	const r = {}
	for (const n in e) t.includes(n) || (r[n] = e[n])
	return r
}
function U(e) {
	if (z(e)) return e._value
}
function z(e) {
	return '_value' in e
}
function W(e) {
	if (!F(e)) return e
	const t = e.target
	if (('checkbox' === (r = t.type) || 'radio' === r) && z(t)) return U(t)
	var r, n
	if ('file' === t.type && t.files) {
		const e = Array.from(t.files)
		return t.multiple ? e : e[0]
	}
	if (P((n = t)) && n.multiple)
		return Array.from(t.options)
			.filter((e) => e.selected && !e.disabled)
			.map(U)
	if (P(t)) {
		const e = Array.from(t.options).find((e) => e.selected)
		return e ? U(e) : t.value
	}
	return (function (e) {
		return 'number' === e.type || 'range' === e.type
			? Number.isNaN(e.valueAsNumber)
				? e.value
				: e.valueAsNumber
			: e.value
	})(t)
}
function q(e) {
	const t = {}
	return (
		Object.defineProperty(t, '_$$isNormalized', {
			value: !0,
			writable: !1,
			enumerable: !1,
			configurable: !1,
		}),
		e
			? h(e) && e._$$isNormalized
				? e
				: h(e)
				? Object.keys(e).reduce((t, r) => {
						const n = (function (e) {
							if (!0 === e) return []
							if (Array.isArray(e)) return e
							if (h(e)) return e
							return [e]
						})(e[r])
						return !1 !== e[r] && (t[r] = L(n)), t
				  }, t)
				: 'string' != typeof e
				? t
				: e.split('|').reduce((e, t) => {
						const r = G(t)
						return r.name ? ((e[r.name] = L(r.params)), e) : e
				  }, t)
			: t
	)
}
function L(e) {
	const t = (e) =>
		'string' == typeof e && '@' === e[0]
			? (function (e) {
					const t = (t) => B(t, e) || t[e]
					return (t.__locatorRef = e), t
			  })(e.slice(1))
			: e
	return Array.isArray(e)
		? e.map(t)
		: e instanceof RegExp
		? [e]
		: Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
}
const G = (e) => {
	let t = []
	const r = e.split(':')[0]
	return (
		e.includes(':') && (t = e.split(':').slice(1).join(':').split(',')),
		{ name: r, params: t }
	)
}
let H = Object.assign(
	{},
	{
		generateMessage: ({ field: e }) => `${e} is not valid.`,
		bails: !0,
		validateOnBlur: !0,
		validateOnChange: !0,
		validateOnInput: !1,
		validateOnModelUpdate: !0,
	}
)
const J = () => H
async function K(e, t, r = {}) {
	const n = null == r ? void 0 : r.bails,
		a = {
			name: (null == r ? void 0 : r.name) || '{field}',
			rules: t,
			label: null == r ? void 0 : r.label,
			bails: null == n || n,
			formData: (null == r ? void 0 : r.values) || {},
		},
		l = await (async function (e, t) {
			const r = e.rules
			if (V(r) || _(r))
				return (async function (e, t) {
					const r = V(t.rules) ? t.rules : Q(t.rules),
						n = await r.parse(e, { formData: t.formData }),
						a = []
					for (const l of n.errors) l.errors.length && a.push(...l.errors)
					return { value: n.value, errors: a }
				})(t, Object.assign(Object.assign({}, e), { rules: r }))
			if (f(r) || Array.isArray(r)) {
				const n = {
						field: e.label || e.name,
						name: e.name,
						label: e.label,
						form: e.formData,
						value: t,
					},
					a = Array.isArray(r) ? r : [r],
					l = a.length,
					i = []
				for (let r = 0; r < l; r++) {
					const l = a[r],
						o = await l(t, n)
					if (!('string' != typeof o && !Array.isArray(o) && o)) {
						if (Array.isArray(o)) i.push(...o)
						else {
							const e = 'string' == typeof o ? o : Y(n)
							i.push(e)
						}
						if (e.bails) return { errors: i }
					}
				}
				return { errors: i }
			}
			const n = Object.assign(Object.assign({}, e), { rules: q(r) }),
				a = [],
				l = Object.keys(n.rules),
				i = l.length
			for (let o = 0; o < i; o++) {
				const r = l[o],
					i = await X(n, t, { name: r, params: n.rules[r] })
				if (i.error && (a.push(i.error), e.bails)) return { errors: a }
			}
			return { errors: a }
		})(a, e)
	return Object.assign(Object.assign({}, l), { valid: !l.errors.length })
}
function Q(e) {
	return {
		__type: 'VVTypedSchema',
		async parse(t, r) {
			var n
			try {
				return {
					output: await e.validate(t, {
						abortEarly: !1,
						context: (null == r ? void 0 : r.formData) || {},
					}),
					errors: [],
				}
			} catch (a) {
				if (
					!(function (e) {
						return !!e && 'ValidationError' === e.name
					})(a)
				)
					throw a
				if (
					!(null === (n = a.inner) || void 0 === n ? void 0 : n.length) &&
					a.errors.length
				)
					return { errors: [{ path: a.path, errors: a.errors }] }
				const e = a.inner.reduce((e, t) => {
					const r = t.path || ''
					return (
						e[r] || (e[r] = { errors: [], path: r }),
						e[r].errors.push(...t.errors),
						e
					)
				}, {})
				return { errors: Object.values(e) }
			}
		},
	}
}
async function X(e, t, r) {
	const n = ((a = r.name), O[a])
	var a
	if (!n) throw new Error(`No such validator '${r.name}' exists.`)
	const l = (function (e, t) {
			const r = (e) =>
				(function (e) {
					return f(e) && !!e.__locatorRef
				})(e)
					? e(t)
					: e
			if (Array.isArray(e)) return e.map(r)
			return Object.keys(e).reduce((t, n) => ((t[n] = r(e[n])), t), {})
		})(r.params, e.formData),
		i = {
			field: e.label || e.name,
			name: e.name,
			label: e.label,
			value: t,
			form: e.formData,
			rule: Object.assign(Object.assign({}, r), { params: l }),
		},
		o = await n(t, l, i)
	return 'string' == typeof o ? { error: o } : { error: o ? void 0 : Y(i) }
}
function Y(e) {
	const t = J().generateMessage
	return t ? t(e) : 'Field is invalid'
}
let Z = 0
const ee = ['bails', 'fieldsCount', 'id', 'multiple', 'type', 'validate']
function te(e) {
	const t = (null == e ? void 0 : e.initialValues) || {},
		r = Object.assign({}, s(t)),
		a = n(null == e ? void 0 : e.validationSchema)
	return a && V(a) && f(a.cast) ? A(a.cast(r) || {}) : A(r)
}
function re(p) {
	var h
	const g = Z++
	let y = 0
	const O = e(!1),
		j = e(!1),
		E = e(0),
		S = [],
		P = t(te(p)),
		C = e([]),
		I = e({}),
		D = e({}),
		U = (function (e) {
			let t = null,
				r = []
			return function (...n) {
				const l = a(() => {
					if (t !== l) return
					const a = e(...n)
					r.forEach((e) => e(a)), (r = []), (t = null)
				})
				return (t = l), new Promise((e) => r.push(e))
			}
		})(() => {
			D.value = C.value.reduce((e, t) => ((e[m(s(t.path))] = t), e), {})
		})
	function z(e, t) {
		const r = pe(e)
		if (r) {
			if ('string' == typeof e) {
				const t = m(e)
				I.value[t] && delete I.value[t]
			}
			;(r.errors = T(t)), (r.valid = !r.errors.length)
		} else 'string' == typeof e && (I.value[m(e)] = T(t))
	}
	function q(e) {
		N(e).forEach((t) => {
			z(t, e[t])
		})
	}
	;(null == p ? void 0 : p.initialErrors) && q(p.initialErrors)
	const L = r(() => {
			const e = C.value.reduce(
				(e, t) => (t.errors.length && (e[t.path] = t.errors), e),
				{}
			)
			return Object.assign(Object.assign({}, I.value), e)
		}),
		G = r(() =>
			N(L.value).reduce((e, t) => {
				const r = L.value[t]
				return (null == r ? void 0 : r.length) && (e[t] = r[0]), e
			}, {})
		),
		H = r(() =>
			C.value.reduce(
				(e, t) => (
					(e[t.path] = { name: t.path || '', label: t.label || '' }), e
				),
				{}
			)
		),
		X = r(() =>
			C.value.reduce((e, t) => {
				var r
				return (e[t.path] = null === (r = t.bails) || void 0 === r || r), e
			}, {})
		),
		Y = Object.assign({}, (null == p ? void 0 : p.initialErrors) || {}),
		re =
			null !== (h = null == p ? void 0 : p.keepValuesOnUnmount) &&
			void 0 !== h &&
			h,
		{
			initialValues: ne,
			originalInitialValues: ae,
			setInitialValues: le,
		} = (function (t, r, n) {
			const a = te(n),
				l = e(a),
				i = e(A(a))
			function o(e, n) {
				;(null == n ? void 0 : n.force)
					? ((l.value = A(e)), (i.value = A(e)))
					: ((l.value = b(A(l.value) || {}, A(e))),
					  (i.value = b(A(i.value) || {}, A(e)))),
					(null == n ? void 0 : n.updateFields) &&
						t.value.forEach((e) => {
							if (e.touched) return
							const t = B(l.value, e.path)
							M(r, e.path, A(t))
						})
			}
			return { initialValues: l, originalInitialValues: i, setInitialValues: o }
		})(C, P, p),
		ie = (function (e, a, l, i) {
			const o = { touched: 'some', pending: 'some', valid: 'every' },
				u = r(() => !k(a, n(l)))
			function s() {
				const t = e.value
				return N(o).reduce((e, r) => {
					const n = o[r]
					return (e[r] = t[n]((e) => e[r])), e
				}, {})
			}
			const c = t(s())
			return (
				d(() => {
					const e = s()
					;(c.touched = e.touched), (c.valid = e.valid), (c.pending = e.pending)
				}),
				r(() =>
					Object.assign(Object.assign({ initialValues: n(l) }, c), {
						valid: c.valid && !N(i.value).length,
						dirty: u.value,
					})
				)
			)
		})(C, P, ae, G),
		oe = r(() =>
			C.value.reduce((e, t) => {
				const r = B(P, t.path)
				return M(e, t.path, r), e
			}, {})
		),
		ue = null == p ? void 0 : p.validationSchema
	function se(e, l) {
		var u, c
		const d = r(() => B(ne.value, s(e))),
			f = D.value[s(e)],
			p =
				'checkbox' === (null == l ? void 0 : l.type) ||
				'radio' === (null == l ? void 0 : l.type)
		if (f && p) {
			f.multiple = !0
			const e = y++
			return (
				Array.isArray(f.id) ? f.id.push(e) : (f.id = [f.id, e]),
				f.fieldsCount++,
				(f.__flags.pendingUnmount[e] = !1),
				f
			)
		}
		const h = r(() => B(P, s(e))),
			g = s(e),
			b = ge.findIndex((e) => e === g)
		;-1 !== b && ge.splice(b, 1)
		const m = r(() => {
				var t, r, n, a
				const i = s(ue)
				if (V(i))
					return (
						null !==
							(r =
								null === (t = i.describe) || void 0 === t
									? void 0
									: t.call(i, s(e)).required) &&
						void 0 !== r &&
						r
					)
				const o = s(null == l ? void 0 : l.schema)
				return (
					!!V(o) &&
					null !==
						(a =
							null === (n = o.describe) || void 0 === n
								? void 0
								: n.call(o).required) &&
					void 0 !== a &&
					a
				)
			}),
			O = y++,
			j = t({
				id: O,
				path: e,
				touched: !1,
				pending: !1,
				valid: !0,
				validated: !!(null === (u = Y[g]) || void 0 === u ? void 0 : u.length),
				required: m,
				initialValue: d,
				errors: v([]),
				bails: null !== (c = null == l ? void 0 : l.bails) && void 0 !== c && c,
				label: null == l ? void 0 : l.label,
				type: (null == l ? void 0 : l.type) || 'default',
				value: h,
				multiple: !1,
				__flags: { pendingUnmount: { [O]: !1 }, pendingReset: !1 },
				fieldsCount: 1,
				validate: null == l ? void 0 : l.validate,
				dirty: r(() => !k(n(h), n(d))),
			})
		return (
			C.value.push(j),
			(D.value[g] = j),
			U(),
			G.value[g] &&
				!Y[g] &&
				a(() => {
					Pe(g, { mode: 'silent' })
				}),
			i(e) &&
				o(e, (e) => {
					U()
					const t = A(h.value)
					;(D.value[e] = j),
						a(() => {
							M(P, e, t)
						})
				}),
			j
		)
	}
	const ce = R(Ce, 5),
		de = R(Ce, 5),
		ve = (function (e, t) {
			let r
			return async function (...n) {
				const a = e(...n)
				r = a
				const l = await a
				return a !== r ? l : ((r = void 0), t(l, n))
			}
		})(
			async (e) => await ('silent' === e ? ce() : de()),
			(e, [t]) => {
				const r = N(me.errorBag.value),
					n = [
						...new Set([...N(e.results), ...C.value.map((e) => e.path), ...r]),
					]
						.sort()
						.reduce(
							(r, n) => {
								var a
								const l = n,
									i =
										pe(l) ||
										(function (e) {
											const t = C.value.filter((t) => e.startsWith(t.path))
											return t.reduce(
												(e, t) =>
													e ? (t.path.length > e.path.length ? t : e) : t,
												void 0
											)
										})(l),
									o =
										(null === (a = e.results[l]) || void 0 === a
											? void 0
											: a.errors) || [],
									u = s(null == i ? void 0 : i.path) || l,
									c = (function (e, t) {
										if (!t) return e
										return {
											valid: e.valid && t.valid,
											errors: [...e.errors, ...t.errors],
										}
									})({ errors: o, valid: !o.length }, r.results[u])
								return (
									(r.results[u] = c),
									c.valid || (r.errors[u] = c.errors[0]),
									i && I.value[u] && delete I.value[u],
									i
										? ((i.valid = c.valid),
										  'silent' === t
												? r
												: 'validated-only' !== t || i.validated
												? (z(i, c.errors), r)
												: r)
										: (z(u, o), r)
								)
							},
							{ valid: e.valid, results: {}, errors: {}, source: e.source }
						)
				return (
					e.values && ((n.values = e.values), (n.source = e.source)),
					N(n.results).forEach((e) => {
						var r
						const a = pe(e)
						a &&
							'silent' !== t &&
							('validated-only' !== t || a.validated) &&
							z(
								a,
								null === (r = n.results[e]) || void 0 === r ? void 0 : r.errors
							)
					}),
					n
				)
			}
		)
	function fe(e) {
		C.value.forEach(e)
	}
	function pe(e) {
		const t = 'string' == typeof e ? m(e) : e
		return 'string' == typeof t ? D.value[t] : t
	}
	let he,
		ge = []
	function ye(e) {
		return function (t, r) {
			return function (n) {
				return (
					n instanceof Event && (n.preventDefault(), n.stopPropagation()),
					fe((e) => (e.touched = !0)),
					(O.value = !0),
					E.value++,
					Se()
						.then((a) => {
							const l = A(P)
							if (a.valid && 'function' == typeof t) {
								const r = A(oe.value)
								let i = e ? r : l
								return (
									a.values &&
										(i =
											'schema' === a.source
												? a.values
												: Object.assign({}, i, a.values)),
									t(i, {
										evt: n,
										controlledValues: r,
										setErrors: q,
										setFieldError: z,
										setTouched: Ee,
										setFieldTouched: we,
										setValues: je,
										setFieldValue: Oe,
										resetForm: _e,
										resetField: Ve,
									})
								)
							}
							a.valid ||
								'function' != typeof r ||
								r({ values: l, evt: n, errors: a.errors, results: a.results })
						})
						.then(
							(e) => ((O.value = !1), e),
							(e) => {
								throw ((O.value = !1), e)
							}
						)
				)
			}
		}
	}
	const be = ye(!1)
	be.withControlled = ye(!0)
	const me = {
		formId: g,
		values: P,
		controlledValues: oe,
		errorBag: L,
		errors: G,
		schema: ue,
		submitCount: E,
		meta: ie,
		isSubmitting: O,
		isValidating: j,
		fieldArrays: S,
		keepValuesOnUnmount: re,
		validateSchema: n(ue) ? ve : void 0,
		validate: Se,
		setFieldError: z,
		validateField: Pe,
		setFieldValue: Oe,
		setValues: je,
		setErrors: q,
		setFieldTouched: we,
		setTouched: Ee,
		resetForm: _e,
		resetField: Ve,
		handleSubmit: be,
		useFieldModel: function (e) {
			if (!Array.isArray(e)) return Ae(e)
			return e.map((e) => Ae(e, !0))
		},
		defineInputBinds: function (e, t) {
			const [n, a] = Be(e, t)
			function l() {
				a.value.onBlur()
			}
			function i(t) {
				const r = W(t)
				Oe(s(e), r, !1), a.value.onInput()
			}
			function o(t) {
				const r = W(t)
				Oe(s(e), r, !1), a.value.onChange()
			}
			return r(() =>
				Object.assign(Object.assign({}, a.value), {
					onBlur: l,
					onInput: i,
					onChange: o,
					value: n.value,
				})
			)
		},
		defineComponentBinds: function (e, t) {
			const [n, a] = Be(e, t),
				l = pe(s(e))
			function i(e) {
				n.value = e
			}
			return r(() => {
				const e = f(t) ? t($(l, ee)) : t || {}
				return Object.assign(
					{
						[e.model || 'modelValue']: n.value,
						[`onUpdate:${e.model || 'modelValue'}`]: i,
					},
					a.value
				)
			})
		},
		defineField: Be,
		stageInitialValue: function (e, t, r = !1) {
			ke(e, t),
				M(P, e, t),
				r && !(null == p ? void 0 : p.initialValues) && M(ae.value, e, A(t))
		},
		unsetInitialValue: Fe,
		setFieldInitialValue: ke,
		createPathState: se,
		getPathState: pe,
		unsetPathValue: function (e) {
			return (
				ge.push(e),
				he ||
					(he = a(() => {
						;[...ge]
							.sort()
							.reverse()
							.forEach((e) => {
								x(P, e)
							}),
							(ge = []),
							(he = null)
					})),
				he
			)
		},
		removePathState: function (e, t) {
			const r = C.value.findIndex(
					(r) =>
						r.path === e &&
						(Array.isArray(r.id) ? r.id.includes(t) : r.id === t)
				),
				n = C.value[r]
			if (-1 !== r && n) {
				if (
					(a(() => {
						Pe(e, { mode: 'silent', warn: !1 })
					}),
					n.multiple && n.fieldsCount && n.fieldsCount--,
					Array.isArray(n.id))
				) {
					const e = n.id.indexOf(t)
					e >= 0 && n.id.splice(e, 1), delete n.__flags.pendingUnmount[t]
				}
				;(!n.multiple || n.fieldsCount <= 0) &&
					(C.value.splice(r, 1), Fe(e), U(), delete D.value[e])
			}
		},
		initialValues: ne,
		getAllPathStates: () => C.value,
		destroyPath: function (e) {
			N(D.value).forEach((t) => {
				t.startsWith(e) && delete D.value[t]
			}),
				(C.value = C.value.filter((t) => !t.path.startsWith(e))),
				a(() => {
					U()
				})
		},
		isFieldTouched: function (e) {
			const t = pe(e)
			if (t) return t.touched
			return C.value.filter((t) => t.path.startsWith(e)).some((e) => e.touched)
		},
		isFieldDirty: function (e) {
			const t = pe(e)
			if (t) return t.dirty
			return C.value.filter((t) => t.path.startsWith(e)).some((e) => e.dirty)
		},
		isFieldValid: function (e) {
			const t = pe(e)
			if (t) return t.valid
			return C.value.filter((t) => t.path.startsWith(e)).every((e) => e.valid)
		},
	}
	function Oe(e, t, r = !0) {
		const n = A(t),
			a = 'string' == typeof e ? e : e.path
		pe(a) || se(a), M(P, a, n), r && Pe(a)
	}
	function je(e, t = !0) {
		b(P, e), S.forEach((e) => e && e.reset()), t && Se()
	}
	function Ae(e, t) {
		const n = pe(s(e)) || se(e)
		return r({
			get: () => n.value,
			set(r) {
				var n
				Oe(s(e), r, null !== (n = s(t)) && void 0 !== n && n)
			},
		})
	}
	function we(e, t) {
		const r = pe(e)
		r && (r.touched = t)
	}
	function Ee(e) {
		'boolean' != typeof e
			? N(e).forEach((t) => {
					we(t, !!e[t])
			  })
			: fe((t) => {
					t.touched = e
			  })
	}
	function Ve(e, t) {
		var r
		const n = t && 'value' in t ? t.value : B(ne.value, e),
			l = pe(e)
		l && (l.__flags.pendingReset = !0),
			ke(e, A(n), !0),
			Oe(e, n, !1),
			we(e, null !== (r = null == t ? void 0 : t.touched) && void 0 !== r && r),
			z(e, (null == t ? void 0 : t.errors) || []),
			a(() => {
				l && (l.__flags.pendingReset = !1)
			})
	}
	function _e(e, t) {
		let r = A((null == e ? void 0 : e.values) ? e.values : ae.value)
		;(r = (null == t ? void 0 : t.force) ? r : b(ae.value, r)),
			(r = V(ue) && f(ue.cast) ? ue.cast(r) : r),
			le(r, { force: null == t ? void 0 : t.force }),
			fe((t) => {
				var n
				;(t.__flags.pendingReset = !0),
					(t.validated = !1),
					(t.touched =
						(null === (n = null == e ? void 0 : e.touched) || void 0 === n
							? void 0
							: n[t.path]) || !1),
					Oe(t.path, B(r, t.path), !1),
					z(t.path, void 0)
			}),
			(null == t ? void 0 : t.force)
				? (function (e, t = !0) {
						N(P).forEach((e) => {
							delete P[e]
						}),
							N(e).forEach((t) => {
								Oe(t, e[t], !1)
							}),
							t && Se()
				  })(r, !1)
				: je(r, !1),
			q((null == e ? void 0 : e.errors) || {}),
			(E.value = (null == e ? void 0 : e.submitCount) || 0),
			a(() => {
				Se({ mode: 'silent' }),
					fe((e) => {
						e.__flags.pendingReset = !1
					})
			})
	}
	async function Se(e) {
		const t = (null == e ? void 0 : e.mode) || 'force'
		if (('force' === t && fe((e) => (e.validated = !0)), me.validateSchema))
			return me.validateSchema(t)
		j.value = !0
		const r = await Promise.all(
			C.value.map((t) =>
				t.validate
					? t.validate(e).then((e) => ({
							key: t.path,
							valid: e.valid,
							errors: e.errors,
							value: e.value,
					  }))
					: Promise.resolve({
							key: t.path,
							valid: !0,
							errors: [],
							value: void 0,
					  })
			)
		)
		j.value = !1
		const n = {},
			a = {},
			l = {}
		for (const i of r)
			(n[i.key] = { valid: i.valid, errors: i.errors }),
				i.value && M(l, i.key, i.value),
				i.errors.length && (a[i.key] = i.errors[0])
		return {
			valid: r.every((e) => e.valid),
			results: n,
			errors: a,
			values: l,
			source: 'fields',
		}
	}
	async function Pe(e, t) {
		const r = pe(e)
		if (
			(r && 'silent' !== (null == t ? void 0 : t.mode) && (r.validated = !0),
			ue)
		) {
			const { results: r } = await ve(
				(null == t ? void 0 : t.mode) || 'validated-only'
			)
			return r[e] || { errors: [], valid: !0 }
		}
		return (null == r ? void 0 : r.validate)
			? r.validate(t)
			: (!r && (null == t ? void 0 : t.warn),
			  Promise.resolve({ errors: [], valid: !0 }))
	}
	function Fe(e) {
		x(ne.value, e)
	}
	function ke(e, t, r = !1) {
		M(ne.value, e, A(t)), r && M(ae.value, e, A(t))
	}
	async function Ce() {
		const e = n(ue)
		if (!e) return { valid: !0, results: {}, errors: {}, source: 'none' }
		j.value = !0
		const t =
			_(e) || V(e)
				? await (async function (e, t) {
						const r = V(e) ? e : Q(e),
							n = await r.parse(A(t)),
							a = {},
							l = {}
						for (const i of n.errors) {
							const e = i.errors,
								t = (i.path || '').replace(/\["(\d+)"\]/g, (e, t) => `[${t}]`)
							;(a[t] = { valid: !e.length, errors: e }),
								e.length && (l[t] = e[0])
						}
						return {
							valid: !n.errors.length,
							results: a,
							errors: l,
							values: n.value,
							source: 'schema',
						}
				  })(e, P)
				: await (async function (e, t, r) {
						const n = N(e).map(async (n) => {
							var a, l, i
							const o =
									null === (a = null == r ? void 0 : r.names) || void 0 === a
										? void 0
										: a[n],
								u = await K(B(t, n), e[n], {
									name: (null == o ? void 0 : o.name) || n,
									label: null == o ? void 0 : o.label,
									values: t,
									bails:
										null ===
											(i =
												null === (l = null == r ? void 0 : r.bailsMap) ||
												void 0 === l
													? void 0
													: l[n]) ||
										void 0 === i ||
										i,
								})
							return Object.assign(Object.assign({}, u), { path: n })
						})
						let a = !0
						const l = await Promise.all(n),
							i = {},
							o = {}
						for (const u of l)
							(i[u.path] = { valid: u.valid, errors: u.errors }),
								u.valid || ((a = !1), (o[u.path] = u.errors[0]))
						return { valid: a, results: i, errors: o, source: 'schema' }
				  })(e, P, { names: H.value, bailsMap: X.value })
		return (j.value = !1), t
	}
	const Ie = be((e, { evt: t }) => {
		;(function (e) {
			return F(e) && e.target && 'submit' in e.target
		})(t) && t.target.submit()
	})
	function Be(e, t) {
		const n = f(t) || null == t ? void 0 : t.label,
			l = pe(s(e)) || se(e, { label: n }),
			i = () => (f(t) ? t($(l, ee)) : t || {})
		function o() {
			var e
			l.touched = !0
			;(null !== (e = i().validateOnBlur) && void 0 !== e
				? e
				: J().validateOnBlur) && Pe(l.path)
		}
		function u() {
			var e
			;(null !== (e = i().validateOnInput) && void 0 !== e
				? e
				: J().validateOnInput) &&
				a(() => {
					Pe(l.path)
				})
		}
		function c() {
			var e
			;(null !== (e = i().validateOnChange) && void 0 !== e
				? e
				: J().validateOnChange) &&
				a(() => {
					Pe(l.path)
				})
		}
		const d = r(() => {
			const e = { onChange: c, onInput: u, onBlur: o }
			return f(t)
				? Object.assign(Object.assign({}, e), t($(l, ee)).props || {})
				: (null == t ? void 0 : t.props)
				? Object.assign(Object.assign({}, e), t.props($(l, ee)))
				: e
		})
		return [
			Ae(e, () => {
				var e, t, r
				return (
					null ===
						(r =
							null !== (e = i().validateOnModelUpdate) && void 0 !== e
								? e
								: null === (t = J()) || void 0 === t
								? void 0
								: t.validateOnModelUpdate) ||
					void 0 === r ||
					r
				)
			}),
			d,
		]
	}
	return (
		l(() => {
			;(null == p ? void 0 : p.initialErrors) && q(p.initialErrors),
				(null == p ? void 0 : p.initialTouched) && Ee(p.initialTouched),
				(null == p ? void 0 : p.validateOnMount)
					? Se()
					: me.validateSchema && me.validateSchema('silent')
		}),
		i(ue) &&
			o(ue, () => {
				var e
				null === (e = me.validateSchema) ||
					void 0 === e ||
					e.call(me, 'validated-only')
			}),
		u(w, me),
		Object.assign(Object.assign({}, me), {
			values: c(P),
			handleReset: () => _e(),
			submitForm: Ie,
		})
	)
}
export { re as u }
