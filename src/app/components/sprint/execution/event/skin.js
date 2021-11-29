import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		container: {
			background: `#FBFBFB`,
			boxShadow: `0px -14px 36px rgba(0, 0, 0, 0.12)`,
			backdropFilter: `blur(11px)`,
			borderTop: `solid 4px #616161`
		},
		responseContainer: {
			background: `#FBFBFB`
		},
		title: {
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: 'normal',
			color: hexToRgbA(skin.grayColor1, 0.8)
		},
		responseMessage: {
			...myTypography.body1,
			fontWeight: 'normal',
			fontSize: '16px',
			lineHeight: '30px',
			color: hexToRgbA(skin.grayColor1, 0.6)
		},
		leftMetricContainer: {
			// background: `#F5F9F9`,
			boxShadow: `0px 0px 2px rgba(0, 0, 0, 0.25)`,
		},
		metricTitle: {
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '12px',
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryColor, 0.8)
		},
		metricValue: {
			...myTypography.body1,
			fontWeight: 'bold',
			fontSize: '20px',
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryColor, 0.8)
		},
		metricChange: {
			...myTypography.body1,
			fontWeight: 'bold',
			fontSize: '12px',
			lineHeight: 'normal',
			color: skin.white,
		},
		greenTag: {
			background: `#36B496`
		},
		redTag: {
			background: `#D63228`
		},
		negativeContainer: {
			borderTop: `solid 4px ${skin.secondaryColor}`
		},
		positiveContainer: {
			borderTop: `solid 4px #FFD452`
		},
		personName: {
			...myTypography.body1,
			fontStyle: 'italic',
			color: skin.grayColor4
		}
	});
}

export default getSkin;