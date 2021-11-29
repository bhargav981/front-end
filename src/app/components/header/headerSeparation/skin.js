import { StyleSheet } from 'aphrodite';
// import typography from 'defaults/typography';
import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	// const myTypography = typography(theme);

	return StyleSheet.create({
		separationLine: {
			backgroundColor: hexToRgbA(skin.black, 0.1)
		},
	});
}

export default getSkin;