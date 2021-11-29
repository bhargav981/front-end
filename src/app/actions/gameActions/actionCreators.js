import actionConsts from 'constants/actions/actions';

const storeActionResponse = (payload) => {
    return {
        type: actionConsts.STORE_ACTION_RESPONSE,
        payload
    };
};

export {
    storeActionResponse
};
