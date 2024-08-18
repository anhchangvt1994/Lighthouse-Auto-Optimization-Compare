var t,
	e,
	s,
	i,
	n,
	r,
	a,
	o,
	u,
	h,
	l,
	c,
	d,
	f,
	p,
	y,
	v,
	g,
	m,
	b,
	w,
	O,
	M,
	Q,
	P,
	C,
	S,
	k,
	R,
	q,
	F,
	D,
	E,
	A,
	W,
	U,
	x,
	T,
	j,
	K,
	I,
	L,
	H,
	G,
	_,
	N,
	B,
	$,
	z,
	V,
	J,
	Y,
	X,
	Z,
	tt,
	et,
	st,
	it,
	nt,
	rt,
	at,
	ot,
	ut,
	ht,
	lt = (t) => {
		throw TypeError(t)
	},
	ct = (t, e, s) => e.has(t) || lt('Cannot ' + s),
	dt = (t, e, s) => (
		ct(t, e, 'read from private field'), s ? s.call(t) : e.get(t)
	),
	ft = (t, e, s) =>
		e.has(t)
			? lt('Cannot add the same private member more than once')
			: e instanceof WeakSet
			? e.add(t)
			: e.set(t, s),
	pt = (t, e, s, i) => (
		ct(t, e, 'write to private field'), i ? i.call(t, s) : e.set(t, s), s
	),
	yt = (t, e, s) => (ct(t, e, 'access private method'), s),
	vt = (t, e, s, i) => ({
		set _(i) {
			pt(t, e, i, s)
		},
		get _() {
			return dt(t, e, i)
		},
	})
