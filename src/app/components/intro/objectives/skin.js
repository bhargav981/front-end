import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
        objectivesContainer:{
            borderRadius: '8px',
            border: 'dashed 1px #0c6178',
            backgroundColor: '#f5f5f5'
        },
        objectivesTitle:{
            opacity: 0.8,
            fontFamily: 'Open Sans',
            fontSize: '18px',
            fontWeight: 600,
            color: '#002028'
        },
        objectivesDesc:{
            opacity: '0.6',
            fontFamily: 'Open Sans',
            fontSize: '15px',
            lineHeight: 1.67,
            color: '#002028'
        }
    });
}

export default getSkin;