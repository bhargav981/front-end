import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		loadingLabel: {
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '14px',
			color: skin.white
		}
	});
}

export default getSkin;