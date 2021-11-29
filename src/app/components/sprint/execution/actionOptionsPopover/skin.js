import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		container: {
			background: skin.white,
			boxShadow: `0px 2px 10px rgba(0, 0, 0, 0.3)`,
			borderRight: 'solid 2px #B32560'
		},
		header: {
			...myTypography.body1,
			background: 'linear-gradient(90.32deg, #232882 0%, #B32161 100%)',
		},
		title: {
			fontWeight: 600,
			lineHeight: 'normal',
			color: skin.white,
			fontSize: '16px'
		},
		description: {
			fontSize: '13px',
			fontWeight: 'normal',
			lineHeight: 'normal',
			color: hexToRgbA(skin.white, 0.8)
		},
		chooseOptions: {
			...myTypography.body1,
			fontWeight: 'normal',
			lineHeight: 'normal',
			color: hexToRgbA(skin.grayColor1, 0.8)
		},
		popoverArrow: {
			borderLeft: `7px solid #B52560`,
			borderTop: `7px solid transparent`,
			borderBottom: `7px solid transparent`
		},
		errorMessage: {
			...myTypography.body1,
			fontSize: '12px',
			fontWeight: '600',
			lineHeight: 'normal',
			color: hexToRgbA('#FF0000', 0.8)
		}
	});
}

export default getSkin;