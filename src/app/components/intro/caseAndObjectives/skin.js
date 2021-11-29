import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
// import typography from 'defaults/typography';
import defaults from 'constants/images/default';

const getSkin = (theme) => {
    // const globalProfiles = theme.globalProfiles;
	// const skin = globalProfiles.palette;
	// const myTypography = typography(theme);

    return StyleSheet.create({
        caseContainer:{
            backgroundColor: hexToRgbA('#c1d5d2'),
            border: 'solid 0.5px #e4e4e4',
            backgroundImage:`url(${defaults.IMG_INTRO_CASE_OBJECTIVE})`
        }
    });
}

export default getSkin;