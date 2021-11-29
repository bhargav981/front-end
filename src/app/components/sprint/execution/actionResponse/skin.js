import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		container: {
			background: `#FBFBFB`,
			boxShadow: `0px -14px 36px rgba(0, 0, 0, 0.12)`,
			backdropFilter: `blur(11px)`,
			borderTop: `solid 4px ${skin.blue}`
		},
		responseContainer: {
			background: `#FBFBFB`
		},
		title: {
			...myTypography.body1,
			// fontWeight: 600,
			lineHeight: 'normal',
			color: hexToRgbA(skin.grayColor1, 0.6)
		},
		subTitle: {
			...myTypography.body1,
			// fontWeight: 600,
			lineHeight: 'normal',
			color: hexToRgbA(skin.grayColor1, 0.6)
		},
		responseMessage: {
			...myTypography.body1,
			fontWeight: 'normal',
			// fontWeight: 600,
			fontSize: '14px',
			lineHeight: '23px',
			color: hexToRgbA(skin.grayColor1, 0.8)
		},
		personName: {
			...myTypography.body1,
			fontStyle: 'italic',
			color: skin.grayColor4
		}
	});
}

export default getSkin;