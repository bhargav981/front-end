import actionConsts from 'constants/actions/actions';

const initializePrds = (payload) => {
    return {
        type: actionConsts.INIT_PRDS,
        payload
    };
};

const setUserPrd = (selectedPrdId) => {
    return {
        type: actionConsts.SET_USER_PRD,
        selectedPrdId
    };
};

const storePrdResponse = (payload) => {
    return {
        type: actionConsts.STORE_PRD_RESPONSE,
        payload
    };
};

export {
    initializePrds,
    setUserPrd,
    storePrdResponse
};
