import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		tabContainer: {
			...myTypography.title,
			lineHeight: 'normal',
			fontWeight: 'bold',
			color: hexToRgbA(skin.primaryColor, 0.5)
		},
		selectedTabContainer: {
			...myTypography.title,
			fontWeight: 'bold',
			lineHeight: 'normal',
			color: skin.white,
			background: skin.primaryColor
		},
		tabContainerNotVisited: {
			...myTypography.title,
			lineHeight: 'normal',
			fontSize: '20px',
			fontWeight: 500,
			color: hexToRgbA(skin.primaryColor, 0.4)
		}
	});
}

export default getSkin;