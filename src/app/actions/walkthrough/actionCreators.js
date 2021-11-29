import actionConsts from 'constants/actions/actions';

const setWalkthroughState = (walkthroughState) => {
    return {
        type: actionConsts.SET_WALKTHROUGH_STATE,
        walkthroughState
    };
};

export {
    setWalkthroughState
};
