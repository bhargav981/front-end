import actionConsts from 'constants/actions/actions';

const updateUserState = (payload) => {
    return {
        type: actionConsts.UPDATE_USER_STATE,
        payload
    };
};

export default updateUserState;