import {
	i as gt,
	u as mt,
	h as bt,
	a as wt,
	r as Ot,
	c as Mt,
	b as Qt,
	w as Pt,
	t as Ct,
	d as St,
	o as kt,
} from './243eee37.Djs3w04v.js'
var Rt = class {
		constructor() {
			;(this.listeners = new Set()),
				(this.subscribe = this.subscribe.bind(this))
		}
		subscribe(t) {
			return (
				this.listeners.add(t),
				this.onSubscribe(),
				() => {
					this.listeners.delete(t), this.onUnsubscribe()
				}
			)
		}
		hasListeners() {
			return this.listeners.size > 0
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	qt = 'undefined' == typeof window || 'Deno' in globalThis
function Ft() {}
function Dt(t) {
	return 'number' == typeof t && t >= 0 && t !== 1 / 0
}
function Et(t, e) {
	return Math.max(t + (e || 0) - Date.now(), 0)
}
function At(t, e) {
	return 'function' == typeof t ? t(e) : t
}
function Wt(t, e) {
	return 'function' == typeof t ? t(e) : t
}
function Ut(t, e) {
	const {
		type: s = 'all',
		exact: i,
		fetchStatus: n,
		predicate: r,
		queryKey: a,
		stale: o,
	} = t
	if (a)
		if (i) {
			if (e.queryHash !== Tt(a, e.options)) return !1
		} else if (!Kt(e.queryKey, a)) return !1
	if ('all' !== s) {
		const t = e.isActive()
		if ('active' === s && !t) return !1
		if ('inactive' === s && t) return !1
	}
	return (
		('boolean' != typeof o || e.isStale() === o) &&
		(!n || n === e.state.fetchStatus) &&
		!(r && !r(e))
	)
}
function xt(t, e) {
	const { exact: s, status: i, predicate: n, mutationKey: r } = t
	if (r) {
		if (!e.options.mutationKey) return !1
		if (s) {
			if (jt(e.options.mutationKey) !== jt(r)) return !1
		} else if (!Kt(e.options.mutationKey, r)) return !1
	}
	return (!i || e.state.status === i) && !(n && !n(e))
}
function Tt(t, e) {
	return ((null == e ? void 0 : e.queryKeyHashFn) || jt)(t)
}
function jt(t) {
	return JSON.stringify(t, (t, e) =>
		Gt(e)
			? Object.keys(e)
					.sort()
					.reduce((t, s) => ((t[s] = e[s]), t), {})
			: e
	)
}
function Kt(t, e) {
	return (
		t === e ||
		(typeof t == typeof e &&
			!(!t || !e || 'object' != typeof t || 'object' != typeof e) &&
			!Object.keys(e).some((s) => !Kt(t[s], e[s])))
	)
}
function It(t, e) {
	if (t === e) return t
	const s = Ht(t) && Ht(e)
	if (s || (Gt(t) && Gt(e))) {
		const i = s ? t : Object.keys(t),
			n = i.length,
			r = s ? e : Object.keys(e),
			a = r.length,
			o = s ? [] : {}
		let u = 0
		for (let h = 0; h < a; h++) {
			const n = s ? h : r[h]
			;((!s && i.includes(n)) || s) && void 0 === t[n] && void 0 === e[n]
				? ((o[n] = void 0), u++)
				: ((o[n] = It(t[n], e[n])), o[n] === t[n] && void 0 !== t[n] && u++)
		}
		return n === a && u === n ? t : o
	}
	return e
}
function Lt(t, e) {
	if (!e || Object.keys(t).length !== Object.keys(e).length) return !1
	for (const s in t) if (t[s] !== e[s]) return !1
	return !0
}
function Ht(t) {
	return Array.isArray(t) && t.length === Object.keys(t).length
}
function Gt(t) {
	if (!_t(t)) return !1
	const e = t.constructor
	if (void 0 === e) return !0
	const s = e.prototype
	return (
		!!_t(s) &&
		!!s.hasOwnProperty('isPrototypeOf') &&
		Object.getPrototypeOf(t) === Object.prototype
	)
}
function _t(t) {
	return '[object Object]' === Object.prototype.toString.call(t)
}
function Nt(t, e, s) {
	return 'function' == typeof s.structuralSharing
		? s.structuralSharing(t, e)
		: !1 !== s.structuralSharing
		? It(t, e)
		: e
}
function Bt(t, e, s = 0) {
	const i = [...t, e]
	return s && i.length > s ? i.slice(1) : i
}
function $t(t, e, s = 0) {
	const i = [e, ...t]
	return s && i.length > s ? i.slice(0, -1) : i
}
var zt = Symbol()
function Vt(t, e) {
	return !t.queryFn && (null == e ? void 0 : e.initialPromise)
		? () => e.initialPromise
		: t.queryFn && t.queryFn !== zt
		? t.queryFn
		: () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
}
var Jt = new ((i = class extends Rt {
		constructor() {
			super(),
				ft(this, t),
				ft(this, e),
				ft(this, s),
				pt(this, s, (t) => {
					if (!qt && window.addEventListener) {
						const e = () => t()
						return (
							window.addEventListener('visibilitychange', e, !1),
							() => {
								window.removeEventListener('visibilitychange', e)
							}
						)
					}
				})
		}
		onSubscribe() {
			dt(this, e) || this.setEventListener(dt(this, s))
		}
		onUnsubscribe() {
			var t
			this.hasListeners() ||
				(null == (t = dt(this, e)) || t.call(this), pt(this, e, void 0))
		}
		setEventListener(t) {
			var i
			pt(this, s, t),
				null == (i = dt(this, e)) || i.call(this),
				pt(
					this,
					e,
					t((t) => {
						'boolean' == typeof t ? this.setFocused(t) : this.onFocus()
					})
				)
		}
		setFocused(e) {
			dt(this, t) !== e && (pt(this, t, e), this.onFocus())
		}
		onFocus() {
			const t = this.isFocused()
			this.listeners.forEach((e) => {
				e(t)
			})
		}
		isFocused() {
			var e
			return 'boolean' == typeof dt(this, t)
				? dt(this, t)
				: 'hidden' !==
						(null == (e = globalThis.document) ? void 0 : e.visibilityState)
		}
	}),
	(t = new WeakMap()),
	(e = new WeakMap()),
	(s = new WeakMap()),
	i)(),
	Yt = new ((o = class extends Rt {
		constructor() {
			super(),
				ft(this, n, !0),
				ft(this, r),
				ft(this, a),
				pt(this, a, (t) => {
					if (!qt && window.addEventListener) {
						const e = () => t(!0),
							s = () => t(!1)
						return (
							window.addEventListener('online', e, !1),
							window.addEventListener('offline', s, !1),
							() => {
								window.removeEventListener('online', e),
									window.removeEventListener('offline', s)
							}
						)
					}
				})
		}
		onSubscribe() {
			dt(this, r) || this.setEventListener(dt(this, a))
		}
		onUnsubscribe() {
			var t
			this.hasListeners() ||
				(null == (t = dt(this, r)) || t.call(this), pt(this, r, void 0))
		}
		setEventListener(t) {
			var e
			pt(this, a, t),
				null == (e = dt(this, r)) || e.call(this),
				pt(this, r, t(this.setOnline.bind(this)))
		}
		setOnline(t) {
			dt(this, n) !== t &&
				(pt(this, n, t),
				this.listeners.forEach((e) => {
					e(t)
				}))
		}
		isOnline() {
			return dt(this, n)
		}
	}),
	(n = new WeakMap()),
	(r = new WeakMap()),
	(a = new WeakMap()),
	o)()
function Xt(t) {
	return Math.min(1e3 * 2 ** t, 3e4)
}
function Zt(t) {
	return 'online' !== (t ?? 'online') || Yt.isOnline()
}
var te = class extends Error {
	constructor(t) {
		super('CancelledError'),
			(this.revert = null == t ? void 0 : t.revert),
			(this.silent = null == t ? void 0 : t.silent)
	}
}
function ee(t) {
	return t instanceof te
}
function se(t) {
	let e,
		s,
		i,
		n = !1,
		r = 0,
		a = !1
	const o = new Promise((t, e) => {
			;(s = t), (i = e)
		}),
		u = () =>
			Jt.isFocused() &&
			('always' === t.networkMode || Yt.isOnline()) &&
			t.canRun(),
		h = () => Zt(t.networkMode) && t.canRun(),
		l = (i) => {
			var n
			a ||
				((a = !0),
				null == (n = t.onSuccess) || n.call(t, i),
				null == e || e(),
				s(i))
		},
		c = (s) => {
			var n
			a ||
				((a = !0),
				null == (n = t.onError) || n.call(t, s),
				null == e || e(),
				i(s))
		},
		d = () =>
			new Promise((s) => {
				var i
				;(e = (t) => {
					;(a || u()) && s(t)
				}),
					null == (i = t.onPause) || i.call(t)
			}).then(() => {
				var s
				;(e = void 0), a || null == (s = t.onContinue) || s.call(t)
			}),
		f = () => {
			if (a) return
			let e
			const s = 0 === r ? t.initialPromise : void 0
			try {
				e = s ?? t.fn()
			} catch (i) {
				e = Promise.reject(i)
			}
			Promise.resolve(e)
				.then(l)
				.catch((e) => {
					var s
					if (a) return
					const i = t.retry ?? (qt ? 0 : 3),
						o = t.retryDelay ?? Xt,
						h = 'function' == typeof o ? o(r, e) : o,
						l =
							!0 === i ||
							('number' == typeof i && r < i) ||
							('function' == typeof i && i(r, e))
					var p
					!n && l
						? (r++,
						  null == (s = t.onFail) || s.call(t, r, e),
						  ((p = h),
						  new Promise((t) => {
								setTimeout(t, p)
						  }))
								.then(() => (u() ? void 0 : d()))
								.then(() => {
									n ? c(e) : f()
								}))
						: c(e)
				})
		}
	return {
		promise: o,
		cancel: (e) => {
			var s
			a || (c(new te(e)), null == (s = t.abort) || s.call(t))
		},
		continue: () => (null == e || e(), o),
		cancelRetry: () => {
			n = !0
		},
		continueRetry: () => {
			n = !1
		},
		canStart: h,
		start: () => (h() ? f() : d().then(f), o),
	}
}
var ie = (function () {
		let t = [],
			e = 0,
			s = (t) => {
				t()
			},
			i = (t) => {
				t()
			},
			n = (t) => setTimeout(t, 0)
		const r = (i) => {
				e
					? t.push(i)
					: n(() => {
							s(i)
					  })
			},
			a = () => {
				const e = t
				;(t = []),
					e.length &&
						n(() => {
							i(() => {
								e.forEach((t) => {
									s(t)
								})
							})
						})
			}
		return {
			batch: (t) => {
				let s
				e++
				try {
					s = t()
				} finally {
					e--, e || a()
				}
				return s
			},
			batchCalls:
				(t) =>
				(...e) => {
					r(() => {
						t(...e)
					})
				},
			schedule: r,
			setNotifyFunction: (t) => {
				s = t
			},
			setBatchNotifyFunction: (t) => {
				i = t
			},
			setScheduler: (t) => {
				n = t
			},
		}
	})(),
	ne =
		((h = class {
			constructor() {
				ft(this, u)
			}
			destroy() {
				this.clearGcTimeout()
			}
			scheduleGc() {
				this.clearGcTimeout(),
					Dt(this.gcTime) &&
						pt(
							this,
							u,
							setTimeout(() => {
								this.optionalRemove()
							}, this.gcTime)
						)
			}
			updateGcTime(t) {
				this.gcTime = Math.max(this.gcTime || 0, t ?? (qt ? 1 / 0 : 3e5))
			}
			clearGcTimeout() {
				dt(this, u) && (clearTimeout(dt(this, u)), pt(this, u, void 0))
			}
		}),
		(u = new WeakMap()),
		h),
	re =
		((m = class extends ne {
			constructor(t) {
				super(),
					ft(this, v),
					ft(this, l),
					ft(this, c),
					ft(this, d),
					ft(this, f),
					ft(this, p),
					ft(this, y),
					pt(this, y, !1),
					pt(this, p, t.defaultOptions),
					this.setOptions(t.options),
					(this.observers = []),
					pt(this, d, t.cache),
					(this.queryKey = t.queryKey),
					(this.queryHash = t.queryHash),
					pt(
						this,
						l,
						(function (t) {
							const e =
									'function' == typeof t.initialData
										? t.initialData()
										: t.initialData,
								s = void 0 !== e,
								i = s
									? 'function' == typeof t.initialDataUpdatedAt
										? t.initialDataUpdatedAt()
										: t.initialDataUpdatedAt
									: 0
							return {
								data: e,
								dataUpdateCount: 0,
								dataUpdatedAt: s ? i ?? Date.now() : 0,
								error: null,
								errorUpdateCount: 0,
								errorUpdatedAt: 0,
								fetchFailureCount: 0,
								fetchFailureReason: null,
								fetchMeta: null,
								isInvalidated: !1,
								status: s ? 'success' : 'pending',
								fetchStatus: 'idle',
							}
						})(this.options)
					),
					(this.state = t.state ?? dt(this, l)),
					this.scheduleGc()
			}
			get meta() {
				return this.options.meta
			}
			get promise() {
				var t
				return null == (t = dt(this, f)) ? void 0 : t.promise
			}
			setOptions(t) {
				;(this.options = { ...dt(this, p), ...t }),
					this.updateGcTime(this.options.gcTime)
			}
			optionalRemove() {
				this.observers.length ||
					'idle' !== this.state.fetchStatus ||
					dt(this, d).remove(this)
			}
			setData(t, e) {
				const s = Nt(this.state.data, t, this.options)
				return (
					yt(this, v, g).call(this, {
						data: s,
						type: 'success',
						dataUpdatedAt: null == e ? void 0 : e.updatedAt,
						manual: null == e ? void 0 : e.manual,
					}),
					s
				)
			}
			setState(t, e) {
				yt(this, v, g).call(this, {
					type: 'setState',
					state: t,
					setStateOptions: e,
				})
			}
			cancel(t) {
				var e, s
				const i = null == (e = dt(this, f)) ? void 0 : e.promise
				return (
					null == (s = dt(this, f)) || s.cancel(t),
					i ? i.then(Ft).catch(Ft) : Promise.resolve()
				)
			}
			destroy() {
				super.destroy(), this.cancel({ silent: !0 })
			}
			reset() {
				this.destroy(), this.setState(dt(this, l))
			}
			isActive() {
				return this.observers.some((t) => !1 !== Wt(t.options.enabled, this))
			}
			isDisabled() {
				return this.getObserversCount() > 0 && !this.isActive()
			}
			isStale() {
				return (
					!!this.state.isInvalidated ||
					(this.getObserversCount() > 0
						? this.observers.some((t) => t.getCurrentResult().isStale)
						: void 0 === this.state.data)
				)
			}
			isStaleByTime(t = 0) {
				return (
					this.state.isInvalidated ||
					void 0 === this.state.data ||
					!Et(this.state.dataUpdatedAt, t)
				)
			}
			onFocus() {
				var t
				const e = this.observers.find((t) => t.shouldFetchOnWindowFocus())
				null == e || e.refetch({ cancelRefetch: !1 }),
					null == (t = dt(this, f)) || t.continue()
			}
			onOnline() {
				var t
				const e = this.observers.find((t) => t.shouldFetchOnReconnect())
				null == e || e.refetch({ cancelRefetch: !1 }),
					null == (t = dt(this, f)) || t.continue()
			}
			addObserver(t) {
				this.observers.includes(t) ||
					(this.observers.push(t),
					this.clearGcTimeout(),
					dt(this, d).notify({
						type: 'observerAdded',
						query: this,
						observer: t,
					}))
			}
			removeObserver(t) {
				this.observers.includes(t) &&
					((this.observers = this.observers.filter((e) => e !== t)),
					this.observers.length ||
						(dt(this, f) &&
							(dt(this, y)
								? dt(this, f).cancel({ revert: !0 })
								: dt(this, f).cancelRetry()),
						this.scheduleGc()),
					dt(this, d).notify({
						type: 'observerRemoved',
						query: this,
						observer: t,
					}))
			}
			getObserversCount() {
				return this.observers.length
			}
			invalidate() {
				this.state.isInvalidated ||
					yt(this, v, g).call(this, { type: 'invalidate' })
			}
			fetch(t, e) {
				var s, i, n
				if ('idle' !== this.state.fetchStatus)
					if (
						void 0 !== this.state.data &&
						(null == e ? void 0 : e.cancelRefetch)
					)
						this.cancel({ silent: !0 })
					else if (dt(this, f))
						return dt(this, f).continueRetry(), dt(this, f).promise
				if ((t && this.setOptions(t), !this.options.queryFn)) {
					const t = this.observers.find((t) => t.options.queryFn)
					t && this.setOptions(t.options)
				}
				const r = new AbortController(),
					a = (t) => {
						Object.defineProperty(t, 'signal', {
							enumerable: !0,
							get: () => (pt(this, y, !0), r.signal),
						})
					},
					o = {
						fetchOptions: e,
						options: this.options,
						queryKey: this.queryKey,
						state: this.state,
						fetchFn: () => {
							const t = Vt(this.options, e),
								s = { queryKey: this.queryKey, meta: this.meta }
							return (
								a(s),
								pt(this, y, !1),
								this.options.persister
									? this.options.persister(t, s, this)
									: t(s)
							)
						},
					}
				a(o),
					null == (s = this.options.behavior) || s.onFetch(o, this),
					pt(this, c, this.state),
					('idle' !== this.state.fetchStatus &&
						this.state.fetchMeta ===
							(null == (i = o.fetchOptions) ? void 0 : i.meta)) ||
						yt(this, v, g).call(this, {
							type: 'fetch',
							meta: null == (n = o.fetchOptions) ? void 0 : n.meta,
						})
				const u = (t) => {
					var e, s, i, n
					;(ee(t) && t.silent) ||
						yt(this, v, g).call(this, { type: 'error', error: t }),
						ee(t) ||
							(null == (s = (e = dt(this, d).config).onError) ||
								s.call(e, t, this),
							null == (n = (i = dt(this, d).config).onSettled) ||
								n.call(i, this.state.data, t, this)),
						this.isFetchingOptimistic || this.scheduleGc(),
						(this.isFetchingOptimistic = !1)
				}
				return (
					pt(
						this,
						f,
						se({
							initialPromise: null == e ? void 0 : e.initialPromise,
							fn: o.fetchFn,
							abort: r.abort.bind(r),
							onSuccess: (t) => {
								var e, s, i, n
								void 0 !== t
									? (this.setData(t),
									  null == (s = (e = dt(this, d).config).onSuccess) ||
											s.call(e, t, this),
									  null == (n = (i = dt(this, d).config).onSettled) ||
											n.call(i, t, this.state.error, this),
									  this.isFetchingOptimistic || this.scheduleGc(),
									  (this.isFetchingOptimistic = !1))
									: u(new Error(`${this.queryHash} data is undefined`))
							},
							onError: u,
							onFail: (t, e) => {
								yt(this, v, g).call(this, {
									type: 'failed',
									failureCount: t,
									error: e,
								})
							},
							onPause: () => {
								yt(this, v, g).call(this, { type: 'pause' })
							},
							onContinue: () => {
								yt(this, v, g).call(this, { type: 'continue' })
							},
							retry: o.options.retry,
							retryDelay: o.options.retryDelay,
							networkMode: o.options.networkMode,
							canRun: () => !0,
						})
					),
					dt(this, f).start()
				)
			}
		}),
		(l = new WeakMap()),
		(c = new WeakMap()),
		(d = new WeakMap()),
		(f = new WeakMap()),
		(p = new WeakMap()),
		(y = new WeakMap()),
		(v = new WeakSet()),
		(g = function (t) {
			;(this.state = ((e) => {
				switch (t.type) {
					case 'failed':
						return {
							...e,
							fetchFailureCount: t.failureCount,
							fetchFailureReason: t.error,
						}
					case 'pause':
						return { ...e, fetchStatus: 'paused' }
					case 'continue':
						return { ...e, fetchStatus: 'fetching' }
					case 'fetch':
						return {
							...e,
							...ae(e.data, this.options),
							fetchMeta: t.meta ?? null,
						}
					case 'success':
						return {
							...e,
							data: t.data,
							dataUpdateCount: e.dataUpdateCount + 1,
							dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
							error: null,
							isInvalidated: !1,
							status: 'success',
							...(!t.manual && {
								fetchStatus: 'idle',
								fetchFailureCount: 0,
								fetchFailureReason: null,
							}),
						}
					case 'error':
						const s = t.error
						return ee(s) && s.revert && dt(this, c)
							? { ...dt(this, c), fetchStatus: 'idle' }
							: {
									...e,
									error: s,
									errorUpdateCount: e.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: e.fetchFailureCount + 1,
									fetchFailureReason: s,
									fetchStatus: 'idle',
									status: 'error',
							  }
					case 'invalidate':
						return { ...e, isInvalidated: !0 }
					case 'setState':
						return { ...e, ...t.state }
				}
			})(this.state)),
				ie.batch(() => {
					this.observers.forEach((t) => {
						t.onQueryUpdate()
					}),
						dt(this, d).notify({ query: this, type: 'updated', action: t })
				})
		}),
		m)
function ae(t, e) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: Zt(e.networkMode) ? 'fetching' : 'paused',
		...(void 0 === t && { error: null, status: 'pending' }),
	}
}
var oe =
		((w = class extends Rt {
			constructor(t = {}) {
				super(), ft(this, b), (this.config = t), pt(this, b, new Map())
			}
			build(t, e, s) {
				const i = e.queryKey,
					n = e.queryHash ?? Tt(i, e)
				let r = this.get(n)
				return (
					r ||
						((r = new re({
							cache: this,
							queryKey: i,
							queryHash: n,
							options: t.defaultQueryOptions(e),
							state: s,
							defaultOptions: t.getQueryDefaults(i),
						})),
						this.add(r)),
					r
				)
			}
			add(t) {
				dt(this, b).has(t.queryHash) ||
					(dt(this, b).set(t.queryHash, t),
					this.notify({ type: 'added', query: t }))
			}
			remove(t) {
				const e = dt(this, b).get(t.queryHash)
				e &&
					(t.destroy(),
					e === t && dt(this, b).delete(t.queryHash),
					this.notify({ type: 'removed', query: t }))
			}
			clear() {
				ie.batch(() => {
					this.getAll().forEach((t) => {
						this.remove(t)
					})
				})
			}
			get(t) {
				return dt(this, b).get(t)
			}
			getAll() {
				return [...dt(this, b).values()]
			}
			find(t) {
				const e = { exact: !0, ...t }
				return this.getAll().find((t) => Ut(e, t))
			}
			findAll(t = {}) {
				const e = this.getAll()
				return Object.keys(t).length > 0 ? e.filter((e) => Ut(t, e)) : e
			}
			notify(t) {
				ie.batch(() => {
					this.listeners.forEach((e) => {
						e(t)
					})
				})
			}
			onFocus() {
				ie.batch(() => {
					this.getAll().forEach((t) => {
						t.onFocus()
					})
				})
			}
			onOnline() {
				ie.batch(() => {
					this.getAll().forEach((t) => {
						t.onOnline()
					})
				})
			}
		}),
		(b = new WeakMap()),
		w),
	ue =
		((S = class extends ne {
			constructor(t) {
				super(),
					ft(this, P),
					ft(this, O),
					ft(this, M),
					ft(this, Q),
					(this.mutationId = t.mutationId),
					pt(this, M, t.mutationCache),
					pt(this, O, []),
					(this.state = t.state || {
						context: void 0,
						data: void 0,
						error: null,
						failureCount: 0,
						failureReason: null,
						isPaused: !1,
						status: 'idle',
						variables: void 0,
						submittedAt: 0,
					}),
					this.setOptions(t.options),
					this.scheduleGc()
			}
			setOptions(t) {
				;(this.options = t), this.updateGcTime(this.options.gcTime)
			}
			get meta() {
				return this.options.meta
			}
			addObserver(t) {
				dt(this, O).includes(t) ||
					(dt(this, O).push(t),
					this.clearGcTimeout(),
					dt(this, M).notify({
						type: 'observerAdded',
						mutation: this,
						observer: t,
					}))
			}
			removeObserver(t) {
				pt(
					this,
					O,
					dt(this, O).filter((e) => e !== t)
				),
					this.scheduleGc(),
					dt(this, M).notify({
						type: 'observerRemoved',
						mutation: this,
						observer: t,
					})
			}
			optionalRemove() {
				dt(this, O).length ||
					('pending' === this.state.status
						? this.scheduleGc()
						: dt(this, M).remove(this))
			}
			continue() {
				var t
				return (
					(null == (t = dt(this, Q)) ? void 0 : t.continue()) ??
					this.execute(this.state.variables)
				)
			}
			async execute(t) {
				var e, s, i, n, r, a, o, u, h, l, c, d, f, p, y, v, g, m, b, w
				pt(
					this,
					Q,
					se({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(t)
								: Promise.reject(new Error('No mutationFn found')),
						onFail: (t, e) => {
							yt(this, P, C).call(this, {
								type: 'failed',
								failureCount: t,
								error: e,
							})
						},
						onPause: () => {
							yt(this, P, C).call(this, { type: 'pause' })
						},
						onContinue: () => {
							yt(this, P, C).call(this, { type: 'continue' })
						},
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => dt(this, M).canRun(this),
					})
				)
				const O = 'pending' === this.state.status,
					S = !dt(this, Q).canStart()
				try {
					if (!O) {
						yt(this, P, C).call(this, {
							type: 'pending',
							variables: t,
							isPaused: S,
						}),
							await (null == (s = (e = dt(this, M).config).onMutate)
								? void 0
								: s.call(e, t, this))
						const r = await (null == (n = (i = this.options).onMutate)
							? void 0
							: n.call(i, t))
						r !== this.state.context &&
							yt(this, P, C).call(this, {
								type: 'pending',
								context: r,
								variables: t,
								isPaused: S,
							})
					}
					const f = await dt(this, Q).start()
					return (
						await (null == (a = (r = dt(this, M).config).onSuccess)
							? void 0
							: a.call(r, f, t, this.state.context, this)),
						await (null == (u = (o = this.options).onSuccess)
							? void 0
							: u.call(o, f, t, this.state.context)),
						await (null == (l = (h = dt(this, M).config).onSettled)
							? void 0
							: l.call(
									h,
									f,
									null,
									this.state.variables,
									this.state.context,
									this
							  )),
						await (null == (d = (c = this.options).onSettled)
							? void 0
							: d.call(c, f, null, t, this.state.context)),
						yt(this, P, C).call(this, { type: 'success', data: f }),
						f
					)
				} catch (k) {
					try {
						throw (
							(await (null == (p = (f = dt(this, M).config).onError)
								? void 0
								: p.call(f, k, t, this.state.context, this)),
							await (null == (v = (y = this.options).onError)
								? void 0
								: v.call(y, k, t, this.state.context)),
							await (null == (m = (g = dt(this, M).config).onSettled)
								? void 0
								: m.call(
										g,
										void 0,
										k,
										this.state.variables,
										this.state.context,
										this
								  )),
							await (null == (w = (b = this.options).onSettled)
								? void 0
								: w.call(b, void 0, k, t, this.state.context)),
							k)
						)
					} finally {
						yt(this, P, C).call(this, { type: 'error', error: k })
					}
				} finally {
					dt(this, M).runNext(this)
				}
			}
		}),
		(O = new WeakMap()),
		(M = new WeakMap()),
		(Q = new WeakMap()),
		(P = new WeakSet()),
		(C = function (t) {
			;(this.state = ((e) => {
				switch (t.type) {
					case 'failed':
						return {
							...e,
							failureCount: t.failureCount,
							failureReason: t.error,
						}
					case 'pause':
						return { ...e, isPaused: !0 }
					case 'continue':
						return { ...e, isPaused: !1 }
					case 'pending':
						return {
							...e,
							context: t.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: t.isPaused,
							status: 'pending',
							variables: t.variables,
							submittedAt: Date.now(),
						}
					case 'success':
						return {
							...e,
							data: t.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: 'success',
							isPaused: !1,
						}
					case 'error':
						return {
							...e,
							data: void 0,
							error: t.error,
							failureCount: e.failureCount + 1,
							failureReason: t.error,
							isPaused: !1,
							status: 'error',
						}
				}
			})(this.state)),
				ie.batch(() => {
					dt(this, O).forEach((e) => {
						e.onMutationUpdate(t)
					}),
						dt(this, M).notify({ mutation: this, type: 'updated', action: t })
				})
		}),
		S)
