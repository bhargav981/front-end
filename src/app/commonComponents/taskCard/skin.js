import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		cardContainer: {
			border: `1px solid rgba(35, 40, 130, 0.2)`,
			boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.09), 0px 3px 4px rgba(0, 0, 0, 0.25)`,
			background: skin.white
		},
		cardSelectedContainer: {
			border: `1px solid #42BAFF`,
			boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.09), 0px 3px 4px #309BE8`,
		},
		cardHeading: {
			...myTypography.body1,
			fontWeight: 600,
			lineHeight: 1.4
		},
		progressbackground: {
			background: skin.grayColor5
		},
		storyPoints: {
			...myTypography.body2,
			color: skin.grayColor4
		},
		progressNoBlocker: {
			background: '#36B496'
		},
		progressBlocker: {
			background: '#D63228'
		},
		featureDesc: {
			...myTypography.caption,
			color: skin.grayColor4,
			lineHeight: 1.8
		},
		featureName: {
			...myTypography.caption,
			color: skin.grayColor2,
			fontWeight: 600
		},
		featureContainer: {
			background: skin.grayColor5,
			borderRadius: '5px'
		},
		selectedShadow: {
			boxShadow: `0px 0px 1px 1px ${hexToRgbA('#42BAFF', 0.5)}`
		},
		prioritiesContainer: {
			background: hexToRgbA(skin.yellow, 0.2)
		},
		prioritiesContainerSelected: {
			background: hexToRgbA(skin.green, 0.05)
		},
		setPriorityHeading: {
			...myTypography.caption,
			color: skin.grayColor4
		},
		eachPriority: {
			border: `1px solid ${skin.primaryColor}`,
			...myTypography.caption,
			color: skin.primaryColor,
			cursor: 'pointer',
			':hover': {
				background: skin.primaryColor,
				color: skin.white
			}
		},
		selectedPriority: {
			border: `1px solid ${skin.primaryColor}`,
			...myTypography.caption,
			background: skin.primaryColor,
			color: skin.white,
		},
		priorityLetter: {
			...myTypography.caption,
			color: '#309BE8'
		},
		priorityContainer: {
			border:`1px solid #309BE8`
		},
		blockerTag: {
			borderRadius: '6px'
		},
		redTag: {
			background: hexToRgbA('#D63228', 0.05)
		},
		greenTag: {
			background: hexToRgbA('#36B496', 0.05)
		},
		blockerText: {
			...myTypography.body2,
			lineHeight: 1.2
		},
		redText: {
			color: '#D63228'
		},
		greenText: {
			color: '#36B496'
		},
		borderBlocker: {
			border: `1.5px solid ${skin.red}`
		}
	});
}

export default getSkin;