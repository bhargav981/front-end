import { StyleSheet } from 'aphrodite';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	// const myTypography = typography(theme);

	return StyleSheet.create({
		container: {
			backgroundColor: skin.white,
			boxShadow: `0px 4px 12px rgba(58, 23, 67, 0.2)`,
		},
		vericalBar: {
			backgroundColor: skin.grayColor5
		}
	});
}

export default getSkin;