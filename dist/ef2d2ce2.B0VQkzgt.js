import { u as e } from './1ea9c6c8.CWduvZUe.js'
var r = 'get_page_speed_info'
const t = async ({ queryKey: e }) => {
		if (!e[1].url) throw new Error('Need provide url param!')
		const r = new URLSearchParams({ ...e[1] }).toString()
		try {
			const e = await fetch(
				`https://on-ferret-above.ngrok-free.app/api/lighthouse?${r}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				}
			)
			if (!e.ok) throw new Error('Get PageSpeed info fail!')
			return await e.json()
		} catch (t) {
			throw t
		}
	},
	o = (o) =>
		e({
			queryKey: [r, o],
			queryFn: t,
			staleTime: 1 / 0,
			gcTime: 6e4,
			retry: !1,
		})
export { o as u }
