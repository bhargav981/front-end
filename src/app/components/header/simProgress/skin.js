import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		progressStartText: {
			...myTypography.body2,
			fontSize: '15px',
			// textTransform: 'uppercase',
			color: skin.white,
			lineHeight: 'normal'
		},
		progressEndText: {
			...myTypography.body2,
			fontSize: '15px',
			// textTransform: 'uppercase',
			color: skin.white,
			lineHeight: 1
		},
		completedDay: {
			background: skin.white
		},
		notCompletedDay: {
			background: hexToRgbA(skin.white, 0.3)
		},
		currentDay: {
			background: skin.white
		},
		dayTag: {
			...myTypography.body2,
			fontSize: '10px',
			color: skin.primaryColor,
			background: skin.white,
			fontWeight: 700,
			lineHeight: 1
		}
	});
}

export default getSkin;