import { g as n } from './02063856.D451odUJ.js'
var e = { exports: {} }
function r(n, e) {
	var r = n.length,
		t = new Array(r),
		o = {},
		a = r,
		s = (function (n) {
			for (var e = new Map(), r = 0, t = n.length; r < t; r++) {
				var o = n[r]
				e.has(o[0]) || e.set(o[0], new Set()),
					e.has(o[1]) || e.set(o[1], new Set()),
					e.get(o[0]).add(o[1])
			}
			return e
		})(e),
		d = (function (n) {
			for (var e = new Map(), r = 0, t = n.length; r < t; r++) e.set(n[r], r)
			return e
		})(n)
	for (
		e.forEach(function (n) {
			if (!d.has(n[0]) || !d.has(n[1]))
				throw new Error(
					'Unknown node. There is an unknown node in the supplied edges.'
				)
		});
		a--;

	)
		o[a] || i(n[a], a, new Set())
	return t
	function i(n, e, a) {
		if (a.has(n)) {
			var f
			try {
				f = ', node was:' + JSON.stringify(n)
			} catch (u) {
				f = ''
			}
			throw new Error('Cyclic dependency' + f)
		}
		if (!d.has(n))
			throw new Error(
				'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' +
					JSON.stringify(n)
			)
		if (!o[e]) {
			o[e] = !0
			var w = s.get(n) || new Set()
			if ((e = (w = Array.from(w)).length)) {
				a.add(n)
				do {
					var h = w[--e]
					i(h, d.get(h), a)
				} while (e)
				a.delete(n)
			}
			t[--r] = n
		}
	}
}
;(e.exports = function (n) {
	return r(
		(function (n) {
			for (var e = new Set(), r = 0, t = n.length; r < t; r++) {
				var o = n[r]
				e.add(o[0]), e.add(o[1])
			}
			return Array.from(e)
		})(n),
		n
	)
}),
	(e.exports.array = r)
const t = n(e.exports)
export { t }
