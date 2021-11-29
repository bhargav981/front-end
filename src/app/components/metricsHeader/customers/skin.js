import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
// import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		customersContent: {
			backgroundColor: skin.white,
			border: `1px solid ${skin.primaryColor}`
			// boxShadow: `0 1px 1px 2px ${hexToRgbA(skin.white, 0.1)}`
		},
		customersName: {
			...myTypography.body2,
			fontSize: '10px',
			fontWeight: 600,
			lineHeight: 1.2,
			textTransform: 'uppercase',
			color: skin.primaryColor
		},
	});
}

export default getSkin;