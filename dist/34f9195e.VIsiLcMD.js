import { r as e } from './243eee37.Djs3w04v.js'
const t = (() => {
	const t = e([])
	return () => ({
		toastList: t,
		setToastList: (e) => {
			e && e.length && (e.length > 4 && e.slice(e.length - 1, 1), (t.value = e))
		},
		addToast: (e) => {
			e &&
				(t.value.length >= 4 && t.value.splice(0, 1),
				(t.value = [e, ...t.value]))
		},
		removeToast: (e) => {
			t.value[e] && t.value.splice(e, 1)
		},
	})
})()
export { t as u }
