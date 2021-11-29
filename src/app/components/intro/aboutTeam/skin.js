import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	// const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

    return StyleSheet.create({
        aboutTeamContainer:{
            backgroundColor: hexToRgbA('#c1d5d2'),
            border: 'solid 0.5px #e4e4e4'
        },
        aboutTeamDesc:{
            opacity: 0.6,
            fontFamily: 'Open Sans',
            fontSize: '16px',
            lineHeight: 1.56,
            color: '#002028'
        },
        aboutTeamTitle:{
            opacity: 0.8,
            fontFamily: 'Open Sans',
            fontSize: '20px',
            fontWeight: 600,
            color: '#002028'
        }
    });
}

export default getSkin;