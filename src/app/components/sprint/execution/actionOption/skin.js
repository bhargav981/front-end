import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		container: {
			border: `1px solid ${hexToRgbA(skin.grayColor1, 0.3)}`
		},
		radioOutline: {
			border: `1px solid ${hexToRgbA(skin.grayColor1, 0.3)}`
		},
		radioCircle: {
			background: skin.white
		},
		name: {
			...myTypography.body1,
			fontWeight: 600,
			color: hexToRgbA(skin.grayColor1, 0.6)
		},
		optionEffortCostTitle: {
			...myTypography.body2,
			fontWeight: 'normal',
			color: `${hexToRgbA(skin.grayColor1, 0.7)}`,
			// borderRight: `solid 1px ${hexToRgbA(skin.grayColor1, 0.5)}`
		},
		optionEffortCostValue: {
			...myTypography.body2,
			fontWeight: 600,
			color: `${hexToRgbA(skin.grayColor1, 0.8)}`
		},
		containerSelected: {
			border: `1px solid ${skin.blue}`
		},
		radioOutlineSelected: {
			border: `1px solid ${hexToRgbA(skin.blue, 1)}`
		},
		radioCircleSelected: {
			background: skin.primaryColor
		},
		nameSelected: {
			color: skin.primaryColor
		}
	});
}

export default getSkin;