import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		timerContainer: {
			background: hexToRgbA(skin.white, 0.2),
			borderRadius: '4px', 
		},
		timerContent: {
			...myTypography.timer,
			color: skin.white
		}
	});
}

export default getSkin;