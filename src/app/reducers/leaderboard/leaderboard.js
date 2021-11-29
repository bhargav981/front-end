import actionConsts from 'constants/actions/actions';

const initialState = {
	usersList: [],
	isLeaderboardFetching: false
};

const leaderboard = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.UPDATE_LEADERBOARD_DATA:
			return {
				...state,
				usersList: action.payload.usersList,
				isLeaderboardFetching: false
			};

		case actionConsts.UPDATE_LEADERBOARD_STATUS:
			return {
				...state,
				isLeaderboardFetching: action.status
			};

		default:
			return state;
	}
};

export default leaderboard;