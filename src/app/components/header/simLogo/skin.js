import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		simName: {
			...myTypography.title,
			textTransform: 'uppercase',
			color: skin.white
		},
	});
}

export default getSkin;