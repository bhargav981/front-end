import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		emailInputContainer: {
			border: `1px solid ${skin.white}`,
			borderRadius: '4px'
		},
		emailHeading: {
			...myTypography.body2,
			color: skin.white
		},
		emailInputElement: {
			...myTypography.body2,
			color: 'white',
			'::placeholder': {
				color: hexToRgbA(skin.white, 0.8),
				...myTypography.body2
			},
			'::-ms-input-placeholder': {
				color: hexToRgbA(skin.white, 0.8),
				...myTypography.body2
			},
			':-ms-input-placeholder': {
				color: hexToRgbA(skin.white, 0.8),
				...myTypography.body2
			}
		},
		emailSendEnable: {
			cursor: 'pointer',
			opacity: 1
		},
		emailSendDisable: {
			cursor: 'not-allowed',
			opacity: 0.5
		},
		emailStatusText: {
			...myTypography.body2,
			color: skin.white,
			fontStyle: 'italic'
		}
	});
}

export default getSkin;