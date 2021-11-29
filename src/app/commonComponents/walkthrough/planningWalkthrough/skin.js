import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		descriptionStepsContainer: {
			border: `1px dashed ${skin.primaryColor}`
		},
		description: {
			...myTypography.body1,
			fontWeight: 'normal',
			lineHeight: '20px',
			color: hexToRgbA(skin.grayColor1, 0.8),
			// textAlign: 'left'
		}
	});
}

export default getSkin;