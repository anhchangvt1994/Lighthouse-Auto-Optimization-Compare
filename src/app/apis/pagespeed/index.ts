import { QueryFunction, useQuery } from '@tanstack/vue-query'
import { IPageSpeedInfo } from './types'

let isFistQuery = true

const getPageSpeedInfo: QueryFunction<IPageSpeedInfo, any> = async ({
	queryKey,
}): Promise<IPageSpeedInfo> => {
	if (!queryKey[1].url) {
		if (isFistQuery) {
			isFistQuery = false
			throw new Error()
		} else {
			throw new Error('URL is required!')
		}
	}

	const queryString = new URLSearchParams({
		...queryKey[1],
	}).toString()

	try {
		const response = await fetch(
			`${import.meta.env.API_BASE}/lighthouse?${queryString}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			}
		)

		if (!response.ok) {
			throw new Error('Too many requests. Please try again later!')
		}

		return await response.json()
	} catch (err) {
		throw new Error('Too many requests. Please try again later!')
	}
}

export const useQueryGetPageSpeedInfo = (params) => {
	return useQuery({
		queryKey: [import.meta.env.API_PAGE_SPEED_GET_INFO.key, params],
		queryFn: getPageSpeedInfo,
		staleTime: Infinity,
		gcTime: 60000,
		retry: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	})
}
