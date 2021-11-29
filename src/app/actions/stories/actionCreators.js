import actionConsts from 'constants/actions/actions';

const initializeStories = (payload) => {
    return {
        type: actionConsts.INIT_STORIES,
        payload
    };
};

const updateUserTasksAction = (payload) => {
    return {
        type: actionConsts.UPDATE_USER_TASKS,
        payload
    }
}

const updateUserStories = (payload) => {
    return {
        type: actionConsts.UPDATE_USER_STORIES,
        payload
    }
}

export {
    initializeStories,
    updateUserTasksAction,
    updateUserStories
};
