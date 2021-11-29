import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
    // const globalProfiles = theme.globalProfiles;
	// const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

    return StyleSheet.create({
		overlay: {
			background: hexToRgbA('#031A20', 0.95)
		}
	});
}

export default getSkin;