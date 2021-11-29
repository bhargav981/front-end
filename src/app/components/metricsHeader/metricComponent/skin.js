import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
// import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		metricContent: {
			backgroundColor: skin.white,
			// boxShadow: `0 1px 1px 2px ${hexToRgbA(skin.white, 0.1)}`
		},
		metricName: {
			...myTypography.body2,
			fontSize: '11px',
			lineHeight: 1,
			textTransform: 'uppercase',
			color: skin.grayColor2
		},
		metricValue: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 700,
			color: skin.primaryColor
		},
	});
}

export default getSkin;