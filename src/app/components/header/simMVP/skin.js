import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		mvpContainer: {
			backgroundColor: hexToRgbA(skin.white, 0.2)
		},
		mvpText: {
			...myTypography.body2,
			lineHeight: 1,
			textTransform: 'uppercase',
			color: skin.white,
			fontWeight: 600
		},
		mvpValue: {
			...myTypography.body1,
			lineHeight: 1,
			fontSize: '20px',
			fontWeight: 600,
			textTransform: 'uppercase',
			color: skin.white,
		},
		mvpProgressBarContainer: {
			background: hexToRgbA('#EAEAEA', 0.3)
		},
		mvpProgressBar: {
			background: skin.white
		}
	});
}

export default getSkin;