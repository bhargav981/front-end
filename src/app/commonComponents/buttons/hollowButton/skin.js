import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		buttonStyle: {
			background: skin.white,
			// boxShadow: `0 4px 4px 0 ${skin.grayColor5}`,
			border: `1px solid ${skin.primaryColor}`,
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '16px',
		},
		buttonStyleDisabled: {
			background: skin.white,
			// boxShadow: `0 4px 4px 0 ${skin.grayColor5}`,
			border: `1px solid ${hexToRgbA(skin.primaryColor, 0.5)}`,
			':hover': {
				background: skin.white
			},
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '16px',
			opacity: 0.5
		},
		buttonStyleWithoutShadow: {
			background: skin.white,
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '16px',
		},
		buttonStyleWithoutShadowDisabled: {
			background: skin.white,
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '16px',
		},
		buttonText: {
			...myTypography.button,
			color: skin.primaryColor
		},
		boxShadow: {
			boxShadow: `0 4px 4px 0 ${skin.grayColor5}`,
		}
	});
}

export default getSkin;