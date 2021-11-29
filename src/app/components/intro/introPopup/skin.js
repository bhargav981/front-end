import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		introPopupContainer: {
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
		introText: {
			...myTypography.body1,
			fontSize: '16px',
			fontWeight: 600,
			textTransform: "uppercase",
			paddingRight: "15px",
			paddingBottom: "5px"
		},
		transcriptText: {
			...myTypography.body1,
			color: skin.grayColor2
		}
	});
}

export default getSkin;