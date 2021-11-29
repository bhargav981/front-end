import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		leaderboardText: {
			color: skin.white,
			textTransform: 'uppercase',
			...myTypography.body1,
			fontWeight: 600
		},
	});
}

export default getSkin;