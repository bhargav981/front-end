import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
    const skin = globalProfiles.palette;
    const myTypography = typography(theme);

    return StyleSheet.create({
        completeContainer: {
            boxShadow: `0px 0px 15px 5px ${hexToRgbA(skin.black, 0.2)}`,
            background: skin.white
        },
        headerContainer: {
            background: `linear-gradient(90.42deg, ${skin.primaryColor} 0%, ${skin.primaryVariantColor} 100%)`
        },
        headerText: {
            fontSize: '20px',
            lineHeight: '27px',
            color: skin.white,
            fontWeight: 600
        },
        headerDesc: {
            ...myTypography.body2,
            color: skin.white
        },
        bodyContainer: {
            backgroundImage: `linear-gradient(180deg, ${skin.white} 0%, #FBF1F4 0.01%, rgba(255, 255, 255, 0.94) 100%)`
        },
        teamInfoText: {
            ...myTypography.body2,
            fontSize: '16px',
            lineHeight: '25px',
            color: skin.grayColor1,
            opacity: '0.8'
        },
        cardContainer: {
            background: skin.white,
            border: `1px solid #F2F2F2`,
            boxSizing: 'border-box',
            boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.09), 0px 3px 4px rgba(0, 0, 0, 0.25)`,
            borderPadius: '8px'
        },
        cardDesc: {
            ...myTypography.body2,
            fontSize: '14px',
            lineHeight: '23px',
            color: skin.grayColor1,
            opacity: '0.8',
        },
        tmMemberName: {
            ...myTypography.body2,
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '19px',
            color: skin.grayColor1,
            opacity: '0.9',
        },
        tmMemberDesignation: {
            ...myTypography.body2,
            fontSize: '10px',
            lineHeight: '163.42%',
            color: skin.grayColor1,
            opacity: '0.5',
        },
        statName: {
            ...myTypography.body2,
            fontSize: '10px',
            lineHeight: '163.42%',
            color: skin.grayColor1,
            opacity: '0.5',
            borderRadius: '10px',
            marginBottom: '4px',
            textTransform: 'uppercase'
        },
        statValue: {
            ...myTypography.body2,
            fontSize: '10px',
            lineHeight: '14px',
            color: skin.white,
            fontWeight: 'bold',
            background: 'green'
        }
    });
}

export default getSkin;