import actionConsts from 'constants/actions/actions';
import { roundOfMetricsValuesAndDiff } from 'util/utilFunctions';

const initialState = {
	userEventsList: [],
	eventsToBeShownCount: 0
};

const userEvents = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.STORE_ACTION_RESPONSE:
			return {
				...state,
				eventsToBeShownCount: action.payload.events.length,
				userEventsList: state.userEventsList.concat(action.payload.events.map(event => ({
					...event,
					userMetrics: roundOfMetricsValuesAndDiff(event.userMetrics)
				})))
			};

		case actionConsts.UPDATE_EVENTS_TO_BE_SHOWN_COUNT:
			return {
				...state,
				eventsToBeShownCount: action.count
			};

		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				userEventsList: action.payload.userEvents.map(userEvent => ({
					...userEvent,
					userMetrics: roundOfMetricsValuesAndDiff(userEvent.userMetrics)
				}))
			};

		default:
			return state;
	}
};

export default userEvents;