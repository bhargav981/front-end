import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		laneHeading: {
			...myTypography.body1,
			textTransform: 'uppercase',
			color: skin.grayColor3
		},
		laneCount: {
			...myTypography.body2,
			textTransform: 'uppercase',
			color: skin.grayColor4
		},
		autoFill: {
			...myTypography.body2,
			textTransform: 'uppercase',
			// color: skin.grayColor2,
			// border: `1px solid ${skin.grayColor2}`,
			fontWeight: 600,
			cursor: 'pointer',
			background: `linear-gradient(90.13deg, ${hexToRgbA(skin.primaryColor, 0.8)} 0%, ${hexToRgbA(skin.secondaryColor, 0.8)} 100%)`,
			color: skin.white,
			border: 'none'
			// ':hover': {
			// 	background: `linear-gradient(90.13deg, ${hexToRgbA(skin.primaryColor, 0.8)} 0%, ${hexToRgbA(skin.secondaryColor, 0.8)} 100%)`,
			// 	color: skin.white,
			// 	border: 'none',
			// }
		}
	});
}

export default getSkin;