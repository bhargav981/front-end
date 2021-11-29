import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		headerContainer: {
			borderBottom: `1px solid ${skin.grayColor5}`
		},
		phaseName: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			// color: hexToRgbA(skin.primaryColor, 0.6),
			color: skin.primaryColor,
		},
		verticalBar: {
			backgroundColor: skin.grayColor5
		},
		taskVerticalBar: {
			backgroundColor: skin.grayColor5
		},
		sprintNumber: {
			...myTypography.body1,
			fontSize: '18px',
			fontWeight: 600,
			color: skin.grayColor2,
		},
		sprintDesc: {
			color: hexToRgbA(skin.grayColor1, 0.7),
			...myTypography.body1,
			// fontSize: '13px',
			lineHeight: 1,
			fontWeight: 600
		},
		taskNumber: {
			...myTypography.body1,
			fontWeight: 600,
			color: skin.grayColor3,
		},
		spNumber: {
			...myTypography.body2,
			color: skin.grayColor4
		}
	});
}

export default getSkin;