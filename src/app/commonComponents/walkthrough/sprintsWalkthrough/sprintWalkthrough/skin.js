import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		container: {
			border: `0.84101px solid rgba(35, 40, 130, 0.5)`
		},
		title: {
			...myTypography.body1,
			fontWeight: 800,
			lineHeight: 'normal',
			fontSize: '32px',
			color: skin.primaryColor
		}
	});
}

export default getSkin;