var he =
	((q = class extends Rt {
		constructor(t = {}) {
			super(),
				ft(this, k),
				ft(this, R),
				(this.config = t),
				pt(this, k, new Map()),
				pt(this, R, Date.now())
		}
		build(t, e, s) {
			const i = new ue({
				mutationCache: this,
				mutationId: ++vt(this, R)._,
				options: t.defaultMutationOptions(e),
				state: s,
			})
			return this.add(i), i
		}
		add(t) {
			const e = le(t),
				s = dt(this, k).get(e) ?? []
			s.push(t),
				dt(this, k).set(e, s),
				this.notify({ type: 'added', mutation: t })
		}
		remove(t) {
			var e
			const s = le(t)
			if (dt(this, k).has(s)) {
				const i =
					null == (e = dt(this, k).get(s)) ? void 0 : e.filter((e) => e !== t)
				i && (0 === i.length ? dt(this, k).delete(s) : dt(this, k).set(s, i))
			}
			this.notify({ type: 'removed', mutation: t })
		}
		canRun(t) {
			var e
			const s =
				null == (e = dt(this, k).get(le(t)))
					? void 0
					: e.find((t) => 'pending' === t.state.status)
			return !s || s === t
		}
		runNext(t) {
			var e
			const s =
				null == (e = dt(this, k).get(le(t)))
					? void 0
					: e.find((e) => e !== t && e.state.isPaused)
			return (null == s ? void 0 : s.continue()) ?? Promise.resolve()
		}
		clear() {
			ie.batch(() => {
				this.getAll().forEach((t) => {
					this.remove(t)
				})
			})
		}
		getAll() {
			return [...dt(this, k).values()].flat()
		}
		find(t) {
			const e = { exact: !0, ...t }
			return this.getAll().find((t) => xt(e, t))
		}
		findAll(t = {}) {
			return this.getAll().filter((e) => xt(t, e))
		}
		notify(t) {
			ie.batch(() => {
				this.listeners.forEach((e) => {
					e(t)
				})
			})
		}
		resumePausedMutations() {
			const t = this.getAll().filter((t) => t.state.isPaused)
			return ie.batch(() => Promise.all(t.map((t) => t.continue().catch(Ft))))
		}
	}),
	(k = new WeakMap()),
	(R = new WeakMap()),
	q)
