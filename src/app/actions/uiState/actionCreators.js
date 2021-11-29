import actionConsts from 'constants/actions/actions';

const setUiState = (payload) => {
    return {
        type: actionConsts.SET_UI_STATE,
        payload
    };
};

export {
    setUiState
};
