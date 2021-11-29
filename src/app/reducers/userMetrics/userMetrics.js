import actionConsts from 'constants/actions/actions';
import { mergeArraysOfObjects, roundOfMetricsValuesAndDiff } from 'util/utilFunctions';

const initialState = {
	userMetricsList: []
};

const userMetrics = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				userMetricsList: roundOfMetricsValuesAndDiff(action.payload.userMetrics)
			}

		case actionConsts.STORE_ACTION_RESPONSE:
		case actionConsts.STORE_PRD_RESPONSE:
			return {
				...state,
				userMetricsList: mergeArraysOfObjects(
					state.userMetricsList,
					roundOfMetricsValuesAndDiff(action.payload.userMetrics),
					'metricsId'
				)
			};

		default:
			return state;
	}
};

export default userMetrics;