function le(t) {
	var e
	return (null == (e = t.options.scope) ? void 0 : e.id) ?? String(t.mutationId)
}
function ce(t) {
	return {
		onFetch: (e, s) => {
			const i = async () => {
				var s, i, n, r, a
				const o = e.options,
					u =
						null ==
						(n =
							null == (i = null == (s = e.fetchOptions) ? void 0 : s.meta)
								? void 0
								: i.fetchMore)
							? void 0
							: n.direction,
					h = (null == (r = e.state.data) ? void 0 : r.pages) || [],
					l = (null == (a = e.state.data) ? void 0 : a.pageParams) || [],
					c = { pages: [], pageParams: [] }
				let d = !1
				const f = Vt(e.options, e.fetchOptions),
					p = async (t, s, i) => {
						if (d) return Promise.reject()
						if (null == s && t.pages.length) return Promise.resolve(t)
						const n = {
							queryKey: e.queryKey,
							pageParam: s,
							direction: i ? 'backward' : 'forward',
							meta: e.options.meta,
						}
						var r
						;(r = n),
							Object.defineProperty(r, 'signal', {
								enumerable: !0,
								get: () => (
									e.signal.aborted
										? (d = !0)
										: e.signal.addEventListener('abort', () => {
												d = !0
										  }),
									e.signal
								),
							})
						const a = await f(n),
							{ maxPages: o } = e.options,
							u = i ? $t : Bt
						return {
							pages: u(t.pages, a, o),
							pageParams: u(t.pageParams, s, o),
						}
					}
				let y
				if (u && h.length) {
					const t = 'backward' === u,
						e = { pages: h, pageParams: l },
						s = (t ? fe : de)(o, e)
					y = await p(e, s, t)
				} else {
					y = await p(c, l[0] ?? o.initialPageParam)
					const e = t ?? h.length
					for (let t = 1; t < e; t++) {
						const t = de(o, y)
						if (null == t) break
						y = await p(y, t)
					}
				}
				return y
			}
			e.options.persister
				? (e.fetchFn = () => {
						var t, n
						return null == (n = (t = e.options).persister)
							? void 0
							: n.call(
									t,
									i,
									{
										queryKey: e.queryKey,
										meta: e.options.meta,
										signal: e.signal,
									},
									s
							  )
				  })
				: (e.fetchFn = i)
		},
	}
}
function de(t, { pages: e, pageParams: s }) {
	const i = e.length - 1
	return e.length > 0 ? t.getNextPageParam(e[i], e, s[i], s) : void 0
}
function fe(t, { pages: e, pageParams: s }) {
	var i
	return e.length > 0
		? null == (i = t.getPreviousPageParam)
			? void 0
			: i.call(t, e[0], e, s[0], s)
		: void 0
}
var pe =
		((j = class {
			constructor(t = {}) {
				ft(this, F),
					ft(this, D),
					ft(this, E),
					ft(this, A),
					ft(this, W),
					ft(this, U),
					ft(this, x),
					ft(this, T),
					pt(this, F, t.queryCache || new oe()),
					pt(this, D, t.mutationCache || new he()),
					pt(this, E, t.defaultOptions || {}),
					pt(this, A, new Map()),
					pt(this, W, new Map()),
					pt(this, U, 0)
			}
			mount() {
				vt(this, U)._++,
					1 === dt(this, U) &&
						(pt(
							this,
							x,
							Jt.subscribe(async (t) => {
								t && (await this.resumePausedMutations(), dt(this, F).onFocus())
							})
						),
						pt(
							this,
							T,
							Yt.subscribe(async (t) => {
								t &&
									(await this.resumePausedMutations(), dt(this, F).onOnline())
							})
						))
			}
			unmount() {
				var t, e
				vt(this, U)._--,
					0 === dt(this, U) &&
						(null == (t = dt(this, x)) || t.call(this),
						pt(this, x, void 0),
						null == (e = dt(this, T)) || e.call(this),
						pt(this, T, void 0))
			}
			isFetching(t) {
				return dt(this, F).findAll({ ...t, fetchStatus: 'fetching' }).length
			}
			isMutating(t) {
				return dt(this, D).findAll({ ...t, status: 'pending' }).length
			}
			getQueryData(t) {
				var e
				const s = this.defaultQueryOptions({ queryKey: t })
				return null == (e = dt(this, F).get(s.queryHash))
					? void 0
					: e.state.data
			}
			ensureQueryData(t) {
				const e = this.getQueryData(t.queryKey)
				if (void 0 === e) return this.fetchQuery(t)
				{
					const s = this.defaultQueryOptions(t),
						i = dt(this, F).build(this, s)
					return (
						t.revalidateIfStale &&
							i.isStaleByTime(At(s.staleTime, i)) &&
							this.prefetchQuery(s),
						Promise.resolve(e)
					)
				}
			}
			getQueriesData(t) {
				return dt(this, F)
					.findAll(t)
					.map(({ queryKey: t, state: e }) => [t, e.data])
			}
			setQueryData(t, e, s) {
				const i = this.defaultQueryOptions({ queryKey: t }),
					n = dt(this, F).get(i.queryHash),
					r = (function (t, e) {
						return 'function' == typeof t ? t(e) : t
					})(e, null == n ? void 0 : n.state.data)
				if (void 0 !== r)
					return dt(this, F)
						.build(this, i)
						.setData(r, { ...s, manual: !0 })
			}
			setQueriesData(t, e, s) {
				return ie.batch(() =>
					dt(this, F)
						.findAll(t)
						.map(({ queryKey: t }) => [t, this.setQueryData(t, e, s)])
				)
			}
			getQueryState(t) {
				var e
				const s = this.defaultQueryOptions({ queryKey: t })
				return null == (e = dt(this, F).get(s.queryHash)) ? void 0 : e.state
			}
			removeQueries(t) {
				const e = dt(this, F)
				ie.batch(() => {
					e.findAll(t).forEach((t) => {
						e.remove(t)
					})
				})
			}
			resetQueries(t, e) {
				const s = dt(this, F),
					i = { type: 'active', ...t }
				return ie.batch(
					() => (
						s.findAll(t).forEach((t) => {
							t.reset()
						}),
						this.refetchQueries(i, e)
					)
				)
			}
			cancelQueries(t = {}, e = {}) {
				const s = { revert: !0, ...e },
					i = ie.batch(() =>
						dt(this, F)
							.findAll(t)
							.map((t) => t.cancel(s))
					)
				return Promise.all(i).then(Ft).catch(Ft)
			}
			invalidateQueries(t = {}, e = {}) {
				return ie.batch(() => {
					if (
						(dt(this, F)
							.findAll(t)
							.forEach((t) => {
								t.invalidate()
							}),
						'none' === t.refetchType)
					)
						return Promise.resolve()
					const s = { ...t, type: t.refetchType ?? t.type ?? 'active' }
					return this.refetchQueries(s, e)
				})
			}
			refetchQueries(t = {}, e) {
				const s = {
						...e,
						cancelRefetch: (null == e ? void 0 : e.cancelRefetch) ?? !0,
					},
					i = ie.batch(() =>
						dt(this, F)
							.findAll(t)
							.filter((t) => !t.isDisabled())
							.map((t) => {
								let e = t.fetch(void 0, s)
								return (
									s.throwOnError || (e = e.catch(Ft)),
									'paused' === t.state.fetchStatus ? Promise.resolve() : e
								)
							})
					)
				return Promise.all(i).then(Ft)
			}
			fetchQuery(t) {
				const e = this.defaultQueryOptions(t)
				void 0 === e.retry && (e.retry = !1)
				const s = dt(this, F).build(this, e)
				return s.isStaleByTime(At(e.staleTime, s))
					? s.fetch(e)
					: Promise.resolve(s.state.data)
			}
			prefetchQuery(t) {
				return this.fetchQuery(t).then(Ft).catch(Ft)
			}
			fetchInfiniteQuery(t) {
				return (t.behavior = ce(t.pages)), this.fetchQuery(t)
			}
			prefetchInfiniteQuery(t) {
				return this.fetchInfiniteQuery(t).then(Ft).catch(Ft)
			}
			resumePausedMutations() {
				return Yt.isOnline()
					? dt(this, D).resumePausedMutations()
					: Promise.resolve()
			}
			getQueryCache() {
				return dt(this, F)
			}
			getMutationCache() {
				return dt(this, D)
			}
			getDefaultOptions() {
				return dt(this, E)
			}
			setDefaultOptions(t) {
				pt(this, E, t)
			}
			setQueryDefaults(t, e) {
				dt(this, A).set(jt(t), { queryKey: t, defaultOptions: e })
			}
			getQueryDefaults(t) {
				const e = [...dt(this, A).values()]
				let s = {}
				return (
					e.forEach((e) => {
						Kt(t, e.queryKey) && (s = { ...s, ...e.defaultOptions })
					}),
					s
				)
			}
			setMutationDefaults(t, e) {
				dt(this, W).set(jt(t), { mutationKey: t, defaultOptions: e })
			}
			getMutationDefaults(t) {
				const e = [...dt(this, W).values()]
				let s = {}
				return (
					e.forEach((e) => {
						Kt(t, e.mutationKey) && (s = { ...s, ...e.defaultOptions })
					}),
					s
				)
			}
			defaultQueryOptions(t) {
				if (t._defaulted) return t
				const e = {
					...dt(this, E).queries,
					...this.getQueryDefaults(t.queryKey),
					...t,
					_defaulted: !0,
				}
				return (
					e.queryHash || (e.queryHash = Tt(e.queryKey, e)),
					void 0 === e.refetchOnReconnect &&
						(e.refetchOnReconnect = 'always' !== e.networkMode),
					void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
					!e.networkMode && e.persister && (e.networkMode = 'offlineFirst'),
					!0 !== e.enabled && e.queryFn === zt && (e.enabled = !1),
					e
				)
			}
			defaultMutationOptions(t) {
				return (null == t ? void 0 : t._defaulted)
					? t
					: {
							...dt(this, E).mutations,
							...((null == t ? void 0 : t.mutationKey) &&
								this.getMutationDefaults(t.mutationKey)),
							...t,
							_defaulted: !0,
					  }
			}
			clear() {
				dt(this, F).clear(), dt(this, D).clear()
			}
		}),
		(F = new WeakMap()),
		(D = new WeakMap()),
		(E = new WeakMap()),
		(A = new WeakMap()),
		(W = new WeakMap()),
		(U = new WeakMap()),
		(x = new WeakMap()),
		(T = new WeakMap()),
		j),
	ye =
		((ht = class extends Rt {
			constructor(t, e) {
				super(),
					ft(this, Z),
					ft(this, K),
					ft(this, I),
					ft(this, L),
					ft(this, H),
					ft(this, G),
					ft(this, _),
					ft(this, N),
					ft(this, B),
					ft(this, $),
					ft(this, z),
					ft(this, V),
					ft(this, J),
					ft(this, Y),
					ft(this, X, new Set()),
					(this.options = e),
					pt(this, K, t),
					pt(this, N, null),
					this.bindMethods(),
					this.setOptions(e)
			}
			bindMethods() {
				this.refetch = this.refetch.bind(this)
			}
			onSubscribe() {
				1 === this.listeners.size &&
					(dt(this, I).addObserver(this),
					ve(dt(this, I), this.options)
						? yt(this, Z, tt).call(this)
						: this.updateResult(),
					yt(this, Z, nt).call(this))
			}
			onUnsubscribe() {
				this.hasListeners() || this.destroy()
			}
			shouldFetchOnReconnect() {
				return ge(dt(this, I), this.options, this.options.refetchOnReconnect)
			}
			shouldFetchOnWindowFocus() {
				return ge(dt(this, I), this.options, this.options.refetchOnWindowFocus)
			}
			destroy() {
				;(this.listeners = new Set()),
					yt(this, Z, rt).call(this),
					yt(this, Z, at).call(this),
					dt(this, I).removeObserver(this)
			}
			setOptions(t, e) {
				const s = this.options,
					i = dt(this, I)
				if (
					((this.options = dt(this, K).defaultQueryOptions(t)),
					void 0 !== this.options.enabled &&
						'boolean' != typeof this.options.enabled &&
						'function' != typeof this.options.enabled &&
						'boolean' != typeof Wt(this.options.enabled, dt(this, I)))
				)
					throw new Error(
						'Expected enabled to be a boolean or a callback that returns a boolean'
					)
				yt(this, Z, ot).call(this),
					dt(this, I).setOptions(this.options),
					s._defaulted &&
						!Lt(this.options, s) &&
						dt(this, K)
							.getQueryCache()
							.notify({
								type: 'observerOptionsUpdated',
								query: dt(this, I),
								observer: this,
							})
				const n = this.hasListeners()
				n && me(dt(this, I), i, this.options, s) && yt(this, Z, tt).call(this),
					this.updateResult(e),
					!n ||
						(dt(this, I) === i &&
							Wt(this.options.enabled, dt(this, I)) ===
								Wt(s.enabled, dt(this, I)) &&
							At(this.options.staleTime, dt(this, I)) ===
								At(s.staleTime, dt(this, I))) ||
						yt(this, Z, et).call(this)
				const r = yt(this, Z, st).call(this)
				!n ||
					(dt(this, I) === i &&
						Wt(this.options.enabled, dt(this, I)) ===
							Wt(s.enabled, dt(this, I)) &&
						r === dt(this, Y)) ||
					yt(this, Z, it).call(this, r)
			}
			getOptimisticResult(t) {
				const e = dt(this, K).getQueryCache().build(dt(this, K), t),
					s = this.createResult(e, t)
				return (
					(function (t, e) {
						if (!Lt(t.getCurrentResult(), e)) return !0
						return !1
					})(this, s) &&
						(pt(this, H, s),
						pt(this, _, this.options),
						pt(this, G, dt(this, I).state)),
					s
				)
			}
			getCurrentResult() {
				return dt(this, H)
			}
			trackResult(t, e) {
				const s = {}
				return (
					Object.keys(t).forEach((i) => {
						Object.defineProperty(s, i, {
							configurable: !1,
							enumerable: !0,
							get: () => (this.trackProp(i), null == e || e(i), t[i]),
						})
					}),
					s
				)
			}
			trackProp(t) {
				dt(this, X).add(t)
			}
			getCurrentQuery() {
				return dt(this, I)
			}
			refetch({ ...t } = {}) {
				return this.fetch({ ...t })
			}
			fetchOptimistic(t) {
				const e = dt(this, K).defaultQueryOptions(t),
					s = dt(this, K).getQueryCache().build(dt(this, K), e)
				return (
					(s.isFetchingOptimistic = !0),
					s.fetch().then(() => this.createResult(s, e))
				)
			}
			fetch(t) {
				return yt(this, Z, tt)
					.call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
					.then(() => (this.updateResult(), dt(this, H)))
			}
			createResult(t, e) {
				var s
				const i = dt(this, I),
					n = this.options,
					r = dt(this, H),
					a = dt(this, G),
					o = dt(this, _),
					u = t !== i ? t.state : dt(this, L),
					{ state: h } = t
				let l,
					c = { ...h },
					d = !1
				if (e._optimisticResults) {
					const s = this.hasListeners(),
						r = !s && ve(t, e),
						a = s && me(t, i, e, n)
					;(r || a) && (c = { ...c, ...ae(h.data, t.options) }),
						'isRestoring' === e._optimisticResults && (c.fetchStatus = 'idle')
				}
				let { error: f, errorUpdatedAt: p, status: y } = c
				if (e.select && void 0 !== c.data)
					if (
						r &&
						c.data === (null == a ? void 0 : a.data) &&
						e.select === dt(this, B)
					)
						l = dt(this, $)
					else
						try {
							pt(this, B, e.select),
								(l = e.select(c.data)),
								(l = Nt(null == r ? void 0 : r.data, l, e)),
								pt(this, $, l),
								pt(this, N, null)
						} catch (O) {
							pt(this, N, O)
						}
				else l = c.data
				if (void 0 !== e.placeholderData && void 0 === l && 'pending' === y) {
					let t
					if (
						(null == r ? void 0 : r.isPlaceholderData) &&
						e.placeholderData === (null == o ? void 0 : o.placeholderData)
					)
						t = r.data
					else if (
						((t =
							'function' == typeof e.placeholderData
								? e.placeholderData(
										null == (s = dt(this, z)) ? void 0 : s.state.data,
										dt(this, z)
								  )
								: e.placeholderData),
						e.select && void 0 !== t)
					)
						try {
							;(t = e.select(t)), pt(this, N, null)
						} catch (O) {
							pt(this, N, O)
						}
					void 0 !== t &&
						((y = 'success'),
						(l = Nt(null == r ? void 0 : r.data, t, e)),
						(d = !0))
				}
				dt(this, N) &&
					((f = dt(this, N)),
					(l = dt(this, $)),
					(p = Date.now()),
					(y = 'error'))
				const v = 'fetching' === c.fetchStatus,
					g = 'pending' === y,
					m = 'error' === y,
					b = g && v,
					w = void 0 !== l
				return {
					status: y,
					fetchStatus: c.fetchStatus,
					isPending: g,
					isSuccess: 'success' === y,
					isError: m,
					isInitialLoading: b,
					isLoading: b,
					data: l,
					dataUpdatedAt: c.dataUpdatedAt,
					error: f,
					errorUpdatedAt: p,
					failureCount: c.fetchFailureCount,
					failureReason: c.fetchFailureReason,
					errorUpdateCount: c.errorUpdateCount,
					isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
					isFetchedAfterMount:
						c.dataUpdateCount > u.dataUpdateCount ||
						c.errorUpdateCount > u.errorUpdateCount,
					isFetching: v,
					isRefetching: v && !g,
					isLoadingError: m && !w,
					isPaused: 'paused' === c.fetchStatus,
					isPlaceholderData: d,
					isRefetchError: m && w,
					isStale: be(t, e),
					refetch: this.refetch,
				}
			}
			updateResult(t) {
				const e = dt(this, H),
					s = this.createResult(dt(this, I), this.options)
				if (
					(pt(this, G, dt(this, I).state),
					pt(this, _, this.options),
					void 0 !== dt(this, G).data && pt(this, z, dt(this, I)),
					Lt(s, e))
				)
					return
				pt(this, H, s)
				const i = {}
				!1 !== (null == t ? void 0 : t.listeners) &&
					(() => {
						if (!e) return !0
						const { notifyOnChangeProps: t } = this.options,
							s = 'function' == typeof t ? t() : t
						if ('all' === s || (!s && !dt(this, X).size)) return !0
						const i = new Set(s ?? dt(this, X))
						return (
							this.options.throwOnError && i.add('error'),
							Object.keys(dt(this, H)).some((t) => {
								const s = t
								return dt(this, H)[s] !== e[s] && i.has(s)
							})
						)
					})() &&
					(i.listeners = !0),
					yt(this, Z, ut).call(this, { ...i, ...t })
			}
			onQueryUpdate() {
				this.updateResult(), this.hasListeners() && yt(this, Z, nt).call(this)
			}
		}),
		(K = new WeakMap()),
		(I = new WeakMap()),
		(L = new WeakMap()),
		(H = new WeakMap()),
		(G = new WeakMap()),
		(_ = new WeakMap()),
		(N = new WeakMap()),
		(B = new WeakMap()),
		($ = new WeakMap()),
		(z = new WeakMap()),
		(V = new WeakMap()),
		(J = new WeakMap()),
		(Y = new WeakMap()),
		(X = new WeakMap()),
		(Z = new WeakSet()),
		(tt = function (t) {
			yt(this, Z, ot).call(this)
			let e = dt(this, I).fetch(this.options, t)
			return (null == t ? void 0 : t.throwOnError) || (e = e.catch(Ft)), e
		}),
		(et = function () {
			yt(this, Z, rt).call(this)
			const t = At(this.options.staleTime, dt(this, I))
			if (qt || dt(this, H).isStale || !Dt(t)) return
			const e = Et(dt(this, H).dataUpdatedAt, t)
			pt(
				this,
				V,
				setTimeout(() => {
					dt(this, H).isStale || this.updateResult()
				}, e + 1)
			)
		}),
		(st = function () {
			return (
				('function' == typeof this.options.refetchInterval
					? this.options.refetchInterval(dt(this, I))
					: this.options.refetchInterval) ?? !1
			)
		}),
		(it = function (t) {
			yt(this, Z, at).call(this),
				pt(this, Y, t),
				!qt &&
					!1 !== Wt(this.options.enabled, dt(this, I)) &&
					Dt(dt(this, Y)) &&
					0 !== dt(this, Y) &&
					pt(
						this,
						J,
						setInterval(() => {
							;(this.options.refetchIntervalInBackground || Jt.isFocused()) &&
								yt(this, Z, tt).call(this)
						}, dt(this, Y))
					)
		}),
		(nt = function () {
			yt(this, Z, et).call(this),
				yt(this, Z, it).call(this, yt(this, Z, st).call(this))
		}),
		(rt = function () {
			dt(this, V) && (clearTimeout(dt(this, V)), pt(this, V, void 0))
		}),
		(at = function () {
			dt(this, J) && (clearInterval(dt(this, J)), pt(this, J, void 0))
		}),
		(ot = function () {
			const t = dt(this, K).getQueryCache().build(dt(this, K), this.options)
			if (t === dt(this, I)) return
			const e = dt(this, I)
			pt(this, I, t),
				pt(this, L, t.state),
				this.hasListeners() &&
					(null == e || e.removeObserver(this), t.addObserver(this))
		}),
		(ut = function (t) {
			ie.batch(() => {
				t.listeners &&
					this.listeners.forEach((t) => {
						t(dt(this, H))
					}),
					dt(this, K)
						.getQueryCache()
						.notify({ query: dt(this, I), type: 'observerResultsUpdated' })
			})
		}),
		ht)
