function t(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
		? t.default
		: t
}
function e(t) {
	;(this._maxSize = t), this.clear()
}
;(e.prototype.clear = function () {
	;(this._size = 0), (this._values = Object.create(null))
}),
	(e.prototype.get = function (t) {
		return this._values[t]
	}),
	(e.prototype.set = function (t, e) {
		return (
			this._size >= this._maxSize && this.clear(),
			t in this._values || this._size++,
			(this._values[t] = e)
		)
	})
var n = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
	r = /^\d+$/,
	u = /^\d/,
	i = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
	o = /^\s*(['"]?)(.*?)(\1)\s*$/,
	c = new e(512),
	a = new e(512),
	s = new e(512),
	f = {
		Cache: e,
		split: h,
		normalizePath: l,
		setter: function (t) {
			var e = l(t)
			return (
				a.get(t) ||
				a.set(t, function (t, n) {
					for (var r = 0, u = e.length, i = t; r < u - 1; ) {
						var o = e[r]
						if ('__proto__' === o || 'constructor' === o || 'prototype' === o)
							return t
						i = i[e[r++]]
					}
					i[e[r]] = n
				})
			)
		},
		getter: function (t, e) {
			var n = l(t)
			return (
				s.get(t) ||
				s.set(t, function (t) {
					for (var r = 0, u = n.length; r < u; ) {
						if (null == t && e) return
						t = t[n[r++]]
					}
					return t
				})
			)
		},
		join: function (t) {
			return t.reduce(function (t, e) {
				return t + (p(e) || r.test(e) ? '[' + e + ']' : (t ? '.' : '') + e)
			}, '')
		},
		forEach: function (t, e, n) {
			!(function (t, e, n) {
				var r,
					u,
					i,
					o,
					c = t.length
				for (u = 0; u < c; u++)
					(r = t[u]) &&
						(_(r) && (r = '"' + r + '"'),
						(i = !(o = p(r)) && /^\d+$/.test(r)),
						e.call(n, r, o, i, u, t))
			})(Array.isArray(t) ? t : h(t), e, n)
		},
	}
function l(t) {
	return (
		c.get(t) ||
		c.set(
			t,
			h(t).map(function (t) {
				return t.replace(o, '$2')
			})
		)
	)
}
function h(t) {
	return t.match(n) || ['']
}
function p(t) {
	return 'string' == typeof t && t && -1 !== ["'", '"'].indexOf(t.charAt(0))
}
function _(t) {
	return (
		!p(t) &&
		((function (t) {
			return t.match(u) && !t.match(r)
		})(t) ||
			(function (t) {
				return i.test(t)
			})(t))
	)
}
export { t as g, f as p }
