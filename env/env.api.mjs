export default {
	prefix: 'api',
	data: {
		base:
			process.env.MODE === 'production'
				? // 'https://on-ferret-above.ngrok-free.app/api'
				  // 'https://spicy-lion-10.telebit.io/api'
				  'https://anhchangvt1994.site/api'
				: 'http://localhost:8080/api',
		page_speed: {
			get_info: {
				key: 'get_page_speed_info',
			},
		},
	},
}