function ve(t, e) {
	return (
		(function (t, e) {
			return (
				!1 !== Wt(e.enabled, t) &&
				void 0 === t.state.data &&
				!('error' === t.state.status && !1 === e.retryOnMount)
			)
		})(t, e) ||
		(void 0 !== t.state.data && ge(t, e, e.refetchOnMount))
	)
}
function ge(t, e, s) {
	if (!1 !== Wt(e.enabled, t)) {
		const i = 'function' == typeof s ? s(t) : s
		return 'always' === i || (!1 !== i && be(t, e))
	}
	return !1
}
function me(t, e, s, i) {
	return (
		(t !== e || !1 === Wt(i.enabled, t)) &&
		(!s.suspense || 'error' !== t.state.status) &&
		be(t, s)
	)
}
function be(t, e) {
	return !1 !== Wt(e.enabled, t) && t.isStaleByTime(At(e.staleTime, t))
}
var we = 'VUE_QUERY_CLIENT'
function Oe(t) {
	return `${we}${t ? `:${t}` : ''}`
}
function Me(t, e) {
	Object.keys(t).forEach((s) => {
		t[s] = e[s]
	})
}
function Qe(t, e, s = '', i = 0) {
	if (e) {
		const n = e(t, s, i)
		if (void 0 === n && gt(t)) return n
		if (void 0 !== n) return n
	}
	if (Array.isArray(t)) return t.map((t, s) => Qe(t, e, String(s), i + 1))
	if (
		'object' == typeof t &&
		(function (t) {
			if ('[object Object]' !== Object.prototype.toString.call(t)) return !1
			const e = Object.getPrototypeOf(t)
			return null === e || e === Object.prototype
		})(t)
	) {
		const s = Object.entries(t).map(([t, s]) => [t, Qe(s, e, t, i + 1)])
		return Object.fromEntries(s)
	}
	return t
}
function Pe(t, e = !1) {
	return Qe(t, (t, s, i) =>
		1 === i && 'queryKey' === s
			? Pe(t, !0)
			: e && 'function' == typeof t
			? Pe(t(), e)
			: gt(t)
			? Pe(mt(t), e)
			: void 0
	)
}
function Ce(t, e) {
	return 'function' == typeof t ? t(...e) : !!t
}
var Se = class extends oe {
		find(t) {
			return super.find(Pe(t))
		}
		findAll(t = {}) {
			return super.findAll(Pe(t))
		}
	},
	ke = class extends he {
		find(t) {
			return super.find(Pe(t))
		}
		findAll(t = {}) {
			return super.findAll(Pe(t))
		}
	},
	Re = class extends pe {
		constructor(t = {}) {
			super({
				defaultOptions: t.defaultOptions,
				queryCache: t.queryCache || new Se(),
				mutationCache: t.mutationCache || new ke(),
			}),
				(this.isRestoring = Ot(!1))
		}
		isFetching(t = {}) {
			return super.isFetching(Pe(t))
		}
		isMutating(t = {}) {
			return super.isMutating(Pe(t))
		}
		getQueryData(t) {
			return super.getQueryData(Pe(t))
		}
		ensureQueryData(t) {
			return super.ensureQueryData(Pe(t))
		}
		getQueriesData(t) {
			return super.getQueriesData(Pe(t))
		}
		setQueryData(t, e, s = {}) {
			return super.setQueryData(Pe(t), e, Pe(s))
		}
		setQueriesData(t, e, s = {}) {
			return super.setQueriesData(Pe(t), e, Pe(s))
		}
		getQueryState(t) {
			return super.getQueryState(Pe(t))
		}
		removeQueries(t = {}) {
			return super.removeQueries(Pe(t))
		}
		resetQueries(t = {}, e = {}) {
			return super.resetQueries(Pe(t), Pe(e))
		}
		cancelQueries(t = {}, e = {}) {
			return super.cancelQueries(Pe(t), Pe(e))
		}
		invalidateQueries(t = {}, e = {}) {
			return new Promise((s) => {
				setTimeout(async () => {
					await super.invalidateQueries(Pe(t), Pe(e)), s()
				}, 0)
			})
		}
		refetchQueries(t = {}, e = {}) {
			return super.refetchQueries(Pe(t), Pe(e))
		}
		fetchQuery(t) {
			return super.fetchQuery(Pe(t))
		}
		prefetchQuery(t) {
			return super.prefetchQuery(Pe(t))
		}
		fetchInfiniteQuery(t) {
			return super.fetchInfiniteQuery(Pe(t))
		}
		prefetchInfiniteQuery(t) {
			return super.prefetchInfiniteQuery(Pe(t))
		}
		setDefaultOptions(t) {
			super.setDefaultOptions(Pe(t))
		}
		setQueryDefaults(t, e) {
			super.setQueryDefaults(Pe(t), Pe(e))
		}
		getQueryDefaults(t) {
			return super.getQueryDefaults(Pe(t))
		}
		setMutationDefaults(t, e) {
			super.setMutationDefaults(Pe(t), Pe(e))
		}
		getMutationDefaults(t) {
			return super.getMutationDefaults(Pe(t))
		}
	},
	qe = {
		install: (t, e = {}) => {
			const s = Oe(e.queryClientKey)
			let i
			if ('queryClient' in e && e.queryClient) i = e.queryClient
			else {
				const t = 'queryClientConfig' in e ? e.queryClientConfig : void 0
				i = new Re(t)
			}
			qt || i.mount()
			let n = () => {}
			if (e.clientPersister) {
				i.isRestoring.value = !0
				const [t, s] = e.clientPersister(i)
				;(n = t),
					s.then(() => {
						var t
						;(i.isRestoring.value = !1),
							null == (t = e.clientPersisterOnSuccess) || t.call(e, i)
					})
			}
			const r = () => {
				i.unmount(), n()
			}
			if (t.onUnmount) t.onUnmount(r)
			else {
				const e = t.unmount
				t.unmount = function () {
					r(), e()
				}
			}
			t.provide(s, i)
		},
	}
