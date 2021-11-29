import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

    return StyleSheet.create({
		completeContainer: {
			background: hexToRgbA('#031A20', 0.6),
			// backdropFilter: `blur(250px)`
		},
		bottomContainerComponent: {
			background: skin.white
		},
		rightContainerComponent: {
			background: skin.white
		}
	});
}

export default getSkin;