import actionConsts from 'constants/actions/actions';

const initialState = {
	walkthroughState: null //allowed values: planningStart, planningCompleted, executionSprintPlanning, executionSprintExecution, executionSprintLaunch
};

const walkthrough = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.SET_WALKTHROUGH_STATE:
			return {
				...state,
				walkthroughState: action.walkthroughState
			}
		default:
			return state;
	}
};

export default walkthrough;