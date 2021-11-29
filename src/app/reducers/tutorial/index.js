import actionConsts from 'constants/actions/actions';

const initalState = {
    autoStart: false,
    isRunning: false,
    stepIndex: 0,
    isTutorialEndPopupOpen: false,
    tutorialStatus: -1,     //to store the state of tutorial
    steps: []
};

const tutorial = (state = initalState, action = {}) => {
    switch (action.type) {
        case actionConsts.SET_TUTORIAL_STATUS:
            return {
                ...state,
                tutorialStatus: action.payload
            }
        case actionConsts.START_TUTORIAL:
            return {
                ...state,
                isRunning: true
            };
        case actionConsts.ADD_TUTORIAL_STEPS:
            return {
                ...state,
                steps: action.payload.steps,
                type: action.payload.type
            };
        case actionConsts.UPDATE_TUTORIAL_STEP:
            return {
                ...state,
                stepIndex: action.stepId
            }
        case actionConsts.END_TUTORIAL:
            return { ...initalState };
        case actionConsts.PAUSE_TUTORIAL:
            return {
                ...state,
                isRunning: false
            };
        case actionConsts.SET_END_TUTORIAL_POPUP_FLAG:
            return {
                ...state,
                isTutorialEndPopupOpen: action.payload
            };
        case actionConsts.CLEAR_USER_DATA:
            return { ...initalState };
        default:
            return { ...state };
    }
};

export default tutorial;