import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography'

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		buttonStyle: {
			backgroundImage: `linear-gradient(to right, ${skin.primaryColor}, ${skin.secondaryColor})`,
			boxShadow: `0 4px 4px 0 ${skin.grayColor5}`,
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '18px'
		},
		buttonStyleDisabled: {
			backgroundImage: `linear-gradient(to right, ${skin.grayColor4}, ${skin.grayColor4})`,
			boxShadow: `0 4px 4px 0 ${skin.grayColor5}`,
			':hover': {
				backgroundImage: skin.primaryVariantColor
			},
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '18px'
		},
		buttonStyleWithoutShadow: {
			backgroundImage: `linear-gradient(to right, ${skin.primaryColor}, ${skin.secondaryColor})`,
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '18px'
		},
		buttonStyleWithoutShadowDisabled: {
			backgroundImage: `linear-gradient(to right, ${skin.grayColor4}, ${skin.grayColor4})`,
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '18px'
		},
		buttonText: {
			...myTypography.button,
			color: skin.white
		}
	});
}

export default getSkin;