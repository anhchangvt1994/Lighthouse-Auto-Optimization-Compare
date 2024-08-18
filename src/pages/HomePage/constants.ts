import {
	faBolt,
	faThumbsUp,
	faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons'
import { IPageSpeedItemInfoCustom } from 'app/apis/pagespeed/types'

export const URL_VALIDATION_REGEX = new RegExp(import.meta.env.VALIDATION_URL)

export const INIT_PAGE_SPEED_INFO: IPageSpeedItemInfoCustom = {
	pageSpeedUrl: '',
	info: [
		{
			title: 'Performance',
			icon: faBolt,
			score: 0,
			scoreSpacePercent: 0,
		},
		{
			title: 'Accessibility',
			icon: faUniversalAccess,
			score: 0,
			scoreSpacePercent: 0,
		},
		{
			title: 'Best Practices',
			icon: faThumbsUp,
			score: 0,
			scoreSpacePercent: 0,
		},
		{
			title: 'SEO',
			score: 0,
			scoreSpacePercent: 0,
		},
	],
}
