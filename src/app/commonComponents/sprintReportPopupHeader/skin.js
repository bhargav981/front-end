import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		headerBackground: {
			backgroundImage: `linear-gradient(90.4deg, ${skin.primaryColor} 0%, ${skin.primaryVariantColor} 100%)`
		},
		storyName: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			color: skin.white
		},
	});
}

export default getSkin;