import actionConsts from 'constants/actions/actions';

const setUserState = (payload) => {
    return {
        type: actionConsts.SET_USER_STATE,
        payload
    };
};

export default setUserState;
