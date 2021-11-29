import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
// import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		historyContent: {
			backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.19), rgba(255, 255, 255, 0.14))`,
			border: `1px solid ${skin.primaryColor}`,
			borderRadius: '4px'
		},
		historyName: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			textTransform: 'uppercase',
			color: skin.primaryColor
		},
	});
}

export default getSkin;