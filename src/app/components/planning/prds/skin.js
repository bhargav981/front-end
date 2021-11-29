import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		prdCard: {
			border: `dashed 1px ${skin.primaryColor}`,
  			backgroundColor: skin.white
		},
		selectedPrdCard: {
			boxShadow: '0 0 14px 0 rgba(0, 0, 0, 0.06), 0 4px 12px 0 rgba(48, 155, 232, 0.25)',
  			border: 'solid 1px #309be8',
  			backgroundColor: skin.white
		},
		checkedRadioCircle: {
  			backgroundColor: '#309be8'
		},
		uncheckedRadioCircle: {
			border: 'solid 1px #e1e1e1',
  			backgroundColor: skin.white
		},
		prdTitle: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryColor, 0.8)
		},
		prdDescription: {
			...myTypography.body1,
			fontSize: '14px',
			lineHeight: 1.63,
			color: hexToRgbA(skin.black, 0.5)
		},
		seperatorLine: {
			backgroundColor: hexToRgbA(skin.black, 0.1)
		},
		costDayTitle: {
			...myTypography.body1,
			fontSize: '14px',
			lineHeight: 'normal',
			color: hexToRgbA(skin.black, 0.5)
		},
		costDayTitleValueSeperator: {
			backgroundColor: hexToRgbA(skin.black, 0.4)
		},
		costDayValue: {
			...myTypography.body1,
			fontSize: '14px',
			fontWeight: 600,
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryColor, 0.7)
		},
		costDayInfo: {
			backgroundColor: hexToRgbA(skin.grayColor1, 0.2),
			fontSize: '6px',
			color: skin.white
		},
	});
}

export default getSkin;