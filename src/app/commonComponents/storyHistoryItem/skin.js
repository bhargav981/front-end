import { StyleSheet } from 'aphrodite';
// import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
		historyItemContainer: {
			background: skin.white,
			border: `1px solid ${skin.grayColor5}`,
			borderRadius: '5px'
		},
		blockerClass: {
			border: `1px solid ${skin.red}`,
			borderRadius: '8px',
			boxShadow: `0px 0px 14px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(219, 0, 0, 0.13)`
		},
		historyItemHeader: {
			borderBottom: `1px solid ${skin.grayColor4}`	
		},
		headerText: {
			color: skin.grayColor4,
			...myTypography.caption,
			fontSize: '10px'
		},
		historyItemName: {
			color: skin.grayColor1,
			...myTypography.body1,
			fontWeight: 600
		},
		historyItemDesc: {
			color: skin.grayColor2,
			...myTypography.body2,
			fontSize: '11px'
		}
	});
}

export default getSkin;