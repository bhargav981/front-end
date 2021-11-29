import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		customOption: {
			...myTypography.body2,
			color: skin.white,
			cursor: 'pointer',
			':hover': {
				color: skin.white,
				fontSize: '13px',
				fontWeight: 600,
				backgroundColor: hexToRgbA(skin.primaryColor, 0.8)
			}
		},
		userProfileOptionContainer: {
			backgroundColor: hexToRgbA(skin.primaryColor, 0.9),
			borderTopLeftRadius: '15px',
			borderTopRightRadius: '0px',
			borderBottomLeftRadius: '15px',
			borderBottomRightRadius: '15px',
		},
		userName: {
			borderBottom: `1px solid ${hexToRgbA(skin.white, 0.2)}`,
			...myTypography.body1,
			color: skin.white,
		},
	});
}

export default getSkin;