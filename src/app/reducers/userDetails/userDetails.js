import actionConsts from 'constants/actions/actions';

const initialState = {
	userDetailsDataFetched: false
};


const userDetails = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				...action.payload.userDetails,
				userDetailsDataFetched: true
			}
		default:
			return state;
	}
};

export default userDetails;