import actionConsts from 'constants/actions/actions';
import { roundOfMetricsValuesAndDiff } from 'util/utilFunctions';

const initialState = {
	userActionsList: []
};

const userActions = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				userActionsList: action.payload.userActions.map(userAction => ({
					...userAction,
					userMetrics: roundOfMetricsValuesAndDiff(userAction.userMetrics)
				}))
			};
		case actionConsts.STORE_ACTION_RESPONSE:
			return {
				...state,
				userActionsList: [
					...state.userActionsList,
					{
						...action.payload.actionResponse,
						userMetrics: roundOfMetricsValuesAndDiff(action.payload.actionResponse.userMetrics)
					}
				]
			};
		default:
			return state;
	}
};

export default userActions;