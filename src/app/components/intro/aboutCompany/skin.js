import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
        aboutCompanyDesc:{
            opacity: 0.6,
            fontFamily: 'Open Sans',
            fontSize: '16px',
            lineHeight: 1.56,
            color: '#002028'
        },
        aboutCompanyTitle:{
            opacity: 0.8,
            fontFamily: 'Open Sans',
            fontSize: '20px',
            fontWeight: 600,
            color: '#002028'
        }
    });
}

export default getSkin;