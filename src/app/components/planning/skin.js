import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	
	const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

	return StyleSheet.create({
		buttonContent: {
			boxShadow: '0 0 9px 0 rgba(0, 0, 0, 0.15)',
			backgroundColor: skin.white
		}
	});
}

export default getSkin;