function Fe(t, e, s) {
	const i = (function (t = '') {
			if (!bt())
				throw new Error(
					'vue-query hooks can only be used inside setup() function or functions that support injection context.'
				)
			const e = Oe(t),
				s = wt(e)
			if (!s)
				throw new Error(
					"No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library."
				)
			return s
		})(),
		n = Mt(() => {
			const t = Pe(e)
			'function' == typeof t.enabled && (t.enabled = t.enabled())
			const s = i.defaultQueryOptions(t)
			return (
				(s._optimisticResults = i.isRestoring.value
					? 'isRestoring'
					: 'optimistic'),
				s
			)
		}),
		r = new t(i, n.value),
		a = Qt(r.getCurrentResult())
	let o = () => {}
	Pt(
		i.isRestoring,
		(t) => {
			t ||
				(o(),
				(o = r.subscribe((t) => {
					Me(a, t)
				})))
		},
		{ immediate: !0 }
	)
	const u = () => {
		r.setOptions(n.value), Me(a, r.getCurrentResult())
	}
	Pt(n, u),
		kt(() => {
			o()
		})
	Pt(
		() => a.error,
		(t) => {
			if (
				a.isError &&
				!a.isFetching &&
				Ce(n.value.throwOnError, [t, r.getCurrentQuery()])
			)
				throw t
		}
	)
	const h = Ct(St(a))
	for (const l in a) 'function' == typeof a[l] && (h[l] = a[l])
	return (
		(h.suspense = () =>
			new Promise((t, e) => {
				let s = () => {}
				const i = () => {
					if (!1 !== n.value.enabled) {
						r.setOptions(n.value)
						const i = r.getOptimisticResult(n.value)
						i.isStale
							? (s(),
							  r.fetchOptimistic(n.value).then(t, (s) => {
									Ce(n.value.throwOnError, [s, r.getCurrentQuery()])
										? e(s)
										: t(r.getCurrentResult())
							  }))
							: (s(), t(i))
					}
				}
				i(), (s = Pt(n, i))
			})),
		(h.refetch = (...t) => (u(), a.refetch(...t))),
		h
	)
}
function De(t, e) {
	return Fe(ye, t)
}
export { qe as V, De as u }
