import actionConsts from 'constants/actions/actions';

const initialState = {
    name: "Varun Kumar",
    isSentryInitialized: false,
    isFreshdeskInitialized: false,
    isKfeedbackInitialized: false,
    isKfeedbackSubmitted: false,
    isFirebaseInitialized: false,
    userDataFetched: true,
    isFeedbackSubmitInProgress: false
};

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.INIT_USER_DATA:
            return action.payload;
        case actionConsts.SET_USER_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export default user;