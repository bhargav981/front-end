import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		featureCard: {
			boxShadow: '0px 4px 4px rgba(35, 40, 130, 0.02), 0px 3px 4px rgba(35, 40, 130, 0.25)',
  			border: `solid 0.5px rgba(35, 40, 130, 0.2)`,
  			backgroundColor: skin.white
		},
		featureTitle: {
			...myTypography.body1,
			fontSize: '16px',
			fontWeight: 600,
			lineHeight: 1.4,
			color: skin.grayColor1
		},
		featureDescription: {
			...myTypography.body2,
			lineHeight: 1.5,
			color: hexToRgbA(skin.grayColor1, 0.8),
			textAlign: 'left'
		}
	});
}

export default getSkin;