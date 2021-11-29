import actionConsts from 'constants/actions/actions';

const initialState = {
	statusesList: []
};


const statuses = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				statusesList: action.payload.statuses
			};
        default:
            return state;
    }
};

export default statuses;