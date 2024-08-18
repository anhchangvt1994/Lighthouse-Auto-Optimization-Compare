export default {
	prefix: 'api',
	data: {
		base:
			process.env.MODE === 'production'
				? 'https://on-ferret-above.ngrok-free.app/api'
				: 'http://localhost:8080/api',
		page_speed: {
			get_info: {
				key: 'get_page_speed_info',
			},
		},
	},
}
