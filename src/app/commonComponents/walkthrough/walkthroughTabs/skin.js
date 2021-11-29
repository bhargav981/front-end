import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

	return StyleSheet.create({
		tabSeperationLine: {
			borderTop: `1px solid ${skin.secondaryColor}`
		},
		tabSeperationLineDotted: {
			borderTop: `1px dashed ${skin.grayColor4}`
		}
	});
}

export default getSkin;