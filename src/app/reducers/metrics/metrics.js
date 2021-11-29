import actionConsts from 'constants/actions/actions';

const initialState = {
	metricsList: []
};

const metrics = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				metricsList: action.payload.metrics
			};
        default:
            return state;
    }
};

export default metrics;