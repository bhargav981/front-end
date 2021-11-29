import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

    return StyleSheet.create({
		sprintFooterContainer: {
			backgroundColor: skin.white,
			boxShadow: `0px -4px 12px rgba(58, 23, 67, 0.2)`,
		}
	});
}

export default getSkin;