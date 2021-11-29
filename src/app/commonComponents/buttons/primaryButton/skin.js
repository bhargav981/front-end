import { StyleSheet } from 'aphrodite';
import { hexToRgbA } from 'util/styleUtil';
import typography from 'defaults/typography';

const getSkin = (theme) => {
    const globalProfiles = theme.globalProfiles;
	const skin = globalProfiles.palette;
	const myTypography = typography(theme);

    return StyleSheet.create({
        buttonStyle: {
            backgroundColor: skin.primaryColor,
            borderRadius: '6px',
            boxShadow: `0 14px 16px 0 rgba(0, 0, 0, 0.19)`,
            ':hover': {
                backgroundColor: skin.primaryVariantColor
            }
        },
        buttonStyleWithoutShadow: {
            backgroundColor: skin.primaryColor,
            borderRadius: '6px'
        },
        buttonText: {
            ...myTypography.button,
            color: skin.white
        }
	});
}

export default getSkin;