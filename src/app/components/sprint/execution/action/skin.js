import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		actionContainer: {
			background: `linear-gradient(90.42deg, #FFFFFF 0.52%, #FFFAFB 100%)`,
			boxShadow: `0px 4px 12px rgba(213, 173, 196, 0.5)`,
			cursor: 'pointer'
		},
		actionName: {
			textTransform: 'uppercase',
			...myTypography.body2,
			fontSize: '12px',
			fontWeight: 600,
			lineHeight: 1.2,
			color: skin.primaryColor,
		},
		actionImageContainer: {
			borderLeft: `3px solid ${skin.secondaryColor}`
		},
		hoverActionImageContainer: {
			borderLeft: `3px solid ${skin.secondaryColor}`,
			background: skin.secondaryColor
		},
		selectedActionImageContainer: {
			borderLeft: `3px solid transparent`,
			background: ` linear-gradient(225.04deg, #232882 24.98%, #572676 75.02%)`
		}
	});
}

export default getSkin;