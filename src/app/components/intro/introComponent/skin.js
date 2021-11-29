import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		introFooterContainer: {
			backgroundColor: skin.white,
			boxShadow: `0px -4px 12px rgba(58, 23, 67, 0.2)`,
		},
		introText:{
			...myTypography.body1,
			fontSize: '16px',
			fontWeight: 600,
			textTransform: "uppercase",
			paddingRight: "15px",
			lineHeight: 1
		},
		transcriptText: {
			...myTypography.body1,
			color: skin.grayColor2
		},
		transcriptContent: {
			backgroundColor: hexToRgbA(skin.white, 0.8),
			boxShadow: `0px 4px 4px ${hexToRgbA(skin.black, 0.25)}`,
			borderRadius: '8px'
		}
	});
}

export default getSkin;