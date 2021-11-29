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
			fontSize: '16px',
			fontWeight: 600,
			color: '#FBD727',
			textTransform: 'uppercase'
		}
	});
}

export default getSkin;