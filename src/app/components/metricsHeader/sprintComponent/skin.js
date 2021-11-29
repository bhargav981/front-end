import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		sprintContent: {
			backgroundColor: skin.white,
			border: `1px solid ${skin.grayColor5}`
		},
		sprintName: {
			...myTypography.body2,
			textTransform: 'uppercase',
			color: skin.grayColor3,
			lineHeight: 1
		},
		dayClass: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 700,
			color: skin.primaryColor
		},
		completedDay: {
			background: hexToRgbA(skin.secondaryColor, 0.9)
		},
		notCompletedDay: {
			background: skin.grayColor5
		},
		currentDay: {
			background: hexToRgbA(skin.secondaryColor, 0.6)
		},
	});
}

export default getSkin;