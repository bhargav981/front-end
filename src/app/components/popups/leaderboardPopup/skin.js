import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		leaderboardPopupContainer: {
			background: skin.white,
			overflow: 'hidden',
			borderRadius: '8px'
		},
		headerBackground: {
			backgroundImage: `linear-gradient(90.4deg, ${skin.primaryColor} 0%, ${skin.primaryVariantColor} 100%)`
		},
		title: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			color: skin.white
		},
		headerTitle: {
			...myTypography.body1,
			fontSize: '10px',
			fontWeight: 600,
			color: hexToRgbA(skin.grayColor1, 0.6)
		},
		value: {
			...myTypography.body1,
			fontSize: '14px',
			fontWeight: 600,
			color: hexToRgbA(skin.grayColor1, 0.8)
		},
		currentUserValue: {
			...myTypography.body1,
			fontSize: '16px',
			fontWeight: 'bold',
			color: skin.primaryColor
		},
		seperationLine: {
			background: hexToRgbA('#407EA6', 0.1)
		},
		currentUser: {
			background: `linear-gradient(90deg, rgba(66, 186, 255, 0.5) 0%, rgba(66, 186, 255, 0) 100%)`
		},
		refreshContainer: {
			background: `#f9f9f9`
		}
	});
}

export default getSkin;