import actionConsts from 'constants/actions/actions';

const initialState = {
	selectedPrdId: null,
	userPrdsList: []
};


const userPrds = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				userPrdsList: action.payload.userPrds
			};
		case actionConsts.SET_USER_PRD:
			return {
				...state,
				selectedPrdId: action.selectedPrdId
			};
		case actionConsts.STORE_PRD_RESPONSE:
			return {
				...state,
				userPrdsList: action.payload.userPrds
			};
        default:
            return state;
    }
};

export default userPrds;