import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
// import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		historyContent: {
			// backgroundColor: skin.primaryColor,
			backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.19), rgba(255, 255, 255, 0.14))`
			// boxShadow: `0 1px 1px 2px ${hexToRgbA(skin.white, 0.1)}`
		},
		historyName: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			textTransform: 'uppercase',
			color: skin.secondaryColor
		},
	});
}

export default getSkin;