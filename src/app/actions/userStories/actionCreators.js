import actionConsts from 'constants/actions/actions';

const initializeUserStories = (payload) => {
    return {
        type: actionConsts.INIT_USER_STORIES,
        payload
    };
};

export {
    initializeUserStories
};
