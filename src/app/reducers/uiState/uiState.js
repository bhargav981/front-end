import actionConsts from 'constants/actions/actions';

const initialState = {
    showHeader: true,
    showOverlay: false,
    showOverlayOverWalkthrough: false, //flag to show overlay over the transition screen (specially for objective and leaderboard popup)
    overlayComponentType: 'CENTER', //takes 'MIDDLE' or 'BOTTOM' or 'CENTER
    highlightDesktopHeader: false,
    highlightMetricsHeader: false,
    overlayComponent: '', // Component identifier
    isProductLaunching: false,

    /* agile planning phase states */
    planningPhaseStates: ['features', 'prds', 'confirmation'],
    currentPlanningPhaseState: 'features',

    /*action option popover states */
    showActionOptionPopover: false,
    selectedActionId: null,
    isMailBeingSent: false,
    showMailStatusMessage: false,
    mailSentSuccessfully: false,

    showReplanSprintPopup: false
};


const uiState = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.SET_UI_STATE:
            return {
                ...state,
                ...action.payload
            };
        case actionConsts.INIT_GAME_DATA:
            return {
                ...state,
                currentPlanningPhaseState: action.payload.userPrds.length > 0 ? 'confirmation' : 'features'
            };
        default:
            return state;
    }
};

export default uiState;