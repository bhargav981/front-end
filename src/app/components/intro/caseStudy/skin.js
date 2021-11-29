import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
        caseTitle:{
            opacity: 0.8,
            fontFamily: 'Open Sans',
            fontSize: '20px',
            color: '#002028',
            fontWeight: 600
        },
        caseDesc:{
            opacity: 0.6,
            fontFamily: 'Open Sans',
            fontSize: '15px',
            lineHeight: 1.67,
            color: '#002028'
        }
    });
}

export default getSkin;