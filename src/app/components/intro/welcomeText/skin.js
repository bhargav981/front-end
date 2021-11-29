import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    // const globalProfiles = theme.get('globalProfiles');
	// const skin = globalProfiles.get('palette');
	//const myTypography = typography(theme);

    return StyleSheet.create({
        welcomeContainer:{
            border: 'solid 1px #ffffff',
            backgroundColor: hexToRgbA('#fef1d9'),
        },
        welcomeTitle:{
            opacity: '0.8',
            fontFamily: 'Open Sans',
            fontSize: '20px',
            fontWeight: '600',
            letterSpacing: 'normal',
            color: '#002028',
        },
        welcomeDesc:{
            opacity: 0.6,
            fontFamily: 'Open Sans',
            fontSize: '16px',
            lineHeight: 1.56,
            color: '#002028'
        }
    });
}

export default getSkin;