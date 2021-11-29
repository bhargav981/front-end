import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		footerContainer: {
			background: skin.white,
			boxShadow: `0px -1px 4px rgba(0, 0, 0, 0.15)`
		},
		textClass: {
			...myTypography.body1,
			fontSize: '10px',
			color: skin.grayColor4
		},
		rightBorder: {
			borderRight: `1px solid ${skin.grayColor4}`
		},
		linkKnolskape: {
			cursor: 'pointer',
			':hover': {
				textDecoration: 'underline'
			}
		}
	});
}

export default getSkin;