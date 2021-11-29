import { StyleSheet } from 'aphrodite';
import typography from 'defaults/typography';
import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
	const skin = theme.globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		tooltipContent: {
			backgroundColor: skin.grayColor2,
			color: skin.white,
			boxShadow: `5px 5px 10px 0 ${hexToRgbA(skin.black, 0.5)}`,
			...myTypography.caption,
			borderRadius: '6px',
			textTransform: 'none'
		},
		tooltipArrowRight: {
			borderRight: `7px solid ${skin.grayColor2}`,
			borderBottom: `7px solid transparent`,
			borderTop: `7px solid transparent`
		},
		tooltipArrowLeft: {
			borderLeft: `7px solid ${skin.grayColor2}`,
			borderBottom: `7px solid transparent`,
			borderTop: `7px solid transparent`
		},
		tooltipArrowTop: {
			borderTop: `7px solid ${skin.grayColor2}`,
			borderLeft: `7px solid transparent`,
			borderRight: `7px solid transparent`
		},
		tooltipArrowBottom: {
			borderBottom: `7px solid ${skin.grayColor2}`,
			borderLeft: `7px solid transparent`,
			borderRight: `7px solid transparent`
		}
	});
}

export default getSkin;