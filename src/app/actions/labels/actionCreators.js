import actionConsts from 'constants/actions/actions';

const initializeLabels = (payload) => {
    return {
        type: actionConsts.INIT_LABELS_DATA,
        payload
    };
};

export {
    initializeLabels
};
