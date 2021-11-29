import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		completeContainer: {
			boxShadow: `1px 1px 50px 5px ${hexToRgbA(skin.black, 0.3)}`,
			background: skin.white
		},
		headerContainer: {
			// background: `linear-gradient(90.1deg, ${skin.primaryColor} 0%, ${skin.primaryVariantColor} 100%)`
			background: hexToRgbA(skin.blue, 0.15)
		},
		headerText: {
			...myTypography.body1,
			color: skin.primaryColor,
			fontWeight: 600,
			fontSize: '18px'
		},
		headerDesc: {
			...myTypography.body2,
			fontSize: '14px',
			color: skin.primaryVariantColor
		},
		arrowLeft: {
			borderRight: `15px solid ${skin.white}`,
			borderTop: `15px solid transparent`,
			borderBottom: `15px solid transparent`,
			left: '-14px'
		},
		arrowRight: {
			borderLeft: `15px solid ${skin.white}`,
			borderTop: `15px solid transparent`,
			borderBottom: `15px solid transparent`,
			right: '-14px'
		},
		setPriorityDescText: {
			...myTypography.body1,
			color: skin.grayColor1
		},
		setPriorityDescTextRed: {
			...myTypography.body1,
			color: skin.red
		},
		eachPriorityValue: {
			...myTypography.body1,
			color: skin.primaryColor,
			fontSize: '34px',
			fontWeight: 600,
			lineHeight: 1.25
		},
		eachPriorityValueCount: {
			...myTypography.body1,
			color: skin.primaryColor,
			fontSize: '20px',
			fontWeight: 600
		},
		eachPriorityValueDesc: {
			...myTypography.caption,
			color: skin.grayColor3,
		},
		eachPriorityName: {
			...myTypography.body1,
			color: skin.primaryColor,
			fontWeight: 600
		},
		daysHeading: {
			...myTypography.body2,
			color: skin.primaryColor,
			fontWeight: 600,
			textTransform: 'uppercase'
		},
		daysCountText: {
			...myTypography.body1,
			color: skin.primaryColor,
			fontWeight: 700,
			fontSize: '18px'
		},
		highlightBlue: {
			background: hexToRgbA('#42BAFF', 0.1)
		},
		colorRed: {
			color: skin.red
		}
	});
}

export default getSkin;