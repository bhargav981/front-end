import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		customSelect: {
			// backgroundColor: skin.primaryColor
			border: `1px solid ${skin.grayColor4}`
		},
		heading: {
			...myTypography.body2,
			fontSize: '10px',
			color: skin.grayColor2,
			lineHeight: 1
		},
		customSelectSelectedValue: {
			...myTypography.body2,
			color: skin.primaryColor,
		},
		customOption: {
			...myTypography.body2,
			color: skin.primaryColor,
			cursor: 'pointer',
			':hover': {
				color: skin.primaryColor,
				backgroundColor: 'rgba(66, 186, 255, 0.2)'
			}
		},
		highlightSelected: {
			color: skin.primaryColor,
			backgroundColor: 'rgba(66, 186, 255, 0.2)'
		},
		optionContainer: {
			background: skin.white,
			boxShadow: `0px 4px 20px rgba(35, 40, 130, 0.4)`
		},
		optionHeading: {
			...myTypography.body2,
			fontSize: '10px',
			color: skin.grayColor4
		}
	});
}

export default getSkin;