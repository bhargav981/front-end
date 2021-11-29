import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		number: {
			...myTypography.body1,
			// fontWeight: 'bold',
			lineHeight: 'normal',
			fontSize: '16px',
			color: skin.grayColor4,
			border: `1px solid ${skin.grayColor4}`
		},
		inProgressNumber: {
			...myTypography.body1,
			fontWeight: 'bold',
			lineHeight: 'normal',
			fontSize: '16px',
			backgroundColor: '#36B496',
			color: skin.white,
			border: `2px solid #36B496`
		},
		title: {
			...myTypography.body1,
			fontWeight: 600,
			lineHeight: 'normal',
			fontSize: '16px',
			color: skin.primaryColor
		},
		doneTitle: {
			...myTypography.body1,
			fontWeight: 500,
			lineHeight: 'normal',
			fontSize: '15px',
			color: hexToRgbA(skin.primaryColor, 0.5),
			textDecoration: 'line-through'
		},
		otherTitle: {
			...myTypography.body1,
			fontWeight: 500,
			lineHeight: 'normal',
			fontSize: '15px',
			color: hexToRgbA(skin.primaryColor, 0.3)
		},
	});
}

export default getSkin;