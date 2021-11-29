import actionConsts from 'constants/actions/actions';

const initialState = {
    isColorDataFetched: false,
    globalProfiles: {},
    entityProfiles: []
};


const colorProfiles = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.INIT_COLOR_PROFILE_DATA:
            return state
                    .set('globalProfiles', action.payload.globalProfiles)
                    .set('entityProfiles', action.payload.entityProfiles)
                    .set('isColorDataFetched', true);
        default:
            return state;
    }
};

export default colorProfiles;