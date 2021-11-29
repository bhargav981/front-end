import actionConsts from 'constants/actions/actions';

const initializeFeatures = (payload) => {
    return {
        type: actionConsts.INIT_FEATURES,
        payload
    };
};

export {
    initializeFeatures
};
