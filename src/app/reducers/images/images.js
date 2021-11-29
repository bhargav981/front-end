import actionConsts from 'constants/actions/actions';
import {getThemeImages} from 'util/theme';

const initialState = {
    themeName: 'DEFAULT',
    images: getThemeImages('DEFAULT')
};


const images = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.SET_THEME:
            return state.set('themeName', action.payload)
                        .set('images', getThemeImages(action.payload));
        default:
            return state;
    }
};

export default images;