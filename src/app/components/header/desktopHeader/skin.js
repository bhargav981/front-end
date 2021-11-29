import { StyleSheet } from 'aphrodite';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	// const myTypography = typography(theme);

	return StyleSheet.create({
		headerContainer: {
			background:  `linear-gradient(to right, ${skin.primaryColor}, ${skin.secondaryColor})`,
		},
	});
}

export default getSkin;