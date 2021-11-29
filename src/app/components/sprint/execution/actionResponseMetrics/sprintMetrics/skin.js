import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		leftMetricContainer: {
			// background: `#F5F9F9`,
			boxShadow: `0px 0px 2px rgba(0, 0, 0, 0.25)`,
		},
		previousDay: {
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '12px',
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryColor, 0.4)
		},
		currentDay: {
			...myTypography.body1,
			fontWeight: 600,
			fontSize: '12px',
			lineHeight: 'normal',
			color: hexToRgbA(skin.primaryColor, 0.8)
		},
		sprintBlock: {
			background: `#FF1E50`
		},
		upcomingSprintBlock: {
			background: `${hexToRgbA('#020202', 0.2)}`
		}
	});
}

export default getSkin;