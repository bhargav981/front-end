import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		storyPopupContainer: {
			background: skin.white,
			overflow: 'hidden',
			borderRadius: '8px'
		},
		headerBackground: {
			backgroundImage: `linear-gradient(90.4deg, ${skin.primaryColor} 0%, ${skin.primaryVariantColor} 100%)`
		},
		storyName: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			color: skin.white,
			lineHeight: '1.2'
		},
		detailName: {
			color: hexToRgbA(skin.white, 0.9),
			...myTypography.body2
		},
		detailValue: {
			color: hexToRgbA(skin.white, 0.9),
			...myTypography.body2,
			fontWeight: 600
		},
		storyHistoryContainer: {
			background: hexToRgbA(skin.blue, 0.1)
		},
		descHeading: {
			...myTypography.body1,
			fontSize: '16px',
			color: hexToRgbA(skin.primaryColor, 0.8),
			textTransform: 'uppercase'
		},
		descContent: {
			...myTypography.body1,
			color: skin.grayColor2,
		},
		featureDescHeading: {
			...myTypography.body1,
			fontSize: '16px',
			color: hexToRgbA(skin.primaryColor, 1),
			textTransform: 'uppercase'
		},
		featureDescContent: {
			...myTypography.body1,
			color: skin.grayColor2,
		},
		selectionContainer: {
			border: `1px solid ${skin.primaryColor}`,
			borderRadius: '25px'
		},
		selectionBoxShadow: {
			boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.09), 0px 3px 4px #309BE8`
		},
		selectionText: {
			...myTypography.body1,
			color: skin.primaryColor,
			textTransform: 'uppercase'
		}
	});
}

export default getSkin;