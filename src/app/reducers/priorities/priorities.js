import actionConsts from 'constants/actions/actions';

const initialState = {
	prioritiesList: []
};


const priorities = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				prioritiesList: action.payload.priorities
			};
        default:
            return state;
    }
};

export default priorities;