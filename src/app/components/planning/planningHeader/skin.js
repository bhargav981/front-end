import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		tabNumber: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			lineHeight: 'normal',
			letterSpacing: 'normal',
			background: skin.primaryColor,
			color: skin.white
		},
		tabNumberDisabled: {
			background: hexToRgbA(skin.primaryColor, 0.2),
			color: hexToRgbA(skin.primaryColor, 0.3)
		},
		tabTitle: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: hexToRgbA(skin.primaryColor, 0.8)
		},
		tabTitleDisabled: {
			color: hexToRgbA(skin.primaryColor, 0.3)
		},
		tabInfo: {
			backgroundColor: skin.grayColor1,
			fontSize: '10px',
			color: skin.white
		},
		tabSeperationLine: {
			backgroundColor: skin.primaryColor
		},
		selectedTabDescription: {
			...myTypography.body1,
			fontSize: '16px',
			lineHeight: 1.63,
			color: hexToRgbA(skin.grayColor1, 0.7)
		},
		seperationLine: {
			backgroundColor: hexToRgbA(skin.primaryColor, 0.1)
		}
	});
}

export default getSkin;