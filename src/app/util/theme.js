import defaultImages from 'constants/images/default';
import darkThemeImages from 'constants/images/darkTheme';

const getThemeImages = (themeKey) => {
    switch(themeKey){
        case 'DARK_THEME':
            return darkThemeImages;
        default:
            return defaultImages;
    }
}

export {
    getThemeImages
}