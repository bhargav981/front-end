import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		completeContainer: {
			boxShadow: `0px 0px 15px 5px ${hexToRgbA(skin.black, 0.2)}`,
			background: skin.white
		},
		headerContainer: {
			background: `linear-gradient(90.1deg, ${skin.primaryColor} 0%, ${skin.primaryVariantColor} 100%)`
		},
		headerText: {
			...myTypography.body1,
			fontSize: '18px',
			color: skin.white,
			fontWeight: 600
		},
		headerDesc: {
			...myTypography.body1,
			color: skin.white
		},
		tasksContainer: {
			...myTypography.body1,
			fontSize: '16px',
			fontWeight: 600,
			color: skin.grayColor2,
		},
		storyPointsContainer: {
			...myTypography.body1,
			color: skin.grayColor3
		}
	});
}

export default getSkin;