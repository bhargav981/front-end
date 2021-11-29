import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
	// const globalProfiles = theme.globalProfiles;
	// const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

	return StyleSheet.create({
		seperationLine: {
			background: '#36B496'
		}
	});
}

export default getSkin;