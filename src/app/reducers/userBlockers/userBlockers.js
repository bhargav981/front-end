import actionConsts from 'constants/actions/actions';

const initialState = {
	blockerList: [],
	isBlockerTutorialReady: false
};

const userBlockers = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				blockerList: action.payload.userBlockers || []
			};
		case actionConsts.STORE_ACTION_RESPONSE:
			if (action.payload.blockers.length === 1 && state.blockerList.length === 0) {
				state = { ...state, isBlockerTutorialReady: true }
			}
			return {
				...state,
				blockerList: state.blockerList.concat(action.payload.blockers)
			};
		case actionConsts.DISABLE_BLOCKER_TUTORIAL:
			return {
				...state,
				isBlockerTutorialReady: false
			}
		default:
			return state;
	}
};

export default userBlockers;