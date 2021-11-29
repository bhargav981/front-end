import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
	const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

	return StyleSheet.create({
		planningContent: {
			boxShadow: `0px -2px 10px rgba(0, 0, 0, 0.15)`,
			borderTopRightRadius: '8px',
			borderTopLeftRadius: '8px',
		},
		planningBackground: {
			background: `linear-gradient(180deg, ${skin.white} 0%, ${skin.white} 100%)`,
			opacity: 0.6
		},
		eachStatusHeading: {
			textTransform: 'uppercase',
			...myTypography.body1,
			fontSize: '16px',
			color: skin.grayColor4
		}
	});
}

export default getSkin;