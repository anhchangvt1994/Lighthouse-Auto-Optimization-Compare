import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface IPageSpeedParams {
	device: 'mobile' | 'desktop'
}

export interface IPageSpeedItemInfo {
	pageSpeedUrl: string
	info: { title: string; score: number }[]
}

export interface IPageSpeedItemInfoCustom {
	pageSpeedUrl: string
	info: {
		title: string
		icon?: IconDefinition
		score: number
		scoreSpacePercent: number
	}[]
}

export interface IPageSpeedInfo {
	image: string
	original: IPageSpeedItemInfo
	optimal: IPageSpeedItemInfo
}
