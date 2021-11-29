import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		mvpPopupContainer: {
			background: skin.white,
			overflow: 'hidden',
			borderRadius: '8px'
		},
		headerBackground: {
			backgroundImage: `linear-gradient(90.4deg, ${skin.white} 0%, ${skin.white} 100%)`
		},
		headingText: {
			...myTypography.body1,
			color: skin.grayColor1,
			fontSize: '18px',
			fontWeight: 600
		},
		descText: {
			...myTypography.body1,
			color: skin.grayColor1,
			fontSize: '16px'
		},
		helpText: {
			...myTypography.body1,
			color: skin.grayColor1
		},
		contentContainer: {
			background: hexToRgbA(skin.blue, 0.1)
		}
	});
}

export default getSkin;