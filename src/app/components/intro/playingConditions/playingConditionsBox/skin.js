import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;

    return StyleSheet.create({
		playingConditionsContainer:{
            borderRadius: '4px',
            border: `dashed 2px ${skin.primaryColor}`,
            backgroundColor: skin.white
        },
		playingConditionsTitle:{
            opacity: 0.8,
            fontFamily: 'Open Sans',
            fontSize: '18px',
            fontWeight: 600,
            color: '#002028'
        },
        playingConditionsDesc:{
            fontFamily: 'Open Sans',
            fontSize: '15px',
            lineHeight: 1.5,
            color: hexToRgbA('#002028', 0.8)
        }
	});
}

export default getSkin;