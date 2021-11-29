import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		leftMetricsContainer: {
			// borderRight: `solid 1px ${hexToRgbA(skin.grayColor1, 0.1)}`
		},
		leftMetricContainer: {
			// background: `#F5F9F9`,
			// border: `1px solid ${skin.primaryColor}`,
			// boxShadow: `0px 0px 2px rgba(0, 0, 0, 0.25)`,
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
		mvpProgressBarContainer: {
			background: hexToRgbA(skin.primaryColor, 0.1)
		},
		mvpProgressBar: {
			background: `#36B496`
		},
		bottomMetricsWrapper: {
			background: skin.white,
			// boxShadow: `0px 0px 2px rgba(0, 0, 0, 0.25)`
		},
		gameMetricContainer: {
			// borderRight: `solid 1px ${hexToRgbA(skin.grayColor1, 0.1)}`
		},
		gameMetricContainerRightBorder: {
			borderRight: `solid 1px ${hexToRgbA(skin.grayColor1, 0.1)}`
		},
		gameMetricsContainer: {
			boxShadow: `0px 0px 2px rgba(0, 0, 0, 0.25)`,
			border: `1px solid ${skin.grayColor5}`,
			borderRadius: '18px'
		},
		rightMetricLeftBorder: {
			borderLeft: `1px solid ${skin.grayColor5}`
		}
	});
}

export default getSkin;