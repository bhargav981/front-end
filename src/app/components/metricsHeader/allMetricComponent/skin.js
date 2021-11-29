import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
// import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		tmContent: {
			backgroundColor: skin.primaryColor,
			// boxShadow: `0 1px 1px 2px ${hexToRgbA(skin.white, 0.1)}`
		},
		tmName: {
			...myTypography.body2,
			fontSize: '10px',
			textTransform: 'uppercase',
			color: skin.white
		},
		metricBorder: {
			border: `1px solid ${skin.grayColor5}`,
			borderRadius: '11px'
		},
		arrowContainer: {
			backgroundColor: skin.grayColor6,
			borderTopRightRadius: '10px',
			borderBottomRightRadius: '10px',
			cursor: 'pointer'
		},
		popoverContainer: {
			backgroundColor: skin.white,
			borderRadius: '10px',
			border: `1px solid ${skin.grayColor5}`,
			boxShadow: `0px 4px 12px rgba(58, 23, 67, 0.2)`
		},
		roleHeading: {
			...myTypography.body2,
			fontSize: '10px',
			fontWeight: 600,
			color: skin.grayColor3,
			textTransform: 'uppercase',
			textAlign: 'left',
			borderBottom: `1px solid ${skin.grayColor6}`
		}
	});
}

export default getSkin;