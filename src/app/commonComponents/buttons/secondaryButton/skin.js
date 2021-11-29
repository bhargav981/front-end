import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography'

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		buttonStyle: {
			backgroundColor: 'white',
			borderRadius: '50px 50px',
			boxShadow: `0 4px 4px 0 ${skin.grayColor5}`,
			':hover': {
				backgroundImage: skin.secondaryColor
			},
			...myTypography.body1,
			fontWeight: 600
		},
		buttonStyleWithoutShadow: {
			backgroundImage: 'linear-gradient(to right, #e87ad9, #7d4fea)',
			borderRadius: '50px 50px',
		},
		buttonText: {
			...myTypography.button,
			color: skin.secondaryColor
		}
	});
}

export default getSkin;