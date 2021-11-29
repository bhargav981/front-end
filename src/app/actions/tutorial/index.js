import actionConsts from 'constants/actions/actions';

const startTutorial = () => {
    return {
        type: actionConsts.START_TUTORIAL
    }
};

const pauseTutorial = (payload) => {
    return {
        type: actionConsts.PAUSE_TUTORIAL,
        payload
    }
};

const endTutorial = () => {
    return {
        type: actionConsts.END_TUTORIAL
    }
};

const addStepsToTutorial = (steps, type) => {
    return {
        type: actionConsts.ADD_TUTORIAL_STEPS,
        payload: {
            steps,
            type
        }
    };
}

const updateStepNumber = (id) => {
    return {
        type: actionConsts.UPDATE_TUTORIAL_STEP,
        stepId: id
    }
}

const setEndTutorialPopup = (flag) => {
    return {
        type: actionConsts.SET_END_TUTORIAL_POPUP_FLAG,
        payload: flag
    }
}

const stopBlockerTutorial = () => {
    return {
        type: actionConsts.DISABLE_BLOCKER_TUTORIAL
    }
}

export {
    startTutorial,
    pauseTutorial,
    endTutorial,
    addStepsToTutorial,
    updateStepNumber,
    setEndTutorialPopup,
    stopBlockerTutorial
};